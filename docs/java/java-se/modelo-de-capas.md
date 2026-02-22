# Java SE: Modelo de Capas (Arquitectura N-Capas)

El Modelo de Capas es un patrón de arquitectura que divide la aplicación en niveles lógicos, donde cada nivel tiene una responsabilidad específica y única.

La regla de oro es: **Una capa superior puede llamar a una inferior, pero una capa inferior nunca debe llamar a una superior.**

## 1. Estructura Estándar

En una aplicación Java estándar, solemos dividir el código en 4 partes fundamentales:

1.  **Modelo / Entidades (Entity/DTO):** Son las clases que representan los datos (el "qué"). No tienen lógica, solo atributos.
2.  **Capa de Acceso a Datos (Repository / DAO):** Se encarga de hablar con la base de datos (o simularla). Aquí se hacen los `INSERT`, `SELECT`, `UPDATE`.
3.  **Capa de Negocio (Service / Logic):** Es el cerebro. Aquí están las validaciones, cálculos y reglas del negocio.
4.  **Capa de Presentación (View / Controller):** Es la interfaz con el usuario (Consola, Ventana, API).

---

## 2. Diagrama de Flujo

El flujo de la información siempre sigue este camino:

```text
Usuario (Input)
   ⬇
[Presentación (Main)]  -->  Pide acción
   ⬇
[Negocio (Service)]    -->  Valida datos ("¿Es el precio > 0?")
   ⬇
[Datos (Repository)]   -->  Guarda/Recupera ("Guardar en Array/BD")
   ⬇
[Base de Datos]        -->  (Simulada en Memoria para este ejemplo)
```

---

## 3. Implementación Práctica (Ejemplo Completo)

Vamos a simular un sistema de gestión de **Usuarios**. Observa cómo cada clase hace _una sola cosa_.

### A. Capa de Modelo (Entity)

Son objetos planos (POJOs - Plain Old Java Objects). Solo transportan datos.

```java
// Usuario.java
public class Usuario {
    private int id;
    private String nombre;
    private String email;

    public Usuario(int id, String nombre, String email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    // Getters y Setters (Omitidos por brevedad, pero son necesarios)
    public String getNombre() { return nombre; }
    public String getEmail() { return email; }

    @Override
    public String toString() {
        return "ID: " + id + " | " + nombre + " (" + email + ")";
    }
}
```

### B. Capa de Datos (Repository)

Su única misión es guardar y recuperar datos. No juzga si los datos son correctos o no, solo los almacena. Aquí usaremos un `ArrayList` para simular una base de datos.

```java
import java.util.ArrayList;
import java.util.List;

// UsuarioRepository.java
public class UsuarioRepository {
    // Simulamos la Base de Datos con una lista estática
    private static List<Usuario> baseDeDatos = new ArrayList<>();

    public void guardar(Usuario usuario) {
        baseDeDatos.add(usuario);
        System.out.println("-> [REPO]: Usuario guardado en la base de datos.");
    }

    public List<Usuario> listarTodos() {
        return baseDeDatos;
    }
}
```

### C. Capa de Negocio (Service)

Aquí ocurre la "magia". El servicio valida las reglas. Si las reglas no se cumplen, no llama al repositorio.

```java
// UsuarioService.java
public class UsuarioService {

    // El servicio necesita acceso al repositorio (Composición)
    private UsuarioRepository repositorio = new UsuarioRepository();

    public void registrarUsuario(int id, String nombre, String email) {
        System.out.println("-> [SERVICE]: Validando datos...");

        // Regla de Negocio 1: El nombre no puede estar vacío
        if (nombre == null || nombre.isEmpty()) {
            System.out.println("ERROR: El nombre no puede estar vacío.");
            return;
        }

        // Regla de Negocio 2: El email debe contener '@'
        if (!email.contains("@")) {
            System.out.println("ERROR: Email inválido.");
            return;
        }

        // Si pasa las validaciones, creamos el objeto y llamamos al Repo
        Usuario nuevoUsuario = new Usuario(id, nombre, email);
        repositorio.guardar(nuevoUsuario);
    }

    public void mostrarUsuarios() {
        List<Usuario> usuarios = repositorio.listarTodos();
        if (usuarios.isEmpty()) {
            System.out.println("No hay usuarios registrados.");
        } else {
            for (Usuario u : usuarios) {
                System.out.println(u);
            }
        }
    }
}
```

### D. Capa de Presentación (Main)

Es lo único que ve el usuario final. Solo captura datos y llama al Servicio. **El Main NO debe guardar datos directamente, ni validar lógica compleja.**

```java
import java.util.Scanner;

// Main.java
public class SistemaGestion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // La presentación solo habla con el Servicio
        UsuarioService servicio = new UsuarioService();

        System.out.println("--- REGISTRO DE USUARIOS ---");

        System.out.print("Ingrese ID: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Limpiar buffer

        System.out.print("Ingrese Nombre: ");
        String nombre = scanner.nextLine();

        System.out.print("Ingrese Email: ");
        String email = scanner.nextLine();

        // Enviamos los datos crudos al servicio
        servicio.registrarUsuario(id, nombre, email);

        System.out.println("\n--- LISTA DE USUARIOS ---");
        servicio.mostrarUsuarios();
    }
}
```

---

## 4. ¿Por qué hacemos esto? (Beneficios)

Si escribieras todo en el `main`, al principio sería más rápido. Pero al crecer el proyecto:

1.  **Mantenibilidad:** Si quieres cambiar la base de datos (por ejemplo, pasar de una Lista en memoria a MySQL), solo tocas el archivo `UsuarioRepository`. El `Main` y el `Service` ni se enteran.
2.  **Seguridad:** El `Main` no puede insertar datos "basura" directamente en la base de datos porque tiene que pasar por el "filtro" del `Service`.
3.  **Trabajo en equipo:** Un programador puede trabajar en la interfaz (Front/Main) y otro en la lógica (Back/Service) sin pisarse el código.

---

## 5. Nota para Expertos (El siguiente nivel)

En un entorno profesional real (como con **Spring Boot**), este modelo evoluciona ligeramente:

- **Inyección de Dependencias:** En lugar de hacer `new UsuarioRepository()` dentro del servicio, se usa `@Autowired` para que Java conecte las capas automáticamente.
- **Interfaces:** Se crean interfaces (`IUsuarioService`, `IUsuarioRepository`) para definir contratos y desacoplar aún más la implementación.
- **DTOs:** Se usan objetos específicos para la transferencia de datos para no exponer la entidad de base de datos directamente a la vista.
