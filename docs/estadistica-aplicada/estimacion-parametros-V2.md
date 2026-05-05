# ESTADÍSTICA APLICADA: ESTIMACIÓN DE PARÁMETROS

## PARTE I: TEORÍA Y FÓRMULAS ESTADÍSTICAS

### 1. Inferencia Estadística

La inferencia estadística es la rama de la estadística que nos permite sacar conclusiones (inferir) sobre los parámetros de toda una población, basándonos en la información obtenida de una muestra representativa extraída de dicha población.

Los dos pilares fundamentales de la inferencia estadística son:

1.  **Estimación de parámetros** (Puntual y por Intervalos).
2.  **Prueba de Hipótesis**.

---

### 2. Estimación Puntual y Propiedades de un Buen Estimador

La estimación puntual consiste en utilizar un único valor numérico (calculado a partir de los datos de la muestra) para aproximar el valor de un parámetro poblacional desconocido.

A la estadística calculada en la muestra (por ejemplo, la media muestral $\bar{x}$) se le llama **estimador**, y al parámetro de la población que se desea descubrir (por ejemplo, la media poblacional $\mu$) se le denota genéricamente como $\theta$.

Un buen estimador puntual $\hat{\theta}$ debe cumplir con cuatro propiedades matemáticas fundamentales:

1.  **Insesgamiento (Estimador Insesgado):** Su valor esperado (media de todas las estimaciones posibles) es exactamente igual al parámetro poblacional. No sobrestima ni subestima sistemáticamente.
    
    $$E(\hat{\theta}) = \theta$$

2.  **Consistencia:** A medida que el tamaño de la muestra ($n$) crece tendiendo al infinito, la varianza del estimador tiende a cero y la estimación se acerca con probabilidad 1 al parámetro real.

    $$\lim_{n \to \infty} E(\hat{\theta}) = \theta \quad \text{y} \quad \lim_{n \to \infty} V(\hat{\theta}) = 0$$

3.  **Eficiencia:** Si tenemos dos estimadores insesgados para un mismo parámetro, el más eficiente es aquel que tiene la **menor varianza**.

    $$V(\hat{\theta}_1) < V(\hat{\theta}_2)$$

4.  **Suficiencia:** El estimador extrae y utiliza toda la información contenida en la muestra acerca del parámetro.

#### Principales Estimadores Puntuales

- **Para la Media Poblacional ($\mu$):** La media muestral ($\bar{x}$).
  $$ \hat{\mu} = \bar{x} = \frac{\sum x_i}{n} $$
- **Para la Varianza Poblacional ($\sigma^2$):** La varianza muestral ($s^2$).
  $$ \hat{\sigma}^2 = s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1} $$
- **Para la Proporción Poblacional ($\pi$ o $P$):** La proporción muestral ($p$).
  $$ \hat{\pi} = p = \frac{k}{n} $$ _(Donde $k$ son los casos de éxito)._

---

### 3. Estimación por el Método de los Momentos

Es una técnica para encontrar estimadores puntuales. Consiste en igualar los **momentos muestrales** (características calculadas en los datos) con los **momentos poblacionales** (esperanzas matemáticas teóricas) y resolver el sistema de ecuaciones resultante.

- Momento poblacional de orden $k$: $E(X^k)$
- Momento muestral de orden $k$: $m_k = \frac{\sum x_i^k}{n}$
- El método plantea que: $m_k = E(X^k)$ para $k = 1, 2, ..., m$.

---

### 4. Estimación por Intervalos de Confianza (Concepto General)

Dado que la estimación puntual casi nunca acierta al valor exacto del parámetro debido al error aleatorio de muestreo, es preferible construir un **Intervalo de Confianza (IC)**.

Un intervalo de confianza nos da un límite inferior ($L_{inf}$) y un límite superior ($L_{sup}$) dentro de los cuales, con un cierto nivel de probabilidad o **nivel de confianza ($1 - \alpha$)**, se encuentra el verdadero valor del parámetro $\theta$.

$$ P(L*{inf} \le \theta \le L*{sup}) = 1 - \alpha $$

_Donde:_

- $1 - \alpha$: Nivel de confianza (ej. 0.90, 0.95, 0.99).
- $\alpha$: Nivel de significancia (probabilidad de error).

---

### 5. Intervalos de Confianza para UNA Población

#### 5.1. Para la Media ($\mu$)

La fórmula depende de si conocemos la varianza de la población ($\sigma^2$) y de si la población es infinita o finita (si conocemos su tamaño $N$).

**A. Con Varianza ($\sigma^2$) Poblacional Conocida:**
Utilizamos la distribución Normal Estándar ($Z$).
$$ IC(\mu) = \bar{x} \pm z\_{1-\alpha/2} \cdot \frac{\sigma}{\sqrt{n}} $$

**B. Con Varianza ($\sigma^2$) Desconocida (Se usa la muestral $s^2$):**
Utilizamos la distribución $t$ de Student con $n-1$ grados de libertad.
$$ IC(\mu) = \bar{x} \pm t\_{(n-1; 1-\alpha/2)} \cdot \frac{s}{\sqrt{n}} $$

> **Nota sobre el Factor de Corrección para Poblaciones Finitas (FCPF):**
> Si conocemos el tamaño exacto de la población ($N$) y extraemos una muestra considerable (usualmente si $n > N/20$), debemos multiplicar el "error estándar" (la fracción de la derecha) por el FCPF: $\sqrt{\frac{N-n}{N-1}}$.

#### 5.2. Tamaño de Muestra para estimar la Media

Si deseamos un Margen de Error máximo ($B$), el tamaño de muestra $n$ se calcula así:

- **Población infinita:** 
    
    $$n = \frac{z_{1-\alpha/2}^2 \cdot \sigma^2}{B^2}$$

- **Población finita ($N$):**
    
    $$n = \frac{N \cdot z_{1-\alpha/2}^2 \cdot \sigma^2}{(N-1)B^2 + z_{1-\alpha/2}^2 \cdot \sigma^2}$$

#### 5.3. Para la Proporción ($\pi$)

Para muestras grandes ($n > 30$), aplicamos la distribución Normal:
$$ IC(\pi) = p \pm z\_{1-\alpha/2} \sqrt{\frac{p(1-p)}{n}} $$

*(Igualmente, se le aplica el factor de corrección $\sqrt{\frac{N-n}{N-1}}$ si la población es finita).\*

#### 5.4. Tamaño de Muestra para estimar la Proporción

- **Población infinita:** 
    
    $$n = \frac{z_{1-\alpha/2}^2 \cdot p(1-p)}{B^2}$$

- **Población finita ($N$):** 

    $$n = \frac{N \cdot z_{1-\alpha/2}^2 \cdot p(1-p)}{(N-1)B^2 + z_{1-\alpha/2}^2 \cdot p(1-p)}$$

#### 5.5. Para la Varianza ($\sigma^2$) y Desviación Estándar ($\sigma$)

Utilizamos la distribución Chi-Cuadrado ($\chi^2$). El intervalo es asimétrico.

$$
IC(\sigma^2) = \left[ \frac{(n-1)s^2}{\chi^2_{(n-1; 1-\alpha/2)}} ; \frac{(n-1)s^2}{\chi^2_{(n-1; \alpha/2)}} \right]
$$

*(Para hallar el IC de la desviación estándar $\sigma$, simplemente se saca la raíz cuadrada a ambos límites).\*

---

### 6. Intervalos de Confianza para DOS Poblaciones

#### 6.1. Diferencia de Proporciones ($\pi_1 - \pi_2$)

Permite comparar proporciones de dos grupos independientes (muestras grandes).

$$
IC(\pi*1 - \pi_2) = (p_1 - p_2) \pm z*{1-\alpha/2} \sqrt{\frac{p_1(1-p_1)}{n_1} + \frac{p_2(1-p_2)}{n_2}}
$$

**Interpretación de los signos del Intervalo:**

- Si $IC = [-, -]$ (ambos negativos): $\pi_1 < \pi_2$
- Si $IC = [+, +]$ (ambos positivos): $\pi_1 > \pi_2$
- Si $IC = [-, +]$ (pasa por el cero): $\pi_1 = \pi_2$ (No hay diferencia significativa).

#### 6.2. Razón de Varianzas ($\sigma_1^2 / \sigma_2^2$)

Se usa para comparar si dos poblaciones tienen la misma variabilidad (homocedasticidad). Emplea la distribución $F$ de Fisher.

$$ IC\left(\frac{\sigma*1^2}{\sigma_2^2}\right) = \left[ \frac{s_1^2}{s_2^2} F*{(n*2-1; n_1-1; \alpha/2)} \ ; \ \frac{s_1^2}{s_2^2} F*{(n_2-1; n_1-1; 1-\alpha/2)} \right] $$

**Interpretación:** Si el intervalo contiene al **número 1**, significa que las varianzas son estadísticamente iguales ($\sigma_1^2 = \sigma_2^2$).

#### 6.3. Diferencia de Medias ($\mu_1 - \mu_2$)

Sirve para comparar promedios de dos grupos. Hay 3 escenarios teóricos:

**A. Varianzas poblacionales conocidas:**

$$ IC(\mu*1 - \mu_2) = (\bar{x}\_1 - \bar{x}\_2) \pm z*{1-\alpha/2} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} $$

**B. Varianzas desconocidas, pero iguales ($\sigma_1^2 = \sigma_2^2$):**
Se calcula una "Varianza Ponderada" ($s_p^2$):

$$ s*p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2} $$
El intervalo usa la $t$ de Student con $gl = n_1 + n_2 - 2$:

$$ IC(\mu_1 - \mu_2) = (\bar{x}\_1 - \bar{x}\_2) \pm t*{(n_1+n_2-2; 1-\alpha/2)} \sqrt{s_p^2 \left(\frac{1}{n_1} + \frac{1}{n_2}\right)} $$

**C. Varianzas desconocidas y diferentes ($\sigma_1^2 \neq \sigma_2^2$):**
Se usa la fórmula de Welch para los grados de libertad ($\nu$) de la $t$ de Student:

$$ \nu \approx \frac{\left(\frac{s*1^2}{n_1} + \frac{s_2^2}{n_2}\right)^2}{\frac{(s_1^2 / n_1)^2}{n_1-1} + \frac{(s_2^2 / n_2)^2}{n_2-1}} $$

$$ IC(\mu_1 - \mu_2) = (\bar{x}\_1 - \bar{x}\_2) \pm t*{(\nu; 1-\alpha/2)} \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}} $$

---

---

## PARTE II: EJERCICIOS RESUELTOS Y EXPLICADOS

A continuación, se desarrollan los ejemplos del documento aplicando las fórmulas correspondientes y explicando el proceso de toma de decisiones.

### Ejercicio 1: IC para la Media con Varianza Conocida

Un analista desea estimar el ingreso mensual promedio de los hogares de un sector con 95% de confianza. Tomó una muestra de 100 hogares, hallando un ingreso promedio de US$ 1,500. Cifras oficiales indican que la desviación estándar de la población es de US$ 300. ¿Cuál es el intervalo de confianza?

**Datos:**

- $n = 100$
- $\bar{x} = 1500$
- $\sigma = 300$ (Varianza conocida)
- Confianza = 95% $\rightarrow 1 - \alpha = 0.95 \rightarrow \alpha = 0.05 \rightarrow \alpha/2 = 0.025$.
- Valor crítico Normal Estándar: $z_{0.975} = 1.96$

**Desarrollo:**
Como la varianza poblacional ($\sigma$) es conocida, usamos la distribución $Z$:
$$ IC(\mu) = 1500 \pm 1.96 \left(\frac{300}{\sqrt{100}}\right) $$
$$ IC(\mu) = 1500 \pm 1.96(30) $$
$$ IC(\mu) = 1500 \pm 58.80 $$
*(El Error de Estimación es US$ 58.80)\*

**Respuesta:**
$$ IC(\mu) = [1441.20 \ , \ 1558.80] $$
Con un 95% de confianza, el ingreso mensual promedio de todos los hogares se encuentra entre US$ 1,441.20 y US$ 1,558.80.

---

### Ejercicio 2: IC para la Media (Varianza Desconocida - Población Infinita vs Finita)

Una muestra de 100 cuentas de ahorros en BANAMEX mostró un saldo promedio de US$ 1,000 con una desviación estándar (de la muestra) de US$ 500. Nivel de confianza al 95%.

#### a) Considerando a BANAMEX como una población infinita:

**Datos:** $n = 100$, $\bar{x} = 1000$, $s = 500$ (Varianza poblacional desconocida).

- Se usa $t$ de Student. Grados de libertad: $n-1 = 99$.
- Valor crítico $t_{(99; 0.975)} \approx 1.984$.

**Desarrollo:**
$$ IC(\mu) = 1000 \pm 1.984 \left(\frac{500}{\sqrt{100}}\right) $$
$$ IC(\mu) = 1000 \pm 1.984(50) = 1000 \pm 99.21 $$

**Respuesta:** $P(900.79 \le \mu \le 1099.21) = 0.95$

#### b) Si se sabe que el banco tiene exactamente $N = 1,000$ cuentas:

Dado que el tamaño de la muestra ($n=100$) supera el 5% de la población total ($N=1000$), se debe aplicar el Factor de Corrección para Poblaciones Finitas (FCPF):
$$ FCPF = \sqrt{\frac{N-n}{N-1}} = \sqrt{\frac{1000-100}{1000-1}} = \sqrt{\frac{900}{999}} \approx 0.949 $$
**Desarrollo del nuevo error estándar modificado:**
$$ \hat{\sigma}\_{\bar{x}} = \frac{500}{\sqrt{100}} \sqrt{\frac{900}{999}} = 50 \cdot 0.949 \approx 47.458 $$
$$ IC(\mu) = 1000 \pm 1.984 (47.458) = 1000 \pm 94.16 $$

**Respuesta:** $P(905.84 \le \mu \le 1094.16) = 0.95$.
_(Nota: Conocer a la población reduce la incertidumbre, logrando un intervalo más estrecho/preciso)._

---

### Ejercicio 3: Efecto de la Confianza y del Tamaño de Muestra

Contenido promedio de nicotina: $\bar{x} = 3.0$ mg, varianza poblacional conocida $\sigma = 1.0$ mg.

#### a) Efecto del nivel de confianza (Fijando $n = 35$):

Fórmula a usar: $\bar{x} \pm z \cdot (\sigma/\sqrt{n}) \rightarrow 3.0 \pm z \cdot (1.0/\sqrt{35}) \rightarrow 3.0 \pm z \cdot 0.169$

- **Para 90%** ($z = 1.645$): $IC = 3.0 \pm (1.645)(0.169) = [2.72 \ , \ 3.28]$
- **Para 95%** ($z = 1.96$): $IC = 3.0 \pm (1.96)(0.169) = [2.67 \ , \ 3.33]$
- **Para 99%** ($z = 2.58$): $IC = 3.0 \pm (2.58)(0.169) = [2.56 \ , \ 3.44]$

**Conclusión:** Si el nivel de confianza **aumenta**, el intervalo se vuelve más **ancho** (menos preciso, pero más seguro).

#### b) Efecto del tamaño de la muestra (Con 95% de confianza, pero $n = 45$):

Error estándar modificado: $\sigma / \sqrt{n} = 1.0 / \sqrt{45} = 0.149$.
$$ IC(\mu) = 3.0 \pm 1.96(0.149) = 3.0 \pm 0.29 $$
$$ IC(\mu) = [2.71 \ , \ 3.29] $$

**Conclusión:** Si el tamaño de la muestra **aumenta** (de 35 a 45), la longitud del intervalo **disminuye** (es más preciso).

---

### Ejercicio 4: Tamaño de Muestra para la Media

Se desea estimar el monto de cobro de arbitrios con un error máximo ($B$) de S/. 3 y 95% de confianza. Se sabe que $\sigma = 35$.

#### a) Tamaño necesario (Población infinita):

Usamos la fórmula: $n = \frac{z^2 \cdot \sigma^2}{B^2}$
$$ n = \frac{(1.96)^2 (35)^2}{3^2} = \frac{3.8416 \cdot 1225}{9} = 522.88 $$
**Respuesta:** Se necesitan redondear a **523 contribuyentes** (siempre se redondea al techo para asegurar la confianza).

#### b) Tamaño necesario si la población es de $N = 5000$:

Usamos la fórmula corregida:
$$ n = \frac{N \cdot z^2 \cdot \sigma^2}{(N-1)B^2 + z^2 \cdot \sigma^2} $$
$$ n = \frac{5000 \cdot (1.96)^2 \cdot (35)^2}{(4999)(3^2) + (1.96)^2(35)^2} = \frac{23,529,800}{44991 + 4705.96} = 473.46 $$
**Respuesta:** Al ser una población finita, necesitamos encuestar solo a **474 contribuyentes**.

---

### Ejercicio 5: IC para la Proporción

El gerente afirma que el 96% de productos son fabricados correctamente. En una muestra de $n = 200$, se hallaron 25 defectuosos. ¿Cuál es el IC al 95% de la proporción de artefactos en **buen estado**? ¿Tiene razón el gerente?

**Datos:**

- $n = 200$
- Casos de éxito (buen estado) $k = 200 - 25 = 175$
- Proporción muestral: $p = 175 / 200 = 0.875$
- Confianza 95% $\rightarrow z_{0.975} = 1.96$

**Desarrollo:**

$$ IC(\pi) = p \pm z\_{1-\alpha/2} \sqrt{\frac{p(1-p)}{n}} $$

$$ IC(\pi) = 0.875 \pm 1.96 \sqrt{\frac{0.875 \cdot 0.125}{200}} $$

$$ IC(\pi) = 0.875 \pm 1.96(0.0234) = 0.875 \pm 0.0458 $$

**Respuesta:** $IC = [0.829 \ , \ 0.920]$
Como el intervalo va del 82.9% al 92%, y la afirmación del gerente era del 96%, **la duda sobre la afirmación del gerente es razonable**, ya que el 96% está fuera (muy por encima) de nuestro intervalo de confianza.

---

### Ejercicio 6: Tamaño de Muestra y Costos para una Proporción

Se quiere estimar la proporción de amas de casa que prefieren un producto. Error ($B$) no mayor a 4% (0.04), confianza del 95% ($z = 1.96$), proporción estimada inicial $p = 0.20$. ¿Cuál será el costo si los gastos base son US$ 4000 y cada entrevista cuesta US$ 65?

**Paso 1: Calcular tamaño de muestra ($n$)**
$$ n = \frac{z^2 p(1-p)}{B^2} = \frac{(1.96)^2 \cdot 0.20 \cdot 0.80}{(0.04)^2} = \frac{3.8416 \cdot 0.16}{0.0016} = 384.16 \approx 385 \text{ personas} $$

**Paso 2: Calcular Costo Total**
$$ \text{Costo Total} = \text{Costo Fijo} + (\text{Costo por Encuesta} \times n) $$
$$ \text{Costo Total} = 4000 + (65 \times 385) = 4000 + 25025 = US\$ \ 29,025 $$

---

### Ejercicio 7: IC para la Varianza y Desviación Estándar

Muestra de $n=24$ anillos de motor. Desviación estándar muestral $s=0.0065$. Hallar límites de variabilidad (IC para varianza) al 95%.

**Datos:**

- Grados de libertad = $n-1 = 23$.
- Valores críticos Chi-Cuadrado ($\alpha/2 = 0.025$, $1-\alpha/2 = 0.975$):
    - $\chi^2_{(23; 0.975)} = 38.076$ (Para el límite inferior).
    - $\chi^2_{(23; 0.025)} = 11.689$ (Para el límite superior).

**Desarrollo para la Varianza ($\sigma^2$):**

$$ L*{inf} = \frac{(24-1)(0.0065)^2}{38.076} = \frac{23 \cdot 0.00004225}{38.076} \approx 0.000026 $$

$$ L*{sup} = \frac{(24-1)(0.0065)^2}{11.689} = \frac{0.00097175}{11.689} \approx 0.000083 $$

**Respuesta Varianza:** $P(0.000026 \le \sigma^2 \le 0.000083) = 0.95$

**Para la Desviación Estándar ($\sigma$):** Sacamos raíz cuadrada a los límites.
**Respuesta D. Estándar:** $P(0.00505 \le \sigma \le 0.00912) = 0.95$

---

### Ejercicio 8: Diferencia de Proporciones

Baterías defectuosas de dos empresas. ¿Hay diferencia significativa con 99% de confianza?

- **CAPSA:** $n_1 = 250$, defectuosas $k_1 = 20 \rightarrow p_1 = 20/250 = 0.08$
- **VOLTA:** $n_2 = 300$, defectuosas $k_2 = 18 \rightarrow p_2 = 18/300 = 0.06$
- Confianza 99% $\rightarrow z_{0.995} = 2.58$.

**Desarrollo:**
$$ IC(\pi_1 - \pi_2) = (0.08 - 0.06) \pm 2.58 \sqrt{\frac{0.08(0.92)}{250} + \frac{0.06(0.94)}{300}} $$
$$ IC(\pi_1 - \pi_2) = 0.02 \pm 2.58 \sqrt{0.0002944 + 0.000188} = 0.02 \pm 2.58(0.02196) $$
$$ IC(\pi_1 - \pi_2) = 0.02 \pm 0.0566 $$

**Respuesta e Interpretación:**
$$ IC(\pi_1 - \pi_2) = [-0.0366 \ , \ 0.0766] $$
Como el intervalo contiene signos negativos y positivos **(atraviesa el cero)**, se concluye matemáticamente que $\pi_1 = \pi_2$. Es decir, **no hay evidencia estadística de que exista una diferencia significativa** en la proporción de defectos entre CAPSA y VOLTA.

---

### Ejercicio 9: IC para la Razón de Varianzas

Precios de dos acciones. ¿Es la variabilidad diferente con 95% de confianza?

- **Acción A:** $n_1 = 15$, $s_1^2 = 1.54$
- **Acción B:** $n_2 = 15$, $s_2^2 = 2.96$

**Desarrollo:**
Calculamos los valores críticos de F de Fisher para 14 y 14 grados de libertad:

- $F_{(14; 14; 0.025)} = 0.335730$
- $F_{(14; 14; 0.975)} = 2.97859$

Aplicamos la fórmula del intervalo para el cociente $\sigma_1^2 / \sigma_2^2$:
$$ IC = \left[ 0.335730 \left(\frac{1.54}{2.96}\right) \ ; \ 2.97859 \left(\frac{1.54}{2.96}\right) \right] $$
$$ IC = [ 0.335730 (0.5202) \ ; \ 2.97859 (0.5202) ] $$

**Respuesta e Interpretación:**
$$ IC\left(\frac{\sigma_1^2}{\sigma_2^2}\right) = [0.175 \ , \ 1.550] $$
Como el intervalo **contiene a la unidad (el número 1)**, no se puede afirmar que las variabilidades sean diferentes. Por ende, se asume que las varianzas poblacionales son **iguales** ($\sigma_1^2 = \sigma_2^2$).

---

### Ejercicio 10: Diferencia de Medias (Varianzas desconocidas, asumidas iguales)

Duración de vida útil de motores (en años). Confianza del 90%. Asumiendo variabilidad idéntica.

- **Marca A:** $n_1 = 50$, $\bar{x}_1 = 12.0$, $s_1 = 1.2$
- **Marca B:** $n_2 = 50$, $\bar{x}_2 = 13.8$, $s_2 = 1.5$
- Confianza 90% $\rightarrow t_{(98; 0.95)} \approx 1.66055$ (Grados de libertad: $50+50-2 = 98$).

**Paso 1: Calcular la Varianza Combinada Ponderada ($s_p^2$)**
$$ s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2} = \frac{(49)(1.2^2) + (49)(1.5^2)}{98} $$
$$ s_p^2 = \frac{49(1.44) + 49(2.25)}{98} = \frac{70.56 + 110.25}{98} = 1.845 $$

**Paso 2: Calcular el Intervalo de Confianza**
$$ IC(\mu_1 - \mu_2) = (12.0 - 13.8) \pm 1.66055 \sqrt{1.845 \left(\frac{1}{50} + \frac{1}{50}\right)} $$
$$ IC = -1.8 \pm 1.66055 \sqrt{1.845(0.04)} = -1.8 \pm 1.66055 \sqrt{0.0738} $$
$$ IC = -1.8 \pm 1.66055(0.27166) = -1.8 \pm 0.451 $$

**Respuesta e Interpretación:**
$$ IC(\mu_1 - \mu_2) = [-2.251 \ , \ -1.349] $$
Dado que **ambos límites son negativos**, esto indica matemáticamente que $(\mu_1 - \mu_2) < 0$, lo que implica que **$\mu_1 < \mu_2$**.
**Conclusión:** Podemos afirmar con un 90% de confianza que la duración promedio de los motores de la Marca A es significativamente menor que la duración promedio de los motores de la Marca B.
