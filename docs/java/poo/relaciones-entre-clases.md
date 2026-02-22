
# POO en Java: Relaciones entre Clases

En un sistema orientado a objetos, las clases no viven aisladas; interactúan entre sí. Definir correctamente _cómo_ se relacionan determina la **cohesión** (qué tan enfocada está una clase) y el **acoplamiento** (qué tan dependiente es una clase de otra).

Las relaciones principales, de menor a mayor acoplamiento, son:

1.  **Dependencia** ("Usa un")
2.  **Asociación** ("Conoce a" / "Tiene un")
3.  **Agregación** ("Tiene un" - Débil)
4.  **Composición** ("Tiene un" - Fuerte)
5.  **Herencia** ("Es un" - _Visto en Parte 2_)

## 1. Dependencia (Dependency) - "Uses-a"

Es la relación más débil. Ocurre cuando una clase **usa** a otra momentáneamente para realizar una operación, pero no la mantiene como un atributo permanente. Si la clase usada cambia, la dependiente podría verse afectada.

- **En código:** Aparece como **parámetro de un método** o variable local.

### Ejemplo: Impresora y Documento

La `Impresora` no "tiene" el `Documento` para siempre, solo lo usa mientras imprime.

```java
public class Document {
    private String content;
    public String getContent() { return content; }
}

public class Printer {
    // Dependencia: Recibe Document como parámetro
    public void print(Document doc) {
        System.out.println("Imprimiendo: " + doc.getContent());
    }
}
```

## 2. Asociación (Association)

Es una relación estructural que indica que dos objetos están conectados. Un objeto "conoce" al otro y mantiene una referencia a él como un **atributo de clase**.

- **Multiplicidad:** Puede ser 1:1, 1:N (Uno a muchos), o N:M (Muchos a muchos).
- **Direccionalidad:** Unidireccional (A conoce a B) o Bidireccional (A y B se conocen).

### Ejemplo: Usuario y Dirección (1:1 o 1:N)

```java
public class User {
    private String name;

    // Asociación: El Usuario tiene una referencia permanente a Address
    private Address address;

    public void setAddress(Address address) {
        this.address = address;
    }
}
```

## 3. Agregación (Aggregation) - "Has-a" (Débil)

Es un tipo especial de asociación que representa una relación **"Todo-Parte" (Whole-Part)**.
La clave aquí es el **Ciclo de Vida Independiente**: La "parte" puede existir sin el "todo". Si el objeto contenedor se destruye, el objeto contenido **sobrevive**.

- **Analogía:** Un `Equipo` de fútbol y sus `Jugadores`. Si el equipo se disuelve, los jugadores siguen existiendo como personas/jugadores libres.
- **En código:** El objeto interno se crea **fuera** y se pasa (inyección) al contenedor.

### Ejemplo: Universidad y Estudiante

```java
import java.util.List;
import java.util.ArrayList;

class Student {
    private String name;
    public Student(String name) { this.name = name; }
}

class University {
    private String name;
    private List<Student> students; // Agregación

    public University(String name, List<Student> students) {
        this.name = name;
        this.students = students;
    }
}

// Uso:
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Ana");

        // La Universidad se crea con estudiantes existentes
        List<Student> list = new ArrayList<>();
        list.add(s1);
        University u = new University("MIT", list);

        // Si 'u' (Universidad) se hace null, 's1' (Ana) sigue existiendo.
        u = null;
        System.out.println(s1); // Funciona perfectamente
    }
}
```

## 4. Composición (Composition) - "Has-a" (Fuerte)

Es la relación "Todo-Parte" más fuerte. Aquí, hay **dependencia del ciclo de vida**. La "parte" **no puede existir** (o no tiene sentido) sin el "todo". Si el contenedor se destruye, las partes también mueren.

- **Analogía:** Una `Casa` y sus `Habitaciones`. Si demoles la casa, las habitaciones desaparecen. No puedes tener una "Habitación" flotando en la nada sin una casa.
- **En código:** El objeto contenedor es responsable de crear (`new`) al objeto interno, usualmente en su constructor. El exterior no tiene acceso directo a la referencia de la parte.

### Ejemplo: Coche y Motor

```java
class Engine {
    private String type;
    public Engine(String type) { this.type = type; }
}

class Car {
    private final Engine engine; // Composición: El motor es vital y exclusivo

    public Car(String engineType) {
        // La instancia de Engine se crea DENTRO de Car.
        // Si el Car muere, el Engine también, porque nadie más tiene su referencia.
        this.engine = new Engine(engineType);
    }
}
```

## 5. Cuadro Resumen de Relaciones

Para una entrevista técnica o diseño de arquitectura, esta tabla es fundamental:

| Relación        | Palabra Clave | Tipo de Enlace    | Ciclo de Vida                   | Ejemplo               |
| :-------------- | :------------ | :---------------- | :------------------------------ | :-------------------- |
| **Dependencia** | Uses-a        | Temporal          | Independiente                   | `Math.max(a, b)`      |
| **Asociación**  | Has-a         | Estructural       | Independiente                   | `Profesor` - `Alumno` |
| **Agregación**  | Has-a         | Contenedor Débil  | Independiente                   | `Carpeta` - `Archivo` |
| **Composición** | Has-a         | Contenedor Fuerte | Dependiente (Muerte en cascada) | `Cuerpo` - `Corazón`  |
| **Herencia**    | Is-a          | Genético          | N/A (Es la misma instancia)     | `Animal` - `Perro`    |

## 6. Diagramas UML (Concepto)

Aunque esto es un documento de texto, un desarrollador Java debe saber visualizar esto:

- **Dependencia:** Línea punteada con flecha (`- - ->`).
- **Asociación:** Línea sólida (`——>`).
- **Agregación:** Línea con rombo vacío (`<>——`).
- **Composición:** Línea con rombo relleno (negro) (`<*>——`).
- **Herencia:** Línea con triángulo vacío (`——|>`).
