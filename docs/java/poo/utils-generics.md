# POO en Java: Utils y Generics

Para cerrar el ciclo de desarrollo profesional en Java, debemos entender cómo escribir código reutilizable y seguro. Las clases de utilidad centralizan lógica común, mientras que los genéricos permiten que una sola clase o método funcione con diferentes tipos de datos sin sacrificar el chequeo estático del compilador.

## 1. Utils (Clases de Utilidad)

Una **Clase de Utilidad** es una clase que contiene **métodos estáticos** para realizar operaciones comunes que no dependen del estado de una instancia específica. Son "helpers" o ayudantes.

### Características de una Clase Util Profesional

1.  **Clase `final`:** Para evitar que sea heredada.
2.  **Constructor `private`:** Para evitar que sea instanciada. No tiene sentido crear un objeto de una clase que solo tiene métodos estáticos.
3.  **Métodos `static`:** Para ser invocados directamente desde la clase.

### Ejemplo: `StringUtils.java`

Aunque librerías como _Apache Commons Lang_ ya hacen esto, es vital saber construir tus propios utils para lógica de dominio específica.

```java
package com.empresa.utils;

public final class StringUtils {

    // 1. Constructor privado: Evita 'new StringUtils()'
    private StringUtils() {
        throw new UnsupportedOperationException("Esta es una clase de utilidad y no puede ser instanciada");
    }

    // 2. Métodos Estáticos (Stateless)

    /**
     * Verifica si un String es null, vacío o solo espacios en blanco.
     */
    public static boolean isBlank(String input) {
        return input == null || input.trim().isEmpty();
    }

    /**
     * Capitaliza la primera letra de un texto.
     */
    public static String capitalize(String input) {
        if (isBlank(input)) {
            return input;
        }
        return input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
    }
}
```

### Uso

```java
// Importación estática para limpiar el código (opcional)
import static com.empresa.utils.StringUtils.isBlank;

public class Main {
    public void process(String name) {
        if (isBlank(name)) {
            // Manejar error...
        }
        // ...
    }
}
```

### Utils Estándar de Java

Un desarrollador senior conoce la API estándar (`java.util.*`) antes de reinventar la rueda:

- `Objects.requireNonNull(obj)`: Valida nulos rápidamente.
- `Collections.sort()`, `Collections.emptyList()`: Manejo de listas.
- `Arrays.asList()`: Conversión rápida.
- `Files.readAllLines()`: I/O moderno (NIO).

## 2. Generics (Genéricos)

Introducidos en Java 5, los Genéricos permiten abstraer el **Tipo de Dato** sobre el que opera una clase o método. Su objetivo principal es la **Seguridad de Tipos en Tiempo de Compilación** (Compile-time Type Safety), eliminando la necesidad de hacer _Casting_ manual y previniendo errores `ClassCastException` en tiempo de ejecución.

### Nomenclatura Estándar

- `T`: Type (Tipo general)
- `E`: Element (Usado en Colecciones)
- `K`: Key (Clave en Mapas)
- `V`: Value (Valor en Mapas)
- `N`: Number (Números)

## 3. Clases Genéricas

Definimos una clase que puede envolver cualquier tipo de objeto. Esto es muy común en **Wrappers de API REST** o **Repositorios**.

### Ejemplo Profesional: `ApiResponse<T>`

Supongamos que nuestra API siempre devuelve un JSON con estado, mensaje y datos. Los "datos" pueden ser un `User`, una `List<Product>`, o un `Invoice`. Usamos `<T>` para hacerlo flexible.

```java
public class ApiResponse<T> {
    private int status;
    private String message;
    private T data; // El tipo de dato es genérico

    public ApiResponse(int status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public T getData() {
        return data;
    }
}

// --- Uso ---
public class Controller {
    public void endpoints() {
        // Respuesta con un Usuario
        User user = new User("Ana");
        ApiResponse<User> response1 = new ApiResponse<>(200, "OK", user);

        // Respuesta con una Lista de Productos
        List<String> products = List.of("Laptop", "Mouse");
        ApiResponse<List<String>> response2 = new ApiResponse<>(200, "OK", products);

        // Seguridad de tipos: No necesito castear
        User u = response1.getData();
    }
}
```

## 4. Métodos Genéricos

Un método puede declarar sus propios tipos genéricos, independientemente de si la clase es genérica o no. El `<T>` se declara antes del tipo de retorno.

```java
public class ArrayUtils {

    // Método genérico para intercambiar elementos en un array de cualquier tipo
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```

## 5. Bounded Generics (Genéricos Acotados)

A veces queremos restringir qué tipos se pueden usar. Por ejemplo, una clase calculadora solo debería aceptar números, no Strings.

Usamos `extends` para limitar el tipo (Upper Bound).

```java
// T debe ser Number o una subclase (Integer, Double, BigDecimal...)
public class Calculator<T extends Number> {

    private T value;

    public Calculator(T value) {
        this.value = value;
    }

    public double square() {
        // Como sabemos que T es un Number, podemos usar doubleValue() seguro.
        return value.doubleValue() * value.doubleValue();
    }
}
```

## 6. Wildcards (Comodines `?`)

Los comodines se usan principalmente en los parámetros de los métodos para flexibilizar la compatibilidad de tipos.

- `<?>`: Unbounded wildcard (Cualquier tipo).
- `<? extends T>`: Upper bounded (T o sus hijos). **Solo lectura segura**.
- `<? super T>`: Lower bounded (T o sus padres). **Escritura segura**.

### Ejemplo: El principio PECS (Producer Extends, Consumer Super)

```java
import java.util.List;
import java.util.ArrayList;

public class WildcardDemo {

    // Acepta una lista de Number O CUALQUIER SUBCLASE (Integer, Double)
    // Solo podemos LEER (Producir valores), no agregar.
    public static double sum(List<? extends Number> list) {
        double sum = 0;
        for (Number n : list) {
            sum += n.doubleValue();
        }
        return sum;
    }

    // Acepta una lista de Integer O CUALQUIER PADRE (Number, Object)
    // Podemos ESCRIBIR (Consumir valores).
    public static void addNumbers(List<? super Integer> list) {
        for (int i = 1; i <= 10; i++) {
            list.add(i);
        }
    }

    public static void main(String[] args) {
        List<Integer> ints = new ArrayList<>();
        addNumbers(ints); // Funciona

        List<Number> nums = new ArrayList<>();
        addNumbers(nums); // Funciona porque Number es padre de Integer

        System.out.println("Suma: " + sum(ints));
    }
}
```

## 7. Type Erasure (Borrado de Tipos)

Concepto avanzado crucial para entrevistas: **Los Genéricos en Java son una característica exclusiva del tiempo de compilación.**

Una vez que el compilador verifica que los tipos son correctos, **borra** la información genérica y la reemplaza por `Object` (o el tipo del límite `extends`) e inserta los _casts_ necesarios en el bytecode compilado.

Esto significa que:

1.  En tiempo de ejecución (Runtime), `List<String>` y `List<Integer>` son exactamente la misma clase (`List`).
2.  No puedes hacer `new T()`.
3.  No puedes usar `instanceof T`.

---

# Fin del Documento

**Resumen de Módulos:**

1.  **Fundamentos:** Clases, Objetos, Métodos.
2.  **Pilares POO:** Encapsulamiento, Herencia, Polimorfismo, Abstracción.
3.  **Datos:** Collections Framework.
4.  **Robustez:** Manejo de Excepciones.
5.  **Arquitectura:** Relaciones (UML).
6.  **Persistencia:** ORM y JPA.
7.  **Concurrencia:** Hilos y Multithreading.
8.  **Reutilización:** Utils y Generics.
