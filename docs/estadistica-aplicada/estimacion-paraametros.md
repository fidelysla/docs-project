
# Estadística Aplicada II: Estimación de Parámetros

**Institución:** Universidad Ricardo Palma
**Facultad:** Ciencias Económicas y Empresariales

---

## 1. Introducción a la Inferencia Estadística

La **inferencia estadística** es la rama de la estadística que nos permite formular afirmaciones, conclusiones o predicciones sobre los parámetros desconocidos de una población entera, basándonos únicamente en la información obtenida de una muestra representativa extraída de dicha población.

Dado que no se analiza a toda la población, estas afirmaciones siempre conllevan un grado de incertidumbre. Por ello, la inferencia proporciona los procedimientos matemáticos e inductivos necesarios para medir y acotar esa incertidumbre.

Sus dos pilares fundamentales son:

1.  **Estimación de parámetros** (puntual y por intervalos).
2.  **Prueba de Hipótesis**.

---

## 2. Estimación Estadística

Consiste en utilizar los datos obtenidos en una muestra para calcular valores aproximados de los parámetros poblacionales desconocidos (como la media poblacional $\mu$, la varianza $\sigma^2$ o la proporción $\pi$). Se divide en dos enfoques:

### 2.1. Estimación Puntual

Se calcula un **único valor** o punto a partir de la muestra para aproximar el parámetro. Por ejemplo, usar la media de la muestra ($\bar{x}$) para estimar la media de la población ($\mu$).

A la fórmula o estadístico utilizado se le llama **estimador** (denotado como $\hat{\theta}$), y al valor numérico resultante se le llama **estimación**.

#### Propiedades de un Buen Estimador Puntual

Para que un estadístico sea considerado un buen estimador de un parámetro $\theta$, debe cumplir con cuatro propiedades ideales:

1.  **Insesgamiento (Estimador Insesgado):** Un estimador es insesgado si, en promedio, su valor esperado es exactamente igual al parámetro poblacional que intenta estimar.
    $$E(\hat{\theta}) = \theta$$
    _Ejemplo:_ La media muestral ($\bar{x}$) es un estimador insesgado de $\mu$, y la varianza muestral ($s^2$ dividida entre $n-1$) es un estimador insesgado de $\sigma^2$.
2.  **Consistencia:** A medida que el tamaño de la muestra ($n$) crece y se acerca al infinito, el valor del estimador se aproxima cada vez más al verdadero valor del parámetro, reduciendo su varianza a cero.
    $$\lim_{n \to \infty} E(\hat{\theta}) = \theta \quad \text{y} \quad \lim_{n \to \infty} V(\hat{\theta}) = 0$$
3.  **Eficiencia:** Entre dos estimadores insesgados, el más eficiente es aquel que tiene la **menor varianza**. Menor varianza significa mayor precisión.
    $$V(\hat{\theta}_1) < V(\hat{\theta}_2) \implies \hat{\theta}_1 \text{ es más eficiente}$$
4.  **Suficiencia:** Un estimador es suficiente si utiliza o extrae absolutamente toda la información relevante contenida en la muestra acerca del parámetro.

#### Método de los Momentos

Es un procedimiento para hallar estimadores puntuales. Consiste en igualar los momentos poblacionales (esperanzas matemáticas) con los momentos muestrales (promedios de potencias).

- **Momento poblacional de orden $k$:** $E(X^k)$
- **Momento muestral de orden $k$:** $m_k = \frac{1}{n} \sum_{i=1}^n x_i^k$

Al igualarlos, se obtiene un sistema de ecuaciones del cual se despejan los parámetros desconocidos.

---

### 2.2. Estimación por Intervalos (Intervalos de Confianza)

Debido a las fluctuaciones del azar, una estimación puntual casi nunca será exactamente igual al parámetro poblacional; siempre existe un **error de estimación**.

Para solventar esto, se construye un **Intervalo de Confianza (IC)**: un rango de valores definido por un límite inferior y uno superior, dentro del cual se espera que se encuentre el verdadero parámetro con un cierto nivel de probabilidad o **nivel de confianza** (denotado como $1 - \alpha$).

La estructura general de un intervalo de confianza es:
$$IC = \text{Estimador Puntual} \pm (\text{Coeficiente de Confiabilidad} \times \text{Error Estándar})$$

---

## 3. Intervalos de Confianza para la Media Poblacional ($\mu$)

### A. Caso: Varianza poblacional ($\sigma^2$) CONOCIDA

Si conocemos la varianza de la población de antemano (o si la muestra es suficientemente grande), utilizamos la distribución Normal Estándar ($Z$).

$$IC(\mu) = \left[ \bar{x} - z_{1-\alpha/2} \frac{\sigma}{\sqrt{n}}, \;\; \bar{x} + z_{1-\alpha/2} \frac{\sigma}{\sqrt{n}} \right]$$

_Donde:_

- $\bar{x}$: Media de la muestra.
- $z_{1-\alpha/2}$: Valor crítico de la distribución Normal que acumula un área de $1-\alpha/2$.
- $\frac{\sigma}{\sqrt{n}}$: Error estándar de la media.

### B. Caso: Varianza poblacional ($\sigma^2$) DESCONOCIDA

Cuando no conocemos $\sigma^2$ (lo cual es muy común en la práctica) y trabajamos con muestras, utilizamos la desviación estándar de la muestra ($s$) y la distribución **t de Student** con $n-1$ grados de libertad.

$$IC(\mu) = \left[ \bar{x} - t_{(n-1; 1-\alpha/2)} \frac{s}{\sqrt{n}}, \;\; \bar{x} + t_{(n-1; 1-\alpha/2)} \frac{s}{\sqrt{n}} \right]$$

### _Corrección por Población Finita_

Si conocemos el tamaño total de la población ($N$) y el tamaño de la muestra ($n$) representa más del 5% de la población (es decir, $\frac{n}{N} > 0.05$), se debe multiplicar el error estándar por el factor de corrección:
$$\sqrt{\frac{N-n}{N-1}}$$

---

## 4. Desarrollo Detallado de Ejercicios (1, 2 y 3)

### 📝 Ejemplo 1: Intervalo para la media con varianza conocida

**Enunciado:**
Un analista de investigación de mercados desea estimar el ingreso mensual promedio de los hogares de un sector de Lima Metropolitana. Con una confianza del 95%, tomó una muestra de 100 hogares y halló un ingreso promedio de US$ 1500. Según cifras oficiales, la desviación estándar poblacional de los ingresos es US$ 300. ¿Entre qué valores se encuentra el ingreso promedio mensual de todos los hogares de dicho sector?

**Desarrollo paso a paso:**

1.  **Identificación de Datos:**
    - Tamaño de muestra ($n$) = 100
    - Media muestral ($\bar{x}$) = 1500
    - Desviación estándar poblacional conocida ($\sigma$) = 300
    - Nivel de confianza ($1 - \alpha$) = 0.95 (o 95%)

2.  **Cálculo del valor crítico ($Z$):**
    Como el nivel de confianza es 95%, $\alpha = 0.05$. El área a la izquierda del valor crítico positivo es $1 - \alpha/2 = 0.975$.
    Buscando en la tabla Normal Estándar: $z_{0.975} = 1.96$.

3.  **Cálculo del Error Estándar:**
    $$\text{Error Estándar} = \frac{\sigma}{\sqrt{n}} = \frac{300}{\sqrt{100}} = \frac{300}{10} = 30$$

4.  **Cálculo del Margen de Error:**
    $$\text{Margen de Error} = z \times \text{Error Estándar} = 1.96 \times 30 = 58.80$$

5.  **Construcción del Intervalo:**
    $$IC(\mu) = 1500 \pm 58.80$$
    - Límite Inferior: $1500 - 58.80 = 1441.20$
    - Límite Superior: $1500 + 58.80 = 1558.80$

**Conclusión:**
Podemos afirmar con un 95% de confianza que el verdadero ingreso mensual promedio de todos los hogares de ese sector se encuentra entre **US$ 1441.20 y US$ 1558.80**.

---

### 📝 Ejemplo 2: Intervalo para la media con varianza desconocida e impacto de la población finita

**Enunciado:**
Una muestra de 100 cuentas de ahorros en BANAMEX mostró un saldo promedio de US$ 1000 con una desviación estándar (muestral) de US$ 500.

a) Halle el intervalo de confianza al 95% asumiendo una población muy grande.

b) Halle el intervalo asumiendo que BANAMEX tiene exactamente $N = 1000$ cuentas de ahorros en total.

**Desarrollo paso a paso - Parte A (Población Infinita):**

1.  **Datos:** $n = 100$, $\bar{x} = 1000$, $s = 500$ (desviación muestral, varianza poblacional desconocida), Confianza = 95%.
2.  **Valor crítico ($t$ de Student):**
    Dado que no conocemos $\sigma$, usamos la distribución $t$.
    Grados de libertad ($gl$) = $n - 1 = 99$.
    Para un 95% de confianza, buscamos en la tabla $t$: $t_{(99; 0.975)} \approx 1.984$.
3.  **Error Estándar y Margen de Error:**
    $$\text{Error Estándar} = \frac{s}{\sqrt{n}} = \frac{500}{10} = 50$$
    $$\text{Margen de Error} = 1.984 \times 50 = 99.21$$
4.  **Intervalo:**
    $$IC(\mu) = 1000 \pm 99.21 = [900.79, 1099.21]$$

**Desarrollo paso a paso - Parte B (Población Finita $N=1000$):**

1.  **Factor de Corrección:** Como muestreamos 100 de 1000 (el 10%, que es mayor al 5%), debemos ajustar el error estándar.
    $$\text{Factor} = \sqrt{\frac{N-n}{N-1}} = \sqrt{\frac{1000-100}{1000-1}} = \sqrt{\frac{900}{999}} \approx 0.949$$
2.  **Nuevo Error Estándar:**
    $$\text{Error Estándar Ajustado} = \frac{s}{\sqrt{n}} \times \text{Factor} = 50 \times 0.949 \approx 47.458$$
3.  **Nuevo Margen de Error:**
    $$\text{Margen de Error} = 1.984 \times 47.458 \approx 94.157$$
4.  **Intervalo Final:**
    $$IC(\mu) = 1000 \pm 94.157 = [905.83, 1094.16]$$
    _(Nota: Al conocer que la población es pequeña, el error disminuye y el intervalo se vuelve más estrecho y preciso)._

---

### 📝 Ejemplo 3: Efecto del Nivel de Confianza y Tamaño de Muestra

**Enunciado:**
En una muestra de 35 cigarrillos se obtuvo un promedio de nicotina de 3.0 mg. Asuma que la distribución es normal con $\sigma = 1.0$ mg.

a) Halle los intervalos de confianza del 90%, 95% y 99%.

b) ¿Qué pasaría con el intervalo del 95% si la muestra aumentara a 45 cigarrillos?

**Desarrollo paso a paso - Parte A (Cambio de Confianza):**

1.  **Datos iniciales:** $n = 35$, $\bar{x} = 3.0$, $\sigma = 1.0$.
    Error estándar constante: $\frac{\sigma}{\sqrt{n}} = \frac{1}{\sqrt{35}} \approx 0.169$
2.  **Intervalo al 90%:**
    Valor $Z = 1.645$.
    $$IC = 3.0 \pm (1.645 \times 0.169) = 3.0 \pm 0.278 \implies [2.72, \; 3.28]$$
3.  **Intervalo al 95%:**
    Valor $Z = 1.96$.
    $$IC = 3.0 \pm (1.96 \times 0.169) = 3.0 \pm 0.331 \implies [2.67, \; 3.33]$$
4.  **Intervalo al 99%:**
    Valor $Z = 2.58$.
    $$IC = 3.0 \pm (2.58 \times 0.169) = 3.0 \pm 0.436 \implies [2.56, \; 3.44]$$
    _Explicación teórica:_ A medida que deseamos estar más seguros (mayor confianza), el intervalo necesita ensancharse para garantizar que capture al verdadero parámetro.

**Desarrollo paso a paso - Parte B (Cambio en Tamaño de Muestra):**

1.  **Nuevos Datos:** $n = 45$, $\bar{x} = 3.0$, $\sigma = 1.0$, Confianza = 95% ($Z = 1.96$).
2.  **Nuevo Error Estándar:**
    $$\frac{1}{\sqrt{45}} \approx 0.149$$
3.  **Nuevo Intervalo:**
    $$IC = 3.0 \pm (1.96 \times 0.149) = 3.0 \pm 0.292 \implies [2.71, \; 3.29]$$
    _Explicación teórica:_ Al aumentar la muestra de 35 a 45, poseemos más información de la población. Esto reduce la incertidumbre, permitiendo que el intervalo de confianza sea más estrecho (más preciso) sin necesidad de sacrificar el nivel de confianza del 95%.

---

## 5. Menciones a Casos y Ejercicios Adicionales del Documento

El documento original abarca fórmulas y ejemplos aplicados a otros escenarios estadísticos. A continuación se resume el propósito de cada uno:

- **Cálculo de Tamaño de Muestra para la Media (Ejemplo 4):**
  Utiliza el margen de error máximo permitido ($B$) para despejar algebraicamente el valor de $n$. En el _Ejemplo 4_ se calcula a cuántos contribuyentes se debe encuestar en un municipio para estimar el monto de arbitrios con un error máximo de S/. 3.

- **Intervalo de Confianza para la Proporción $\pi$ (Ejemplo 5):**
  Aplica la aproximación normal para variables categóricas (ej. porcentaje de éxito o fracaso). La fórmula usa la proporción de la muestra ($\hat{p}$) en lugar de la media. El _Ejemplo 5_ calcula un intervalo para estimar la proporción real de artefactos eléctricos defectuosos en una fábrica.

- **Tamaño de Muestra para la Proporción (Ejemplo 6):**
  Similar al caso de la media, pero aplicado a porcentajes. El _Ejemplo 6_ determina cuántas encuestas se deben realizar (y el costo total operativo) para estimar la preferencia por un producto con un margen de error del 4%.

- **Intervalo de Confianza para la Varianza $\sigma^2$ (Ejemplo 7):**
  Permite estimar la variabilidad o dispersión poblacional. No usa la distribución Normal, sino la distribución asimétrica **Chi-cuadrado ($\chi^2$)**. El _Ejemplo 7_ aplica esto para encontrar los límites de la variabilidad del diámetro de anillos para motores producidos en una fábrica.

- **Intervalo para la Diferencia de Proporciones $\pi_1 - \pi_2$ (Ejemplo 8):**
  Se utiliza para comparar dos grupos independientes y ver si sus proporciones difieren estadísticamente. Si el intervalo incluye el cero, no hay diferencia significativa. El _Ejemplo 8_ evalúa si existe diferencia real en el porcentaje de baterías defectuosas entre dos marcas competidoras (CAPSA vs. VOLTA).

- **Intervalo para la Razón de Varianzas $\sigma_1^2 / \sigma_2^2$ (Ejemplo 9):**
  Compara la variabilidad entre dos poblaciones utilizando la distribución de probabilidad **F de Fisher**. Si el intervalo incluye al número 1, se concluye que las varianzas son estadísticamente iguales. El _Ejemplo 9_ compara si la volatilidad (variabilidad de precios) de dos tipos de acciones bursátiles (A y B) es diferente.

- **Intervalo para la Diferencia de Medias $\mu_1 - \mu_2$ (Ejemplo 10):**
  Permite evaluar si la media poblacional de un grupo es mayor, menor o igual a la de otro. El documento presenta fórmulas para cuando las varianzas son conocidas, desconocidas pero iguales, o desconocidas y diferentes. El _Ejemplo 10_ aplica este concepto para comparar la vida útil promedio (en años) de dos marcas diferentes de motores para refrigeradores.
