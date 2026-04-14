# Distribuciones Muestrales

## 1. Muestra Aleatoria

Sea $X$ una variable aleatoria (población) que tiene una función de probabilidad $f(x)$ con media $\mu$ y varianza $\sigma^2$.

Se dice que $X_1, X_2, \dots, X_n$ es una **muestra aleatoria de tamaño $n$**, tomada de la población $X$, si se cumple que:

1) $X_1, X_2, \dots, X_n$ es una sucesión de variables aleatorias independientes.

2) Cada variable aleatoria $X_i$ tiene:

- A. La misma función de probabilidad de $X$; es decir: $f(x)$

- B. La misma esperanza matemática de $X$; es decir: $E(X_i) = \mu \quad ; \quad \forall X_i$

- C. La misma varianza de $X$; es decir: $V(X_i) = \sigma^2 \quad \forall X_i$



> **Nota aclaratoria:** En estadística, a esto se le conoce como variables _independientes e idénticamente distribuidas (i.i.d.)_. Esto garantiza que cada elemento seleccionado en la muestra es una representación fiel de la población y que la elección de un elemento no afecta la probabilidad de elegir cualquier otro.

---

## 2. Definición de Distribución Muestral

Una **estadística $T$** es una función de los valores observados de una muestra de tamaño $n$; es decir:

$$T = t(x_1, x_2, \dots, x_n)$$

Para una población de $N$ elementos, se pueden obtener $N^n$ (con reemplazo) o variaciones/combinaciones dependiendo de si el muestreo es sin reemplazo. La **Distribución Muestral o de Muestreo** es la distribución de probabilidad de la estadística $T$, que tiene tantos valores diferentes como muestras posibles de tamaño $n$ se puedan extraer.

- **Distribución muestral teórica:** Se considera cuando la población es infinita, dado que no es posible conocer todas las muestras posibles.
- **Distribución muestral experimental:** Se considera cuando la población es finita y de tamaño moderado, permitiendo calcular todas las estadísticas y sus probabilidades de ocurrencia.

Para estudiar una distribución muestral es necesario conocer:

1. Su forma funcional.
2. Su valor esperado.
3. Su varianza.

---

## 3. Teorema del Límite Central (TLC)

Al aumentar el tamaño de la muestra, la distribución de las estadísticas muestrales se aproxima a una **distribución normal**, sin importar la forma original de la distribución de la población de donde proviene la muestra.

> **Nota aclaratoria:** Generalmente, en la práctica estadística, se considera que un tamaño de muestra $n \ge 30$ es "suficientemente grande" para que el Teorema del Límite Central se aplique de manera confiable, permitiendo usar la curva normal para calcular probabilidades.

Ejemplos de estadísticas muestrales comunes:

- **Media Muestral:**

$$
\quad T_1 = \bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}
$$

- **Varianza Muestral:** 

$$
\quad T_2 = s^2 = \frac{\sum_{i=1}^{n} x_i^2 - n(\bar{x})^2}{n - 1}
$$

- **Proporción Muestral:** 

$$
\quad T_3 = p = \frac{\sum_{i=1}^{n} x_i}{n} \quad ; \text{donde } x_i = \begin{cases} 1 & \text{caso favorable} \\ 0 & \text{caso contrario} \end{cases}
$$

---

## 4. Distribución de la Media Muestral

Sea $X$ una población con distribución normal con media $\mu$ y varianza $\sigma^2$, y sea $X_1, \dots, X_n$ una muestra extraída de ella. La media muestral $\bar{x}$ tiene una distribución normal con los siguientes parámetros:

- **Valor esperado:** $E(\bar{x}) = \mu$
- **Varianza:** $V(\bar{x}) = \frac{\sigma^2}{n}$

$$
\operatorname{Var}(X) = E\left(X^2\right) - \left[E(X)\right]^2
$$

$$
E(X) = \sum_{i=1}^{n} x_i \, p(x_i)
$$


$$
\operatorname{Var}(X) = \boxed{\sum_{i=1}^{n} x_i^2 \, p(x_i) - \left[ E(X) \right]^2}
$$

---

$$
s^2 = \frac{1}{n} \sum_{i=1}^{n} x_i^2 - \bar{x}^2
$$

$$
\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i
$$

$$
s^2 = \frac{1}{n} \sum_{i=1}^{n} x_i^2 - \left( \frac{1}{n} \sum_{i=1}^{n} x_i \right)^2
$$

---

### a) Caso de varianza $\sigma^2$ conocida

Si $X$ tiene varianza poblacional conocida, la estadística $Z$ estandarizada es:

$$Z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}} \sim N(0,1)$$

**Factor de corrección para población finita:**

Si el tamaño de la población $N$ es conocido, la varianza de la media se ajusta y la distribución está dada por:

$$Z = \frac{\bar{x} - \mu}{\frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}}} \sim N(0,1)$$

> **Nota aclaratoria:** El término $\sqrt{\frac{N-n}{N-1}}$ se conoce como _Factor de Corrección por Población Finita (FCPF)_. Suele omitirse si la muestra $n$ es menor al 5% del tamaño de la población $N$, ya que su efecto se vuelve insignificante. El denominador total se llama _Error Estándar de la media muestral_.

### b) Caso de varianza $\sigma^2$ desconocida

Cuando la varianza poblacional es desconocida y la muestra es moderada, usamos la varianza muestral $s^2$. La distribución cambia a una **t de Student** con $n-1$ grados de libertad:

$$T = \frac{\bar{x} - \mu}{s/\sqrt{n}} \sim t_{(n-1)}$$

Si la población $N$ es finita y conocida:

$$T = \frac{\bar{x} - \mu}{\sqrt{\frac{s^2}{n} \left(\frac{N-n}{N-1}\right)}} \sim t_{(n-1)}$$

Para una variable $T \sim t_{(n)}$ con $n$ grados de libertad, se tiene:

- $E(T) = 0 \quad (\text{si } n > 1)$
- $V(T) = \frac{n}{n-2} \quad (\text{si } n > 2)$

### Ejercicios Propuestos (Media Muestral)

**Ejemplo Introductorio:** Suponga que se tiene una población cuyos elementos son: $\{ 1, 2, 3, 4 \}$. Se extrae una muestra de tamaño $n = 2$. Demuestre que el valor esperado de la media muestral es igual a la media poblacional, y verifique su varianza.

**Ejemplo 1:** De acuerdo a los registros de calificaciones de la universidad, los resultados de los exámenes del curso de marketing siguen una distribución normal con una media de 78 y una varianza de 36.

- a) ¿Qué calificación mínima debe obtener un alumno para ser considerado dentro del quinto superior del curso?
- b) Si se selecciona al azar una muestra de 30 exámenes correspondientes al parcial de Marketing del ciclo pasado, ¿Cuál debe ser la calificación promedio mínima en dicha muestra, para que sea considerada dentro del quinto superior de los promedios de todas las muestras posibles del mismo tamaño?

**Ejemplo 2:** El gerente de producción de una fábrica de productos marinos envasados asegura que el producto presentado en el nuevo envase tiene un peso promedio de 100 gramos. La gerencia antes de lanzar el producto al mercado, exige al jefe del área de control de calidad que someta a una prueba de pesos y medidas a dicho producto. El jefe del Área de CC, selecciona al azar 10 envases y obtienen los siguientes resultados: 97; 102; 103; 92; 103; 96; 98; 97; 99; y 95. ¿Cuál será la probabilidad de que el peso promedio de la muestra supere los 102 gramos?

---

## 5. Distribución de la Proporción Muestral

Sea $\pi$ la proporción poblacional de elementos que satisfacen cierta característica y $p = \frac{k}{n}$ la proporción en la muestra.

Cuando el tamaño de muestra es grande ($n > 30$), la distribución muestral de la proporción $p$ se aproxima a una distribución normal:

$$Z = \frac{p - \pi}{\sigma_p} = \frac{p - \pi}{\sqrt{\frac{\pi(1-\pi)}{n}}} \sim N(0,1)$$

**Factor de corrección para población finita ($N$ conocido):**

$$Z = \frac{p - \pi}{\sqrt{\frac{\pi(1-\pi)}{n} \left(\frac{N-n}{N-1}\right)}} \sim N(0,1)$$

### Ejercicio Propuesto (Proporción Muestral)

**Ejemplo:** El fabricante de máquinas despachadoras de café afirma que de cada 1000 vasos servidos, sólo 15 vasos tienen una cantidad de café por debajo de las 8 onzas (medida estándar establecida). Una empresa que va a comprar este tipo de máquina quiere evaluar si esto es verdad. Esto es, desea estimar la proporción de vasos servidos con cantidad de café por debajo de las 8 onzas, en base a los datos de una muestra aleatoria de 100 vasos de café que ha servido esta máquina. ¿Cuál es la probabilidad que esta proporción en la muestra se encuentre entre 1,2% y 2,0%?

---

## 6. Distribución de la Varianza Muestral

Sea $X$ una población con distribución normal. Si se toma una muestra aleatoria y se calcula la varianza muestral $s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1}$, la distribución muestral se basa en la familia **Chi-cuadrada ($\chi^2$)**.

La estadística $V$ definida a continuación tiene una distribución Chi-cuadrada con $n-1$ grados de libertad:

$$V = \frac{(n-1)s^2}{\sigma^2} \sim \chi^2_{n-1}$$

> **Nota aclaratoria:** Si una variable $V$ tiene una distribución Chi-cuadrado genérica con $n$ grados de libertad, se cumple que $E(V) = n$ y $V(V) = 2n$. Para nuestra estadística muestral de varianza, al tener $(n-1)$ grados de libertad, su esperanza matemática sería $n-1$ y su varianza $2(n-1)$.

### Ejercicios Propuestos (Varianza Muestral)

**Ejemplo 1:** Un investigador afirma que la varianza de una determinada población, que sigue una distribución normal, es igual a 21.3. Sin embargo, podría rechazar tal afirmación si la varianza de una muestra aleatoria de tamaño 15 excede a 39,74. ¿Cuál es la probabilidad de que dicha afirmación sea rechazada?

**Ejemplo 2:** Se sabe que la duración de paneles luminosos fabricados por una compañía tiene una media de 2000 horas y una desviación típica de 60 horas. Si se seleccionan al azar 10 paneles, ¿Cuál será la probabilidad que la desviación estándar muestral:
a) No supere las 50 horas?
b) Se encuentre entre 50 y 70 horas?

**Ejemplo 3:** Las bolsas de plástico empleadas para empaquetar productos se fabrican de forma que la resistencia a la rotura tenga una distribución normal con $\sigma = 5 \text{ kg/cm}^2$. Si se toma una muestra al azar de 16 bolsas. ¿Qué valor máximo tendrá la desviación estándar de la muestra con probabilidad 0.95?

---

### Funciones en Excel para Distribuciones Muestrales (Actualizado)

Para llevar a la práctica estos conceptos, Microsoft Excel ofrece funciones modernas (que reemplazan a las antiguas funciones obsoletas) para evaluar estas distribuciones. A continuación, te presento las funciones relevantes para esta Primera Parte:

#### 1. Distribución Normal (Z)

- **Calcular probabilidad dado un valor (Directo):**

```
=DISTR.NORM.N(x; media; desv_estandar; VERDADERO)
```

_Devuelve la probabilidad acumulada $P(X \le x)$. Para la Normal estándar, usa `DISTR.NORM.ESTAND.N(z; VERDADERO)`._

- **Calcular el valor dado una probabilidad (Inverso):**

```
=INV.NORM(probabilidad; media; desv_estandar)
```

_Devuelve el valor $x$ correspondiente al área acumulada (ej. los cuantiles del Ejemplo 1). Para estandarizada usa `INV.NORM.ESTAND(probabilidad)`._

#### 2. Distribución t de Student (T)

- **Calcular probabilidad dado un valor t (Directo):**

```
=DISTR.T.N(x; grados_de_libertad;1)
```

_Devuelve el área acumulada a la izquierda._ _(También existen `DISTR.T.CD` para cola derecha y `DISTR.T.2C` para dos colas)._

- **Calcular el valor t dado una probabilidad (Inverso):**

```
=INV.T(probabilidad; grados_de_libertad)
```

_Devuelve el valor $t$ (cola izquierda)._

#### 3. Distribución Chi-Cuadrada ($\chi^2$)

- **Calcular probabilidad dado un valor Chi-cuadrada (Directo):**

```
=DISTR.CHICUAD.N(x; grados_de_libertad;1) (Acumulada a la izquierda)
```

**(Acumulada a la derecha, muy útil en pruebas de varianza donde se busca $P(\chi^2 > \text{valor})$)**.

```excel
=DISTR.CHICUAD.CD(x; grados_de_libertad)
```

- **Calcular el valor crítico dado una probabilidad (Inverso):**

```excel
=INV.CHICUAD(probabilidad; grados_de_libertad) (Basado en cola izquierda).
```

```excel
=INV.CHICUAD.CD(probabilidad; grados_de_libertad) (Basado en cola derecha).
```

---

## 7. Distribución de la Diferencia de Proporciones

Sean dos poblaciones independientes, $X$ e $Y$, cuyas proporciones poblacionales respecto a una característica son $\pi_1$ y $\pi_2$, respectivamente. Si se toman muestras independientes en cada una de estas poblaciones, de tamaños $n_1$ y $n_2$, se pueden obtener las dos proporciones muestrales siguientes:

$$p_1 = \frac{k_1}{n_1} \quad \text{y} \quad p_2 = \frac{k_2}{n_2}$$

_(Donde $k_1$ y $k_2$ representan el número de éxitos en cada muestra)._

Si los tamaños de muestras son grandes (es decir, $n_1 + n_2 > 30$), se puede aproximar la **Distribución Muestral de la Diferencia de Proporciones** a una distribución normal. La estadística $Z$ estandarizada estará dada por:

$$Z = \frac{(p_1 - p_2) - (\pi_1 - \pi_2)}{\sqrt{\frac{\pi_1(1-\pi_1)}{n_1} + \frac{\pi_2(1-\pi_2)}{n_2}}} \sim N(0,1)$$

> **Nota aclaratoria:** En muchos problemas prácticos de estimación o cuando se asume la hipótesis nula de que ambas proporciones poblacionales son iguales ($\pi_1 = \pi_2$), el término $(\pi_1 - \pi_2)$ se vuelve cero. El denominador representa el _error estándar de la diferencia de proporciones_.

### Ejercicio Propuesto (Diferencia de Proporciones)

**Ejemplo:** Un analista de mercado considera que el 85% de los consumidores potenciales en Piura y el 95% de la ciudad de Tacna prefieren beber cerveza rubia. Para validar su opinión, levantó una encuesta de opinión independiente en cada ciudad. Comprobó que 240 de 300 personas entrevistadas en Piura y 340 de las 400 personas entrevistadas en Tacna prefieren beber cerveza rubia. ¿Cuál es la probabilidad de observar una diferencia mayor que el 5% entre ambas proporciones muestrales?

---

## 8. Distribución de la Razón de Varianzas

Sean $X$ e $Y$ dos poblaciones independientes que tienen distribuciones normales con varianzas poblacionales $\sigma_1^2$ y $\sigma_2^2$. Si se toman muestras independientes de tamaños $n_1$ y $n_2$, respectivamente, se pueden calcular las varianzas muestrales $s_1^2$ y $s_2^2$.

La relación entre estas varianzas sigue una **Distribución F de Fisher-Snedecor** con $(n_1 - 1)$ grados de libertad en el numerador y $(n_2 - 1)$ grados de libertad en el denominador. Está definida de la siguiente forma:

$$F = \frac{\frac{(n_1 - 1)s_1^2}{\sigma_1^2} / (n_1 - 1)}{\frac{(n_2 - 1)s_2^2}{\sigma_2^2} / (n_2 - 1)} = \frac{s_1^2 / \sigma_1^2}{s_2^2 / \sigma_2^2} = \left(\frac{\sigma_2^2}{\sigma_1^2}\right) \frac{s_1^2}{s_2^2} \sim F_{(n_1-1, \, n_2-1)}$$

**Caso especial (Varianzas poblacionales iguales):**
En el caso frecuente en el que se asume o se sabe que las varianzas poblacionales son iguales ($\sigma_1^2 = \sigma_2^2$), la fórmula se simplifica enormemente, ya que el cociente de las varianzas poblacionales es igual a 1:

$$F = \frac{s_1^2}{s_2^2} \sim F_{(n_1-1, \, n_2-1)}$$

> **Nota aclaratoria:** Esta distribución es estrictamente positiva (asimétrica hacia la derecha) y es fundamental para el Análisis de Varianza (ANOVA) y para las pruebas de homogeneidad de varianzas antes de comparar medias de muestras independientes.

### Ejercicios Propuestos (Razón de Varianzas)

**Ejemplo 1:** Se desea saber si se puede comparar dos procesos en relación con la variabilidad de la resistencia que tiene un producto respecto a la tracción. Se considera que los procesos producirán plásticos con igual resistencia a la tracción, si la razón entre las varianzas muestrales no es demasiado grande. Ésta será demasiado grande si la probabilidad de obtener un valor mayor o igual que el cociente de las varianzas muestrales es menor que 0,04. De dos muestras aleatorias independientes de 25 especímenes cada una, se observó que las varianzas muestrales fueron 540 y 256. Asumiendo que ambos procesos de producción se ajustan a una distribución normal con igual variabilidad, ¿a qué conclusión debería llegar el gerente en este caso?

**Ejemplo 2:** Dadas dos muestras aleatorias de poblaciones normales con varianzas iguales, de tamaño 10 cada una, ¿cuál es la probabilidad de observar que la varianza de la primera muestra sea por lo menos cuatro veces la varianza de la segunda muestra?

**Ejemplo 3:** Según estudios realizados anteriormente, la varianza en el llenado de las botellas de Pilsen y Cristal son de 2.8 y 3.4 ml². Si se toman muestras de 12 y 15 botellas de Pilsen y Cristal, ¿cuál es la probabilidad de que la varianza en la muestra de Pilsen sea inferior a las de Cristal?

---

## 9. Distribución de la Diferencia de Medias

Sean $X_1$ y $X_2$ dos poblaciones independientes que tienen distribuciones normales. Se toman muestras independientes de tamaños $n_1$ y $n_2$ obteniéndose las medias muestrales:

$$\bar{x}_1 = \frac{\sum x_{1i}}{n_1} \quad \text{y} \quad \bar{x}_2 = \frac{\sum x_{2i}}{n_2}$$

Dependiendo del conocimiento sobre las varianzas poblacionales ($\sigma_1^2$ y $\sigma_2^2$), se presentan tres casos:

### a) Caso de varianzas $\sigma_1^2$ y $\sigma_2^2$ conocidas

La distribución de la diferencia de medias se ajusta a una **distribución Normal**.

$$Z = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sim N(0,1)$$

Donde: $\mu_{\bar{x}_1-\bar{x}_2} = \mu_1 - \mu_2 \quad$ y $\quad \sigma_{\bar{x}_1-\bar{x}_2} = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$

### b) Caso de varianzas $\sigma_1^2$ y $\sigma_2^2$ desconocidas pero iguales ($\sigma_1^2 = \sigma_2^2$)

Si las varianzas poblacionales son desconocidas pero se asume que son iguales, se utiliza la **distribución t-Student** y se calcula una _varianza agrupada o combinada ($s_p^2$)_ a partir de las varianzas muestrales:

$$t = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{s_p^2 \left(\frac{1}{n_1} + \frac{1}{n_2}\right)}} \sim t_{(n_1+n_2-2)}$$

Donde la varianza conjunta estimada ($s_p^2$) es un promedio ponderado definido por:

$$s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$$

### c) Caso de varianzas $\sigma_1^2$ y $\sigma_2^2$ desconocidas y diferentes ($\sigma_1^2 \neq \sigma_2^2$)

En este caso, también se utiliza la **distribución t-Student**, pero no se agrupan las varianzas. En cambio, se utilizan grados de libertad ajustados $G$ (conocido como _Aproximación de Welch-Satterthwaite_):

$$t = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} \sim t_{(G)}$$

Donde los grados de libertad aproximados ($G$) son:

$$G \cong \frac{\left( \frac{s_1^2}{n_1} + \frac{s_2^2}{n_2} \right)^2}{\frac{\left( \frac{s_1^2}{n_1} \right)^2}{n_1 - 1} + \frac{\left( \frac{s_2^2}{n_2} \right)^2}{n_2 - 1}}$$

### Ejercicios Propuestos (Diferencia de Medias)

**Ejemplo 1:** Tradicionalmente, se puede afirmar que las calificaciones de los exámenes finales de los estudiantes de ingeniería tienen una puntuación promedio de 12 con una desviación estándar de 1,2 puntos. Mientras que la de los estudiantes de negocios, tienen una calificación promedio de 15 con una desviación estándar de 1,6. Si se asume que las calificaciones de los estudiantes se ajustan a una normal, y si en el ciclo pasado se eligen al azar los exámenes de 40 estudiantes de ingeniería y 30 de negocios. ¿Cuál será la probabilidad de observar una diferencia de a lo más 2,0 puntos entre las calificaciones promedio entre ambas escuelas?

**Ejemplo 2:** El gerente de ventas quiere implementar una de dos nuevas técnicas de ventas para la próxima campaña. Considera que primero debería probarlas. La primera técnica la prueba con 12 vendedores y la segunda técnica con 15 vendedores. Al finalizar la semana de prueba, comprobó que con la primera técnica, las ventas promedio fueron de 68 con una desviación estándar de 7,071. Mientras que con la segunda técnica, las ventas promedio fueron de 72 con una desviación estándar de 8,68. Asumiendo que las ventas de la compañía se aproximan a una distribución normal con el mismo promedio en ambas técnicas:
a) Si la variabilidad en ambas técnicas es la misma, ¿Cree usted que es probable que la segunda técnica sea mejor que la primera en más de 4 ventas?
b) Y si la variabilidad en ambas técnicas no es la misma, ¿es probable que la segunda técnica sea mejor que la primera?

---

### Funciones en Excel para Distribuciones Muestrales (Parte 2)

Además de las funciones vistas en la Parte 1 (Normal, t-Student y Chi-cuadrada), para el tema de **Razón de Varianzas** es indispensable utilizar las funciones de la **Distribución F de Fisher**. Excel ofrece las siguientes versiones actualizadas:

#### Distribución F (Fisher)

- **Calcular probabilidad dado un valor F (Cola Derecha - Frecuente en ratios de varianzas):**

`=DISTR.F.CD(x; grados_libertad1; grados_libertad2)`

_Devuelve la probabilidad de la cola derecha $P(F > x)$. Es muy útil ya que usualmente analizamos si la razón de varianzas es "demasiado grande" (como en el Ejemplo 1)._

- **Calcular probabilidad dado un valor F (Acumulada Izquierda):**
  
`=DISTR.F.N(x; grados_libertad1; grados_libertad2; VERDADERO)`

_Devuelve la probabilidad acumulada desde menos infinito hasta el valor $x$: $P(F \le x)$._

- **Calcular el valor F dado una probabilidad (Inverso - Cola Derecha):**

`=INV.F.CD(probabilidad; grados_libertad1; grados_libertad2)`

_Devuelve el valor crítico $F$ dado el área en la cola superior._

- **Calcular el valor F dado una probabilidad (Inverso - Cola Izquierda):**

`=INV.F(probabilidad; grados_libertad1; grados_libertad2)`

_Devuelve el valor crítico $F$ de la función de distribución acumulada inversa._
