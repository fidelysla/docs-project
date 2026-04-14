# Métodos de Muestreo Probabilístico

## 1. Introducción al Muestreo y la Inferencia Estadística

Uno de los objetivos primordiales de la Estadística es realizar inferencias acerca de las características de una población. Dado que estudiar a todos los elementos de una población suele ser inviable, estas inferencias se basan en la información obtenida a partir de una **muestra**.

Para que las conclusiones estadísticas sean válidas y confiables, la muestra extraída debe ser estrictamente **representativa** de la población de interés. Por ello, de acuerdo con las características particulares de la población, el investigador debe elegir un método de muestreo adecuado.

El **muestreo** se consolida así como una herramienta fundamental de la investigación científica. Su función básica es determinar qué parte de una realidad en estudio (población) debe examinarse con la finalidad de hacer inferencias precisas sobre dicha población en su conjunto.

---

## 2. Conceptos Básicos Fundamentales

Para comprender adecuadamente la teoría del muestreo, es indispensable definir los elementos que intervienen en el proceso de investigación estadística:

- **Población:** Es la colección completa de todos los individuos, objetos u observaciones que poseen al menos una característica en común que es de interés para el estudio.
- **Población Objetivo:** Es aquella porción de la población que está completamente caracterizada y delimitada, y a partir de la cual se seleccionará efectivamente la muestra.
- **Marco Muestral:** Se define como el listado físico o referencial de los elementos desde los cuales se seleccionará la muestra.
- **Muestra:** Es una parte o porción extraída de un conjunto mayor (población), obtenida mediante métodos estadísticos que permiten considerarla representativa del mismo. En este contexto, se le denomina muestra estadística.
- **Unidad de Análisis:** Se define como el elemento individual que se observa y del cual se obtiene directamente la información relacionada con las variables de interés.
- **Unidad de Muestreo:** Es el elemento o conjunto de elementos seleccionados en el proceso de muestreo.
  - Puede ser un simple elemento de la población (unidad elemental de muestreo, como un individuo).
  - También pueden considerarse grupos de elementos que cubren la población completa (unidad de muestreo compuesta o unidad primaria, como una familia completa).
- **Datos:** Son los valores específicos que se obtienen o recolectan al medir la unidad de análisis, utilizados para conocer y analizar las características de la población.

---

## 3. El Procedimiento Estadístico y la Inferencia

El procedimiento estadístico describe un ciclo continuo entre lo que se desea conocer (la población) y lo que efectivamente se analiza (la muestra).

1.  **De la Población a la Muestra (Muestreo):** A partir de una población de tamaño $N$, se aplican técnicas de muestreo para extraer una muestra de tamaño $n$.
2.  **De la Muestra a la Población (Inferencia Estadística):** Una vez analizados los datos de la muestra, se utilizan sus resultados (estadísticos) para inferir o estimar el comportamiento de la población original (parámetros).

> **Nota:** La cantidad de muestras posibles que se pueden extraer de una población depende del método:
>
> - Si se aplica muestreo **con reemplazo**, se obtendrían $N^n$ muestras posibles.
> - Si se aplica muestreo **sin reemplazo**, se obtendrían $P(N;n)$ (permutaciones o combinaciones, dependiendo del orden) muestras posibles.

---

## 4. Parámetros y Estadígrafos (Estadísticos)

Es fundamental distinguir entre las medidas que describen a la población completa y las que describen únicamente a la muestra.

### 4.1. Parámetro

Es una medida de resumen que representa alguna característica numérica de la **población**. Su valor se calcula en base al estudio de la población completa (lo que se conoce como **censo**).
Usualmente, en la práctica investigativa, los parámetros son valores desconocidos, por lo que deben ser estimados.

### 4.2. Estadígrafo (o Estadístico)

Es una medida de resumen que representa alguna característica de la **muestra**. Su valor numérico se calcula estrictamente en base a la información obtenida de la muestra (mediante el proceso de **muestreo**).
El estadígrafo funciona como un estimador puntual del parámetro poblacional. Además, son considerados variables aleatorias, ya que tienen una distribución de probabilidad asociada.

### Resumen de Representación Simbólica

A nivel matemático, se utiliza una nomenclatura específica (letras griegas para parámetros y letras latinas para estadígrafos) para evitar confusiones:

| Medida de resumen              | Parámetro Poblacional | Estadígrafo Muestral |
| :----------------------------- | :-------------------: | :------------------: |
| **Media**                      |         $\mu$         |      $\bar{X}$       |
| **Varianza**                   |      $\sigma^2$       |        $S^2$         |
| **Desviación Estándar**        |       $\sigma$        |         $S$          |
| **Proporción**                 |         $\pi$         |         $p$          |
| **Coeficiente de correlación** |        $\rho$         |         $r$          |

_(En algunas literaturas, los elementos de la población se denotan como $X_1, X_2, ..., X_N$ y los de la muestra como $X_1, X_2, ..., X_n$)._

---

## 5. Errores en la Investigación Estadística

Al realizar inferencias a partir de una muestra, siempre existe un margen de desviación respecto a la realidad poblacional. Estos errores se clasifican en dos grandes grupos:

### 5.1. Error de Muestreo

Es el error inherentemente asociado al hecho de obtener conclusiones sobre una población a partir de la observación de solo una fracción (muestra) de ella. Matemáticamente, es la diferencia absoluta entre el estadístico obtenido y el parámetro real.

$$
\text{Error de Muestreo} = |\bar{x} - \mu|
$$

> **Nota:** Este error se debe exclusivamente a que la muestra no proporciona la información completa sobre el parámetro. Sin embargo, la ventaja es que **puede ser medido y controlado** utilizando las técnicas estadísticas adecuadas.

### 5.2. Error No Muestral

Existe otro tipo de error ajeno al proceso estadístico de selección de la muestra. Este es más difícil de medir y es generado por deficiencias en la ejecución del estudio, tales como:

- Elevada tasa de no respuesta.
- Errores en el diseño del cuestionario o instrumento de medición.
- Sesgos introducidos por el entrevistador o investigador.
- Errores en la digitación o procesamiento de datos.

---

## 6. Justificación: ¿Por qué muestrear una población?

Aunque un censo (estudiar a toda la población) brinda el valor exacto de los parámetros, el muestreo es la práctica estándar por las siguientes razones principales:

1.  **Naturaleza destructiva de pruebas:** En procesos industriales o de laboratorio, evaluar un elemento puede implicar su destrucción (ej. probar la resistencia de un material hasta que se rompa).
2.  **Imposibilidad física:** En ocasiones, es físicamente imposible rastrear y estudiar a todos los elementos que componen una población.
3.  **Reducción de costos:** El costo logístico y operativo que implica el estudio de toda la población suele ser prohibitivo.
4.  **Ahorro de tiempo:** El tiempo requerido para encuestar o medir a toda la población suele ser demasiado extenso, lo que podría hacer que los datos queden obsoletos antes de publicar los resultados.
5.  **Precisión aceptable:** El estudio de una muestra adecuadamente seleccionada proporcionará una exactitud bastante aceptable, sólidamente respaldada por la teoría estadística.

---

## 7. Clasificación General: Tipos de Muestreo

Los métodos para extraer una muestra se dividen en dos categorías fundamentales:

### I. Muestreo Probabilístico

Se caracteriza porque **cada elemento de la población tiene una probabilidad determinada (y conocida)** de ser seleccionado para conformar la muestra.

- La selección se realiza mediante un proceso rigurosamente **aleatorio**.
- La probabilidad de selección de cada elemento se determina en función de la naturaleza del diseño muestral elegido.
- _Es el único método que permite medir el error de muestreo y hacer inferencia estadística válida._

### II. Muestreo No Probabilístico

Es aquel en el que la selección de los elementos de la muestra **no se hace al azar**. Depende de criterios subjetivos del investigador, conveniencia o disponibilidad de los sujetos.

- Dado que no hay probabilidad calculable, sus resultados no pueden ser utilizados para realizar inferencias estadísticas rigurosas sobre la población.

---

## 8. Tipos de Muestreo Probabilístico

El diseño estadístico contempla diversos esquemas para la extracción aleatoria de una muestra. La elección del método adecuado dependerá de la naturaleza de la población, la disponibilidad de un marco muestral y los recursos de la investigación.

Los principales métodos de muestreo probabilístico son:

1. Muestreo Aleatorio Simple (M.A.S)
2. Muestreo Sistemático
3. Muestreo Estratificado
4. Muestreo por Conglomerados
5. Muestreo Polietápico

---

### 8.1. Muestreo Aleatorio Simple (M.A.S)

Es el diseño probabilístico más básico y fundamental. Se define teóricamente por el hecho de que **cada unidad de la población tiene exactamente la misma probabilidad de ser seleccionada** para conformar la muestra.

**Condición de aplicación:**
El M.A.S es altamente eficiente y se aplica de manera óptima cuando la **población es homogénea** respecto a la variable de interés (es decir, no existen subgrupos con características marcadamente diferentes).

**Procedimiento de selección:**

1. **Conformación del marco muestral:** Se deben enumerar todos los elementos de la población objetivo desde el $1$ hasta $N$.
2. **Arranque:** Utilizando una Tabla de Números Aleatorios o un software estadístico adecuado, se selecciona la primera unidad al azar.
3. **Completar la muestra:** Se continúa la selección aleatoria de elementos hasta completar el tamaño de muestra requerido ($n$).

> **Nota sobre el reemplazo:**
>
> - **Muestreo con reemplazo (o reposición):** Un elemento ya seleccionado es devuelto a la población y puede volver a ser elegido en extracciones posteriores. Se incluyen las unidades repetidas hasta alcanzar $n$.
> - **Muestreo sin reemplazo:** Un elemento seleccionado se retira de la población. Si el sistema aleatorio arroja un número repetido, este se excluye y se extrae otro hasta completar la muestra $n$.

**Consideraciones prácticas:**

- Generalmente, el M.A.S se utiliza de forma aislada en encuestas de pequeña escala.
- En investigaciones de gran escala poblacional, el M.A.S rara vez se usa solo; más bien, se utiliza como un paso intermedio dentro de diseños de muestreo más complejos (como el estratificado o por conglomerados).

---

### 8.2. Muestreo Sistemático

Este método es una alternativa al M.A.S que introduce un patrón de salto constante en la selección.

**Procedimiento de selección:**
Dada una población de $N$ elementos de la cual se necesita extraer una muestra de tamaño $n$:

1.  **Ordenamiento:** Se ordenan los elementos de la población en función de alguna variable o criterio lógico y se enumeran del $1$ al $N$.
2.  **Cálculo del intervalo de selección ($k$):** Se determina la frecuencia de salto dividiendo el tamaño de la población entre el tamaño de la muestra deseada.

    $$
    k = \frac{N}{n}
    $$

3.  **Arranque aleatorio:** Se elige de forma estrictamente aleatoria un número entero entre $1$ y $k$. Este será el primer elemento de la muestra.
4.  **Selección sistemática:** A partir del elemento de arranque, se selecciona el siguiente elemento sumando el valor de $k$ posiciones, y así sucesivamente ($arranque, arranque + k, arranque + 2k...$) hasta completar la muestra $n$.

**Ejemplo Práctico:**

- Población ($N$) = $100$
- Muestra deseada ($n$) = $20$
- Intervalo ($k$) = $100 / 20 = 5$
- Arranque aleatorio elegido entre $1$ y $5$: **Se elige el 4.**
- _Elementos seleccionados:_ El $4^{to}$, el $9^{no} (4+5)$, el $14^{vo} (9+5)$, el $19^{no}$, el $24^{to}$... hasta llegar al elemento $99$, obteniendo así las 20 unidades.

> **Notas de aplicación:**
>
> - **Ventaja:** Este tipo de muestreo es muy útil porque puede ser aplicado en investigaciones de campo donde **no se cuenta con un marco muestral físico impreso** (por ejemplo, encuestar a 1 de cada 10 clientes que entran a una tienda).
> - **Precaución (Sesgo de periodicidad):** Si la población ordenada presenta una variación cíclica que coincide de casualidad con un múltiplo del intervalo de selección $k$, la muestra estará gravemente sesgada. En ese caso, se debe cambiar el intervalo, replantear el orden del marco muestral, o elegir otro método estadístico.

---

### 8.3. Muestreo Estratificado

Este método se utiliza cuando la población presenta una gran heterogeneidad general, pero puede ser subdividida en grupos internamente similares.

El proceso consiste en dividir o agrupar a los elementos de la población en subconjuntos llamados **estratos**, basándose en su semejanza respecto a las variables que se van a investigar. Posteriormente, se selecciona una muestra independiente de _cada uno_ de los estratos (usualmente mediante Muestreo Aleatorio Simple o Sistemático).

**Características Críticas de los Estratos:**
Para que la estratificación sea efectiva y disminuya la variabilidad matemática de la población, debe cumplirse la siguiente regla fundamental:

- Las unidades **dentro de cada estrato** deben ser lo más homogéneas posible (_Baja variabilidad interna_).
- Las unidades **entre distintos estratos** deben ser lo más heterogéneas posible (_Alta variabilidad externa_).
- Los estratos deben formarse de modo que exista total independencia entre ellos (un elemento pertenece a un estrato y solo a uno).

#### Determinación del tamaño de muestra: Afijación Proporcional

El número de elementos que se extraerá de cada estrato se determina mediante un método de "afijación". El más común es la **afijación proporcional**, donde el tamaño de la submuestra es directamente proporcional al peso que tiene ese estrato en la población total.

**Modelo Matemático:**
Paso 1: Se divide la población en $k$ estratos. Cada estrato consta de $N_i$ unidades muestrales, por lo que la suma de los estratos equivale a la población total ($N$):

$$
N = N_1 + N_2 + ... + N_k
$$

Paso 2: La muestra total deseada es $n$, la cual será la suma de las submuestras obtenidas de cada estrato ($n_i$):

$$
n = n_1 + n_2 + n_3 + ... + n_k
$$

Paso 3: Se calcula el tamaño específico de la muestra para cada estrato ($n_i$) utilizando la siguiente fórmula de proporción:

$$
n_i = n \left( \frac{N_i}{N} \right)
$$

_Donde $\frac{N_i}{N}$ representa la fracción o peso del estrato respecto al total poblacional._

---

#### Aplicación de Afijación Proporcional y Análisis de Costos (Ejemplo)

Supongamos que se desea realizar una encuesta y calcular su costo total.

- Población Total ($N$) = $12,400$
- Número de estratos ($k$) = $3$
- Muestra Total a extraer ($n$) = $600$
- Costo Fijo (operativo/logístico) de la encuesta ($CF$) = S/. $2000$

La distribución poblacional y el costo unitario de muestrear un elemento en cada estrato ($c_h$) se detallan a continuación. Al aplicar la fórmula $n_i = 600 \times (\frac{N_i}{12400})$, obtenemos el tamaño de submuestra ($n_h$) respectivo:

| ESTRATOS  | Número de elementos poblacionales ($N_h$) | Costo de muestreo unitario ($c_h$) | Tamaño de submuestra ($n_h$) |
| :-------: | :---------------------------------------: | :--------------------------------: | :--------------------------: |
|   **I**   |                 $10,250$                  |              S/. $5$               |            $496$             |
|  **II**   |                  $1,300$                  |              S/. $10$              |             $63$             |
|  **III**  |                   $850$                   |              S/. $15$              |             $41$             |
| **TOTAL** |               **$12,400$**                |                                    |          **$600$**           |

**Cálculo del Costo Total ($C$):**
El costo total de la investigación está dado por la suma del Costo Fijo ($CF$) más el Costo Variable ($CV$), siendo el costo variable la sumatoria del costo de encuestar a los individuos de cada estrato.

La ecuación de costo es:

$$
C = CF + \sum_{i=1}^{k} n_i c_i
$$

Sustituyendo con los valores del ejemplo:

$$
C = 2000 + [ (496 \times 5) + (63 \times 10) + (41 \times 15) ]
$$

$$
C = 2000 + [ 2480 + 630 + 615 ]
$$

$$
C = 2000 + 3725
$$

$$
C = \text{S/. } 5725
$$

---

### 8.4. Muestreo por Conglomerados

En este diseño, la población no se concibe como un conjunto de individuos aislados, sino como un conjunto de grupos o bloques naturales llamados **conglomerados**.

El proceso fundamental consiste en elegir de forma aleatoria uno o varios de estos conglomerados. La muestra final estará conformada por **todos los elementos** que pertenecen a los conglomerados seleccionados.

**Procedimiento de selección:**

1.  Se divide a los elementos de la población en conjuntos o grupos separados (conglomerados). El marco de muestreo, en este caso, es una lista de estos conglomerados, no de individuos.
2.  Se toma una muestra aleatoria simple de los conglomerados.
3.  Se encuestan o miden absolutamente todos los elementos dentro de cada conglomerado seleccionado.

> **Nota sobre la estructura poblacional:**
> En el caso ideal, cada conglomerado debe ser una versión representativa a pequeña escala de toda la población. Cabe destacar que cada uno de los conglomerados puede tener un número diferente de elementos internos. Es un método muy utilizado en investigaciones a gran escala por su eficiencia logística.

**Criterios de Variabilidad (Regla de Oro):**
Para que el diseño muestral por conglomerados sea estadísticamente eficiente, la variabilidad debe comportarse de forma exactamente opuesta al muestreo estratificado:

- **Heterogeneidad dentro (Intra-conglomerado):** Los elementos dentro de un mismo conglomerado deben ser lo más distintos (heterogéneos) posible entre sí.
- **Homogeneidad entre (Inter-conglomerado):** Un conglomerado, en su conjunto, debe ser lo más similar (homogéneo) posible a los demás conglomerados.

**Ejemplo Práctico:**
Se desea obtener información sobre el consumo de cierto producto en todas las familias residentes en el distrito de Miraflores.

- Para subdividir esta extensa región, se divide la zona en manzanas. Se forman así $70$ conglomerados (manzanas).
- Se eligen aleatoriamente $10$ manzanas.
- La muestra total estará dada por **todas** las familias que residen exclusivamente en esas $10$ manzanas elegidas.

---

### 8.5. Muestreo Multietápico (o Polietápico)

El muestreo multietápico es una generalización o extensión del muestreo por conglomerados. Su característica principal es que el proceso de selección se realiza en **dos o más etapas**, combinando diferentes métodos probabilísticos (como aleatorio simple, estratificado o sistemático).

**Procedimiento básico (Muestreo bietápico / dos etapas):**

1.  **Primera etapa:** Se realiza un muestreo por conglomerados (se selecciona aleatoriamente una muestra de conglomerados base).
2.  **Segunda etapa:** A diferencia del método anterior (donde se encuestaba a todos), aquí **no se eligen todos los elementos** del conglomerado seleccionado. En su lugar, se extrae una _submuestra_ aleatoria de elementos dentro de cada conglomerado, utilizando un muestreo aleatorio simple, sistemático o estratificado.

> **Nota:** La generalización de este procedimiento a más de dos fases (ej. seleccionar regiones $\rightarrow$ luego provincias $\rightarrow$ luego distritos $\rightarrow$ luego manzanas $\rightarrow$ luego viviendas) se denomina formalmente **Muestreo Polietápico**. Este enfoque ofrece las mismas ventajas logísticas del muestreo por conglomerados, logrando una significativa reducción de costos y tiempo en el trabajo de campo.

---

## 9. Muestreo No Probabilístico

El muestreo no probabilístico agrupa a las técnicas donde **los elementos de la población no tienen una probabilidad conocida o determinada de ser seleccionados**.

Al no intervenir el azar matemático en la selección, este método presenta limitaciones estadísticas fundamentales:

- **No es posible calcular el error muestral** que puede producirse.
- No se puede medir matemáticamente la precisión y el nivel de confianza de las estimaciones.
- Los elementos suelen seleccionarse porque están fácilmente disponibles, y en muchos casos no está claramente delimitada cuál es la población exacta desde la cual se está seleccionando la muestra.

A pesar de sus limitaciones para la inferencia, son métodos útiles, económicos y rápidos. Los tipos más utilizados son:

### 9.1. Muestreo por Conveniencia

Como su nombre lo indica, la muestra se selecciona bajo la absoluta conveniencia, accesibilidad o proximidad de la persona que realiza la investigación.

- **Uso común:** Se utilizan generalmente en las primeras etapas de una investigación (estudios exploratorios) como base para generar hipótesis de trabajo, antes de invertir en un diseño probabilístico riguroso.
- **Ejemplos:**
  - Entrevistar únicamente a los clientes que se encuentran en una sucursal bancaria específica para solicitar su opinión sobre la calidad de atención de dicha agencia.
  - Entrevistar a transeúntes al azar en una calle concurrida respecto a su percepción de la inseguridad ciudadana.

### 9.2. Muestreo por Juicio de Expertos (o Intencional)

En este enfoque, la selección de la muestra depende del criterio profesional y los conocimientos previos del investigador o de un especialista en el tema.

- La muestra se conforma de acuerdo con lo que el experto piensa que son los "mejores" elementos, o los más representativos, para responder al objetivo particular de la investigación.
- **Ejemplo:** Seleccionar a criterio de un gerente de marketing un grupo específico de sucursales de un supermercado para presentar o probar un nuevo producto, asumiendo que esas sucursales representan fielmente el perfil del consumidor objetivo.

### 9.3. Muestreo por Cuotas

La idea básica del muestreo por cuotas es tratar de "reproducir" en la muestra ciertas características demográficas o perfiles de la población general (por ejemplo: cuotas específicas de género, grupos de edad, nivel socioeconómico, etc.).

- El supuesto metodológico es que, si la muestra logra reproducir a la población en estas variables de control, también podría replicar su comportamiento en las demás variables de estudio.
- **Diferencia clave con el muestreo estratificado:** Aunque conceptualmente es muy semejante al método de estratos, la diferencia fundamental radica en que, en el muestreo por cuotas, **el encuestador utiliza su propio elemento de juicio para elegir a las personas que llenarán dicha cuota**. Al existir esta libre elección humana y no un sorteo aleatorio, es imposible determinar la probabilidad matemática de seleccionar a una unidad dada de la población.
