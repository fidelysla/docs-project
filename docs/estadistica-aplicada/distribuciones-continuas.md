# Principales Distribuciones Continuas

## Concepto Previo: Coeficiente de Variación (CV)

> 💡 **Nota Explicativa:** Antes de entrar a las distribuciones, es importante definir el Coeficiente de Variación, ya que se solicita en los ejercicios.
> El **Coeficiente de Variación (CV)** es una medida estadística que nos indica qué tan dispersos están los datos en relación con su promedio (media). A diferencia de la varianza o la desviación estándar (que están en las mismas unidades que los datos), el CV es a-dimensional y suele expresarse en porcentaje. Es muy útil para comparar la variabilidad de dos distribuciones que tienen medias diferentes.
>
> Se calcula como el cociente entre la desviación estándar (la raíz cuadrada de la varianza) y el valor esperado (media):
> $$ CV = \frac{\sqrt{V(X)}}{E(X)} \times 100\% $$

---

## 1. Distribución Uniforme

Una variable aleatoria continua "$X$" tiene **distribución uniforme** si su función de densidad es constante en el intervalo real $[\alpha, \beta]$. Se caracteriza porque todos los subintervalos de la misma longitud dentro del rango de definición tienen la misma probabilidad de ocurrencia.

- **Notación:** $X \sim U(\alpha, \beta)$

### 1.1 Funciones de la Distribución

**Función de densidad o de probabilidad ($f(x)$):**
La función que describe la altura constante del rectángulo (cuya área total es 1).

$$
f(x) = \begin{cases}
      \frac{1}{\beta - \alpha} & ; \text{si } \alpha \leq x \leq \beta \\
      0 & ; \text{en otro caso}
   \end{cases}
$$

**Función de distribución acumulada ($F(x)$):**
Nos da la probabilidad de que la variable tome un valor menor o igual a un $x$ específico ($P(X \leq x)$).

$$
F(x) = P(X \leq x) = \begin{cases}
      0 & ; x < \alpha \\
      \frac{x - \alpha}{\beta - \alpha} & ; \alpha \leq x < \beta \\
      1 & ; x \geq \beta
   \end{cases}
$$

**Función Inversa:**
Sirve para encontrar el valor de "$x$" cuando ya conocemos una probabilidad acumulada "$R$" (donde $0 \leq R \leq 1$). Si $F(x) = R$:

$$ x = F^{-1}(R) = \alpha + R(\beta - \alpha) $$

### 1.2 Medidas de Resumen

- **Esperanza (Valor Promedio o Media):**
  $$ E(X) = \frac{\alpha + \beta}{2} $$
- **Varianza:**
  $$ V(X) = \frac{(\beta - \alpha)^2}{12} $$

### 1.3 Ejercicios Propuestos (Distribución Uniforme)

**Ejercicio 1:**
Suponga que el tiempo (en minutos) que se tarda un cajero en atender a un cliente es una variable aleatoria con distribución uniforme en el intervalo $[5, 15]$.

- a) Defina la variable aleatoria e indique cuál es la función de densidad y la función de distribución acumulada.
- b) Determine el valor del promedio y del coeficiente de variación, de la variable aleatoria correspondiente.
- c) Calcule la probabilidad que el tiempo de atención a un cliente:

i. sea de a lo más 9.5 minutos.

ii. sea por lo menos el valor del promedio.

iii. esté entre 7 y 10 minutos.

**Ejercicio 2:**
Drikke S.A. comercializa bebidas en botellas, cuyo contenido se especifica en ml. El contenido por botella tiene una distribución uniforme en el intervalo $[448, 452]$ ml.

- a) Halle la probabilidad que una botella tomada al azar contenga menos de 449.5 ml.
- b) ¿Cuál es el contenido mínimo de líquido en una botella, para tener una probabilidad 0.965 de que este evento ocurra?
- c) Como parte de su estrategia de marketing, Drikke S.A. selecciona una muestra al azar con reposición de 5 botellas de la producción. ¿Cuál es la probabilidad que más de dos de ellas tenga un contenido inferior a 449.5 ml?

---

## 2. Distribución Exponencial

La variable aleatoria continua "$X$" tiene **distribución exponencial** con parámetro $\beta > 0$. Esta distribución se utiliza comúnmente para modelar el tiempo transcurrido, la distancia recorrida o el espacio entre eventos que ocurren de forma aleatoria e independiente.

- **Notación:** $X \sim E(\beta)$

> 💡 **Nota Aclaratoria: ¿Qué es el parámetro $\beta$?**
> En la notación utilizada en esta presentación ($E(\beta)$), el parámetro **$\beta$ (beta)** representa el **tiempo, distancia o valor promedio** que transcurre hasta que ocurre un evento (la Esperanza matemática). Por ejemplo, si una batería dura en promedio 10 años, entonces $\beta = 10$.
> _Dato adicional:_ En muchos textos estadísticos, la distribución exponencial se define usando la tasa de ocurrencia (frecuencia), usualmente denotada con la letra **$\lambda$ (lambda)**, donde $\lambda = \frac{1}{\beta}$. La presentación basa sus fórmulas en el promedio ($\beta$).

### 2.1 Funciones de la Distribución

**Función de densidad ($f(x)$):**

$$
f(x) = \begin{cases}
      \frac{1}{\beta} e^{-\frac{1}{\beta}x} & ; x \geq 0 \\
      0 & ; \text{en otro caso}
   \end{cases}
$$

**Función de distribución acumulada ($F(x)$):**

$$
F(x) = P(X \leq x) = \begin{cases}
      0 & ; x < 0 \\
      1 - e^{-\frac{1}{\beta}x} & ; x \geq 0
   \end{cases}
$$

**Función Inversa:**
Si $F(x) = R$, donde $0 \leq R \leq 1$:

$$ x = F^{-1}(R) = -\beta \cdot \ln(1 - R) $$

**Funciones en Excel:**

- Función de distribución acumulada
```excel
=DISTR.EXP.N(x; lambda; acumulado)
```

### 2.2 Medidas de Resumen

- **Esperanza (Media):**
  $$ E(X) = \beta $$
- **Varianza:**
  $$ V(X) = \beta^2 $$

### 2.3 Relación con la Distribución de Poisson

Existe una relación intrínseca entre eventos discretos y el tiempo continuo entre ellos.

- Sea la variable aleatoria discreta **$X$**: _Número de ocurrencias en un intervalo de tiempo_. Entonces: $X \sim P(\lambda)$.
- Sea la variable aleatoria continua **$T$**: _Tiempo que transcurre hasta la primera ocurrencia (o entre dos ocurrencias consecutivas)_. Entonces: $T \sim E(\beta)$.

Se demuestra que la relación entre sus parámetros es:
$$ \beta = \frac{1}{\lambda} \quad \text{o} \quad \lambda = \frac{1}{\beta} $$

> 💡 **Nota Aclaratoria: El parámetro en Excel y SPSS**
> Como se menciona en las diapositivas, para calcular probabilidades de la distribución exponencial en programas como Excel (`=DISTR.EXP.N(...)`) o SPSS, **no se debe ingresar el valor de $\beta$ directamente**.
> **¿Por qué?** Porque el algoritmo de estos softwares está programado para recibir el parámetro de tasa ($\lambda$), no el parámetro de escala o promedio ($\beta$). Por lo tanto, si el problema nos da el promedio $\beta$, en la casilla de "lambda" o "parámetro" del software debemos ingresar obligatoriamente el inverso: **$\frac{1}{\beta}$**.
> _Ejemplo:_ Si el tiempo promedio de falla es $\beta = 10$ horas, en Excel el parámetro a ingresar es $1/10 = 0.1$.

### 2.4 Ejercicios Propuestos (Distribución Exponencial)

**Ejercicio 1:**
La distancia en Kilómetros que recorre un auto hasta que la carga de la batería se agote, se ajusta a una distribución exponencial que tiene un valor promedio de 10 mil Kilómetros. Si se quiere hacer un recorrido de más de 5 mil kilómetros.

- a) ¿Cuál es la probabilidad se pueda llegar al final del recorrido sin tener que reemplazar la batería?
- b) ¿Cuál es la distancia máxima que debe recorrer un auto, con probabilidad 0.90?
- c) ¿Cuál es la distancia mínima que debe recorrer un auto, con probabilidad 0.90?

**Ejercicio 2:**
Supongamos que el tiempo de vida útil de cierta marca de artefacto eléctrico es una variable aleatoria con distribución exponencial, cuyo promedio es 5 años.

- a) Muestre la función de densidad y la función de distribución de esta variable aleatoria.
- b) Determine el promedio y el coeficiente de variabilidad del tiempo de vida útil de los artefactos eléctricos de la marca indicada.
- c) Calcule la probabilidad de que un artefacto eléctrico de la marca indicada, tenga una vida útil de 7 años o menos.
- d) Un artefacto eléctrico de dicha marca tiene más de 4 años funcionando, ¿Cuál es la probabilidad de que funcione como máximo 7 años?

**Ejercicio 3:**
El número de automóviles vendidos por la cía. MAKINAS SA, sigue una distribución aproximada de Poisson con un promedio de 5 automóviles por día.

- a) Calcular la probabilidad que en un día tomado al azar se venda menos de 3 autos.
- b) Si el horario de atención a sus clientes por parte de MAKINAS SA es de 09:00 a 19:00 horas y se tiene conocimiento que acaba de venderse un automóvil, ¿Cuál es la probabilidad que transcurran más de 2 pero menos de 5 horas, para que se venda otro automóvil?

--- 

## 3. Distribución Normal

La distribución normal es la distribución de probabilidad continua más importante y utilizada en estadística. Esto se debe a que modela adecuadamente una gran cantidad de fenómenos naturales, sociales y psicológicos. Además, es la base del **Teorema del Límite Central**, el cual establece que la suma (o el promedio) de un gran número de variables aleatorias independientes tiende a seguir una distribución normal, independientemente de la distribución original de dichas variables.

### 3.1 Notación y Parámetros

Si una variable aleatoria continua $X$ sigue una distribución normal, se denota de la siguiente manera:

$$X \sim N(\mu, \sigma^2)$$

**Se lee:** "La variable aleatoria continua $X$ se distribuye normalmente con media $\mu$ y varianza $\sigma^2$".

> 📝 **Nota Aclaratoria:** 
> Es importante prestar atención a la notación del segundo parámetro. Aunque en los textos estadísticos (y en estas diapositivas) el estándar es usar la varianza ($\sigma^2$), algunos softwares o libros utilizan la desviación estándar ($\sigma$) como segundo parámetro: $N(\mu, \sigma)$. Siempre verifica qué convención se está utilizando. Para cálculos directos o estandarización, siempre usaremos la desviación estándar $\sigma$.

### 3.2 Función de Densidad de Probabilidad (PDF)

La función de densidad que describe la curva de la distribución normal (la famosa "campana de Gauss") está dada por la siguiente ecuación:

$$f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \quad , \quad -\infty \le x \le \infty$$

Donde:

*   $\mu$ = Media poblacional.
*   $\sigma$ = Desviación estándar poblacional (raíz cuadrada de la varianza $\sigma^2$).
*   $\pi \approx 3.14159...$
*   $e \approx 2.71828...$ (Base de los logaritmos naturales).

### 3.3 Características de la Curva Normal

*   **Forma de campana:** Presenta un solo pico (unimodal) exactamente en el centro de la distribución.
*   **Simetría:** Es perfectamente simétrica con respecto a su centro. La mitad del área bajo la curva se encuentra a la derecha del centro y la otra mitad a la izquierda.
*   **Medidas de tendencia central iguales:** El punto central de la curva representa simultáneamente la **Media**, la **Mediana** y la **Moda** ($\mu = Me = Mo$).
*   **Asintótica al eje X:** La curva decrece uniformemente en ambas direcciones a partir del valor central. Se acerca cada vez más al eje horizontal (eje X) conforme se aleja al infinito, pero nunca llega a tocarlo.
*   **Determinación paramétrica:** La forma y posición de la curva están completamente descritas si se conocen su media $\mu$ (que determina el centro) y su varianza $\sigma^2$ (que determina qué tan ancha o estrecha es la campana).
*   **Área total:** El área total bajo la curva de densidad es siempre igual a $1$ (o $100\%$).

### 3.4 Cálculo de Probabilidades

Dado que $X$ es una variable continua, la función $f(x)$ **no representa probabilidades** directas, sino densidades. La probabilidad de que la variable $X$ tome un valor entre dos puntos $a$ y $b$ equivale al área bajo la curva comprendida entre esos dos valores.

Matemáticamente, esto se calcula mediante la integral definida de la función de densidad, o utilizando la Función de Distribución Acumulada $F(x)$:

$$P(a < X < b) = \int_{a}^{b} f(x)dx = F(b) - F(a)$$

---

## 4. Distribución Normal Estándar

Calcular probabilidades integrando la función original de la distribución normal es matemáticamente complejo. Para simplificar esto, cualquier variable con distribución normal puede ser transformada en una variable normal "estándar".

Si una variable aleatoria tiene **media $\mu = 0$** y **desviación estándar $\sigma = 1$**, se dice que sigue una **Distribución Normal Estándar**. Se denota comúnmente con la letra $Z$.

$$Z \sim N(0, 1)$$

### 4.1 Estandarización (Variable Z)

Toda variable aleatoria $X \sim N(\mu, \sigma^2)$ puede ser transformada en una variable aleatoria normal estándar $Z$ utilizando la siguiente fórmula de transformación:

$$Z = \frac{X - \mu}{\sigma}$$

Esta fórmula nos indica a cuántas desviaciones estándar ($\sigma$) se encuentra un valor $X$ determinado con respecto a la media ($\mu$). 

> 💡 **Nota sobre el uso de tablas:** 
> Históricamente, las probabilidades para cualquier distribución normal se calculaban estandarizando primero los valores de $X$ a valores de $Z$, y luego buscando el área correspondiente en una "Tabla de Distribución Normal Estándar" pre-calculada. Hoy en día, software como Excel o lenguajes de programación calculan estas áreas directamente.

---

### 4.2 Propiedad Reproductiva (Suma de Variables Normales)

Una característica matemática muy útil de la distribución normal es que la suma o diferencia de variables normales independientes también resulta en una distribución normal.

#### Caso de dos variables:

Si $X_1$ y $X_2$ son variables aleatorias independientes tales que:

$X_1 \sim N(\mu_1, \sigma_1^2)$ y $X_2 \sim N(\mu_2, \sigma_2^2)$

Entonces, la suma ($Y = X_1 + X_2$) y la diferencia ($Y = X_1 - X_2$) cumplen que:

$$X_1 + X_2 \sim N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$$

$$X_1 - X_2 \sim N(\mu_1 - \mu_2, \sigma_1^2 + \sigma_2^2)$$

*(Nota: Observa que la varianza siempre se suma, incluso cuando se restan las variables).*

#### Caso general (Combinación lineal):

Si tenemos $n$ variables aleatorias independientes $X_i \sim N(\mu_i, \sigma_i^2)$ para $i = 1, 2, ..., n$, y definimos una variable $Y$ como la combinación lineal:

$$Y = a_1 X_1 + a_2 X_2 + ... + a_n X_n = \sum_{i=1}^{n} a_i X_i$$

Donde $a_i \in \mathbb{R}$ son constantes, entonces $Y$ se distribuye como:

$$Y = \sum_{i=1}^{n} a_i X_i \sim N\left( \sum_{i=1}^{n} a_i \mu_i \; , \; \sum_{i=1}^{n} a_i^2 \sigma_i^2 \right)$$

En todos estos casos, la nueva variable $Y$ puede ser estandarizada ($Z = \frac{Y - \mu_Y}{\sigma_Y}$) para calcular sus probabilidades.

---

#### 💻 Funciones en Excel para la Distribución Normal

En lugar de usar tablas manuales o resolver integrales, Microsoft Excel ofrece funciones directas:

*   **`DISTR.NORM.N(x; media; desv_estandar; acumulado)`**: 
    *   Calcula la probabilidad de $X$. 
    *   Si `acumulado = VERDADERO`, devuelve el área desde $-\infty$ hasta $x$ (es decir, $P(X \le x)$). Es la más usada.
    *   Si `acumulado = FALSO`, devuelve el valor de la función de densidad de probabilidad (la altura de la curva en $x$).
*   **`DISTR.NORM.ESTAND.N(z; acumulado)`**:
    *   Hace lo mismo que la anterior, pero asume por defecto que la media es $0$ y la desviación estándar es $1$. Solo necesita el valor de $Z$.
*   **`INV.NORM(probabilidad; media; desv_estandar)`**:
    *   Es la operación inversa. Le das un área/probabilidad acumulada (ej. $0.90$) y te devuelve el valor de $X$ que deja esa área a su izquierda.
*   **`INV.NORM.ESTAND(probabilidad)`**:
    *   Inversa para la distribución normal estándar. Devuelve el valor de $Z$.

---

#### 📋 Enunciados de Ejercicios (Para resolver)

A continuación, se listan los problemas planteados en el material para poner en práctica la teoría:

**Ejercicio 1 (Componentes eléctricos):**
La vida útil de un componente eléctrico tiene una distribución normal con una media de 2000 horas y una desviación estándar de 200 horas.

*   **a)** ¿Cuál será la probabilidad de que un componente elegido al azar dure entre 2200 y 2400 horas?
*   **b)** ¿Cuál es la vida útil del 90% de los componentes eléctricos? *(Entendido como el valor máximo que alcanza el 90% de los componentes).*

**Ejercicio 2 (Ventas de detergente):**
Se cree que las ventas semanales de un determinado detergente tienen una distribución normal con media de 15,000 soles y desviación estándar de 2,500 soles, por semana.

*   **a)** ¿Cuál es la probabilidad de vender más de 12,000 soles en una semana?
*   **b)** ¿Cuál es la probabilidad que la venta semanal de detergente difiera de la venta promedio en menos de 500 soles?
*   **c)** Si en la siguiente semana se asegura vender más de 12,500 soles, ¿cuál es la probabilidad de que en esa semana se venda menos de 14,000 soles? *(Probabilidad condicional).*

**Ejercicio 3 (Costos de mantenimiento):**
Los costos de mantenimiento semanal de cierta fábrica registrados durante un largo periodo, tienen una distribución Normal con una media igual a 1,680 soles; además se sabe que $0.30$ es la probabilidad de que el costo de una semana sea como máximo $1,627.56$ soles.

*   **a)** Hallar el valor de la desviación estándar de la distribución Normal.
*   **b)** Hallar la probabilidad de que el costo de una semana se diferencie del promedio en no más de 150 soles.
*   **c)** ¿Cuál será el costo semanal máximo que se observará en una semana con probabilidad $0.75$?

