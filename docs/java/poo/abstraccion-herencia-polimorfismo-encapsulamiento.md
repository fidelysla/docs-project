
# POO en Java: Abstracción, Herencia, Polimorfismo y Encapsulamiento

Para escribir código Java de nivel empresarial (Enterprise), no basta con crear clases; es necesario estructurarlas para controlar la complejidad. Para ello, nos basamos en cuatro principios fundamentales.

## 1. Encapsulamiento (Encapsulation)

El encapsulamiento es la técnica de **ocultar el estado interno** de un objeto y requerir que toda interacción se realice a través de los métodos públicos de este. Protege la integridad de los datos.

### Principios Clave

- **Control de Acceso:** Uso de modificadores (`private`, `protected`, `public`).
- **Data Hiding:** Los atributos siempre deben ser `private` a menos que haya una razón muy específica para no hacerlo.
- **Validación:** Los _Setters_ no son solo para asignar valores, son la puerta de entrada para validar reglas de negocio.

### Ejemplo Profesional: `BankAccount`

En este ejemplo, protegemos el saldo (`balance`). No permitimos que sea modificado directamente, evitando que alguien ponga un saldo negativo sin control o lo modifique sin dejar rastro (log).

```java
package com.empresa.finance;

import java.math.BigDecimal;

public class BankAccount {
    
    // 1. Ocultamiento de datos (Private)
    private String accountNumber;
    private BigDecimal balance;

    public BankAccount(String accountNumber, BigDecimal initialDeposit) {
        this.accountNumber = accountNumber;
        // Validación en el constructor
        if (initialDeposit.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("El depósito inicial no puede ser negativo");
        }
        this.balance = initialDeposit;
    }

    // 2. Acceso controlado (Getters)
    public BigDecimal getBalance() {
        return balance;
    }

    // 3. Modificación controlada (Métodos de negocio en lugar de setters simples)
    public void withdraw(BigDecimal amount) {
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("El monto debe ser positivo");
        }
        if (balance.compareTo(amount) < 0) {
            throw new IllegalStateException("Fondos insuficientes");
        }

        this.balance = this.balance.subtract(amount);
        System.out.println("Retiro exitoso. Nuevo saldo: " + this.balance);
    }
}
```

## 2. Herencia (Inheritance)

La herencia permite crear nuevas clases basadas en clases existentes. Representa una relación **"Es un" (Is-a)**. Promueve la reutilización de código al mover comportamientos comunes a una clase padre (Superclase).

### Reglas en Java

- Se usa la palabra clave `extends`.
- Java soporta **Herencia Simple** de clases (una clase solo puede extender de una sola clase padre).
- Todas las clases en Java heredan implícitamente de `java.lang.Object`.

### Ejemplo: Sistema de Reportes

```java
// Superclase
public class Report {
    protected String title; // 'protected' permite acceso a las clases hijas

    public Report(String title) {
        this.title = title;
    }

    public void generateHeader() {
        System.out.println("Empresa XYZ - Reporte: " + title);
        System.out.println("--------------------------------");
    }
}

// Subclase (Hija)
public class FinancialReport extends Report {

    private int fiscalYear;

    public FinancialReport(String title, int fiscalYear) {
        super(title); // Llamada obligatoria al constructor del padre
        this.fiscalYear = fiscalYear;
    }

    // Método específico de la hija
    public void addFinancialData() {
        System.out.println("Agregando datos financieros del año " + fiscalYear + "...");
    }
}
```

## 3. Polimorfismo (Polymorphism)

El polimorfismo es la capacidad de un objeto de tomar muchas formas. En tiempo de ejecución, Java determina qué método ejecutar basándose en el objeto real, no en el tipo de la variable de referencia.

### Tipos Principales

1.  **Sobrecarga (Overloading):** (Visto en Parte 1) Mismo nombre, distintos parámetros (Compile-time).
2.  **Sobrescritura (Overriding):** Redefinir un método del padre en la clase hija (Runtime). Es la base del polimorfismo dinámico.

### Ejemplo: Procesador de Pagos

El poder del polimorfismo radica en que podemos escribir código que funcione con la clase padre, y automáticamente funcionará con cualquier clase hija futura.

```java
// Clase Base
class PaymentMethod {
    public void processPayment(double amount) {
        System.out.println("Procesando pago genérico...");
    }
}

// Hija 1
class CreditCard extends PaymentMethod {
    @Override // Buena práctica: asegura que estás sobrescribiendo correctamente
    public void processPayment(double amount) {
        System.out.println("Cobrando $" + amount + " a la Tarjeta de Crédito (API Visa/MC)");
    }
}

// Hija 2
class PayPal extends PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("Redirigiendo a PayPal para cobrar $" + amount);
    }
}

// --- USO DEL POLIMORFISMO ---
public class PaymentService {
    public void checkout(PaymentMethod method, double amount) {
        // Polimorfismo: No sabemos si es Tarjeta o PayPal,
        // pero Java ejecutará la versión correcta del método.
        method.processPayment(amount);
    }
}
```

## 4. Abstracción (Abstraction)

La abstracción consiste en ocultar la complejidad de la implementación y mostrar solo la funcionalidad (el "qué" hace, no el "cómo" lo hace). Permite diseñar sistemas basados en contratos e interfaces.

En Java, logramos abstracción mediante:

1.  **Clases Abstractas (`abstract class`):** Pueden tener métodos implementados y métodos abstractos. Se usan cuando las clases comparten estado (atributos) y comportamiento.
2.  **Interfaces (`interface`):** Definen un contrato puro. Hasta Java 7, solo tenían métodos abstractos. Desde Java 8, permiten métodos `default`. Se usan para definir capacidades (ej. `Runnable`, `Serializable`).

### Ejemplo Profesional: Contrato de Notificaciones

Aquí definimos el contrato (`interface`) y una plantilla base (`abstract class`).

```java
// 1. Interface: El contrato puro (Capabilities)
// Cualquier clase que implemente esto, DEBE saber enviar un mensaje.
interface Notifiable {
    void send(String message);
}

// 2. Clase Abstracta: Implementación parcial
// Define una estructura común pero deja partes incompletas.
abstract class BaseNotification implements Notifiable {

    // Método implementado (Lógica compartida)
    protected String formatMessage(String message) {
        return "Fecha: " + java.time.LocalDate.now() + " | Msj: " + message;
    }

    // Método abstracto (Forzamos a la hija a definir la conexión)
    abstract void connect();

    @Override
    public void send(String message) {
        connect(); // Paso 1: abstracto
        String formatted = formatMessage(message); // Paso 2: compartido
        System.out.println("Enviando payload: " + formatted);
    }
}

// 3. Implementación Concreta
class EmailNotification extends BaseNotification {
    @Override
    void connect() {
        System.out.println("Conectando al servidor SMTP...");
    }
    // send() ya está implementado en el padre, pero usa nuestro connect()
}

class SlackNotification extends BaseNotification {
    @Override
    void connect() {
        System.out.println("Conectando a la API de Slack...");
    }
}
```

### Resumen de Diferencias (Entrevista Técnica)

| Característica  | Clase Abstracta                                 | Interfaz                                |
| :-------------- | :---------------------------------------------- | :-------------------------------------- |
| **Herencia**    | Simple (`extends`)                              | Múltiple (`implements`)                 |
| **Atributos**   | Puede tener estado (variables)                  | Solo constantes (`public static final`) |
| **Constructor** | Sí (para inicializar estado)                    | No                                      |
| **Uso**         | Relación "Es un" estricta con código compartido | Relación "Puede hacer" (Capabilities)   |

---

_Fin de la Parte 2. Por favor, indica cuándo proceder con la Parte 3: Collections._
