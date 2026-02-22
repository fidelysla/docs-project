# Técnicas de Conteo y Problemas de Probabilidad

## Introducción

En este capítulo se desarrollan las técnicas fundamentales de conteo: permutaciones y combinaciones. Estas herramientas permiten cuantificar el número de resultados posibles en un espacio muestral sin necesidad de listarlos todos, lo cual es esencial para el cálculo de probabilidades en escenarios complejos. Posteriormente, se presentan ejercicios prácticos que aplican estos conceptos junto con las operaciones básicas de conjuntos y eventos.

## Objetivos de aprendizaje

Al finalizar este capítulo, el estudiante será capaz de:

- Diferenciar entre permutaciones (importa el orden) y combinaciones (no importa el orden).
- Calcular el número de arreglos posibles con y sin reemplazo.
- Aplicar el principio de la multiplicación para determinar el tamaño de espacios muestrales compuestos.
- Resolver problemas prácticos de probabilidad utilizando técnicas de conteo y álgebra de sucesos.
- P7 - Práctica 7 (PC2)

---

## Tema 1: Permutaciones y Combinaciones

Para determinar el tamaño del espacio muestral o el número de casos favorables, es crucial identificar si en el experimento **importa el orden** de los elementos y si existe **reemplazo** (reposición) de los mismos.

Sea un conjunto de $n$ elementos disponibles, del cual queremos seleccionar un subgrupo de tamaño $r$.

### 1.1. Permutaciones (El orden importa)

En una permutación, la disposición de los elementos es relevante (ej. "ABC" es distinto de "CBA").

#### A. Permutaciones sin Reemplazo

Una vez seleccionado un elemento, no puede volver a elegirse.
El número de formas de ordenar $r$ elementos de un conjunto de $n$ es:

$$ P(n, r) = \frac{n!}{(n-r)!} $$

**Caso especial:** Si ordenamos todos los elementos ($r=n$):

$$ P(n, n) = n! $$

!!! example "Ejemplo: Asignar sillas"
    Si tenemos 10 personas y 10 sillas ($n=10, r=10$), el número de formas de sentarlas es:
    $$ 10! = 3,628,800 \text{ posibilidades} $$

    Si solo tenemos 5 sillas para 10 personas ($n=10, r=5$):
    $$ P(10, 5) = \frac{10!}{5!} = 10 \times 9 \times 8 \times 7 \times 6 = 30,240 $$

#### B. Permutaciones con Reemplazo

Cada posición puede ser ocupada por cualquiera de los $n$ elementos originales (se pueden repetir).

$$ P\_{reemplazo} = n^r $$

!!! example "Ejemplo Teórico"
    Si 10 personas pudieran ocupar teóricamente la misma silla secuencialmente en un registro de 5 turnos ($n=10, r=5$):
    $$ 10^5 = 100,000 \text{ posibilidades} $$

### 1.2. Combinaciones (El orden no importa)

En una combinación, solo interesa qué elementos fueron seleccionados, no su orden (ej. un comité de personas). No se admite reemplazo en la definición estándar.

**Fórmula:**

$$ C(n, r) = \binom{n}{r} = \frac{n!}{r!(n-r)!} $$

!!! tip "Propiedades de los Combinatorios"
    * $\binom{n}{n} = 1$ (Solo hay 1 forma de elegir a todos).
    * $\binom{n}{0} = 1$ (Solo hay 1 forma de no elegir a nadie: el conjunto vacío).
    * $\binom{n}{1} = n$ (Hay $n$ formas de elegir 1 elemento).
    * En R, se calcula con la función `choose(n, r)`.

---

## Tema 2: Ejercicios Resueltos (Práctica 6)

### Ejercicio 1: Espacios Muestrales de Monedas

Determine el tamaño del espacio muestral ($\#\Omega$) al lanzar monedas.

- **2 Monedas:** $\Omega = \{(C,C), (C,S), (S,C), (S,S)\}$. $\#\Omega = 2^2 = 4$.
- **3 Monedas:** $\#\Omega = 2^3 = 8$.
- **20 Monedas:** $\#\Omega = 2^{20} = 1,048,576$.

### Ejercicio 2: Semáforos Secuenciales

Un auto pasa por 3 semáforos, cada uno con 2 estados: Parar (P) o Continuar (C).

$$ \#\Omega = 2 \times 2 \times 2 = 8 $$

$$ \Omega = \{ (P,P,P), (P,P,C), (P,C,P), (P,C,C), (C,P,P), (C,P,C), (C,C,P), (C,C,C) \} $$

**Definición de Eventos:**

- **A (Se detiene en el 1º):** Todos los casos que inician con P. (4 casos).
- **B (Se detiene en el 3º):** Todos los casos que terminan con P. (4 casos).
- **C (No se detiene nunca):** $\{(C,C,C)\}$.

**Operaciones:**

- $A \cup B$: { (P,P,P), (P,P,C), (P,C,P), (P,C,C), (C,P,P), (C,C,P) } (6 casos).
- $A \cap B$: { (P,P,P), (P,C,P) } (Se detiene en el 1º Y en el 3º).
- $A^c$: { (C,P,P), (C,P,C), (C,C,P), (C,C,C) } (No se detiene en el 1º).
- $A \cap C$: $\emptyset$ (Son eventos disjuntos, no puede detenerse en el primero y a la vez no detenerse nunca).

### Ejercicio 3: Sistemas Defectuosos (Binomial)

Se analizan 4 componentes. $X$ es el número de defectuosos.

Calculamos el número de formas de obtener $k$ defectuosos usando combinatoria $\binom{4}{k}$.

- **$X=0$ defectuosos:** $\binom{4}{0} = 1$ caso (Todos funcionan).

- **$X=1$ defectuoso:** $\binom{4}{1} = 4$ casos.

- **$X=2$ defectuosos:** $\binom{4}{2} = \frac{4 \times 3}{2} = 6$ casos.

Total de casos evaluados: $1 + 4 + 6 = 11$ (Nota: El espacio muestral total de estados es $2^4=16$, aquí solo se listan los casos para $X \le 2$).

### Ejercicio 4: Selección de Personas

Comunidad con 10 mujeres, cada una con 3 hijas. Se elige 1 mujer y 1 niña.

- Opciones para madre: 10.
- Opciones para hija (total de niñas): $10 \times 3 = 30$.
- Si la elección es independiente (cualquier madre con cualquier niña):

$$ \#\Omega = 10 \times 30 = 300 $$

!!! note "Nota"
    El apunte original indica 30, lo cual implica una interpretación diferente: se elige una de las 10 madres y luego una de SUS 3 hijas específicas. Bajo esta interpretación condicional, $\#\Omega = 10 \times 3 = 30$. Se asume esta última por coherencia con el original.


### Ejercicio 5: Lanzamiento de Dos Dados

Espacio muestral $\#\Omega = 36$.

**Eventos:**

- **A ($d_1 + d_2 \ge 5$):** Complemento de sumar 2, 3 o 4. Casos $<5$: $\{(1,1), (1,2), (2,1), (1,3), (2,2), (3,1)\}$. (6 casos). $\#A = 36 - 6 = 30$.

- **B ($d_1 > d_2$):** Triángulo inferior de la matriz de resultados (sin la diagonal). $\frac{36-6}{2} = 15$ casos.

- **C ($d_1 = 4$):** $\{(4,1), (4,2), (4,3), (4,4), (4,5), (4,6)\}$. (6 casos).

**Operaciones:**

- **$A \cap B$:** Casos donde suman $\ge 5$ Y el primero es mayor.
- **$B \cup C$:** Unir los casos de B con la fila del 4.


### Ejercicio 6: Leyes de De Morgan

Aplicación de propiedades de conjuntos para simplificar expresiones.

**1.** $(A \cup B \cup C \cup D)^c = A^c \cap B^c \cap C^c \cap D^c$

> *El complemento de la unión es la intersección de los complementos.*

---

**2.** Simplificar $[(A \cup B^c) \cap (C \cup D^c)]^c$

**Paso 1 — De Morgan al producto principal:**

$$[(A \cup B^c) \cap (C \cup D^c)]^c = (A \cup B^c)^c \cup (C \cup D^c)^c$$

**Paso 2 — De Morgan a cada factor:**

$$(A \cup B^c)^c = A^c \cap B \qquad (C \cup D^c)^c = C^c \cap D$$

**Resultado:**

$$= (A^c \cap B) \cup (C^c \cap D)$$


### Ejercicios Adicionales de Conteo

**Pregunta 8: Asignación de Puestos**

20 trabajadores en 20 puestos.

$$ P(20, 20) = 20! $$


**Pregunta 9: Los Beatles e Instrumentos**

**Caso 1 — Sin restricciones**

4 personas, 4 instrumentos:

$$P(4,4) = 4! = 24 \text{ arreglos}$$

**Caso 2 — Con restricción**

George y Ringo **solo tocan batería o guitarra**; Paul y John toman los instrumentos restantes.

| Paso | Asignación | Formas |
|------|-----------|--------|
| 1 | George y Ringo → {Batería, Guitarra} | $P(2,2) = 2$ |
| 2 | Paul y John → los 2 instrumentos restantes | $P(2,2) = 2$ |
| **Total** | $2 \times 2$ | **4 arreglos** |


**Pregunta 10: Sentar a 8 amigos (4H, 4M)**

**1. Sin restricciones**

$$8! = 40{,}320$$

**2. A y B deben quedar juntos**

Tratar $\{A,B\}$ como un bloque → 7 elementos a permutar:

$$7! \times 2! = 5{,}040 \times 2 = 10{,}080$$

**3. Hombres y mujeres alternados**

> *Interpretación asumida: los 8 asientos alternan H-M-H-M…*

$$2 \times 4! \times 4! = 2 \times 24 \times 24 = 1{,}152$$

**4. Las 4 parejas permanecen juntas**

Tratar cada pareja como un bloque → 4 bloques:

$$\underbrace{4!}_{\text{ordenar bloques}} \times \underbrace{2^4}_{\text{orden interno}} = 24 \times 16 = 384$$

---

## Observaciones y notas

- **Interpretación de enunciados:** En problemas de conteo (como el Ejercicio 4 de las madres), la ambigüedad del lenguaje natural ("elegir una mujer y una niña" vs "elegir una madre y _su_ hija") cambia drásticamente el resultado. Se ha optado por la interpretación lógica del contexto de "árbol de decisión".
- **Combinatoria vs Listado:** Para $N$ pequeño, listar el espacio muestral es útil, pero para $N$ grande (ej. 20 monedas), las fórmulas de conteo son indispensables.
- **Error en apunte original:** En el Ejercicio 5 (Dados), el apunte original listaba intersecciones incompletas. Se ha corregido la lógica para reflejar las operaciones de conjuntos adecuadas.
