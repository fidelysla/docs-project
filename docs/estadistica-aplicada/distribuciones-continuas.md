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

- $\mu$ = Media poblacional.
- $\sigma$ = Desviación estándar poblacional (raíz cuadrada de la varianza $\sigma^2$).
- $\pi \approx 3.14159...$
- $e \approx 2.71828...$ (Base de los logaritmos naturales).

### 3.3 Características de la Curva Normal

- **Forma de campana:** Presenta un solo pico (unimodal) exactamente en el centro de la distribución.
- **Simetría:** Es perfectamente simétrica con respecto a su centro. La mitad del área bajo la curva se encuentra a la derecha del centro y la otra mitad a la izquierda.
- **Medidas de tendencia central iguales:** El punto central de la curva representa simultáneamente la **Media**, la **Mediana** y la **Moda** ($\mu = Me = Mo$).
- **Asintótica al eje X:** La curva decrece uniformemente en ambas direcciones a partir del valor central. Se acerca cada vez más al eje horizontal (eje X) conforme se aleja al infinito, pero nunca llega a tocarlo.
- **Determinación paramétrica:** La forma y posición de la curva están completamente descritas si se conocen su media $\mu$ (que determina el centro) y su varianza $\sigma^2$ (que determina qué tan ancha o estrecha es la campana).
- **Área total:** El área total bajo la curva de densidad es siempre igual a $1$ (o $100\%$).

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

_(Nota: Observa que la varianza siempre se suma, incluso cuando se restan las variables)._

#### Caso general (Combinación lineal):

Si tenemos $n$ variables aleatorias independientes $X_i \sim N(\mu_i, \sigma_i^2)$ para $i = 1, 2, ..., n$, y definimos una variable $Y$ como la combinación lineal:

$$Y = a_1 X_1 + a_2 X_2 + ... + a_n X_n = \sum_{i=1}^{n} a_i X_i$$

Donde $a_i \in \mathbb{R}$ son constantes, entonces $Y$ se distribuye como:

$$Y = \sum_{i=1}^{n} a_i X_i \sim N\left( \sum_{i=1}^{n} a_i \mu_i \; , \; \sum_{i=1}^{n} a_i^2 \sigma_i^2 \right)$$

En todos estos casos, la nueva variable $Y$ puede ser estandarizada ($Z = \frac{Y - \mu_Y}{\sigma_Y}$) para calcular sus probabilidades.

---

#### Funciones en Excel para la Distribución Normal

En lugar de usar tablas manuales o resolver integrales, Microsoft Excel ofrece funciones directas:

- **Funcion de Distribucion Acumuldado Distribucion Normal**

```
DISTR.NORM.N(x; media; desv_estandar; acumulado)
```

- **Funcion de Distribucion Acumuldado Distribucion Normal Estandar**

```
DISTR.NORM.ESTAND.N(z; acumulado)
```

media es $0$ y la desviación estándar es $1$. Solo necesita el valor de $Z$.

- **Es la operación inversa. Le das un área/probabilidad acumulada y te devuelve el valor de $X$ que deja esa área a su izquierda.**

```
INV.NORM(probabilidad; media; desv_estandar)
```

- **Inversa para la distribución normal estándar. Devuelve el valor de $Z$.**

```
INV.NORM.ESTAND(probabilidad)
```

---

#### Ejercicios

A continuación, se listan los problemas planteados en el material para poner en práctica la teoría:

**Ejercicio 1:**
La vida útil de un componente eléctrico tiene una distribución normal con una media de 2000 horas y una desviación estándar de 200 horas.

- **a)** ¿Cuál será la probabilidad de que un componente elegido al azar dure entre 2200 y 2400 horas?
- **b)** ¿Cuál es la vida útil del 90% de los componentes eléctricos? _(Entendido como el valor máximo que alcanza el 90% de los componentes)._

**Ejercicio 2:**
Se cree que las ventas semanales de un determinado detergente tienen una distribución normal con media de 15,000 soles y desviación estándar de 2,500 soles, por semana.

- **a)** ¿Cuál es la probabilidad de vender más de 12,000 soles en una semana?
- **b)** ¿Cuál es la probabilidad que la venta semanal de detergente difiera de la venta promedio en menos de 500 soles?
- **c)** Si en la siguiente semana se asegura vender más de 12,500 soles, ¿cuál es la probabilidad de que en esa semana se venda menos de 14,000 soles? _(Probabilidad condicional)._

**Ejercicio 3:**
Los costos de mantenimiento semanal de cierta fábrica registrados durante un largo periodo, tienen una distribución Normal con una media igual a 1,680 soles; además se sabe que $0.30$ es la probabilidad de que el costo de una semana sea como máximo $1,627.56$ soles.

- **a)** Hallar el valor de la desviación estándar de la distribución Normal.
- **b)** Hallar la probabilidad de que el costo de una semana se diferencie del promedio en no más de 150 soles.
- **c)** ¿Cuál será el costo semanal máximo que se observará en una semana con probabilidad $0.75$?

---

## 5. Distribución Ji-Cuadrado ($\chi^2$)

La distribución Ji-Cuadrado (también escrita como Chi-Cuadrada) es una distribución de probabilidad continua fundamental en la estadística inferencial. Es ampliamente utilizada en pruebas de hipótesis, como las pruebas de bondad de ajuste, pruebas de independencia de criterios y en la estimación de varianzas poblacionales.

A diferencia de la distribución normal, la distribución Ji-cuadrado **solo toma valores positivos o cero**, ya que, por definición, proviene de la suma de valores elevados al cuadrado.

### 5.1 Notación y Parámetros

Si una variable aleatoria continua $X$ sigue una distribución ji-cuadrado, se denota de la siguiente manera:

$$X \sim \chi^2_{(n)}$$

**Se lee:** "La variable aleatoria $X$ tiene distribución ji-cuadrado con $n$ grados de libertad".

El único parámetro que define a esta distribución son sus **grados de libertad ($n$)**, que generalmente son números enteros positivos.

### 5.2 Función de Densidad de Probabilidad (PDF)

La función de densidad de la distribución ji-cuadrado está dada por la siguiente expresión:

$$f(x) = \frac{x^{\frac{n}{2}-1} e^{-\frac{x}{2}}}{2^{\frac{n}{2}} \Gamma\left(\frac{n}{2}\right)} \quad , \quad \forall \quad 0 \le x \le \infty$$

Donde:

- $n$ = Grados de libertad.
- $\Gamma(...)$ = Función Gamma.

> 📝 **Nota sobre la Función Gamma:**
> En la diapositiva se muestra la simplificación $\Gamma(w) = (w-1)!$. Es importante aclarar que esta equivalencia exacta usando factoriales aplica **solo cuando $w$ es un número entero positivo**. Como en la fórmula tenemos $\frac{n}{2}$, si los grados de libertad ($n$) son pares, la fórmula del factorial aplica directamente. Si $n$ es impar, el cálculo de la función Gamma involucra fracciones y la constante $\sqrt{\pi}$. En la práctica, los programas informáticos calculan este valor automáticamente.

### 5.3 Media y Varianza

Una propiedad matemática muy interesante y sencilla de esta distribución es que sus medidas de tendencia central y dispersión dependen únicamente de sus grados de libertad ($n$):

- **Media (Esperanza matemática):** $E(X) = n$
- **Varianza:** $V(X) = 2n$

### 5.4 Características y Propiedades Gráficas

Observando las gráficas proporcionadas en el material (con $n=5, 10, 25, 30$), podemos deducir características importantes:

1.  **Asimetría positiva:** La curva está sesgada hacia la derecha. La "cola" larga se extiende hacia los valores positivos más altos.
2.  **Valores no negativos:** La gráfica comienza en el origen (0) del eje X. No existen valores negativos de $\chi^2$.
3.  **Efecto de los grados de libertad:** A medida que los grados de libertad ($n$) aumentan, la curva se desplaza hacia la derecha (su media aumenta) y se aplana (su varianza aumenta). Además, **conforme $n$ se hace muy grande, la forma de la curva se vuelve más simétrica**, acercándose a la forma de una distribución normal.

### 5.5 Propiedad Principal: Relación con la Normal Estándar

El origen conceptual de la distribución ji-cuadrado está íntimamente ligado a la distribución normal estándar ($Z$).

Si tenemos un conjunto de variables aleatorias independientes $X_1, X_2, ..., X_n$, donde cada una de ellas tiene una distribución normal estándar ($Z_i \sim N(0,1)$), entonces:

La suma de los cuadrados de estas variables da como resultado una nueva variable $Y$:

$$Y = X_1^2 + X_2^2 + ... + X_n^2 = \sum_{i=1}^{n} X_i^2$$

Lo cual implica que la variable aleatoria $Y$ sigue una distribución ji-cuadrado con $n$ grados de libertad:

$$Y \sim \chi^2_{(n)}$$

---

### 5.6 Funciones en Excel para la Distribución Ji-Cuadrado

Excel cuenta con funciones específicas para trabajar con esta distribución sin necesidad de integrar la función de densidad:

- Devuelve la probabilidad de cola izquierda. Si `acumulado = VERDADERO`, calcula $P(X \le x)$.

```
DISTR.CHICUAD(x; grados_de_libertad; acumulado)
```

- Calcula específicamente la probabilidad de la **Cola Derecha**, es decir, $P(X > x)$. Es muy útil porque muchas pruebas de hipótesis con $\chi^2$ evalúan áreas en la cola derecha.

```
DISTR.CHICUAD.CD(x; grados_de_libertad)
```

- Es la inversa de la cola izquierda. Dado un área acumulada (ej. $0.95$), devuelve el valor de $x$.

```
INV.CHICUAD(probabilidad; grados_de_libertad)
```

- Inversa para la cola derecha. Muy usada para encontrar valores críticos en pruebas de hipótesis dado un nivel de significancia $\alpha$.

```
INV.CHICUAD.CD(probabilidad; grados_de_libertad)
```

---

### 5.7 Enunciados de Ejercicios

Basado en el caso de la presentación, aquí tienes los enunciados para practicar:

**Ejercicio 4 (Inversión en Publicidad):**
Actualmente los anunciantes se muestran más cautelosos frente a la situación económica mundial, debido a la caída del consumo y el recorte en los presupuestos. Por esta razón, la capacidad de poder posicionar un producto o servicio en el mercado depende muchas veces de la habilidad para desarrollar mezclas de marketing. Así, resulta imperativo el correcto análisis y la actualización de variables que son básicas para el desarrollo de dicha actividad. Una de las variables es la inversión en publicidad.

Se conoce que la variable $X$, que representa la **Inversión en publicidad (en miles de soles)**, es una variable aleatoria con **distribución ji-cuadrado con 8 grados de libertad**.

**I.** Se requiere determinar la probabilidad de que se invierta en publicidad:

- **a)** Menos de diecinueve mil soles.
- **b)** Por lo menos dieciocho mil soles.
- **c)** Entre catorce mil soles y veinticuatro mil soles.

**II.** Determinar el valor mínimo de la inversión con una probabilidad de $0.01$ (es decir, el valor $c$ tal que exista solo un 1% de probabilidad de que la inversión lo supere).

---

## 6. Distribución F de Fisher (F de Snedecor)

La distribución F de Fisher es una distribución de probabilidad continua que asume valores únicamente positivos o cero. Es fundamental en la estadística inferencial, principalmente utilizada para el **Análisis de Varianza (ANOVA)** y para pruebas de hipótesis que comparan las varianzas de dos poblaciones diferentes.

### 6.1 Notación y Parámetros

Si una variable aleatoria continua $X$ sigue una distribución F, se denota de la siguiente manera:

$$X \sim F(m, n)$$

**Se lee:** "La variable aleatoria continua $X$ tiene distribución $F$ con $m$ y $n$ grados de libertad".

A diferencia de la Ji-cuadrado, esta distribución depende de **dos parámetros** (ambos enteros positivos):

- **$m$**: Grados de libertad del **numerador**.
- **$n$**: Grados de libertad del **denominador**.

> ⚠️ **Nota Importante:** El orden de los parámetros es estrictamente importante. Una distribución $F(m, n)$ **no es igual** a una distribución $F(n, m)$.

### 6.2 Función de Densidad de Probabilidad (PDF)

La función de densidad que describe la curva de la distribución F es matemáticamente compleja y está definida por la función Gamma ($\Gamma$):

$$f(x) = \frac{\Gamma\left(\frac{m+n}{2}\right) \left(\frac{m}{n}\right)^{\frac{m}{2}} x^{\frac{m}{2}-1}}{\Gamma\left(\frac{m}{2}\right) \Gamma\left(\frac{n}{2}\right) \left(1 + \frac{m}{n}x\right)^{\frac{m+n}{2}}} \quad , \quad \forall \quad 0 \le x \le \infty$$

Donde $\Gamma(k)$ representa la función gamma evaluada en $k$.

### 6.3 Media y Varianza

Una particularidad interesante de la distribución F es que su Media (Esperanza matemática) depende únicamente de los grados de libertad del denominador ($n$), mientras que su varianza depende de ambos:

- **Media:**
  $$E(X) = \frac{n}{n-2} \quad , \quad \forall \ n > 2$$

- **Varianza:**
  > 📝 **Nota Aclaratoria sobre la fórmula:** En la imagen proporcionada de la presentación, la fórmula de la varianza tiene un error tipográfico común. Para que tus apuntes sean matemáticamente exactos, la fórmula universal correcta incluye términos al cuadrado que faltan en la diapositiva. La fórmula correcta es:
  > $$V(X) = \frac{2n^2(m+n-2)}{m(n-2)^2(n-4)} \quad , \quad \forall \ n > 4$$

### 6.4 Características Gráficas

Observando las gráficas generadas para distintas combinaciones de grados de libertad:

1.  **Valores no negativos:** Al igual que la Ji-cuadrado, la curva comienza en 0 y se extiende hacia el infinito positivo.
2.  **Asimetría positiva:** La distribución está sesgada hacia la derecha.
3.  **Forma dependiente de $m$ y $n$:** La forma exacta de la curva cambia según los valores de los grados de libertad. Cuando los grados de libertad (especialmente el denominador $n$) aumentan, la curva tiende a concentrarse más alrededor de 1.

### 6.5 Propiedad Principal: Relación con la Ji-Cuadrado

La distribución F se construye conceptualmente a partir de la relación (el cociente) entre dos variables independientes que siguen una distribución Ji-cuadrado.

Si tenemos dos variables aleatorias independientes:

- $X \sim \chi^2_{(m)}$
- $Y \sim \chi^2_{(n)}$

Entonces, la nueva variable $F$, definida como el cociente de cada variable dividida por sus respectivos grados de libertad, sigue una distribución F de Fisher:

$$F = \frac{X / m}{Y / n} = \frac{nX}{mY} \sim F(m, n)$$

---

### 6.6 Funciones en Excel para la Distribución F - Fisher

Excel proporciona varias funciones para trabajar con esta distribución, diferenciando claramente entre evaluar el área acumulada normal (cola izquierda) y el área superior (cola derecha), ya que las pruebas ANOVA suelen enfocarse en la cola derecha.

**Función DISTR.F.N**

- Devuelve la probabilidad acumulada de cola izquierda. Si `acumulado = VERDADERO`, calcula $P(X \le x)$.

```excel
DISTR.F.N(x; grados_de_libertad1; grados_de_libertad2; acumulado)
```

**Función DISTR.F.CD**

- Calcula específicamente la probabilidad de la **Cola Derecha**, es decir, $P(X > x)$. Es la función principal utilizada cuando se realizan pruebas de hipótesis (como ANOVA) para calcular el valor _p_ (p-value).

```excel
DISTR.F.CD(x; grados_de_libertad1; grados_de_libertad2)
```

**Función INV.F**

- Es la inversa de la cola izquierda. Dado un área o probabilidad acumulada, devuelve el valor crítico de $x$.

```excel
INV.F(probabilidad; grados_de_libertad1; grados_de_libertad2)
```

**Función INV.F.CD**

- Inversa para la cola derecha. Utilizada para encontrar el "valor crítico F" de una tabla al establecer un nivel de significancia $\alpha$ para una prueba de hipótesis.

```excel
INV.F.CD(probabilidad; grados_de_libertad1; grados_de_libertad2)
```

_(Nota: En todas estas funciones, `grados_de_libertad1` corresponde a $m$ (numerador) y `grados_de_libertad2` corresponde a $n$ (denominador)._

---

### 6.7 Enunciados de Ejercicios

**Ejercicio 5 (Beneficios Económicos):**
Se tiene conocimiento que la variable X: Beneficios económicos (miles de soles) que reciben los empleados de una empresa manufacturera, tiene distribución F con 7 y 12 grados de libertad. Si un empleado es seleccionado al azar, determinar:

- **1.** La probabilidad de que reciba un beneficio inferior a 2 mil soles.
- **2.** La probabilidad de que reciba por lo menos un beneficio de mil soles.
- **3.** El valor del beneficio máximo que recibiría, con una probabilidad de 0.9 (Es decir, hallar $c$ tal que $P(X \le c) = 0.9$).

---

## 7. Distribución t de Student

La distribución t de Student es una distribución de probabilidad continua que surge del problema de estimar la media de una población normalmente distribuida cuando el tamaño de la muestra es pequeño y la desviación estándar poblacional es desconocida. Es la base de la famosa "prueba t" (t-test) utilizada para comparar medias.

### 7.1 Notación y Parámetros

Si una variable aleatoria continua $Y$ (o $X$) sigue una distribución t de Student, se denota de la siguiente manera:

$$Y \sim t_{(n)}$$

**Se lee:** "La variable aleatoria continua $Y$ tiene distribución $t$ de Student con $n$ grados de libertad".

Al igual que la distribución Ji-cuadrado, esta distribución está definida por un único parámetro: sus **grados de libertad ($n$)**.

### 7.2 Función de Densidad de Probabilidad (PDF)

La función de densidad matemática de la variable aleatoria $X \sim t_{(n)}$ está dada por:

$$f(x) = \frac{1}{\sqrt{n\pi}} \frac{\Gamma\left(\frac{n+1}{2}\right)}{\Gamma\left(\frac{n}{2}\right)} \left(1 + \frac{x^2}{n}\right)^{-\frac{n+1}{2}} \quad , \quad \forall -\infty \le x \le \infty$$

Donde $\Gamma$ representa la función Gamma evaluada en sus respectivos argumentos.

### 7.3 Media y Varianza

- **Media:** Al ser perfectamente simétrica centrada en el origen, su esperanza matemática es cero, siempre que tenga más de 1 grado de libertad.
  $$E(X) = 0 \quad , \quad \forall \ n > 1$$

- **Varianza:** La dispersión depende de los grados de libertad.
  $$V(X) = \frac{n}{n-2} \quad , \quad \forall \ n > 2$$

### 7.4 Características Gráficas

- **Simetría y forma de campana:** Es muy similar a la distribución Normal Estándar ($Z$). Es simétrica alrededor de cero, que es su media, mediana y moda.
- **Colas más "pesadas":** En comparación con la curva Normal Estándar, la curva t de Student es un poco más baja en el centro y tiene más área en las colas (extremos). Esto refleja la mayor incertidumbre que existe al trabajar con muestras pequeñas.
- > 📝 **Nota Teórica (Convergencia):** A medida que los grados de libertad ($n$) aumentan (generalmente se considera $n \ge 30$), la varianza $\frac{n}{n-2}$ se acerca a $1$. Gráficamente, **la curva t de Student se vuelve prácticamente indistinguible de la curva Normal Estándar ($Z$)**.

### 7.5 Propiedad Principal: Construcción Matemática

La distribución t de Student nace de la combinación de una variable Normal Estándar y una Ji-cuadrado.

Si $Z$ es una variable aleatoria con distribución Normal Estándar ($Z \sim N(0,1)$), y $W$ es una variable aleatoria Ji-cuadrado con $n$ grados de libertad ($W \sim \chi^2_{(n)}$), y ambas son independientes, entonces la variable construida de la siguiente manera sigue una distribución t de Student:

$$Y = \frac{Z}{\sqrt{\frac{W}{n}}} \sim t_{(n)}$$

---

### 7.6 Funciones en Excel para la Distribución t de Student

Excel ofrece diversas funciones para esta distribución, incluyendo una específica para cálculos de dos colas, lo cual es extremadamente común en pruebas de hipótesis.

**Función DISTR.T.N**

- Devuelve la probabilidad acumulada de la cola izquierda. Si `acumulado = VERDADERO`, calcula $P(X \le x)$.

```excel
DISTR.T.N(x; grados_de_libertad; acumulado)
```

**Función DISTR.T.CD**

- Calcula específicamente la probabilidad de la **Cola Derecha**, es decir, $P(X > x)$.

```excel
DISTR.T.CD(x; grados_de_libertad)
```

**Función DISTR.T.2C**

- Calcula la probabilidad de **Dos Colas**. Devuelve la probabilidad de que el valor absoluto de la variable sea mayor que $x$ (es decir, $P(X > x) + P(X < -x)$). Útil para pruebas bilaterales. El valor de $x$ debe ser positivo.

```excel
DISTR.T.2C(x; grados_de_libertad)
```

**Función INV.T**

- Es la inversa de la cola izquierda. Dado un área acumulada inferior (ej. $0.95$), devuelve el valor de $x$ (el cuantil $t$).

```excel
INV.T(probabilidad; grados_de_libertad)
```

**Función INV.T.2C**

- Inversa de dos colas. Dada una probabilidad $\alpha$ (nivel de significancia, ej. $0.05$), devuelve el valor crítico $t$ positivo que deja esa área dividida en las dos colas extremas de la distribución.

```excel
INV.T.2C(probabilidad; grados_de_libertad)
```

---

### 7.7 Enunciados de Ejercicios

**Ejercicio 6 (PBI Minero):**
El PBI minero es una variable aleatoria con distribución $t$ de Student con 4 grados de libertad.

- **i.** Determinar la probabilidad de que el PBI alcance un máximo del 1.2% (Es decir, calcular $P(X \le 1.2)$).
- **ii.** Determinar el valor máximo de PBI con una probabilidad de 0.95 (Es decir, encontrar el cuantil $c$ tal que $P(X \le c) = 0.95$).
