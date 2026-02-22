# Ejercicios de Repaso: Distribución Binomial y Esperanza Matemática

## Introducción

Este documento consolida una serie de ejercicios prácticos resueltos durante sesiones de repaso. Se enfoca principalmente en la aplicación de la **Distribución Binomial** para calcular probabilidades puntuales y acumuladas en contextos de control de calidad y pruebas de azar. Además, se incluyen problemas dedicados al cálculo de la **Esperanza Matemática** y la **Varianza** en juegos de apuestas y lanzamiento de dados.

## Objetivos de aprendizaje

Al finalizar este capítulo, el estudiante será capaz de identificar cuándo un problema se ajusta al modelo de Distribución Binomial, calcular probabilidades acumuladas usando la función de masa y el complemento, determinar la esperanza matemática y la varianza de variables aleatorias discretas, y analizar la viabilidad de juegos de azar mediante el cálculo del valor esperado.

---

## Tema 1: Distribución Binomial

$X \sim Bi(n,\,p)$ describe el número de éxitos en $n$ ensayos independientes con probabilidad de éxito $p$:

$$P(X=x) = \binom{n}{x}p^x(1-p)^{n-x}$$

---

### Ejercicio 1 — Pantallas Defectuosas

$n = 20$, $p = 0.05$. **Objetivo:** $P(X \ge 5)$.

Por complemento:

$$P(X \ge 5) = 1 - P(X \le 4) = 1 - \sum_{x=0}^{4}\binom{20}{x}(0.05)^x(0.95)^{20-x} \approx \boxed{0.0026}$$

---

### Ejercicio 2 — Unidad Defectuosa

$n = 10$, $p = 0.05$. **Objetivo:** $P(X \ge 1)$.

$$P(X=0) = (0.95)^{10} \approx 0.5987$$

$$P(X \ge 1) = 1 - P(X=0) \approx \boxed{0.4013}$$

---

### Ejercicio 3 — Intervalo de Defectos

$n = 15$, $p = 0.05$. **Objetivo:** $P(3 \le X \le 5)$.

Usando la FDA (se resta $F(2)$ para excluir los casos 0, 1 y 2):

$$P(3 \le X \le 5) = P(3) + P(4) + P(5) = F(5) - F(2)$$

---

### Ejercicio 4 — Test de Verdadero/Falso

$n = 10$, $p = 0.5$. **Objetivo:** acertar el 70 % o más, $P(X \ge 7)$.

$$P(X \ge 7) = 1 - P(X \le 6) \approx \boxed{0.1719 \quad (17.19\%)}$$

---

### Ejercicio 8 — Moneda Justa (valor central)

$n = 200$, $p = 0.5$. **Objetivo:** $P(X = 100)$.

$$P(X=100) = \binom{200}{100}(0.5)^{200} \approx 0.056$$

> El valor es pequeño porque la probabilidad se dispersa entre muchos valores posibles.

---

## Tema 2: Esperanza Matemática y Juegos de Azar

### Ejercicio 6 — Esperanza de una Variable Discreta

| $x_i$ | $P(x_i)$ | $x_i \cdot P(x_i)$ |
|:---:|:---:|:---:|
| 1 | 0.3 | 0.3 |
| 3 | 0.1 | 0.3 |
| 5 | 0.4 | 2.0 |
| 7 | 0.2 | 1.4 |
| — | — | **4.0** |

$$E(X) = \sum x_i\cdot P(x_i) = \boxed{4.0}$$

---

### Consigna 1 — Juego de Monedas

**Reglas:**

| Resultado | Ganancia | Probabilidad |
|-----------|:---:|:---:|
| 0 caras | $-5$ | $1/4$ |
| 1 cara | $+1$ | $2/4$ |
| 2 caras | $+2$ | $1/4$ |

$$E(G) = (-5)\!\left(\tfrac{1}{4}\right) + (1)\!\left(\tfrac{2}{4}\right) + (2)\!\left(\tfrac{1}{4}\right) = -1.25 + 0.50 + 0.50 = \boxed{-0.25}$$

> En promedio el jugador **pierde 0.25 unidades por partida**. El juego es desfavorable.

---

### Consigna 2 — Suma de Dados y Apuestas

**Esperanza de la suma** ($X$ = suma de 2 dados):

Por la simetría de la distribución triangular (mín 2, máx 12, moda 7):

$$E(X) = 7$$

**Varianza de la suma:**

$$E(X^2) = \sum_{x=2}^{12} x^2\cdot P(X=x) \approx 54.83$$

$$V(X) = E(X^2) - [E(X)]^2 = 54.83 - 49 = \boxed{5.83}$$

**Juego "Mayores a 7":**

| Resultado | Ganancia | Probabilidad |
|-----------|:---:|:---:|
| $X > 7$ | $+10$ | $15/36$ |
| $X \le 7$ | $-10$ | $21/36$ |

$$E(\text{Juego}) = 10\!\left(\frac{15}{36}\right) - 10\!\left(\frac{21}{36}\right) = \frac{-60}{36} \approx \boxed{-1.67}$$

**Esperanza acumulada tras 12 jugadas:**

$$E(\text{Total}) = 12 \times (-1.67) \approx \boxed{-20 \text{ soles}}$$

> Se espera **perder 20 soles** jugando 12 partidas.

---

## Observaciones

**Ejercicio 5:** El apunte menciona "No es binomial" con un resultado del orden de $10^{-15}$. Esto sugiere una **Distribución Hipergeométrica** (muestreo sin reemplazo de población finita pequeña). Se advierte la discrepancia con el contexto anotado.

**Ejercicio 7:** El apunte indicaba $P(X \le 2) = 1 - P(X \le 1)$, lo cual es incorrecto. La fórmula correcta para "al menos dos" es $P(X \ge 2) = 1 - P(X \le 1)$. Se asume esa interpretación.

**Consigna 2 — Varianza:** El apunte original reportaba $V(X) \approx 2.42$. El valor correcto para la suma de dos dados es $5.833$. Se usa el valor correcto.
