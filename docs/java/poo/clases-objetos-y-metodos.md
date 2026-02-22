#  POO en Java: Clases, objetos y métodos

La Programación Orientada a Objetos (POO) es el paradigma fundamental de Java. A diferencia de la programación procedural, la POO modela el software basándose en "cosas" (objetos) y sus interacciones, en lugar de una lista lineal de instrucciones.

A continuación, profundizaremos en los bloques de construcción esenciales: Clases, Objetos y Métodos.

## 1. Clases (Classes)

Una **Clase** es el "plano", "molde" o "plantilla" a partir del cual se crean los objetos. Define la estructura y el comportamiento que compartirán todos los objetos de ese tipo, pero no contiene los datos reales en sí misma (a menos que sean estáticos).

### Estructura de una Clase

Una clase profesional en Java se compone principalmente de:

1.  **Atributos (Campos/Estado):** Variables que contienen los datos.
2.  **Constructores:** Bloques de código especiales para inicializar objetos.
3.  **Métodos (Comportamiento):** Funciones que definen qué puede hacer el objeto.

### Ejemplo de Código: `Product.java`

```java
package com.empresa.inventory;

import java.math.BigDecimal;

/**
 * Representa un producto en un sistema de inventario.
 * Clase que demuestra estructura, atributos y constructores.
 */
public class Product {

    // 1. Atributos (Estado)
    // Se utiliza 'private' para fomentar el encapsulamiento (buenas prácticas)
    private Long id;
    private String name;
    private BigDecimal price; // BigDecimal es el estándar profesional para dinero, no double.
    private boolean active;

    // 2. Constructores

    // Constructor vacío (No-args constructor) - Útil para frameworks como Hibernate/Jackson
    public Product() {
    }

    // Constructor con argumentos para inicialización obligatoria
    public Product(Long id, String name, BigDecimal price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.active = true; // Valor por defecto
    }

    // Getters y Setters (se verán en detalle en Métodos)
    public String getName() {
        return name;
    }
}
```

## 2. Objetos (Objects)

Un **Objeto** es una **instancia** de una clase. Mientras que la clase vive en el código fuente y el _metaspace_ (definición), el objeto vive en la memoria **Heap** durante la ejecución.

### Creación de Objetos (Instanciación)

Para crear un objeto en Java, utilizamos la palabra clave `new`. Esto realiza tres acciones:

1.  **Reserva memoria:** Asigna espacio en el Heap.
2.  **Inicializa:** Llama al constructor de la clase.
3.  **Devuelve referencia:** Retorna la dirección de memoria donde se aloja el objeto.

### Ejemplo de Código: Instanciación

```java
public class Main {
    public static void main(String[] args) {

        // Declaración = Instanciación
        // 'laptop' es la referencia (variable) en el Stack.
        // 'new Product(...)' es el objeto real en el Heap.

        Product laptop = new Product(1L, "MacBook Pro", new BigDecimal("2500.00"));

        Product phone = new Product(2L, "iPhone 15", new BigDecimal("1200.00"));

        // Son dos objetos distintos creados a partir de la misma clase (molde).
        System.out.println("Producto 1: " + laptop.getName());
    }
}
```

## 3. Métodos (Methods)

Los métodos definen el **comportamiento** de los objetos. Son bloques de código que ejecutan una tarea específica. En Java profesional, los métodos deben ser atómicos (hacer una sola cosa bien) y tener nombres descriptivos (verbo + sustantivo).

### Componentes de un Método

1.  **Modificador de acceso:** (`public`, `private`, `protected`, package-private).
2.  **Tipo de retorno:** El tipo de dato que devuelve (`void` si no devuelve nada).
3.  **Nombre del método:** camelCase (ej. `calculateTax`).
4.  **Parámetros:** Datos de entrada.
5.  **Cuerpo:** La lógica.

### Tipos de Métodos Clave

#### A. Métodos de Instancia

Requieren un objeto creado para ser invocados. Operan sobre el estado (`this`) de ese objeto específico.

#### B. Métodos Estáticos (`static`)

Pertenecen a la clase, no a un objeto específico. Se usan para utilidades o funciones puras que no dependen de atributos de instancia.

#### C. Sobrecarga de Métodos (Overloading)

La capacidad de definir múltiples métodos con el mismo nombre pero diferente **firma** (diferentes tipos o cantidad de parámetros).

### Ejemplo Completo de Métodos

```java
public class ShoppingCart {

    // Método de Instancia: Getter
    public BigDecimal getTotal() {
        // Lógica para calcular total
        return BigDecimal.ZERO;
    }

    // Método de Instancia: Acción con parámetros
    public void addItem(Product product, int quantity) {
        if (quantity <= 0) {
            System.out.println("Error: La cantidad debe ser mayor a 0");
            return; // Salida temprana (Guard clause)
        }
        System.out.println("Agregando " + quantity + " de " + product.getName());
    }

    // --- SOBRECARGA DE MÉTODOS (Overloading) ---

    // Firma 1: Recibe un mensaje String
    public void logStatus(String message) {
        System.out.println("Log: " + message);
    }

    // Firma 2: Recibe un código de error int (Mismo nombre, diferentes parámetros)
    public void logStatus(int errorCode) {
        System.out.println("Error Code: " + errorCode);
    }

    // --- MÉTODO ESTÁTICO (Static) ---

    // Se invoca como ShoppingCart.validateCart(...) sin hacer 'new'
    public static boolean validateCart(ShoppingCart cart) {
        return cart != null;
    }
}
```

### El puntero `this`

Dentro de un método de instancia, `this` hace referencia al objeto actual que está ejecutando el método. Se usa principalmente para evitar ambigüedades entre atributos de clase y parámetros del método.

```java
public void setName(String name) {
    // 'this.name' refiere al atributo de la clase
    // 'name' refiere al parámetro del método
    this.name = name;
}
```
