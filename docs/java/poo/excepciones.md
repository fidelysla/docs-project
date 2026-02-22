# POO en Java: Excepciones

En Java, una **Excepción** es un evento que ocurre durante la ejecución de un programa y que interrumpe el flujo normal de las instrucciones. Java maneja estos errores mediante objetos.

Un manejo profesional de excepciones no consiste solo en evitar que el programa se cierre (crash), sino en **recuperarse** de errores, **registrar** (log) lo sucedido y **notificar** adecuadamente al usuario o sistema cliente.

## 1. La Jerarquía de Excepciones

Todas las excepciones en Java descienden de la clase `java.lang.Throwable`. Esta se divide en dos ramas principales:

### A. Error

Representa problemas graves de la JVM o del sistema que una aplicación **no debería intentar capturar** (ej. `OutOfMemoryError`, `StackOverflowError`). Son irrecuperables.

### B. Exception

Representa condiciones que un programa razonable podría querer capturar. Se divide en dos tipos cruciales:

1.  **Checked Exceptions (Excepciones Verificadas):**
    - Heredan directamente de `Exception` (pero no de `RuntimeException`).
    - **El compilador obliga a manejarlas**. Si llamas a un método que lanza una _Checked Exception_, debes usar un bloque `try-catch` o declararla con `throws`.
    - _Uso:_ Errores externos o contingencias recuperables (ej. `IOException`, `SQLException`, `FileNotFoundException`).

2.  **Unchecked Exceptions (Excepciones No Verificadas):**
    - Heredan de `RuntimeException`.
    - El compilador **no** obliga a manejarlas.
    - _Uso:_ Errores de programación o lógica (ej. `NullPointerException`, `IllegalArgumentException`, `IndexOutOfBoundsException`).

## 2. Bloque `try-catch-finally`

Es la estructura básica para el manejo de excepciones.

- **try:** Código riesgoso que podría fallar.
- **catch:** Código que se ejecuta si ocurre una excepción específica.
- **finally:** Código que se ejecuta **siempre**, haya error o no (ideal para limpieza de recursos, cerrar conexiones, etc.).

```java
import java.io.FileInputStream;
import java.io.IOException;

public class ExceptionBasics {

    public void readFileLegacy(String path) {
        FileInputStream fis = null;
        try {
            // Código riesgoso
            fis = new FileInputStream(path);
            int data = fis.read();
            System.out.println("Dato leído: " + data);

        } catch (IOException e) {
            // Manejo del error
            System.err.println("Error crítico al leer archivo: " + e.getMessage());
            // Buenas prácticas: Loguear el stack trace completo en servidores reales
            // e.printStackTrace();

        } finally {
            // Limpieza (Se ejecuta SIEMPRE)
            try {
                if (fis != null) {
                    fis.close();
                }
            } catch (IOException ex) {
                System.err.println("Error al cerrar el stream");
            }
        }
    }
}
```

## 3. Try-with-resources (Java 7+)

Esta es la **forma profesional y moderna** de manejar recursos (archivos, bases de datos, sockets). Cualquier objeto que implemente la interfaz `AutoCloseable` se cerrará automáticamente al finalizar el bloque `try`, eliminando la necesidad del bloque `finally` verboso.

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ModernExceptionHandling {

    public void readFileModern(String path) {
        // El recurso se declara entre paréntesis después del try
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {

            String line = br.readLine();
            System.out.println("Leído: " + line);

        } catch (IOException e) {
            // El recurso 'br' ya está cerrado aquí, incluso si falló.
            System.err.println("No se pudo procesar el archivo: " + path);
        }
    }
}
```

## 4. `throw` vs `throws`

Es vital distinguir estas dos palabras clave:

- **`throw`**: Es una acción. Se usa dentro de un método para **lanzar** explícitamente una excepción.
- **`throws`**: Es una declaración. Se usa en la firma del método para avisar al llamador que este método **podría lanzar** una excepción (obligatorio para Checked Exceptions).

```java
public class Validator {

    // 'throws' avisa que este método es peligroso
    public void validateAge(int age) throws Exception {
        if (age < 18) {
            // 'throw' ejecuta el lanzamiento
            throw new Exception("Edad no permitida para este contenido.");
        }
    }

    // Para Unchecked Exceptions, 'throws' es opcional (documentación)
    public void validateName(String name) {
        if (name == null) {
            throw new IllegalArgumentException("El nombre no puede ser null");
        }
    }
}
```

## 5. Excepciones Personalizadas (Custom Exceptions)

En proyectos grandes, no debes depender solo de las excepciones genéricas de Java. Debes crear tus propias excepciones para representar errores de tu **dominio de negocio**. Esto hace el código más legible y fácil de depurar.

### Ejemplo: Sistema Bancario

```java
// Definición de la excepción
// Heredar de RuntimeException es preferido en frameworks modernos (Spring) para evitar 'boilerplate' de try-catch
public class InsufficientFundsException extends RuntimeException {

    private final double amountAttempted;
    private final double balance;

    public InsufficientFundsException(String message, double amountAttempted, double balance) {
        super(message);
        this.amountAttempted = amountAttempted;
        this.balance = balance;
    }

    public String getDetailedMessage() {
        return String.format("Error: %s | Intento: %.2f | Saldo: %.2f",
                             getMessage(), amountAttempted, balance);
    }
}

// Uso en la lógica de negocio
public class AccountService {
    public void withdraw(double balance, double amount) {
        if (amount > balance) {
            throw new InsufficientFundsException("Fondos insuficientes para la transacción", amount, balance);
        }
        // continuar lógica...
    }
}
```

## 6. Buenas Prácticas Profesionales

1.  **No tragues excepciones (Swallowing):**
    - _Mal:_ `catch (Exception e) { }` // Nunca hagas esto. El error ocurre y nadie se entera.
    - _Bien:_ Loguea el error o lánzalo de nuevo.

2.  **Lanza temprano, captura tarde:**
    - Valida los datos al inicio del método (Fail Fast).
    - Captura la excepción en la capa superior que sepa cómo manejarla (ej. el controlador REST o la UI), no en la capa de utilidades profundas.

3.  **No uses excepciones para control de flujo:**
    - Las excepciones son costosas en rendimiento (llenar el Stack Trace cuesta CPU). No las uses para bucles o condicionales normales (`if-else`).

4.  **Usa excepciones específicas:**
    - Evita `catch (Exception e)` genérico siempre que sea posible. Captura primero `FileNotFoundException`, luego `IOException`, etc.
