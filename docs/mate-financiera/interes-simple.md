
# Interés Simple

- Interpretar y analizar porcentajes en el contexto financiero.
- Definir el **valor del dinero en el tiempo** bajo el régimen de Interés Simple.
- Identificar y relacionar las variables económicas clave ($VF, VA, I, n, i$).
- Formular y resolver problemas reales de inversión y financiamiento considerando tasas nominales constantes y variables.

---

## 1. Conceptos Básicos del Interés Simple

El **Interés Simple** es la ganancia o costo que genera un capital prestado o invertido, el cual se calcula **únicamente sobre el capital inicial** (también llamado principal) durante todo el período que dura la transacción.

**Características Fundamentales:**

1. **No hay capitalización:** A diferencia del interés compuesto, los intereses generados en un período **no** se suman al capital para generar nuevos intereses en el siguiente período.
2. **Interés constante:** Al calcularse siempre sobre el mismo capital inicial, el monto de interés generado en cada período es exactamente el mismo (asumiendo que la tasa no varía).
3. **Simplicidad:** Es el método más básico para el cálculo de intereses, comúnmente utilizado en préstamos a corto plazo o inversiones de bajo riesgo.

---

## 2. La Fórmula Principal del Interés

Para calcular el monto de dinero que representa el interés generado, utilizamos la siguiente fórmula base:

$$I = P \cdot r \cdot t$$

**Donde:**

- **$I$ (Interés):** Es el monto de dinero ganado o pagado.
- **$P$ (Capital o Principal):** Es el monto de dinero inicial invertido o prestado. También se le conoce como Valor Presente ($VP$ o $VA$).
- **$r$ (Tasa de Interés):** Es el porcentaje que se cobra o paga por el capital. _Nota: Para usarla en la fórmula, debe expresarse siempre en formato decimal (ej. 5% = 0.05)._ También se suele representar con la letra $i$.
- **$t$ (Tiempo):** Es el número de períodos que dura la operación. También se representa con la letra $n$.

> 💡 **Regla de Oro:** La tasa de interés ($r$) y el tiempo ($t$) **deben estar expresados en la misma unidad de tiempo** (por ejemplo, si la tasa es anual, el tiempo debe estar en años).

---

## 3. Fórmulas Derivadas (Despejes)

A partir de la ecuación principal ($I = P \cdot r \cdot t$), usando álgebra básica, podemos despejar cualquier variable si conocemos las otras tres. Esto es vital para resolver distintos tipos de problemas financieros.

### A. Para hallar el Capital Principal ($P$)

Se utiliza cuando sabemos cuánto interés ganamos, en cuánto tiempo y a qué tasa, pero queremos saber **cuánto se invirtió originalmente**.

$$P = \frac{I}{r \cdot t}$$

### B. Para hallar la Tasa de Interés ($r$)

Se utiliza para determinar la **tasa de rentabilidad** o el costo real de un préstamo.

$$r = \frac{I}{P \cdot t}$$

### C. Para hallar el Tiempo ($t$)

Nos permite calcular el **período necesario** para que una inversión genere un monto específico de intereses.

$$t = \frac{I}{P \cdot r}$$

---

## 4. Monto o Valor Futuro ($VF$)

El **Monto** o **Valor Futuro ($VF$)** representa la cantidad total de dinero que se tendrá al final de la operación financiera. Es la suma del capital original más todos los intereses acumulados.

**Evolución de la fórmula:**

1. Fórmula conceptual: $VF = P + I$

2. Sustituyendo el valor de $I$ ($P \cdot r \cdot t$):
   
$$VF = P + (P \cdot r \cdot t)$$

3. **Fórmula Simplificada (Factorizando $P$):**
   
$$VF = P \cdot (1 + r \cdot t)$$

> **Ejemplo Práctico (Tasa Constante):**
> Si inviertes $\$1,000$ a una tasa del $5\%$ anual durante $3$ años, ¿cuál será el monto final?
>
> - $P = 1000$
> - $r = 0.05$
> - $t = 3$
>
> $$VF = 1000 \cdot (1 + 0.05 \cdot 3) = 1000 \cdot (1 + 0.15) = 1000 \cdot (1.15) = \$1,150$$

---

## 5. Valor Actual (VA) o Valor Presente (VP)

El **Valor Actual ($VA$)** es el proceso inverso al Valor Futuro. Sirve para responder a la pregunta: _"¿Cuánto dinero necesito invertir **hoy** para alcanzar una meta financiera en el futuro?"_ a esto también se le conoce como actualizar o descontar un capital.

**Fórmula (despejando $P$ de la fórmula de $VF$):**

$$VP = \frac{VF}{1 + r \cdot t}$$

> **Ejemplo Práctico (Tasa Constante):**
> Si deseas tener $\$1,150$ dentro de $3$ años y el banco te ofrece una tasa del $5\%$ anual, ¿cuánto debes depositar hoy?
>
> - $VF = 1150$
> - $r = 0.05$
> - $t = 3$
>
> $$VP = \frac{1150}{1 + 0.05 \cdot 3} = \frac{1150}{1.15} = \$1,000$$

### **Definición de Tasa Nominal Constante:**

Es aquella tasa de interés que permanece fija o inalterable durante todo el período que dura la operación financiera. Al no haber variaciones, se puede aplicar una única fórmula directa para todo el horizonte de tiempo.

**Monto (VF)**: La fórmula es la ya vista: 

$$VF=P⋅(1+r⋅t)$$

**Valor Actual (VP)**: La fórmula es la ya vista: 

$$VP=VF/1+r⋅t$$

---

## 6. Operaciones con Tasa Nominal Variable

En el mundo real, las tasas de interés pueden cambiar a lo largo de la vida de una operación. A esto se le llama **Tasa Nominal Variable**.

### 6.1 Cálculo del Monto ($VF$) con tasas variables

Como el capital inicial en el interés simple nunca cambia, calculamos el interés de cada período por separado y luego los sumamos al capital original.

**Fórmula General:**

$$VF = P + I_1 + I_2 + \dots + I_n$$

Donde cada porción de interés se calcula como: $I_n = P \cdot r_n \cdot t_n$

> **Ejemplo Práctico:**
> Inviertes $\$1,000$. Los primeros 2 años la tasa es del $5\%$ anual, y los siguientes 3 años la tasa sube al $6\%$ anual.
>
> - **Interés Tramo 1:** $I_1 = 1000 \cdot 0.05 \cdot 2 = \$100$
> - **Interés Tramo 2:** $I_2 = 1000 \cdot 0.06 \cdot 3 = \$180$
> - **Valor Futuro Total:** $VF = 1000 + 100 + 180 = \$1,280$

### 6.2 Cálculo del Valor Actual ($VP$) con tasas variables

Para traer un flujo futuro al presente cuando hubo múltiples tasas, lo más práctico en el régimen de interés simple es calcular una **Tasa de Interés Promedio Ponderada ($r_{prom}$)** por el tiempo que estuvo vigente cada una.

**Paso 1: Calcular la Tasa Promedio Ponderada**

$$r_{prom} = \frac{(r_1 \cdot t_1) + (r_2 \cdot t_2) + \dots + (r_n \cdot t_n)}{t_1 + t_2 + \dots + t_n}$$

**Paso 2: Calcular el Valor Presente** usando el tiempo total ($t_{total}$):

$$VP = \frac{VF}{1 + r_{prom} \cdot t_{total}}$$

---

## 📌 Resumen de Conceptos Clave

| Concepto                        | Descripción                                        | Fórmula Principal                                   |
| :------------------------------ | :------------------------------------------------- | :-------------------------------------------------- |
| **Interés Simple ($I$)**        | Ganancia calculada solo sobre el capital inicial.  | $$I = P \cdot r \cdot t$$                           |
| **Monto / Valor Futuro ($VF$)** | Capital inicial + Intereses generados.             | $$VF = P(1 + r \cdot t)$$                           |
| **Valor Actual ($VP$ / $VA$)**  | Capital necesario hoy para lograr un monto futuro. | $$VP = \frac{VF}{1 + r \cdot t}$$                   |
| **Tasa Constante**              | Una sola tasa rige toda la operación.              | Aplicación directa de fórmulas.                     |
| **Tasa Variable**               | Múltiples tasas en distintos períodos.             | Suma de intereses individuales o uso de $r_{prom}$. |
