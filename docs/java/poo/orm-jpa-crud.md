# POO en Java: ORM y JPA

En el desarrollo empresarial, existe un problema fundamental: **Java es Orientado a Objetos**, pero las bases de datos (SQL) son **Relacionales (Tablas)**.

- **ORM (Object-Relational Mapping):** Es la técnica/concepto para cerrar esta brecha, mapeando automáticamente una clase Java a una tabla SQL.
- **JPA (Java Persistence API):** Es la **especificación** estándar de Java (interfaz). Define _cómo_ se debe hacer el ORM.
- **Hibernate / EclipseLink:** Son las **implementaciones** (el código real/librería) que cumplen con la especificación JPA.

## 1. La Entidad (Entity)

Una entidad es una clase POJO (Plain Old Java Object) ligera que representa una tabla en la base de datos. Se configura mediante **Anotaciones**.

### Anotaciones Clave

- `@Entity`: Marca la clase como una entidad JPA.
- `@Table(name="...")`: Define el nombre exacto de la tabla en la BD.
- `@Id`: Marca la clave primaria (Primary Key).
- `@GeneratedValue`: Define la estrategia de autoincremento (IDENTITY, SEQUENCE).
- `@Column`: Configura detalles de la columna (nombre, longitud, nulo/no nulo).
- `@Transient`: Ignora este campo (no lo guarda en BD).

### Ejemplo: `Employee.java`

```java
package com.empresa.model;

import javax.persistence.*; // Paquete estándar de JPA
import java.time.LocalDate;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment en MySQL/PG
    private Long id;

    @Column(name = "full_name", nullable = false, length = 100)
    private String name;

    @Column(unique = true)
    private String email;

    @Column(name = "hire_date")
    private LocalDate hireDate;

    // Constructor vacío requerido por JPA (Reflection)
    public Employee() {}

    public Employee(String name, String email, LocalDate hireDate) {
        this.name = name;
        this.email = email;
        this.hireDate = hireDate;
    }

    // Getters y Setters (Omitidos por brevedad, pero obligatorios)
    public Long getId() { return id; }
    public void setName(String name) { this.name = name; }
    // ...
}
```

## 2. El EntityManager

El `EntityManager` es el corazón de JPA. Es el objeto que gestiona el ciclo de vida de las entidades y realiza las operaciones contra la base de datos.

En un entorno Java puro (Java SE), se obtiene así:

```java
EntityManagerFactory emf = Persistence.createEntityManagerFactory("mi-unidad-persistencia");
EntityManager em = emf.createEntityManager();
```

_(En Spring Boot, este objeto se inyecta automáticamente)._

## 3. Operaciones CRUD (Create, Read, Update, Delete)

A continuación, veremos cómo realizar las operaciones básicas usando el `EntityManager`.

### A. CREATE (Persistir)

Para guardar un objeto nuevo en la BD.

```java
public void createEmployee() {
    EntityManager em = getEntityManager();
    em.getTransaction().begin(); // Iniciar transacción

    Employee newEmp = new Employee("Carlos Lopez", "carlos@mail.com", LocalDate.now());

    // persist() convierte el objeto Java en un INSERT de SQL
    em.persist(newEmp);

    em.getTransaction().commit(); // Confirmar cambios (SQL se ejecuta aquí)
    em.close();
}
```

### B. READ (Leer / Buscar)

Para recuperar un objeto por su ID o mediante consultas.

```java
public void readEmployee(Long id) {
    EntityManager em = getEntityManager();

    // find() busca por Primary Key. Retorna la entidad gestionada o null.
    // Genera: SELECT * FROM employees WHERE id = ?
    Employee emp = em.find(Employee.class, id);

    if (emp != null) {
        System.out.println("Encontrado: " + emp.getName());
    }
    em.close();
}
```

### C. UPDATE (Actualizar)

Aquí es donde brilla JPA. **No existe un método `update()` explícito**. JPA usa un concepto llamado **Dirty Checking**.

Si un objeto está en estado "Managed" (Gestionado) dentro de una transacción, cualquier cambio en sus seters se sincronizará automáticamente con la BD al hacer commit.

```java
public void updateEmployee(Long id, String newName) {
    EntityManager em = getEntityManager();
    em.getTransaction().begin();

    // 1. Buscamos el objeto (Pasa a estado Managed)
    Employee emp = em.find(Employee.class, id);

    if (emp != null) {
        // 2. Modificamos el objeto Java
        emp.setName(newName);

        // NO es necesario llamar a em.persist() ni nada extra.
        // Al hacer commit, JPA detecta que el objeto cambió y lanza el UPDATE automáticamente.
    }

    em.getTransaction().commit();
    em.close();
}
```

_Nota: Si el objeto no está gestionado (Detached), se usa `em.merge(entity)` para volver a atarlo al contexto._

### D. DELETE (Borrar)

Para eliminar un registro. El objeto debe estar "Managed" antes de poder borrarlo.

```java
public void deleteEmployee(Long id) {
    EntityManager em = getEntityManager();
    em.getTransaction().begin();

    // 1. Primero hay que encontrarlo (traerlo al contexto de persistencia)
    Employee emp = em.find(Employee.class, id);

    if (emp != null) {
        // 2. Marcar para eliminación
        em.remove(emp);
    }

    em.getTransaction().commit(); // Ejecuta el DELETE SQL
    em.close();
}
```

## 4. JPQL (Java Persistence Query Language)

Para consultas complejas (que no sean por ID), no usamos SQL nativo, sino **JPQL**. Es un lenguaje orientado a objetos.

- SQL: `SELECT * FROM employees WHERE full_name LIKE 'A%'`
- JPQL: `SELECT e FROM Employee e WHERE e.name LIKE 'A%'` (Usamos nombres de clases y atributos, no tablas y columnas).

```java
public List<Employee> findByName(String nameFragment) {
    EntityManager em = getEntityManager();

    // Consulta tipada
    String jpql = "SELECT e FROM Employee e WHERE e.name LIKE :nameParam";

    TypedQuery<Employee> query = em.createQuery(jpql, Employee.class);
    query.setParameter("nameParam", "%" + nameFragment + "%");

    return query.getResultList();
}
```

## 5. Ciclo de Vida de una Entidad (Estados)

Entender esto es vital para evitar bugs silenciosos:

1.  **Transient (Nuevo):** Acabas de hacer `new Employee()`. No tiene ID, no está en BD, JPA no lo conoce.
2.  **Managed (Gestionado):** Fue guardado (`persist`) o leído (`find`). JPA observa sus cambios. Cualquier modificación se guardará en el `commit`.
3.  **Detached (Desacoplado):** La sesión (`EntityManager`) se cerró o se llamó a `em.detach()`. Los cambios en el objeto Java **no** se reflejarán en la BD a menos que uses `merge()`.
4.  **Removed (Eliminado):** Se llamó a `remove()`. Se borrará de la BD al hacer commit.

## 6. Relaciones en JPA (Mapping)

JPA maneja las relaciones entre tablas (Foreign Keys) como referencias a objetos.

```java
@Entity
public class Department {
    @Id private Long id;

    // Relación Uno a Muchos
    // 'mappedBy' indica que el dueño de la relación es el campo 'department' en Employee
    @OneToMany(mappedBy = "department", fetch = FetchType.LAZY)
    private List<Employee> employees;
}

@Entity
public class Employee {
    // ... atributos ...

    // Relación Muchos a Uno (La FK vive aquí en la tabla employees)
    @ManyToOne
    @JoinColumn(name = "dept_id") // Nombre de la columna FK en SQL
    private Department department;
}
```

### FetchType: Eager vs Lazy

- **EAGER (Ansioso):** Carga la relación inmediatamente. (Si cargo Empleado, trae también el Departamento).
- **LAZY (Perezoso):** Carga la relación solo cuando se pide (`getDepartment()`). Es **más eficiente** y la recomendación profesional por defecto para colecciones (`@OneToMany`).
