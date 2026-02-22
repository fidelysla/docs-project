# Probabilidad Condicional, Independencia y Teorema de Bayes

## Introducción

Este capítulo profundiza en las relaciones entre eventos probabilísticos. Se define formalmente la probabilidad condicional y el concepto de independencia estocástica. A partir de estas definiciones, se derivan herramientas fundamentales como la Ley de Probabilidad Total y el Teorema de Bayes, ilustrándolos con ejemplos prácticos de ingeniería y economía. Finalmente, se introduce el concepto de variable aleatoria discreta mediante funciones de masa y distribución acumulada.

## Objetivos de aprendizaje

Al finalizar este capítulo, el estudiante será capaz de calcular probabilidades condicionales y determinar la independencia entre eventos, aplicar la Ley de Probabilidad Total para descomponer problemas complejos, utilizar el Teorema de Bayes para actualizar probabilidades basadas en nueva información, y construir y analizar la función de masa de probabilidad de una variable aleatoria discreta.

---

## Tema 1: Fundamentos Teóricos

### 1.1 Probabilidad Condicional

La probabilidad de que ocurra $A$ dado que ya se observó $B$ (con $P(B) > 0$):

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

De esta definición se desprende la **Regla de la Multiplicación**:

$$P(A \cap B) = P(A \mid B)\cdot P(B) = P(B \mid A)\cdot P(A)$$

---

### 1.2 Ley de Probabilidad Total

Si $B_1, B_2, \dots, B_n$ forman una partición de $\Omega$ (disjuntos, unión = $\Omega$):

$$P(A) = \sum_{i=1}^{n} P(A \mid B_i)\,P(B_i)$$

Para el caso de dos complementos $B$ y $B^c$:

$$P(A) = P(A \mid B)\,P(B) + P(A \mid B^c)\,P(B^c)$$

---

### 1.3 Independencia

Dos eventos $A$ y $B$ son independientes si la ocurrencia de uno no altera la probabilidad del otro:

$$P(A \mid B) = P(A) \quad \Longleftrightarrow \quad P(A \cap B) = P(A)\cdot P(B)$$

---

### 1.4 Teorema de Bayes

Permite "invertir" la probabilidad condicional: si conocemos $P(A \mid B)$ y buscamos $P(B \mid A)$:

$$P(B \mid A) = \frac{P(A \mid B)\cdot P(B)}{P(A)}$$

El denominador $P(A)$ se calcula habitualmente mediante la Ley de Probabilidad Total.

---

## Tema 2: Ejercicios Resueltos

### Ejemplo 1 — Lanzamiento de Dados

**Situación:** Dos dados equiprobables. $|\Omega| = 36$.

- **Evento $A$:** ambos dados iguales ($d_1 = d_2$) → $\#A = 6$, $\;P(A) = 6/36 = 1/6$.
- **Evento $B$:** suma = 8 → $\{(2,6),(3,5),(4,4),(5,3),(6,2)\}$, $\;P(B) = 5/36$.
- **$A \cap B$:** $\{(4,4)\}$ → $P(A \cap B) = 1/36$.

$$P(B \mid A) = \frac{1/36}{6/36} = \frac{1}{6}$$

Como $P(B \mid A) = 1/6 \neq 5/36 = P(B)$, los eventos **no son independientes**.

---

### Ejemplo 2 — Árbol de Probabilidad (Monedas)

**Situación:** Dos lanzamientos de moneda. $P(C_1) = P(C_2) = 0.5$.

Verificación de independencia: $P(C_2 \mid C_1) = 0.5 = P(C_2)$ ✓ → lanzamientos **independientes**.

$$P(C_1 \cap C_2) = 0.5 \times 0.5 = 0.25$$

---

### Ejemplo 3 — Extracción de Bolas

**Situación:** Urna con 6 blancas y 9 negras (total 15). Extraer 4 en orden $b, b, n, n$.

**Sin reemplazo** (eventos dependientes):

$$P(b,b,n,n) = \frac{6}{15}\cdot\frac{5}{14}\cdot\frac{9}{13}\cdot\frac{8}{12} \approx 0.033$$

**Con reemplazo** (eventos independientes):

$$P(b,b,n,n) = \left(\frac{6}{15}\right)^{\!2}\!\left(\frac{9}{15}\right)^{\!2} = (0.4)^2(0.6)^2 = 0.0576$$

---

## Tema 3: Aplicaciones del Teorema de Bayes

### Ejemplo 4 — Default de Deuda

**Datos:** $A$ = default, $B$ = deuda/PBI $> 1$. Dato clave: $P(A \cap B) = 2\,P(A \cap B^c)$.

Descomponiendo $P(A)$ por LPT:

$$P(A) = P(A \cap B) + P(A \cap B^c) = 2\,P(A \cap B^c) + P(A \cap B^c) = 3\,P(A \cap B^c)$$

Aplicando Bayes:

$$P(B \mid A) = \frac{P(A \cap B)}{P(A)} = \frac{2\,P(A \cap B^c)}{3\,P(A \cap B^c)} = \boxed{\frac{2}{3} \approx 66.6\%}$$

> Dado que un país entró en default, existe un 66.6 % de probabilidad de que su ratio de deuda sea alto.

---

### Ejemplo 5 — Control de Calidad

**Datos:**

| Símbolo | Significado | Valor |
|---------|------------|-------|
| $P(C)$ | Proceso bajo control | $0.92$ |
| $P(C^c)$ | Fuera de control | $0.08$ |
| $P(D \mid C)$ | Defecto si bajo control | $0.05$ |
| $P(D \mid C^c)$ | Defecto si fuera de control | $0.30$ |

**Objetivo:** Dado un producto defectuoso, ¿cuál es $P(C \mid D)$?

**Paso 1** — Probabilidad total de defecto:

$$P(D) = (0.05)(0.92) + (0.30)(0.08) = 0.046 + 0.024 = 0.07$$

**Paso 2** — Bayes:

$$P(C \mid D) = \frac{P(D \mid C)\,P(C)}{P(D)} = \frac{0.046}{0.07} \approx \boxed{0.657}$$

---

## Tema 4: Problemas Integradores

### Problema 1 — Proveedores de Circuitos

**Datos:**

| Proveedor | Participación | Tasa de defecto |
|-----------|:---:|:---:|
| $A$ | 50 % | 5 % |
| $B$ | 25 % | 10 % |
| $C$ | 25 % | 12 % |

**a) Probabilidad total de defecto $P(d)$:**

$$P(d) = (0.05)(0.50) + (0.10)(0.25) + (0.12)(0.25) = 0.025 + 0.025 + 0.030 = 0.08$$

**b) Dado que no es defectuoso, probabilidad de ser del proveedor B:**

Con $P(d^c) = 0.92$ y $P(d^c \mid B) = 0.90$:

$$P(B \mid d^c) = \frac{P(d^c \mid B)\,P(B)}{P(d^c)} = \frac{0.90 \times 0.25}{0.92} = \frac{0.225}{0.92} \approx \boxed{0.2446}$$

---

### Problema 2 — Acciones y PNB

**Datos:**

| Escenario PNB | Prob. escenario | $P(A \mid \text{escenario})$ |
|:---:|:---:|:---:|
| Sube ($+$) | 0.40 | 0.8 |
| Igual ($=$) | 0.30 | 0.2 |
| Baja ($-$) | 0.30 | 0.1 |

**Probabilidad de que suban las acciones:**

$$P(A) = (0.8)(0.4) + (0.2)(0.3) + (0.1)(0.3) = 0.32 + 0.06 + 0.03 = \boxed{0.41}$$

---

### Problema 3 — Exploración Petrolera

**Datos:**

| Tipo de suelo | $P(T_i)$ | $P(P \mid T_i)$ | $P(P^c \mid T_i)$ |
|:---:|:---:|:---:|:---:|
| $T_1$ | 0.35 | 0.4 | 0.6 |
| $T_2$ | 0.40 | 0.2 | 0.8 |
| $T_3$ | 0.25 | 0.3 | 0.7 |

**Objetivo:** Si no se encuentra petróleo, ¿cuál es $P(T_2 \mid P^c)$?

**Paso 1** — Probabilidad total de encontrar petróleo:

$$P(P) = (0.4)(0.35) + (0.2)(0.40) + (0.3)(0.25) = 0.14 + 0.08 + 0.075 = 0.295$$

**Paso 2** — Complemento: $P(P^c) = 1 - 0.295 = 0.705$.

**Paso 3** — Bayes:

$$P(T_2 \mid P^c) = \frac{P(P^c \mid T_2)\,P(T_2)}{P(P^c)} = \frac{0.8 \times 0.40}{0.705} = \frac{0.32}{0.705} \approx \boxed{0.4539}$$

---

## Tema 5: Variables Aleatorias Discretas

### Problema 4 — Primera Mujer en la Fila

**Contexto:** 5 hombres y 5 mujeres ($N = 10$) se ordenan aleatoriamente. La variable $X$ es la posición de la **primera mujer**.

**Función de Masa de Probabilidad (FMP)** — usando la regla de la cadena:

$$P(X = 1) = \frac{5}{10} = 0.500$$

$$P(X = 2) = \frac{5}{10}\cdot\frac{5}{9} \approx 0.278$$

$$P(X = 3) = \frac{5}{10}\cdot\frac{4}{9}\cdot\frac{5}{8} \approx 0.139$$

$$P(X = 4) = \frac{5}{10}\cdot\frac{4}{9}\cdot\frac{3}{8}\cdot\frac{5}{7} \approx 0.059$$

$$P(X = 5) = \frac{5}{10}\cdot\frac{4}{9}\cdot\frac{3}{8}\cdot\frac{2}{7}\cdot\frac{5}{6} \approx 0.020$$

$$P(X = 6) = \frac{5}{10}\cdot\frac{4}{9}\cdot\frac{3}{8}\cdot\frac{2}{7}\cdot\frac{1}{6}\cdot\frac{5}{5} \approx 0.004$$

**Función de Distribución Acumulada (FDA):** $F(x) = P(X \le x)$

| $x$ | $P(X = x)$ | $F(x)$ |
|:---:|:----------:|:------:|
| 1 | 0.500 | 0.500 |
| 2 | 0.278 | 0.778 |
| 3 | 0.139 | 0.917 |
| 4 | 0.059 | 0.976 |
| 5 | 0.020 | 0.996 |
| 6 | 0.004 | 1.000 |

---

## Observaciones

**Problema 1 (b):** El apunte original indicaba "No solucionado". Se completó aplicando Bayes para $P(B \mid d^c)$.

**Problema 4:** El cálculo original usaba factoriales completos ($10!$). Se simplificó a probabilidades multiplicativas (regla de la cadena), que son equivalentes y más intuitivas. Se corrigieron los redondeos de la FDA para que la suma sea exactamente 1.

**Regla práctica para Bayes:** siempre calcular primero el denominador mediante la Ley de Probabilidad Total antes de aplicar la división.
