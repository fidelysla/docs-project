# Java SE: Matrices (Arreglos Bidimensionales)

En matemáticas, una matriz es una tabla bidimensional de números. Sin embargo, **en Java, estrictamente hablando, no existen las matrices bidimensionales como bloque único de memoria**.

> **Definición Técnica:** En Java, una matriz es en realidad un **Arreglo de Arreglos**. Es un vector donde cada posición almacena una referencia a otro vector.

## 1. Declaración y Estructura

Al igual que los vectores, las matrices tienen un tamaño fijo una vez creadas y almacenan datos del mismo tipo. Se visualizan comúnmente en un sistema de coordenadas de **Filas (i)** y **Columnas (j)**.

### Sintaxis

```java
// Recomendada: corchetes junto al tipo de dato
int[][] matriz; 

// Estilo C (válido pero no recomendado)
int matrizC[][];
```

### Formas de Creación

```java
public class CreacionMatriz {
    public static void main(String[] args) {
        // 1. Matriz vacía de 3 filas y 3 columnas
        // Se inicializa con ceros (0) por defecto.
        int[][] tablero = new int[3][3];

        // 2. Inicialización con valores literales (Declaración explícita)
        // Visualmente intuitivo para configuraciones fijas.
        String[][] menu = {
            {"Inicio", "Configuración"}, // Fila 0
            {"Perfil", "Salir"},         // Fila 1
            {"Ayuda", "Créditos"}        // Fila 2
        };
        
        System.out.println("Filas totales: " + menu.length);
        System.out.println("Columnas en la fila 0: " + menu[0].length);
    }
}
```

---

## 2. Acceso y Manipulación

Para acceder a un elemento, necesitamos dos índices: `[fila][columna]`.

```java
public class ManipulacionMatriz {
    public static void main(String[] args) {
        int[][] numeros = new int[2][2];

        // Escritura (Set)
        numeros[0][0] = 10; // Fila 0, Columna 0
        numeros[0][1] = 20; // Fila 0, Columna 1
        numeros[1][0] = 30; // Fila 1, Columna 0
        numeros[1][1] = 40; // Fila 1, Columna 1

        // Lectura (Get)
        System.out.println("Valor en (1,0): " + numeros[1][0]); // Imprime 30
        
        // Error común: Intercambiar filas por columnas
        // Si la matriz no es cuadrada, esto lanza ArrayIndexOutOfBoundsException
    }
}
```

---

## 3. Recorrido (Iteración Anidada)

El patrón estándar para recorrer una matriz completa es utilizar **bucles anidados** (un `for` dentro de otro).

> **Buenas Práctica:** En el segundo bucle, usa siempre la longitud de la fila actual (`matriz[i].length`) en lugar de una constante o la longitud de la primera fila. Esto previene errores en matrices irregulares.

```java
public class RecorridoMatriz {
    public static void main(String[] args) {
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Bucle externo: Controla las FILAS
        for (int i = 0; i < matriz.length; i++) {
            
            // Bucle interno: Controla las COLUMNAS de la fila 'i'
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + "\t"); // \t es tabulador
            }
            
            System.out.println(); // Salto de línea al terminar cada fila
        }
    }
}
```

---

## 4. Matrices Irregulares (Jagged Arrays)

Gracias a que Java implementa matrices como "arrays de arrays", las filas no tienen por qué tener la misma longitud. Esto permite optimizar memoria si sabes que ciertas filas necesitan menos espacio.

```java
public class MatrizIrregular {
    public static void main(String[] args) {
        // Declaramos solo las filas (3), dejamos las columnas vacías
        int[][] ventas = new int[3][];

        // Inicializamos cada fila con diferente tamaño
        ventas[0] = new int[2]; // Fila 0 tiene 2 columnas
        ventas[1] = new int[5]; // Fila 1 tiene 5 columnas
        ventas[2] = new int[1]; // Fila 2 tiene 1 columna

        ventas[1][4] = 100; // Válido
        // ventas[0][4] = 100; // Error: IndexOutOfBounds (La fila 0 solo llega al índice 1)
        
        System.out.println("Longitud fila 1: " + ventas[1].length);
    }
}
```

---

## 5. Clase `Arrays.deepToString()`

Al igual que con los vectores, si intentas imprimir una matriz directamente (`System.out.println(matriz)`), obtendrás una dirección de memoria.

Para matrices multidimensionales, `Arrays.toString()` no es suficiente (solo imprimiría referencias de los arrays internos). Debemos usar **`Arrays.deepToString()`**.

```java
import java.util.Arrays;

public class ImprimirMatriz {
    public static void main(String[] args) {
        int[][] matriz = {{1, 2}, {3, 4}};

        // Forma CORRECTA de imprimir matrices para debug rápido
        System.out.println(Arrays.deepToString(matriz));
        // Salida: [[1, 2], [3, 4]]
    }
}
```

---

## 6. Modelo de Memoria (Deep Dive)

Entender esto es vital para evitar bugs lógicos complejos.

Imagina `int[][] x = new int[2][3]`.

1.  **Stack:** Existe una variable `x` que apunta al Objeto Principal en el Heap.
2.  **Heap (Objeto Principal):** Es un array de tamaño 2. **NO contiene enteros**, contiene **referencias** (direcciones de memoria).
    *   `x[0]` -> Apunta al array de la fila 0.
    *   `x[1]` -> Apunta al array de la fila 1.
3.  **Heap (Arrays Secundarios):** Son los arrays que contienen los datos reales (`int`).

**Consecuencia:**
Si haces `matriz[0] = matriz[1]`, ambas filas apuntarán al mismo espacio de memoria. Si cambias un dato en la fila 0, "mágicamente" cambiará en la fila 1.

---

## 7. Casos de Uso Comunes

1.  **Tableros de Juego:** Ajedrez, Batalla Naval, Tres en raya (Tic-Tac-Toe).
2.  **Procesamiento de Imágenes:** Una imagen en escala de grises es básicamente una matriz de píxeles (valores 0-255).
3.  **Matemáticas y Ciencia de Datos:** Operaciones de álgebra lineal, grafos (matrices de adyacencia).
4.  **Reportes:** Estructuras tipo hoja de cálculo (Filas = Registros, Columnas = Campos).