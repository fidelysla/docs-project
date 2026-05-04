
# El Interés Compuesto

## 1. Introducción al Interés Compuesto

El **interés compuesto** representa el costo del dinero en el tiempo bajo un esquema donde los intereses generados se suman al capital original al final de cada período. A diferencia del interés simple, donde el rendimiento se calcula únicamente sobre el capital inicial, el interés compuesto permite que el dinero crezca de manera **exponencial**.

Este fenómeno es conocido comúnmente como **"interés sobre interés"**, ya que el capital base (o principal) aumenta en cada período de capitalización, generando rendimientos cada vez mayores. Es el fundamento principal sobre el cual opera el sistema financiero global para créditos e inversiones.

---

## 2. Variables Económicas Fundamentales

Para aplicar el principio de equivalencia financiera, es indispensable identificar y relacionar las siguientes variables:

- **VP (Valor Presente o Actual):** El capital inicial, monto invertido o prestado el día de hoy. También denotado como $VA$ o $C$.
- **VF (Valor Futuro o Monto):** El valor que tendrá la inversión o deuda en una fecha futura, incluyendo el capital más los intereses acumulados.
- **I (Interés):** La ganancia o costo total en términos monetarios.
- **i (Tasa de Interés):** El porcentaje de ganancia o costo aplicado por cada período de tiempo.
- **n (Tiempo o Plazo):** El número total de períodos de capitalización durante los cuales el dinero genera intereses.

---

## 3. Fórmulas y Cálculos Fundamentales

### 3.1. Escenario con Tasa de Interés Constante

Cuando la tasa de interés se mantiene invariable a lo largo del tiempo, se aplican las fórmulas clásicas de matemáticas financieras:

**A. Valor Futuro (VF):**
Se utiliza para proyectar un capital inicial hacia el futuro (proceso de capitalización).

$$VF = VP(1+i)^n$$

> **Ejemplo:** Si se invierten \$1,000 a una tasa anual del 5% durante 3 años, el valor futuro será:
> $$VF = 1000(1 + 0.05)^3 = 1000(1.157625) = \$1,157.63$$

**B. Valor Presente o Actual (VP):**
Se utiliza para traer un flujo de dinero futuro al día de hoy (proceso de actualización o descuento).

$$VP = \frac{VF}{(1+i)^n}$$

> **Ejemplo:** Para saber cuánto invertir hoy para obtener \$1,500 en 5 años a una tasa del 6% anual:
> $$VP = \frac{1500}{(1 + 0.06)^5} = \frac{1500}{1.338226} = \$1,120.89$$

**C. Cálculo del Interés Monetario (I):**
Es la diferencia absoluta entre el Valor Futuro y el Valor Presente.

$$I = VF - VP \quad \text{o} \quad I = VP\left((1+i)^n - 1\right)$$

**D. Cálculo del Tiempo (n):**
Si conocemos los montos y la tasa, podemos despejar el tiempo utilizando logaritmos.

$$n = \frac{\ln\left(\frac{VF}{VP}\right)}{\ln(1+i)}$$

### 3.2. Escenario con Tasa de Interés Variable

En la realidad económica, las tasas fluctúan. Cuando la tasa cambia en diferentes períodos, las fórmulas se adaptan multiplicando los factores de crecimiento o descuento de cada tramo temporal secuencialmente.

**A. Valor Futuro con tasa variable:**

$$VF = VP \cdot (1+i_1) \cdot (1+i_2) \cdots (1+i_n)$$

> **Ejemplo:** Inversión de \$2,000 con 4% el primer año y 6% el segundo:
> $$VF = 2000(1 + 0.04)(1 + 0.06) = 2000(1.04)(1.06) = \$2,204.80$$

**B. Valor Presente con tasa variable:**

$$VP = \frac{VF}{(1+i_1) \cdot (1+i_2) \cdots (1+i_n)}$$

---

## 4. Clasificación y Tipos de Tasas de Interés

### 4.1. Según su uso en el Sistema Financiero

- **Tasa Activa:** Es el porcentaje que los bancos e instituciones financieras **cobran** al público por prestar dinero (créditos, tarjetas, hipotecas).
- **Tasa Pasiva:** Es el porcentaje que los bancos **pagan** al público por captar y guardar su dinero (cuentas de ahorro, depósitos a plazo).
- **Tasa Moratoria:** Funciona como una penalidad o recargo aplicado cuando el deudor se retrasa o incumple con la fecha de pago establecida.
- **Tasa Complementaria:** Es un recargo adicional que suele estar ligado a la tasa moratoria o que se aplica bajo ciertas condiciones contractuales específicas.

### 4.2. Tasa Nominal, Proporcional y Efectiva

Es vital comprender la diferencia entre la tasa que se anuncia y la tasa que realmente se cobra o gana:

- **Tasa de Interés Nominal ($j$ o $i_N$):** Es una tasa de referencia o "tasa de cartel". Se anuncia de forma anual, pero **no considera la frecuencia con la que los intereses se capitalizan**. Por sí sola, no sirve para realizar cálculos de equivalencia financiera directa sin antes ser convertida.
- **Tasa Proporcional ($i$ o $i_P$):** Es la tasa que se aplica efectivamente en cada sub-período (mensual, trimestral, diario, etc.). Se halla dividiendo la tasa nominal entre el número de períodos de capitalización al año ($m$).

$$i = \frac{j}{m}$$

_(Ejemplo: Una tasa nominal anual del 12% capitalizable mensualmente tiene una tasa proporcional del $12\% / 12 = 1\%$ mensual)._

- **Tasa Efectiva ($i_e$ o $TEA$):** Es la verdadera medida de rentabilidad o costo de una operación. Muestra lo que realmente se gana o se paga en un año, ya que **sí incorpora el efecto de la acumulación de los intereses** (interés compuesto). Se calcula a partir de la tasa nominal mediante la siguiente fórmula:

$$i_e = \left(1 + \frac{j}{m}\right)^m - 1$$

**Tasas Equivalentes:** Dos tasas (ya sean nominales o efectivas) son equivalentes si, aplicadas a un mismo capital inicial durante un mismo período, producen exactamente el mismo Valor Futuro (y por ende, la misma Tasa Efectiva), sin importar que sus frecuencias de capitalización sean distintas.

---

## 5. Ecuaciones de Valor y Fecha Focal

Las **Ecuaciones de Valor** son herramientas matemáticas fundamentales para reestructurar deudas. Permiten reemplazar un conjunto de obligaciones originales por un nuevo esquema de pagos, garantizando que ni el acreedor ni el deudor pierdan valor en el tiempo.

### El Principio Fundamental

Todos los montos de dinero tienen distinto valor dependiendo de la fecha en que se ubiquen. Para compararlos, sumarlos o igualarlos, **todas las transacciones deben ser trasladadas a un único momento en el tiempo**, llamado **Fecha Focal**.

$$\sum \text{Valores Originales en la Fecha Focal} = \sum \text{Valores Nuevos en la Fecha Focal}$$

### Pasos para resolver una Ecuación de Valor:

1.  **Determinar la Tasa:** Asegurarse de usar la tasa efectiva o la tasa proporcional correspondiente al período (nunca operar directamente con la nominal anual si hay capitalización menor al año).
2.  **Dibujar la Línea de Tiempo:** Graficar los flujos de caja, ubicando los montos de las obligaciones originales (arriba) y los nuevos pagos propuestos (abajo) en sus respectivos períodos.
3.  **Seleccionar la Fecha Focal:** Elegir el momento de referencia. Aunque se puede elegir cualquier fecha, se recomienda establecerla en el momento donde se ubica la incógnita ($X$).
4.  **Trasladar los Valores:**
    - Si el dinero está _antes_ de la fecha focal, se debe **capitalizar** hacia adelante usando la fórmula de Valor Futuro: $\text{Monto} \times (1+i)^n$
    - Si el dinero está _después_ de la fecha focal, se debe **descontar** hacia atrás usando la fórmula de Valor Presente: $\frac{\text{Monto}}{(1+i)^n}$

---

## 6. Funciones Financieras Clave en Microsoft Excel

Para agilizar los cálculos matemáticos, Excel ofrece funciones integradas que aplican directamente los principios del interés compuesto:

### Cálculo de Variables Básicas:

- `=VA(tasa; nper; pago; [vf]; [tipo])`: **Valor Actual**. Calcula el valor presente de una serie de pagos o de una inversión a futuro.
- `=VF(tasa; nper; pago; [va]; [tipo])`: **Valor Futuro**. Calcula el monto acumulado en el futuro considerando el capital y los intereses compuestos.
- `=TASA(nper; pago; va; [vf]; [tipo]; [estimar])`: **Tasa**. Determina la tasa de interés por período necesaria para alcanzar un monto determinado.
- `=NPER(tasa; pago; va; [vf]; [tipo])`: **Número de períodos**. Calcula cuántos períodos se necesitan para saldar una inversión o préstamo.

### Conversión de Tasas:

- `=INT.EFECTIVO(tasa_nominal; num_per_año)` _(Nota: En algunas versiones es `TASA.EFECTIVA`)_: Convierte una tasa nominal anual a la verdadera tasa efectiva anual (TEA).
- `=TASA.NOMINAL(tasa_efectiva; num_per_año)`: Realiza el proceso inverso, convirtiendo una tasa efectiva anual a su equivalente nominal para un número de capitalizaciones dado.
