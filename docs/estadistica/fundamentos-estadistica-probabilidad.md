# Fundamentos de Estadística Descriptiva y Probabilidad

## Introducción
Este documento establece la base conceptual necesaria para el estudio de la Estadística Inferencial. Se abordan dos pilares fundamentales: la **estadística descriptiva**, enfocada en el resumen y análisis de datos observados (muestras), y los **fundamentos de probabilidad**, que proveen el marco teórico para modelar la incertidumbre y las variables aleatorias. Asimismo, se introduce la notación matricial aplicada a la estadística, herramienta esencial para el análisis multivariado y econométrico.

## Objetivos de aprendizaje

Al finalizar este capítulo, el estudiante será capaz de:

- Diferenciar entre variables cuantitativas y cualitativas y sus medidas asociadas.
- Calcular e interpretar medidas de tendencia central, dispersión, posición y forma.
- Comprender y aplicar la notación vectorial y matricial para el cálculo de medias y varianzas.
- Entender los conceptos básicos de probabilidad y operaciones con sucesos.
- Calcular la esperanza matemática y la varianza de variables aleatorias discretas.

---

## Tema 1: Estadística Descriptiva y Análisis de Datos

La estadística descriptiva permite organizar, resumir y presentar datos de manera informativa. En el contexto computacional actual, estos datos suelen manipularse a través de estructuras como DataFrames.

### 1.1. Tipos de Variables y Operaciones de Datos

#### Manejo de Conjuntos de Datos (DataFrames)
En el análisis práctico, es común combinar información de múltiples fuentes:

*   **Merge (Fusión horizontal):** Combina conjuntos de datos basándose en una o más claves comunes (identificadores), añadiendo columnas (nuevas variables).

*   **Append (Fusión vertical):** Apila conjuntos de datos uno encima del otro, añadiendo filas (nuevas observaciones).

#### Clasificación de Variables
Dependiendo de la naturaleza de los datos, utilizamos diferentes estadísticos de resumen:

1.  **Variables Cuantitativas:** Representan cantidades numéricas (edad, estatura, renta). Su medida principal es la **Media Aritmética**:
    $$ \bar{X} = \frac{\sum_{i=1}^{n} X_i}{n} $$

2.  **Variables Cualitativas:** Representan categorías o cualidades. Se analizan mediante **Proporciones** (frecuencia relativa), especialmente si se codifican como variables binarias (0 o 1).
    $$ P = \frac{\sum_{i=1}^{n} g_i}{n} $$
    Donde $g_i$ representa la presencia ($1$) o ausencia ($0$) de una característica.

### 1.2. Medidas de Tendencia Central

#### La Media Aritmética ($\bar{X}$)
Es la suma de todas las observaciones dividida por el número total de observaciones ($n$). Actúa como el **centro de gravedad** de los datos.

$$ \bar{X} = \frac{1}{n} \sum_{i=1}^{n} X_i = \frac{X_1 + X_2 + \dots + X_n}{n} $$

De esta definición se deduce una propiedad fundamental: la suma total de las observaciones es igual a $n$ veces la media.
$$ \sum_{i=1}^{n} X_i = n\bar{X} $$

!!! note "Notación Vectorial de la Media"

    Podemos expresar la media utilizando álgebra matricial, lo cual simplifica la notación en estadística avanzada.
    
    Definimos $X$ como un vector columna de observaciones y $i$ como un vector columna de unos:

    $$ X = \begin{bmatrix} X_{1} \\ \vdots \\ X_{n} \end{bmatrix}, \quad i = \begin{bmatrix} 1 \\ \vdots \\ 1 \end{bmatrix}, \quad i' = \begin{bmatrix} 1 & \dots & 1 \end{bmatrix} $$
    
    La suma de los elementos es el producto punto $i'X$. Por tanto, la media es:
    $$ \bar{X} = \frac{1}{n} i'X $$

### 1.3. Medidas de Dispersión

Estas medidas indican qué tan alejados están los datos del promedio.

#### Desviaciones ($D_i$)
La desviación es la distancia de una observación respecto a la media:
$$ D_i = X_i - \bar{X} $$

*   **Propiedad fundamental:** La suma de las desviaciones siempre es cero, ya que los desvíos positivos y negativos se cancelan.
    $$ \sum_{i=1}^{n} (X_i - \bar{X}) = 0 $$

**Notación Vectorial de la Desviación:**
El vector de desviaciones $D$ puede expresarse utilizando una **matriz de centrado** ($M^0$):
$$ D = X - \bar{X} \cdot i = X - \left(\frac{1}{n}i'X\right)i = \left[I - \frac{1}{n}ii'\right]X $$
Donde $I$ es la matriz identidad.

#### Varianza
Mide la dispersión promedio al cuadrado. Elevar al cuadrado evita que las desviaciones se anulen entre sí.

**1. Varianza Poblacional ($Var(X)$ o $\sigma^2$):**
Se utiliza cuando se tienen datos de toda la población ($N$).
$$ Var(X) = \frac{\sum_{i=1}^{N} (X_i - \bar{X})^2}{N} $$

**Derivación de la fórmula de cálculo:**
Expandiendo el binomio al cuadrado:

$$ \begin{aligned}
Var(X) &= \frac{1}{N} \sum (X_i^2 - 2X_i\bar{X} + \bar{X}^2) \\
&= \frac{1}{N} \left( \sum X_i^2 - 2\bar{X}\sum X_i + \sum \bar{X}^2 \right) \\
&= \frac{1}{N} \left( \sum X_i^2 - 2\bar{X}(N\bar{X}) + N\bar{X}^2 \right) \\
&= \frac{\sum X_i^2}{N} - \bar{X}^2
\end{aligned} $$

**2. Varianza Muestral ($S^2(X)$):**
Aplicada a un subconjunto de datos ($n$).
$$ S^2(X) = \frac{\sum_{i=1}^{n} (X_i - \bar{X})^2}{n} = \frac{\sum_{i=1}^{n} X_i^2}{n} - \bar{X}^2 $$

!!! warning "Varianza Sesgada vs. Insesgada"
    La fórmula presentada aquí divide por $n$. Esta es la **varianza muestral sesgada**. En inferencia estadística, es más común dividir por $n-1$ para obtener un estimador insesgado de la varianza poblacional.

#### Desviación Estándar ($\sigma$ o $S$)
Es la raíz cuadrada de la varianza. Su ventaja es que se expresa en las mismas unidades que la variable original.
$$ \sigma = \sqrt{Var(X)} $$

### 1.4. Medidas de Forma y Relación

#### Coeficiente de Variación (CV)
Medida de variabilidad relativa (adimensional). Útil para comparar dispersiones entre variables con distintas unidades o escalas.
$$ CV = \frac{\sigma}{\bar{X}} $$

#### Asimetría (Skewness)

Mide la simetría de la distribución.

$$ A = \frac{\frac{1}{n} \sum (X_i - \bar{X})^3}{\sigma^3} $$

*   **$A = 0$:** Simétrica (ej. Normal).

*   **$A > 0$:** Asimetría positiva (cola a la derecha, $\bar{X} > \text{Mediana}$).

*   **$A < 0$:** Asimetría negativa (cola a la izquierda, $\bar{X} < \text{Mediana}$).

#### Curtosis

Mide la concentración de datos en las colas (qué tan "puntiaguda" es la distribución respecto a la Normal).

$$ C = \frac{\frac{1}{n} \sum (X_i - \bar{X})^4}{\sigma^4} - 3 $$

*   **$C = 0$ (Mesocúrtica):** Similar a la Normal.

*   **$C > 0$ (Leptocúrtica):** Más puntiaguda, colas pesadas.

*   **$C < 0$ (Platicúrtica):** Más achatada, colas ligeras.

#### Covarianza y Correlación (Análisis Bivariado)
Estudian la relación lineal entre dos variables $X$ e $Y$.

1.  **Covarianza ($Cov(X,Y)$):**

    $$ Cov(X,Y) = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{n} = \frac{\sum X_iY_i}{n} - \bar{X}\bar{Y} $$
    *Problema:* Depende de las unidades de medida.

2.  **Correlación ($Corr(X,Y)$):**

    Estandariza la covarianza.

    $$ Corr(X,Y) = \frac{Cov(X,Y)}{\sigma_X \sigma_Y} $$

      - Mide la fuerza y dirección de la relación lineal. $0$ indica ausencia de relación lineal.
      - Rango: $[-1, 1]$.
      - **-1:** Relación lineal negativa perfecta.
      - **Entre -1 y 0:** Relación lineal negativa.
      - **0:** No existe relación lineal ($X$ e $Y$ son incorrelacionados).
      - **Entre 0 y 1:** Relación lineal positiva.
      - **+1:** Relación lineal positiva perfecta.

---

## Tema 2: Fundamentos de Probabilidad y Variables Aleatorias

La probabilidad modela matemáticamente la incertidumbre de un experimento aleatorio.

### 2.1. Conceptos Básicos

*   **Experimento:** Proceso con resultados no predecibles con certeza (ej. lanzar un dado).

*   **Espacio Muestral ($\Omega$):** Conjunto de todos los resultados posibles.
    *   Moneda: $\Omega = \{C, S\}$, $\#\Omega=2$.
    *   Dado: $\Omega = \{1, 2, 3, 4, 5, 6\}$, $\#\Omega=6$.

*   **Suceso ($A$):** Subconjunto de $\Omega$.

*   **Definición de Laplace:** Para sucesos equiprobables:

    $$ P(A) = \frac{\# \text{ casos favorables}}{\# \text{ casos posibles}} $$

**Operaciones con sucesos:**

*   **Unión ($A \cup B$):** Ocurre A o B.

*   **Intersección ($A \cap B$):** Ocurren A y B simultáneamente. Si $A \cap B = \emptyset$, son disjuntos.

*   **Complemento ($A^c$):** $\Omega - A$ (A no ocurre).

### 2.2. Esperanza Matemática ($E(X)$)

Es el análogo teórico a la media aritmética. Representa el promedio ponderado de los valores posibles de una variable aleatoria si el experimento se repitiera infinitas veces.

*   **Variables Discretas:**
    $$ E(X) = \sum_{i=1}^{n} X_i \cdot P(X_i) $$
    Donde $P(X_i)$ es la función de masa de probabilidad.
*   **Variables Continuas:**
    $$ E(X) = \int_{-\infty}^{\infty} x \cdot f(x) dx $$

### 2.3. Varianza de una Variable Aleatoria ($V(X)$)

Mide la dispersión esperada respecto a la esperanza. Se define mediante los **momentos**:
$$ V(X) = E[(X - E(X))^2] = E(X^2) - [E(X)]^2 $$

Donde $E(X^k)$ es el $k$-ésimo momento.

### 2.4. Ejemplos Prácticos

#### Ejemplo 1: Lanzamiento de una Moneda
Variable $X$: $1$ si Cara, $0$ si Sello. $P(X=1) = P(X=0) = 0.5$.

1.  **Esperanza:**
    $$ E(X) = 1(0.5) + 0(0.5) = 0.5 $$
2.  **Segundo Momento ($E(X^2)$):**
    $$ E(X^2) = 1^2(0.5) + 0^2(0.5) = 0.5 $$
3.  **Varianza:**
    $$ V(X) = 0.5 - (0.5)^2 = 0.25 $$

#### Ejemplo 2: Lanzamiento de un Dado
Variable $X \in \{1, 2, 3, 4, 5, 6\}$ con probabilidad $1/6$ cada uno.

1.  **Esperanza:**
    $$ E(X) = \frac{1}{6}(1+2+3+4+5+6) = \frac{21}{6} = 3.5 $$
    *(Nota: Con equiprobabilidad, $E(X)$ coincide numéricamente con el promedio simple de los valores).*

2.  **Segundo Momento ($E(X^2)$):**
    $$ E(X^2) = \frac{1}{6}(1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2) = \frac{91}{6} \approx 15.1667 $$

3.  **Varianza:**
    $$ V(X) = 15.1667 - (3.5)^2 = 15.1667 - 12.25 = 2.9167 $$

---

## Observaciones y Notas

- **Notación de Varianza:** Es fundamental distinguir entre dividir por $N$ (población) o $n$ (muestra sesgada). En cursos de inferencia posteriores, se introducirá el divisor $n-1$ (cuasivarianza) para corregir el sesgo.
- **Relación Media-Esperanza:** Mientras que $\bar{X}$ es un estadístico calculado sobre datos observados, $E(X)$ es un parámetro teórico de la distribución de probabilidad.
- **Matriz de Centrado:** La expresión $M^0 = [I - \frac{1}{n}ii']$ es crucial en econometría para derivar estimadores de Mínimos Cuadrados Ordinarios en forma matricial.