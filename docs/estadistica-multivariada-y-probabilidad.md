# Estadística Descriptiva Avanzada y Axiomas de Probabilidad

## Introducción
Este documento profundiza en la estadística descriptiva introduciendo medidas de forma (curtosis) y herramientas para el análisis bivariado (relación entre dos variables). Posteriormente, se formaliza la teoría de la probabilidad mediante su definición axiomática, leyes de conjuntos y principios de conteo. Finalmente, se presenta una sección práctica con ejercicios resueltos que integran conceptos teóricos y manipulación de datos con R.

## Objetivos de aprendizaje
Al finalizar este capítulo, el estudiante será capaz de:

- Interpretar la curtosis y la forma de la distribución de los datos.
- Calcular y entender la covarianza y la correlación entre dos variables.
- Conocer los axiomas fundamentales de la probabilidad y sus propiedades derivadas.
- Resolver problemas de esperanza matemática y varianza para variables discretas.
- Aplicar conceptos estadísticos en un entorno computacional (R).

---

## Tema 1: Medidas de Forma y Análisis Multivariado

### 1.1. Curtosis (Cuarto Momento)
La curtosis mide el grado de apuntamiento o achatamiento de una distribución en comparación con la distribución normal. Analiza la concentración de datos en la zona central y en las colas.

**Fórmula:**
$$ C = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^4}{n\sigma^4} - 3 $$
*(El "-3" se utiliza para que la distribución normal tenga una curtosis de 0).*

**Clasificación de distribuciones:**

*   **Mesocúrtica ($C=0$):** Distribución normal estándar.

*   **Leptocúrtica ($C>0$):** Más puntiaguda que la normal. Los datos están muy concentrados en la media y las colas son "pesadas" (mayor probabilidad de valores extremos).

*   **Platicúrtica ($C<0$):** Más achatada que la normal. Los datos están más dispersos y las colas son "ligeras".

### 1.2. Análisis Bivariado: Covarianza y Correlación
Mientras el análisis univariado describe una sola variable, el multivariado estudia la relación entre ellas (ej. relación entre edad y salarios).

#### Covarianza ($Cov$)
Mide la dirección de la relación lineal entre dos variables $X$ e $Y$.

**Definición Teórica:**
$$ Cov(X, Y) = E[(X - \bar{X})(Y - \bar{Y})] $$

**Propiedades:**

1.  **Conmutatividad:** $Cov(X, Y) = Cov(Y, X)$.

2.  **Relación con la Varianza:** La covarianza de una variable consigo misma es su varianza.
    $$ Cov(X, X) = \sigma^2 $$

**Fórmula de Cálculo:**
$$ Cov(X,Y) = \frac{\sum xy}{n} - \bar{x}\bar{y} $$

!!! note "Derivación de la fórmula de cálculo"
    Partiendo de la suma de productos cruzados:

    $$ \begin{aligned}
    \sum (x-\bar{x})(y-\bar{y}) &= \sum (xy - x\bar{y} - \bar{x}y + \bar{x}\bar{y}) \\
    &= \sum xy - \bar{y}\sum x - \bar{x}\sum y + \sum \bar{x}\bar{y}
    \end{aligned} $$
    
    Sabiendo que $\sum x = n\bar{x}$ y $\sum y = n\bar{y}$:
    
    $$ \begin{aligned}
    &= \sum xy - \bar{y}(n\bar{x}) - \bar{x}(n\bar{y}) + n\bar{x}\bar{y} \\
    &= \sum xy - n\bar{x}\bar{y} - n\bar{x}\bar{y} + n\bar{x}\bar{y} \\
    &= \sum xy - n\bar{x}\bar{y}
    \end{aligned} $$
    
    Dividiendo por $n$ obtenemos la covarianza:
    $$ Cov(X,Y) = \frac{\sum xy}{n} - \bar{x}\bar{y} $$

**Interpretación:**

*   $Cov > 0$: Relación positiva (Si $X \uparrow \implies Y \uparrow$).

*   $Cov < 0$: Relación negativa (Si $X \uparrow \implies Y \downarrow$).

*   $Cov = 0$: No existe relación lineal.

**Limitación:** El valor depende de las unidades de medida, dificultando la comparación.

#### Coeficiente de Correlación ($r$ o $Corr$)
Es una medida estandarizada (sin unidades) que cuantifica la fuerza y dirección de la relación lineal. Rango: $[-1, 1]$.

$$ Corr(X, Y) = \frac{Cov(X, Y)}{\sigma_x \sigma_y} $$

Alternativamente, usando valores esperados:

$$ Corr(X, Y) = \frac{E(XY) - E(X)E(Y)}{\sqrt{E(X^2) - [E(X)]^2} \sqrt{E(Y^2) - [E(Y)]^2}} $$

---

## Tema 2: Teoría de la Probabilidad

### 2.1. Leyes de Conjuntos
La probabilidad se fundamenta en la teoría de conjuntos.

*   **Ley Conmutativa:** $A \cup B = B \cup A$  |  $A \cap B = B \cap A$

*   **Ley Asociativa:** $A \cup (B \cup C) = (A \cup B) \cup C$

*   **Ley Distributiva:** $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$

### 2.2. Definición Axiomática (Kolmogorov)
Una medida de probabilidad $P$ sobre un espacio muestral $\Omega$ debe cumplir tres axiomas:

1.  **No negatividad:** Para cualquier evento $A$, $P(A) \geq 0$.
2.  **Certidumbre:** La probabilidad del espacio muestral es 1 ($P(\Omega) = 1$).
3.  **Aditividad:** Si $A_1, A_2, \dots$ son eventos disjuntos ($A_i \cap A_j = \emptyset$), entonces:

    $$ P(A_1 \cup A_2) = P(A_1) + P(A_2) $$

**Propiedades derivadas:**

*   **Complemento:** $P(A^c) = 1 - P(A)$.

*   **Evento Imposible:** $P(\emptyset) = 0$.

*   **Subconjunto:** Si $A \subset B \implies P(A) \leq P(B)$.

*   **Regla de la Suma (General):** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

### 2.3. Definición Clásica y Conteo
Para espacios muestrales finitos y equiprobables:

$$ P(A) = \frac{\#A}{\#\Omega} = \frac{\text{Casos Favorables}}{\text{Casos Totales}} $$

**Principio de la Multiplicación:**

Si un experimento tiene $k$ etapas con $n_1, n_2, \dots, n_k$ opciones respectivamente, el total de resultados es:

$$ \#\Omega = n_1 \times n_2 \times \dots \times n_k $$

**Ejemplos de cálculo de espacio muestral:**

*   **Monedas:** Lanzar $k$ monedas genera $2^k$ resultados. (Ej. 5 monedas $\rightarrow 32$ resultados).

*   **Dados:** Lanzar 2 dados genera $6 \times 6 = 36$ resultados.

*   **Combinado:** 5 dados y 10 monedas.

    $$ \#\Omega = 6^5 \times 2^{10} = 7,962,624 \text{ resultados posibles} $$

**Independencia:**
Si dos eventos son independientes, el tamaño del espacio muestral combinado es el producto de sus espacios individuales: $\#\Omega = \#\Omega_1 \times \#\Omega_2$.

---

## Tema 3: Ejercicios Resueltos y Aplicaciones

Esta sección compila problemas teóricos de valor esperado y varianza, junto con notas sobre manejo de datos en R.

### 3.1. Problemas de Valor Esperado y Varianza

#### Ejercicio 1: Propiedad de Linealidad en Dados
**Pregunta:** Si se lanza un dado y el valor obtenido se multiplica por 2, ¿cuál es la nueva esperanza matemática?

*   **Dado normal ($d$):** $E(d) = 3.5$.

*   **Dado modificado ($X = 2d$):** Valores posibles $\{2, 4, 6, 8, 10, 12\}$.

*   **Cálculo directo:**

    $$ E(X) = \frac{2+4+6+8+10+12}{6} = \frac{42}{6} = 7 $$

*   **Conclusión:** Se cumple que $E(aX) = aE(X) \rightarrow 2(3.5) = 7$.

#### Ejercicio 2: Varianza del Dado Modificado

**Pregunta:** Calcule la varianza para el dado del ejercicio anterior ($X = 2d$).

*   Sabemos que $E(X) = 7$.
*   Calculamos el segundo momento $E(X^2)$:
    $$ E(X^2) = \frac{2^2+4^2+6^2+8^2+10^2+12^2}{6} = \frac{364}{6} \approx 60.67 $$
*   Varianza:
    $$ V(X) = E(X^2) - [E(X)]^2 \approx 60.67 - 49 = 11.67 $$
*   *Nota Teórica:* También se cumple que $V(aX) = a^2V(X)$. Para un dado normal, $V(d) \approx 2.91$. Entonces $V(2d) = 2^2(2.91) = 4(2.91) \approx 11.64$.


#### Ejercicio 3: Moneda Sesgada

**Pregunta:** Sea una moneda donde Cara ($C=0$) tiene $P(C)=3/4$ y Sello ($S=1$) tiene $P(S)=1/4$. Calcule $E(X)$ y $V(X)$.

1.  **Esperanza:**
    $$ E(X) = 0(\tfrac{3}{4}) + 1(\tfrac{1}{4}) = 0.25 $$
2.  **Varianza:**

    $$ E(X^2) = 0^2(\tfrac{3}{4}) + 1^2(\tfrac{1}{4}) = 0.25 $$

    $$ V(X) = E(X^2) - [E(X)]^2 = 0.25 - (0.25)^2 = 0.25 - 0.0625 = 0.1875 $$

#### Ejercicio 4: Esperanza de Distribución No Uniforme

**Pregunta:** Variable $X$ con valores $\{2, 3, 4, 5, 6\}$ y probabilidades $\{1/9, 2/9, 3/9, 2/9, 1/9\}$.

$$ E(X) = 2(\tfrac{1}{9}) + 3(\tfrac{2}{9}) + 4(\tfrac{3}{9}) + 5(\tfrac{2}{9}) + 6(\tfrac{1}{9}) $$

$$ E(X) = \frac{2 + 6 + 12 + 10 + 6}{9} = \frac{36}{9} = 4 $$

### 3.2. Notas de Análisis de Datos y R

#### Variables Dummy (Dicotómicas)

Para incluir una variable categórica en un modelo de regresión:

*   Si la variable tiene $m$ categorías, se deben construir **$m-1$ variables dummy** (binarias).

*   Esto evita la multicolinealidad perfecta (trampa de la variable dummy).

#### Interpretación de Coeficiente de Variación (CV)

Si en un conjunto de datos (ej. distrito Surquillo) se tiene un CV mayor al promedio de todos los grupos, significa que la dispersión relativa de los datos en ese grupo es mayor (los datos son más heterogéneos).

#### Snippets de Código R (Ejemplos con base de datos BCRP)

!!! warning "Requisito de Datos"
    Los siguientes códigos asumen la existencia de un DataFrame llamado `bdata`.

1.  **Promedio agrupado:** Calcular la media de `superficie` por `Año`.
    ```r
    aggregate(bdata$superficie, by = list(bdata$Año), FUN = mean)
    ```

2.  **Filtrado y cálculo específico:** Promedio de precios en "Miraflores" año 2010.
    ```r
    # Filtra filas donde Distrito es Miraflores Y Año es 2010
    # Selecciona la columna 5 (Precio)
    mean(bdata[bdata$Distrito == "Miraflores" & bdata$Año == 2010, 5 ])
    ```

---

## Observaciones y notas
- **Corrección en Ejercicio 3:** El apunte original sugería un resultado de 0.29 para la varianza de la moneda. El cálculo correcto es $0.1875$ (o $3/16$).
- **Variables categóricas:** Aunque en bases de datos pueden aparecer como `string` o `byte`, para el análisis cuantitativo deben transformarse a variables numéricas o dummies.
- **Interpretación de Asimetría:** Si la asimetría es positiva (ej. 3.316) y la curtosis es alta (ej. 27), la distribución es asimétrica a la derecha y leptocúrtica (picos altos, colas pesadas).