# POO en Java: Hilos (Threads) y Concurrencia

Java es un lenguaje **multihilo** (multithreaded) desde su nacimiento. Esto significa que permite ejecutar múltiples tareas simultáneamente dentro del mismo programa.

Un **Hilo** es la unidad más pequeña de procesamiento que puede ser programada por el sistema operativo. A diferencia de un "Proceso" (que tiene su propia memoria aislada), los hilos dentro de un mismo proceso **comparten la misma memoria** (Heap), lo que permite una comunicación rápida pero introduce riesgos de corrupción de datos (Race Conditions).

## 1. Creación de Hilos: La forma Clásica

Existen dos formas básicas de definir una tarea para un hilo en Java.

### A. Implementando `Runnable` (Recomendada)

Es la forma preferida porque Java no soporta herencia múltiple. Si extiendes de `Thread`, no puedes extender de nada más. Si implementas `Runnable`, tu clase sigue libre para heredar de otra.

```java
public class Task implements Runnable {
    private String taskName;

    public Task(String name) {
        this.taskName = name;
    }

    @Override
    public void run() {
        // Aquí va la lógica que se ejecutará en paralelo
        System.out.println("Iniciando tarea: " + taskName + " en " + Thread.currentThread().getName());
        try {
            Thread.sleep(1000); // Simula trabajo pesado (1 seg)
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); // Restaurar estado de interrupción
            System.err.println("Hilo interrumpido");
        }
        System.out.println("Finalizando tarea: " + taskName);
    }
}
```

### B. Extendiendo `Thread` (Menos flexible)

Solo se recomienda para prototipos rápidos o si necesitas sobrescribir métodos específicos de la clase Thread.

```java
public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Ejecutando hilo heredado...");
    }
}
```

### Ejecución

**IMPORTANTE:** Nunca llames al método `run()` directamente. Si lo haces, el código se ejecutará en el hilo principal (main) de forma secuencial. Para iniciar un nuevo hilo, debes llamar a `start()`.

```java
public class MainThread {
    public static void main(String[] args) {
        // Opción A: Runnable
        Task tarea = new Task("Procesar Archivo");
        Thread hilo1 = new Thread(tarea);

        // Opción B: Lambda (Java 8+) - La forma moderna de Runnable
        Thread hilo2 = new Thread(() -> {
            System.out.println("Hola desde una lambda en paralelo");
        });

        hilo1.start(); // Inicia la ejecución en paralelo
        hilo2.start();

        System.out.println("El hilo Main sigue su camino...");
    }
}
```

## 2. El Ciclo de Vida de un Hilo

Es crucial entender los estados por los que pasa un hilo para depurar problemas de bloqueo (deadlocks).

1.  **New:** Instancia creada, pero `start()` no ha sido llamado.
2.  **Runnable:** Listo para ejecutarse (el Scheduler del OS decide cuándo darle CPU).
3.  **Running:** Actualmente usando la CPU.
4.  **Blocked/Waiting:** Esperando un recurso (I/O, un bloqueo `synchronized`, o dormido con `sleep`).
5.  **Terminated:** El método `run()` terminó o ocurrió una excepción no controlada.

## 3. Sincronización (Synchronization)

Dado que los hilos comparten memoria, si dos hilos intentan modificar la misma variable al mismo tiempo, ocurre una **Condición de Carrera (Race Condition)**. El resultado es impredecible.

Para evitarlo, usamos la palabra clave `synchronized`. Esto crea un "monitor" (lock) que asegura que **solo un hilo a la vez** pueda entrar a ese bloque de código.

### Ejemplo: Contador Thread-Safe

```java
public class Counter {
    private int count = 0;

    // Método sincronizado: Solo un hilo puede entrar aquí a la vez.
    // Los demás esperan afuera (Blocked) hasta que el primero termine.
    public synchronized void increment() {
        count++;
    }

    // Bloque sincronizado (más granular y eficiente si solo una parte requiere lock)
    public void safeDecrement() {
        // Lógica que no necesita sync...

        synchronized(this) {
            count--;
        }
    }

    public int getCount() {
        return count;
    }
}
```

## 4. Modern Java: Executors y Thread Pools (Java 5+)

En el desarrollo profesional, **raramente creamos hilos manualmente** (`new Thread()`). Crear un hilo es costoso para el sistema operativo.

En su lugar, usamos el **Framework Executor**, que gestiona un **Pool de Hilos** reutilizables. Esto mejora el rendimiento y la estabilidad.

### Tipos de Pools Comunes

- `FixedThreadPool`: Número fijo de hilos. Si están ocupados, las tareas esperan en una cola.
- `CachedThreadPool`: Crea hilos según demanda y los reutiliza. Cuidado: puede crecer infinitamente.
- `SingleThreadExecutor`: Un solo hilo (útil para tareas secuenciales en background).

### Ejemplo Profesional con `ExecutorService`

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ThreadPoolExample {
    public static void main(String[] args) {

        // Creamos un pool de 2 trabajadores
        ExecutorService executor = Executors.newFixedThreadPool(2);

        // Enviamos 5 tareas.
        // Las primeras 2 entran directo, las otras 3 esperan en cola.
        for (int i = 0; i < 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                String threadName = Thread.currentThread().getName();
                System.out.println("Tarea " + taskId + " ejecutada por " + threadName);
                try { Thread.sleep(500); } catch (InterruptedException e) {}
            });
        }

        // Importante: Cerrar el executor o el programa nunca terminará
        executor.shutdown();

        try {
            // Esperar a que terminen (opcional)
            if (!executor.awaitTermination(5, TimeUnit.SECONDS)) {
                executor.shutdownNow(); // Forzar cierre si tarda mucho
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
    }
}
```

## 5. Callable y Future

`Runnable` tiene una limitación: su método `run()` retorna `void`. ¿Qué pasa si queremos que el hilo calcule algo y nos devuelva el resultado?

Usamos la interfaz `Callable<T>` y el objeto `Future<T>`.

```java
import java.util.concurrent.*;

public class FutureExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {

        ExecutorService executor = Executors.newSingleThreadExecutor();

        // Callable retorna un valor
        Callable<Integer> calculation = () -> {
            Thread.sleep(1000); // Simulando cálculo complejo
            return 42;
        };

        // Enviamos la tarea. Recibimos un "Futuro" (promesa de un valor)
        System.out.println("Enviando tarea...");
        Future<Integer> futureResult = executor.submit(calculation);

        // Podemos hacer otras cosas mientras el hilo calcula...
        System.out.println("Haciendo otras cosas en main...");

        // Cuando necesitamos el valor, llamamos a get().
        // Esto BLOQUEA el hilo main hasta que el resultado esté listo.
        Integer result = futureResult.get();

        System.out.println("Resultado obtenido: " + result);

        executor.shutdown();
    }
}
```

## 6. Clases Atómicas (`java.util.concurrent.atomic`)

Para operaciones simples (como contadores), usar `synchronized` es demasiado pesado (overhead). Java ofrece clases atómicas que usan instrucciones de bajo nivel del CPU (CAS - Compare And Swap) para ser thread-safe sin bloquear hilos.

- `AtomicInteger`, `AtomicLong`, `AtomicBoolean`, `AtomicReference`.

```java
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicExample {
    // Thread-safe sin 'synchronized'
    private AtomicInteger counter = new AtomicInteger(0);

    public void increment() {
        // Equivale a count++ pero atómico
        counter.incrementAndGet();
    }

    public int getValue() {
        return counter.get();
    }
}
```
