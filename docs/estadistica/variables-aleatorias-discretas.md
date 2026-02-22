# Variables Aleatorias Discretas y Distribuciones de Probabilidad

## Introducción

Este capítulo formaliza el concepto de variable aleatoria discreta, introduciendo herramientas esenciales como la Función de Masa de Probabilidad (FMP) y la Función de Distribución Acumulada (FDA). Se exploran las medidas de resumen (esperanza y varianza) y se detallan dos de los modelos probabilísticos más comunes: Bernoulli y Binomial, fundamentales para modelar experimentos con resultados binarios.

## Objetivos de aprendizaje

Al finalizar este capítulo, el estudiante será capaz de construir e interpretar funciones de masa de probabilidad y distribución acumulada, calcular y entender el significado de la esperanza matemática y la varianza de una variable aleatoria, identificar experimentos que se ajustan a los modelos de Bernoulli y Binomial, y resolver problemas prácticos aplicando la distribución Binomial.

---

## Tema 1: Conceptos Fundamentales

### 1.1 Función de Masa de Probabilidad (FMP)

Asigna una probabilidad a cada valor posible $x$ de la variable aleatoria discreta $X$:

$$0 \le P(X=x) \le 1 \qquad \text{y} \qquad \sum_{x} P(X=x) = 1$$

---

### 1.2 Función de Distribución Acumulada (FDA)

Indica la probabilidad de que $X$ tome un valor menor o igual a $x$:

$$F(x) = P(X \le x) = \sum_{k \le x} P(X=k)$$

**Conversión entre FMP y FDA:**

| Dirección | Operación |
|-----------|-----------|
| FMP → FDA | Sumar acumulativamente las probabilidades |
| FDA → FMP | $P(X = x_i) = F(x_i) - F(x_{i-1})$ |

---

### 1.3 Esperanza Matemática

Valor promedio teórico (centro de gravedad) de la variable aleatoria:

$$E(X) = \mu = \sum_{x} x\cdot P(X=x)$$

---

### 1.4 Varianza

Mide la dispersión de los valores respecto a la esperanza. Dos formas equivalentes:

$$V(X) = E\!\left[(X-\mu)^2\right] = \sum_{x}(x-\mu)^2\cdot P(X=x)$$

$$V(X) = E(X^2) - \left[E(X)\right]^2 \qquad \text{donde } E(X^2) = \sum_{x} x^2\cdot P(X=x)$$

---

## Tema 2: Modelos Probabilísticos Discretos

### 2.1 Distribución de Bernoulli — $X \sim Be(p)$

Modela **un solo ensayo** con dos resultados: Éxito (1) o Fracaso (0).

$$P(X=x) = p^x(1-p)^{1-x}, \quad x \in \{0,1\}$$

$$E(X) = p \qquad V(X) = p(1-p)$$

---

### 2.2 Distribución Binomial — $X \sim Bi(n,\,p)$

Generaliza Bernoulli para $n$ ensayos independientes e idénticos. Cuenta el número total de éxitos $x \in \{0, 1, \dots, n\}$.

$$P(X=x) = \binom{n}{x}p^x(1-p)^{n-x}$$

$$E(X) = n\cdot p \qquad V(X) = n\cdot p\cdot(1-p)$$

**Cálculo en R:**

```r
dbinom(x, size = n, prob = p)   # P(X = x)
pbinom(q, size = n, prob = p)   # P(X ≤ q)
```

---

## Tema 3: Ejercicios Resueltos

### Ejercicio 1 — Lanzamiento de 5 Monedas

$X \sim Bi(n=5,\; p=0.5)$

**i. Exactamente 2 caras:**

$$P(X=2) = \binom{5}{2}(0.5)^2(0.5)^3 = 10\cdot(0.5)^5 = 0.3125$$

**ii. A lo sumo 2 caras:**

$$P(X \le 2) = P(0) + P(1) + P(2) = 0.03125 + 0.15625 + 0.3125 = 0.500$$

**iii. Al menos 2 caras** (por complemento):

$$P(X \ge 2) = 1 - P(X \le 1) = 1 - (0.03125 + 0.15625) = 1 - 0.1875 = 0.8125$$

---

### Ejercicio 2 — Reconstrucción de FMP desde FDA

**FDA dada:**

$$F(x) = \begin{cases} 0 & x < 1 \\ 0.30 & 1 \le x < 3 \\ 0.40 & 3 \le x < 4 \\ 0.45 & 4 \le x < 6 \\ 0.60 & 6 \le x < 12 \\ 1.00 & x \ge 12 \end{cases}$$

**a) FMP** — los saltos ocurren en $x \in \{1, 3, 4, 6, 12\}$:

| $x$ | $P(X=x) = F(x) - F(x^-)$ |
|:---:|:---:|
| 1 | $0.30 - 0.00 = 0.30$ |
| 3 | $0.40 - 0.30 = 0.10$ |
| 4 | $0.45 - 0.40 = 0.05$ |
| 6 | $0.60 - 0.45 = 0.15$ |
| 12 | $1.00 - 0.60 = 0.40$ |
| **Total** | **1.00** ✓ |

**b) Probabilidad en el intervalo $[3,\,6]$:**

$$P(3 \le X \le 6) = P(3) + P(4) + P(6) = 0.10 + 0.05 + 0.15 = 0.30$$

---

### Ejercicio 3 — Juego de Dados

**Reglas:** costo de entrada = 90 unidades.

| Resultado | Condición | Ganancia neta |
|-----------|-----------|:---:|
| Pierde | $\min(d_1,d_2) \in \{1,2\}$ | $-90$ |
| Empata | $\min(d_1,d_2) \in \{3,4\}$ | $0$ |
| Gana | $\min(d_1,d_2) \in \{5,6\}$ | $+210$ |

**Distribución del mínimo** ($|\Omega| = 36$):

| $Y = \min$ | Casos | Probabilidad |
|:---:|:---:|:---:|
| 1 | 11 | $11/36$ |
| 2 | 9 | $9/36$ |
| 3 | 7 | $7/36$ |
| 4 | 5 | $5/36$ |
| 5 | 3 | $3/36$ |
| 6 | 1 | $1/36$ |

Agrupando por resultado:

| Resultado | Prob. acumulada |
|-----------|:---:|
| Pierde ($Y \in \{1,2\}$) | $20/36$ |
| Empata ($Y \in \{3,4\}$) | $12/36$ |
| Gana ($Y \in \{5,6\}$) | $4/36$ |

**Ganancia esperada:**

$$
\begin{aligned}
E(\text{Ganancia}) &= -90\!\left(\frac{20}{36}\right) + 0\!\left(\frac{12}{36}\right) + 210\!\left(\frac{4}{36}\right) \\
&= \frac{-1800 + 840}{36} = \frac{-960}{36} \approx \boxed{-26.67}
\end{aligned}
$$

> El juego tiene **valor esperado negativo**: en promedio se pierden 26.67 unidades por partida.

---

## Observaciones

**Ejercicio 2 (FDA):** La notación original tenía inconsistencias tipográficas en los intervalos. Se reconstruyó la función escalonada estándar (continua por la derecha) basándose en los valores de la tabla.

**Ejercicio 3 (Dados):** El enunciado original asignaba premios distintos para $\min = 5$ y $\min = 6$ sin explicarlo, produciendo un resultado de $-21.67$. Se unificó el premio a 300 unidades para los dos casos, obteniendo $-26.67$. Se recomienda verificar las reglas exactas del juego para resolver la discrepancia.