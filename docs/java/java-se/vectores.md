# Java SE: Vectores (Arreglos Unidimensionales)

En el ecosistema Java, lo que comúnmente llamamos "Vectores" en la lógica de programación se denomina técnicamente **Arrays** (Arreglos).

> **Nota Profesional:** No confundir con la clase `java.util.Vector`, la cual es una colección obsoleta (legacy) y sincronizada. En este documento nos centraremos en los **Arrays nativos (`[]`)**, que son la base para el almacenamiento de datos indexados.

## 1. Definición y Características

Un Array es una estructura de datos que almacena una colección de elementos del **mismo tipo** en ubicaciones de memoria contiguas.

**Características Principales:**

- **Homogeneidad:** Todos los elementos deben ser del mismo tipo de dato (o subtipos).
- **Tamaño Fijo:** Una vez creado, su longitud (`length`) no puede cambiar.
- **Indexación:** Se accede a los elementos mediante un índice numérico basado en **cero** (0).
- **Es un Objeto:** En Java, los arrays son objetos, por lo que se almacenan en el _Heap_ de la memoria.

---

## 2. Declaración e Instanciación

Para usar un arreglo en Java, debemos seguir tres pasos (que pueden hacerse en una sola línea):

1.  **Declaración:** Definir el tipo y el nombre.
2.  **Instanciación:** Reservar espacio en memoria.
3.  **Inicialización:** Asignar valores.

### Sintaxis

```java
// Sintaxis recomendada (tipo[] nombre)
int[] numeros;

// Sintaxis estilo C/C++ (válida pero menos común en Java)
int numerosC[];
```

### Creación en Memoria

```java
public class EjemploCreacion {
    public static void main(String[] args) {
        // 1. Declaración e Instanciación (Tamaño 5)
        // Se inicializa con valores por defecto (0 para int, null para objetos, false para boolean)
        int[] edades = new int[5];

        // 2. Declaración, Instanciación e Inicialización (Línea única)
        String[] nombres = {"Ana", "Pedro", "Luis"};

        // 3. Sintaxis alternativa con 'new' explícito
        double[] salarios = new double[]{1000.50, 2500.00, 3200.75};

        System.out.println("Tamaño del array edades: " + edades.length);
    }
}
```

---

## 3. Acceso y Modificación de Datos

El acceso es directo y muy rápido (complejidad O(1)) mediante el uso de corchetes `[]` y el índice.

```java
public class ManipulacionArray {
    public static void main(String[] args) {
        int[] puntajes = new int[3];

        // Asignación de valores (Set)
        puntajes[0] = 85;
        puntajes[1] = 90;
        puntajes[2] = 78;

        // Lectura de valores (Get)
        System.out.println("El primer puntaje es: " + puntajes[0]);

        // Modificación
        puntajes[1] = 95; // Cambiamos 90 por 95

        // Error común: ArrayIndexOutOfBoundsException
        // puntajes[3] = 100; // Esto lanzará una excepción porque el índice 3 no existe (0, 1, 2)
    }
}
```

---

## 4. Recorrido de Vectores (Iteración)

Un profesional debe conocer las diferentes formas de recorrer un array según la necesidad (lectura vs. modificación).

### A. Bucle `for` tradicional

Ideal cuando necesitamos el **índice** (por ejemplo, para modificar el array o acceder a posiciones específicas).

```java
int[] numeros = {10, 20, 30, 40};

for (int i = 0; i < numeros.length; i++) {
    // Podemos modificar el valor usando el índice 'i'
    numeros[i] = numeros[i] * 2;
    System.out.println("Índice " + i + ": " + numeros[i]);
}
```

### B. Bucle `for-each` (Enhanced for)

Introducido en Java 5. Es más limpio y legible. Ideal para **solo lectura**. No tenemos acceso directo al índice.

```java
String[] lenguajes = {"Java", "Python", "C#"};

for (String lenguaje : lenguajes) {
    System.out.println("Lenguaje: " + lenguaje);
}
```

---

## 5. Clase Utilitaria `java.util.Arrays`

Java provee una clase estática muy potente para manipular arrays sin tener que reinventar la rueda (ordenar, buscar, rellenar, comparar).

```java
import java.util.Arrays;

public class UtilidadesArrays {
    public static void main(String[] args) {
        int[] vector = {5, 1, 4, 2, 3};

        // 1. Ordenar (Sort) - Algoritmo Dual-Pivot Quicksort (O(n log n))
        Arrays.sort(vector);
        // vector ahora es {1, 2, 3, 4, 5}

        // 2. Imprimir contenido legible (toString)
        // Sin esto, imprimir 'vector' mostraría la dirección de memoria (hashcode)
        System.out.println("Vector ordenado: " + Arrays.toString(vector));

        // 3. Búsqueda Binaria (Binary Search) - Requiere array ordenado
        int index = Arrays.binarySearch(vector, 4);
        System.out.println("El número 4 está en el índice: " + index);

        // 4. Relleno masivo (Fill)
        int[] vacio = new int[5];
        Arrays.fill(vacio, 9); // Llena todo con 9
        System.out.println("Relleno: " + Arrays.toString(vacio));

        // 5. Copia de Arrays (Redimensionamiento simulado)
        // Crea un nuevo array más grande y copia los datos del anterior
        int[] vectorExpandido = Arrays.copyOf(vector, 10);
        System.out.println("Nuevo tamaño: " + vectorExpandido.length);
    }
}
```

---

## 6. Modelo de Memoria (Concepto Avanzado)

Entender esto distingue a un principiante de un experto.

- **Variable de Referencia:** `int[] a` se guarda en el **Stack**. Contiene la dirección de memoria.
- **Objeto Array:** Los datos reales `{1, 2, 3}` se guardan en el **Heap**.

**Consecuencia:** Si copias un array con `int[] b = a;`, no estás creando un nuevo array, solo estás copiando la referencia. Si modificas `b`, se modifica `a`.

```java
public class Referencias {
    public static void main(String[] args) {
        int[] original = {10, 20};
        int[] copiaReferencia = original; // Apuntan al mismo objeto en Heap

        copiaReferencia[0] = 99;

        System.out.println(original[0]); // Imprime 99, NO 10.
    }
}
```

---

## 7. Buenas Prácticas Profesionales

1.  **Preferir Listas para tamaños dinámicos:** Si no sabes cuántos elementos tendrás, usa `ArrayList` o `LinkedList` en lugar de Arrays nativos.
2.  **Usar `length`:** Nunca hardcodees el tamaño del loop (ej: `i < 10`), usa siempre `array.length`.
3.  **Null Checks:** Si recibes un array como parámetro en un método, valida que no sea `null` antes de acceder a `.length` para evitar `NullPointerException`.
4.  **Inmutabilidad:** Si quieres exponer un array de una clase, considera devolver una copia (`clone()` o `Arrays.copyOf`) para proteger tus datos internos.
