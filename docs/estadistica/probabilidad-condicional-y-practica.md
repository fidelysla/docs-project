# Práctica de Probabilidad, Técnicas de Conteo y Probabilidad Condicional

## Introducción

Este documento recopila ejercicios prácticos que abarcan desde técnicas de conteo (permutaciones y combinaciones) hasta conceptos fundamentales de probabilidad axiomática y condicional. Se incluyen resoluciones paso a paso para problemas clásicos de distribución, leyes de probabilidad y teorema de la probabilidad total.

## Objetivos de aprendizaje

Al finalizar este capítulo, el estudiante será capaz de aplicar fórmulas de permutación y combinación en problemas de asignación y formación de grupos, diferenciar entre muestreo con y sin reposición, calcular probabilidades marginales y conjuntas, entender y aplicar la probabilidad condicional y la ley de probabilidad total, y resolver ejercicios prácticos sobre espacios muestrales y eventos.

---

## Tema 1: Técnicas de Conteo

### 1.1 Asignación de Puestos — Permutación Simple

**Problema:** Si veinte trabajadores se asignan a veinte puestos, uno en cada puesto, ¿cuántos arreglos diferentes existen?

Importa el orden y se usan todos los elementos ($n = r = 20$):

$$P(20,\,20) = 20! \approx 2.43 \times 10^{18} \text{ arreglos}$$

---

### 1.2 Formación de Números — Permutación sin Repetición

**Problema:** Con los dígitos $\{2, 3, 6, 8, 9\}$, ¿cuántos números de 3 dígitos se pueden formar sin repetir?

El orden importa (236 ≠ 632) y no hay reemplazo, con $n=5$, $r=3$:

$$P(5,3) = \frac{5!}{(5-3)!} = \frac{5!}{2!} = 5 \times 4 \times 3 = 60 \text{ números}$$

---

### 1.3 Restricciones en Grupos — Los Beatles

**Problema:** Una banda de 4 integrantes toca 4 instrumentos.

**Caso 1 — Sin restricciones**

$$P(4,4) = 4! = 24 \text{ formas}$$

**Caso 2 — George y Ringo solo tocan batería o guitarra**

| Paso | Asignación | Formas |
|------|-----------|--------|
| 1 | George y Ringo → {Batería, Guitarra} | $P(2,2) = 2$ |
| 2 | Paul y John → {Bajo, Piano} | $P(2,2) = 2$ |
| **Total** | $2 \times 2$ | **4 formas** |

---

### 1.4 Ordenamientos en Fila con Restricciones

**Problema:** 8 amigos (4H, 4M) se sientan en fila.

**i. Sin restricciones**

$$P(8,8) = 8! = 40{,}320 \text{ formas}$$

**ii. A y B siempre juntos**

Tratar $\{A, B\}$ como un bloque → 7 entidades a permutar:

$$7! \times 2! = 5{,}040 \times 2 = 10{,}080 \text{ formas}$$

**iii. Hombres y mujeres en bloques separados**

> *Interpretación: todos los hombres juntos y todas las mujeres juntas, formando dos grandes bloques.*

$$\underbrace{4!}_{\text{orden H}} \times \underbrace{4!}_{\text{orden M}} \times \underbrace{2!}_{\text{H-M o M-H}} = 24 \times 24 \times 2 = 1{,}152 \text{ formas}$$

**iv. Las 4 parejas permanecen juntas**

$$\underbrace{4!}_{\text{ordenar bloques}} \times \underbrace{2^4}_{\text{orden interno}} = 24 \times 16 = 384 \text{ formas}$$

---

### 1.5 Delegaciones — Combinatoria

**Problema:** De 12 estudiantes (3 del tercio superior, 9 regulares), formar una delegación de 4 que incluya obligatoriamente 2 del tercio.

$$\binom{3}{2} \times \binom{9}{2} = 3 \times 36 = 108 \text{ delegaciones}$$

---

## Tema 2: Fundamentos de Probabilidad

### 2.1 Cálculo Básico

**Urna:** 15 gatos, 6 perros, 4 conejos → Total = 25.

$$P(\text{Gato}) = \frac{15}{25} = 0.60 = 60\%$$

**Dado + moneda:** $|\Omega| = 6 \times 2 = 12$ resultados.

$$P(6 \cap \text{Cara}) = \frac{1}{12} \approx 8.33\%$$

---

### 2.2 Propiedades Teóricas

Si $A \subset B$, entonces $B$ se escribe como unión disjunta:

$$B = A \cup (A^c \cap B)$$

| Enunciado | Valor |
|-----------|-------|
| $P(\emptyset) = 0$ | **Verdadero** |
| $P(\Omega) = 1$ | **Verdadero** |
| $P > 1$ es posible | **Falso** — siempre $0 \le P \le 1$ |

---

### 2.3 Teorema del Binomio

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}$$

Con $a = \alpha$ y $b = 1-\alpha$ (donde $a + b = 1$), esta estructura es la base de la **distribución binomial de probabilidad**.

---

## Tema 3: Probabilidad Condicional y Bayes

### 3.1 Definición

La probabilidad de $A$ dado que ya ocurrió $B$ (con $P(B)>0$):

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

> Si $P(A \mid B) = P(A)$, los eventos son **independientes**.

---

### 3.2 Ejercicio con Dados

Lanzar dos dados ($|\Omega| = 36$).

- **Evento $A$:** suma = 4 → $\{(1,3),(2,2),(3,1)\}$, $\#A = 3$.
- **Evento $B$:** suma $\ge 5$ → $\#B = 36 - 6 = 30$.
- **$A \cap B$:** suma = 4 **y** suma $\ge 5$ → imposible ($\emptyset$).

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{0}{30/36} = 0$$

---

### 3.3 Ley de Probabilidad Total

Si $B_1, B_2, \dots, B_n$ forman una partición de $\Omega$:

$$P(A) = \sum_{i=1}^{n} P(A \mid B_i)\,P(B_i)$$

Para dos eventos complementarios $C$ y $C^c$:

$$P(A) = P(A \mid C)\,P(C) + P(A \mid C^c)\,P(C^c)$$

---

## Tema 4: Ejercicios Práctica 9

### 4.1 Comités de Continentes

**Grupo:** 5 australianos, 2 asiáticos, 3 africanos, 4 americanos → $n = 14$.

**a) Comité de 4 con todos los continentes representados** (exactamente 1 de cada grupo):

$$\#\text{Fav} = \binom{5}{1}\binom{2}{1}\binom{3}{1}\binom{4}{1} = 5 \times 2 \times 3 \times 4 = 120$$

$$P(A) = \frac{120}{\binom{14}{4}} = \frac{120}{1001} \approx 11.99\%$$

**b) Comité de 5 personas:** requiere sumar los casos donde se repite 1 continente *(pendiente de resolución completa)*.

---

### 4.2 Muestreo de Bolillas

Urna: {Roja, Verde, Azul}, muestra $n = 2$.

**Con reposición** ($|\Omega| = 9$):

| Evento | Casos favorables | Probabilidad |
|--------|-----------------|-------------|
| Ninguna roja | {VV, VA, AV, AA} = 4 | $4/9$ |
| Al menos una roja | complemento | $1 - 4/9 = 5/9$ |

**Sin reposición** ($|\Omega| = 6$):

| Evento | Casos favorables | Probabilidad |
|--------|-----------------|-------------|
| Ninguna roja | {VA, AV} = 2 | $2/6 = 1/3$ |
| Al menos una roja | complemento | $1 - 1/3 = 2/3$ |

---

### 4.3 Nacimientos y Cesáreas — Probabilidad Total

**Datos conocidos:**

| Símbolo | Significado | Valor |
|---------|------------|-------|
| $P(V)$ | Bebé nace con vida | $0.98$ |
| $P(C)$ | Parto por cesárea | $0.15$ |
| $P(C^c)$ | Parto natural | $0.85$ |
| $P(V \mid C)$ | Vida dado cesárea | $0.96$ |

**Pregunta:** ¿Cuánto vale $P(V \mid C^c)$?

Aplicando la ley de probabilidad total:

$$P(V) = P(V \mid C)\,P(C) + P(V \mid C^c)\,P(C^c)$$

$$0.98 = (0.96)(0.15) + P(V \mid C^c)(0.85)$$

$$0.98 - 0.144 = P(V \mid C^c)(0.85)$$

$$\boxed{P(V \mid C^c) = \frac{0.836}{0.85} \approx 0.9835 \approx 98.35\%}$$

---

## Observaciones

**Correcciones a apuntes originales:**

En el ejercicio 1.4.iii, el cálculo $4! \times 4! \times 2!$ corresponde a agrupar a todos los hombres y todas las mujeres en bloques, no al enunciado literal "solo un hombre y una mujer juntos". Se mantuvo la interpretación matemática del cálculo original.

En el ejercicio 3.2, el apunte mostraba fracciones que no coincidían con los eventos descritos. Se corrigió la explicación lógica.

**Notación estandarizada:** $\binom{n}{k}$ para combinatorias y $P(A \mid B)$ para probabilidad condicional.
