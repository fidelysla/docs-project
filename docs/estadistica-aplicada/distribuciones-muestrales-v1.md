# Distribuciones Muestrales

## 1. Conceptos Fundamentales

### 1.1 Muestra Aleatoria
Sea $X$ una variable aleatoria (población) que tiene una función de probabilidad $f(x)$ con media $\mu$ y varianza $\sigma^2$. Se dice que $X_1, X_2, \dots, X_n$ es una muestra aleatoria de tamaño $n$ si se cumple que:
1. Son una sucesión de variables aleatorias independientes.
2. Cada $X_i$ tiene la misma distribución de probabilidad que la población $X$. Es decir, comparten la misma función $f(x)$, la misma esperanza $E(X_i) = \mu$ y la misma varianza $V(X_i) = \sigma^2$.

### 1.2 Distribuciones Muestrales
Una **estadística $T$** es una función de los valores observados de una muestra de tamaño $n$; es decir: $T = t(x_1, \dots, x_n)$. 
La distribución de probabilidad de esta estadística $T$ se conoce como **Distribución Muestral**. 

> **💡 Nota Aclaratoria:** Antes de tomar una muestra, los valores que se obtendrán son inciertos, por lo que cualquier cálculo basado en ellos (como el promedio o la varianza de la muestra) es también una variable aleatoria. Estudiar la "distribución muestral" es simplemente estudiar cómo se comporta y qué probabilidades tiene esta nueva variable aleatoria ($T$) a lo largo de todas las muestras posibles que podríamos extraer.

* **Población infinita:** Se considera una *distribución muestral teórica* (no es posible extraer todas las muestras posibles).
* **Población finita:** Se considera una *distribución muestral experimental*, pudiendo usar el factor de corrección por población finita.

### 1.3 Teorema del Límite Central (TLC)
Al aumentar el tamaño de la muestra ($n$), la distribución de las estadísticas muestrales (como la media o la proporción) se aproxima a una **distribución normal**, sin importar la forma original de la distribución de la población de donde proviene la muestra.

> **💡 Nota Aclaratoria:** En la práctica estadística, se suele considerar que una muestra es lo suficientemente "grande" para que el TLC sea aplicable cuando $n \ge 30$. Si la población original ya es normal, la estadística será normal sin importar el tamaño de $n$.

---

## 2. Distribución de la Media Muestral ($\bar{X}$)

Sea $X$ una población con media $\mu$ y varianza $\sigma^2$. Si extraemos una muestra aleatoria de tamaño $n$, la estadística "Media Muestral" ($\bar{X}$) se define como:
$$ \bar{X} = \frac{1}{n}\sum_{i=1}^{n} x_i $$

Sus propiedades fundamentales (valor esperado y varianza) son:
$$ E(\bar{X}) = \mu \quad \text{y} \quad V(\bar{X}) = \frac{\sigma^2}{n} $$

### 2.1 Caso A: Varianza Poblacional ($\sigma^2$) Conocida
Si la varianza poblacional es conocida, la variable estandarizada se distribuye como una Normal Estándar $N(0,1)$:
$$ Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0,1) $$

Si el tamaño de la población $N$ es finito y conocido (generalmente cuando $n > 0.05N$), se aplica el **Factor de Corrección por Población Finita (FCPF)** al error estándar:
$$ Z = \frac{\bar{X} - \mu}{\frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}}} \sim N(0,1) $$

### 2.2 Caso B: Varianza Poblacional ($\sigma^2$) Desconocida
Cuando $\sigma^2$ es desconocida y la muestra es de tamaño moderado/pequeño, se estima usando la varianza muestral ($S^2$). La distribución resultante es una **t-Student** con $n-1$ grados de libertad:
$$ T = \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t_{(n-1)} $$

> **💡 Nota Aclaratoria:** La distribución t-Student tiene colas más pesadas que la normal, lo que refleja la incertidumbre adicional de tener que estimar la varianza de la población a partir de los datos de la propia muestra.

### 📝 Ejercicios Propuestos (Media Muestral)
* **Ejercicio 1:** De acuerdo a los registros de calificaciones de la universidad, los resultados de los exámenes del curso de marketing, siguen una distribución normal con una media de 78 y una varianza de 36.
  a) ¿Qué calificación mínima debe obtener un alumno, para ser considerado dentro del quinto superior del curso?
  b) Si se selecciona al azar una muestra de 30 exámenes correspondientes al parcial de Marketing del ciclo pasado, ¿Cuál debe ser la calificación promedio mínima en dicha muestra, para que sea considerada dentro del quinto superior de los promedios de todas las muestras posibles del mismo tamaño?
* **Ejercicio 2:** El gerente de producción de una fábrica de productos marinos envasados asegura que el producto presentado en el nuevo envase tiene un peso promedio de 100 gramos. La gerencia antes de lanzar el producto al mercado, exige al jefe del área de control de calidad que someta a una prueba de pesos y medidas a dicho producto. El jefe del Área de CC, selecciona al azar 10 envases y obtienen los siguientes resultados: 97; 102; 103; 92; 103; 96; 98; 97; 99; y 95. ¿Cuál será la probabilidad de que el peso promedio de la muestra supere los 102 gramos?

---

## 3. Distribución de la Proporción Muestral ($p$)

Sea una población donde una proporción $\pi$ posee cierta característica. Si se extrae una muestra de tamaño $n$, la proporción de la muestra ($p$) se define como:
$$ p = \frac{k}{n} $$
(Donde $k$ es el número de observaciones en la muestra que cumplen la característica).

Para muestras grandes ($n > 30$), la proporción muestral se aproxima a una distribución normal con parámetros:
$$ \mu_p = \pi \quad \text{y} \quad \sigma_p^2 = \frac{\pi(1-\pi)}{n} $$

El estadístico $Z$ está dado por:
$$ Z = \frac{p - \pi}{\sqrt{\frac{\pi(1-\pi)}{n}}} \sim N(0,1) $$

Si el tamaño de la población $N$ es conocido, se aplica la corrección:
$$ Z = \frac{p - \pi}{\sqrt{\frac{\pi(1-\pi)}{n}\left(\frac{N-n}{N-1}\right)}} \sim N(0,1) $$

### 📝 Ejercicios Propuestos (Proporción Muestral)
* **Ejercicio 3:** El fabricante de máquinas despachadoras de café afirma que de cada 1000 vasos servidos, sólo 15 vasos tienen una cantidad de café por debajo de las 8 onzas (medida estándar establecida). Una empresa que va a comprar este tipo de máquina quiere evaluar si esto es verdad. Esto es, desea estimar la proporción de vasos servidos con cantidad de café por debajo de las 8 onzas, en base a los datos de una muestra aleatoria de 100 vasos de café que ha servido esta máquina. ¿Cuál es la probabilidad que esta proporción en la muestra se encuentre entre 1,2% y 2,0%?

---

## 4. Distribución de la Varianza Muestral ($S^2$)

Si se toma una muestra de tamaño $n$ de una población que tiene distribución **normal**, la estadística varianza muestral se calcula como:
$$ S^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1} $$

A partir de esto, se puede establecer la siguiente relación con la distribución **Chi-Cuadrado ($\chi^2$)**:
$$ V = \frac{(n-1)S^2}{\sigma^2} \sim \chi^2_{(n-1)} $$
La variable $V$ sigue una distribución Chi-cuadrado con $n-1$ grados de libertad.

> **💡 Nota Aclaratoria:** La presentación indica las propiedades generales de una Chi-cuadrado con "$n$" grados de libertad como $E(V)=n$ y $V(V)=2n$. Aplicando esto a nuestro estadístico de varianza que tiene $n-1$ grados de libertad, sus valores reales esperados son: Esperanza $= (n-1)$ y Varianza $= 2(n-1)$.

### 📝 Ejercicios Propuestos (Varianza Muestral)
* **Ejercicio 4:** Un investigador afirma que la varianza de una determinada población, que sigue una distribución normal, es igual a 21.3. Sin embargo, podría rechazar tal afirmación si la varianza de una muestra aleatoria de tamaño 15 excede a 39.74. ¿Cuál es la probabilidad de que dicha afirmación sea rechazada?
* **Ejercicio 5:** Se sabe que la duración de paneles luminosos fabricados por una compañía tiene una media de 2000 horas y una desviación típica de 60 horas. Si se seleccionan al azar 10 paneles, ¿Cuál será la probabilidad que la desviación estándar muestral:
  a) No supere las 50 horas?
  b) Se encuentre entre 50 y 70 horas?
* **Ejercicio 6:** Las bolsas de plástico empleadas para empaquetar productos se fabrican de forma que la resistencia a la rotura tenga una distribución normal con $\sigma = 5 \text{ kg/cm}^2$. Si se toma una muestra al azar de 16 bolsas. ¿Qué valor máximo tendrá la desviación estándar de la muestra con probabilidad 0.95?

---

## 5. Apartado Adicional: Justificación del uso de $1/\beta$ en Excel para la Distribución Exponencial

Aunque no es el foco principal del PDF, es una duda muy común al aplicar estadística en software. La distribución exponencial se puede parametrizar de dos maneras distintas en la literatura matemática:
1. Usando la **tasa de ocurrencia ($\lambda$)**: que representa la cantidad de eventos por unidad de tiempo.
2. Usando la **escala o media ($\beta$)**: que representa el tiempo promedio de espera entre eventos. Matemáticamente, $\beta = 1/\lambda$.

**¿Por qué Excel usa $1/\beta$?**
La función nativa de Excel para esta distribución es `=DISTR.EXP.N(x, lambda, acumulado)`. Como puedes observar, el segundo argumento que pide el software estadístico de Microsoft está programado para recibir estrictamente el parámetro de tasa ($\lambda$). 

Por lo tanto, si un ejercicio de estadística te proporciona el tiempo promedio (la media $\beta$, por ejemplo: "el tiempo medio de atención es de 5 minutos"), **no puedes introducir el 5 directamente en Excel**. Debes transformarlo a la tasa de ocurrencia usando la equivalencia $\lambda = 1/\beta$ (es decir, introducir $1/5$ o $0.20$ en la fórmula) para que el software calcule la probabilidad correctamente.

---

## 6. Apartado Adicional: Funciones Actualizadas de Excel para Problemas de Distribuciones

Para resolver los ejercicios expuestos (y evitar las tablas de papel tradicionales), puedes utilizar las siguientes funciones modernas de Excel:

### Distribución Normal y Normal Estándar (Para estadísticos $Z$)
* **Para calcular Probabilidades (dado un valor $x$ o $z$):**
  * `=DISTR.NORM.N(x, media, desv_estandar, VERDADERO)` $\rightarrow$ Devuelve el área a la izquierda $P(X \le x)$.
  * `=DISTR.NORM.ESTANDAR.N(z, VERDADERO)` $\rightarrow$ Devuelve $P(Z \le z)$ para distribuciones estandarizadas.
* **Para calcular Valores críticos (dada una probabilidad):**
  * `=INV.NORM(probabilidad, media, desv_estandar)` $\rightarrow$ Devuelve el valor $x$.
  * `=INV.NORM.ESTANDAR(probabilidad)` $\rightarrow$ Devuelve el valor de $Z$ para una confianza o percentil dado.

### Distribución t-Student (Para estadísticos $T$)
* **Para calcular Probabilidades:**
  * `=DISTR.T.N(x, grados_de_libertad, VERDADERO)` $\rightarrow$ Devuelve el área a la izquierda de un valor t.
  * `=DISTR.T.CD(x, grados_de_libertad)` $\rightarrow$ Devuelve directamente el área a la **derecha** (muy útil para pruebas de hipótesis).
* **Para calcular Valores críticos:**
  * `=INV.T(probabilidad_cola_izquierda, grados_de_libertad)` $\rightarrow$ Devuelve el valor $t$.

### Distribución Chi-Cuadrado (Para varianzas)
* **Para calcular Probabilidades:**
  * `=DISTR.CHICUAD(x, grados_de_libertad, VERDADERO)` $\rightarrow$ Área a la izquierda.
  * `=DISTR.CHICUAD.CD(x, grados_de_libertad)` $\rightarrow$ Área a la derecha (útil para ver la probabilidad de rechazo en varianzas altas).
* **Para calcular Valores críticos:**
  * `=INV.CHICUAD(probabilidad_izq, grados_de_libertad)` o `=INV.CHICUAD.CD(probabilidad_der, grados_de_libertad)`.

---
*(Nota: Avísame si deseas que continuemos con la **Parte 2**, donde abordaremos las distribuciones para dos poblaciones: Diferencia de Proporciones, Razón de Varianzas (F de Fisher) y Diferencia de Medias).*