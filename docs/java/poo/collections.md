# POO en Java: Collections Framework

El **Java Collections Framework** es una arquitectura unificada para representar y manipular grupos de objetos. A diferencia de los _Arrays_ primitivos (que tienen un tamaño fijo), las Collections crecen dinámicamente y ofrecen estructuras de datos optimizadas (listas, pilas, colas, árboles, tablas hash).

La jerarquía principal se divide en dos grandes ramas:

1.  **`java.util.Collection`**: Para grupos de elementos individuales (List, Set, Queue).
2.  **`java.util.Map`**: Para pares Clave-Valor (no hereda de Collection, pero es parte del framework).

## 1. La Interfaz `List` (Listas)

Una `List` es una colección **ordenada** (secuencia).

- **Características:** Permite elementos duplicados. Permite acceso posicional (por índice).
- **Implementaciones clave:**
  - **`ArrayList`**: Basada en un array redimensionable. Es la implementación por defecto para el 90% de los casos. Muy rápida para leer (`get`), más lenta para insertar/borrar en el medio.
  - **`LinkedList`**: Basada en nodos doblemente enlazados. Rápida para insertar/borrar, lenta para acceso aleatorio.

### Ejemplo Profesional: Gestión de Pedidos

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class ListExample {
    public static void main(String[] args) {
        // BUENA PRÁCTICA: Programar contra la Interfaz (List), no la implementación (ArrayList)
        // Esto permite cambiar la implementación luego sin romper el código cliente.
        List<String> orderIds = new ArrayList<>();

        // Agregar elementos
        orderIds.add("ORD-1001");
        orderIds.add("ORD-1002");
        orderIds.add("ORD-1001"); // List permite duplicados

        // Acceso por índice (0-based)
        String firstOrder = orderIds.get(0);

        // Operaciones comunes
        if (orderIds.contains("ORD-1002")) {
            System.out.println("El pedido existe.");
        }

        // Ordenamiento (Sort)
        Collections.sort(orderIds); // Orden natural (alfabético)

        // Iteración (Java 8+ lambda)
        orderIds.forEach(id -> System.out.println("Procesando ID: " + id));
    }
}
```

## 2. La Interfaz `Set` (Conjuntos)

Un `Set` modela la abstracción matemática de un conjunto.

- **Características:** **No permite duplicados**. La mayoría no garantiza el orden de inserción.
- **Implementaciones clave:**
  - **`HashSet`**: Basado en Tabla Hash. Es el más rápido ($O(1)$). No garantiza orden.
  - **`TreeSet`**: Basado en árbol Red-Black. Mantiene los elementos **ordenados** (natural o comparador). Es más lento ($O(\log n)$).
  - **`LinkedHashSet`**: Mantiene el orden de inserción.

### Importancia de `equals()` y `hashCode()`

Para que un objeto funcione correctamente en un `Set` (o como clave en un `Map`), **debe** sobrescribir correctamente `equals()` y `hashCode()`. Si no, Java no sabrá detectar duplicados.

### Ejemplo: Usuarios Únicos

```java
import java.util.HashSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        // HashSet es ideal para eliminar duplicados o verificar pertenencia rápidamente
        Set<String> activeUsers = new HashSet<>();

        activeUsers.add("user_admin");
        activeUsers.add("user_guest");
        boolean wasAdded = activeUsers.add("user_admin"); // Devuelve false, ya existe

        System.out.println("Usuarios activos: " + activeUsers.size()); // Imprime 2

        // Ejemplo de uso típico: Filtrar duplicados de una lista
        List<Integer> numbers = List.of(1, 2, 3, 1, 2, 4);
        Set<Integer> uniqueNumbers = new HashSet<>(numbers);
        System.out.println(uniqueNumbers); // [1, 2, 3, 4] (orden no garantizado)
    }
}
```

## 3. La Interfaz `Map` (Mapas / Diccionarios)

Un `Map` es un objeto que asocia claves a valores.

- **Características:** Las **claves (Keys) son únicas**. Cada clave mapea a un solo valor.
- **Implementaciones clave:**
  - **`HashMap`**: La más usada. Sin orden garantizado. Permite una clave `null`.
  - **`TreeMap`**: Claves ordenadas naturalmente.
  - **`LinkedHashMap`**: Mantiene orden de inserción (útil para cachés LRU).

### Ejemplo Profesional: Configuración de Sistema

```java
import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        // Map<KeyType, ValueType>
        Map<String, String> appConfig = new HashMap<>();

        // Insertar (put)
        appConfig.put("db.url", "jdbc:mysql://localhost:3306/mydb");
        appConfig.put("app.version", "1.5.0");
        appConfig.put("max.users", "100");

        // Sobrescribir valor
        appConfig.put("app.version", "1.5.1"); // Reemplaza el valor anterior

        // Recuperar (get)
        String version = appConfig.get("app.version");

        // getOrDefault (Muy útil para evitar NullPointerException)
        String timeout = appConfig.getOrDefault("timeout", "3000");

        // Iterar sobre un Mapa
        // EntrySet es la forma más eficiente de recorrer claves y valores a la vez
        for (Map.Entry<String, String> entry : appConfig.entrySet()) {
            System.out.printf("Clave: %s -> Valor: %s%n", entry.getKey(), entry.getValue());
        }
    }
}
```

## 4. Modern Java: Streams API

Desde Java 8, la manipulación de Collections cambió drásticamente. En lugar de usar bucles `for` complejos, usamos **Streams** para un estilo declarativo (Functional Programming).

### Operaciones:

- **Intermediate:** `filter`, `map`, `sorted` (Retornan un stream, son "lazy").
- **Terminal:** `collect`, `forEach`, `count` (Ejecutan el stream y cierran el flujo).

### Ejemplo: Filtrado y Transformación de Objetos

Supongamos una lista de productos. Queremos obtener los nombres de los productos activos con precio mayor a 100.

```java
import java.util.List;
import java.util.stream.Collectors;

public class StreamExample {

    public static void main(String[] args) {
        List<Product> products = getProductList(); // Supongamos que devuelve una lista llena

        List<String> expensiveProductNames = products.stream()
            .filter(p -> p.isActive())              // 1. Filtrar solo activos
            .filter(p -> p.getPrice() > 100.00)     // 2. Filtrar por precio
            .map(p -> p.getName().toUpperCase())    // 3. Transformar (Objeto -> String)
            .sorted()                               // 4. Ordenar alfabéticamente
            .collect(Collectors.toList());          // 5. Recolectar en una nueva Lista

        expensiveProductNames.forEach(System.out::println);
    }
}
```

## 5. Cuadro Comparativo de Rendimiento (Big O)

Un profesional debe saber qué colección elegir según la operación más frecuente.

| Interfaz | Implementación | Acceso (Get) | Inserción (Add) | Búsqueda (Contains) | Uso ideal                   |
| :------- | :------------- | :----------- | :-------------- | :------------------ | :-------------------------- |
| **List** | `ArrayList`    | $O(1)$       | $O(1)$ \*       | $O(n)$              | Lectura frecuente           |
| **List** | `LinkedList`   | $O(n)$       | $O(1)$          | $O(n)$              | Inserción/Borrado frecuente |
| **Set**  | `HashSet`      | N/A          | $O(1)$          | $O(1)$              | Unicidad y velocidad        |
| **Set**  | `TreeSet`      | N/A          | $O(\log n)$     | $O(\log n)$         | Unicidad ordenada           |
| **Map**  | `HashMap`      | $O(1)$       | $O(1)$          | $O(1)$              | Diccionario estándar        |

_\* $O(1)$ amortizado (a veces debe redimensionar el array interno)._

---

_Fin de la Parte 3. Por favor, indica cuándo proceder con la Parte 4: Excepciones._
