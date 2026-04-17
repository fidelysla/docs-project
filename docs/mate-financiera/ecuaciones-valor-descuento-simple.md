# Ecuaciones de Valor Equivalente y Descuento Simple

## 1. Conceptos Fundamentales

Para entender cómo se comporta el dinero a lo largo del tiempo, es esencial dominar los siguientes conceptos:

- **Valor del Dinero en el Tiempo:** El principio básico de las finanzas. Un billete de \$100 hoy no vale lo mismo que un billete de \$100 dentro de un año. Esto se debe a factores macroeconómicos (como la inflación, que reduce el poder adquisitivo) y al costo de oportunidad (la capacidad de ese dinero de generar intereses si se invierte hoy).
- **Punto Focal (o Fecha Focal - FF):** Es una fecha arbitraria elegida en una línea de tiempo financiera. En esta fecha se concentran (se "llevan") todas las deudas y todos los pagos para poder compararlos en igualdad de condiciones.
- **Reestructuración de Deudas:** Es una negociación en la que un conjunto de obligaciones originales (deudas) se reemplaza por un nuevo plan de pagos. Para que sea justo para ambas partes, el valor de las deudas y los pagos deben ser matemáticamente equivalentes en la Fecha Focal.

---

## 2. El Principio de Equivalencia

Como el dinero cambia de valor con el tiempo, no podemos simplemente sumar cantidades que están en fechas distintas. Para mover el dinero en la línea de tiempo hacia la **Fecha Focal (FF)**, utilizamos las fórmulas del Interés Simple.

### A. Desplazamiento hacia adelante (Capitalización VF)

Si una cantidad de dinero se encuentra en una fecha **anterior** a la Fecha Focal, debemos llevarla al futuro. El dinero gana intereses. Usamos la fórmula del Monto (Valor Futuro):

$$ \boxed{M = C(1 + i \cdot n)} $$

Donde:

- $M$ = Monto o Valor Futuro en la Fecha Focal.
- $C$ = Capital original (Valor Presente).
- $i$ = Tasa de interés (expresada en decimales).
- $n$ = Tiempo transcurrido entre la fecha original y la Fecha Focal.

### B. Desplazamiento hacia atrás (Actualización o Descuento VA)

Si una cantidad de dinero se encuentra en una fecha **posterior** a la Fecha Focal, debemos traerla al pasado. Al dinero se le deben "quitar" los intereses que aún no ha ganado. Usamos la fórmula del Valor Presente:

$$ \boxed{C = \frac{M}{1 + i \cdot n}} $$

### C. La Ecuación Clave de Valor Equivalente

Una vez que todos los valores están en la misma fecha (FF), planteamos la siguiente igualdad fundamental:

$$
\sum (\text{Valor de las Deudas en la FF}) = \sum (\text{Valor de los Pagos en la FF})
$$

---

## 3. Ecuaciones de Valor Equivalente a Interés Simple (Formalización)

Las ecuaciones de valor son **herramientas matemáticas** que permiten consolidar o reestructurar un conjunto de obligaciones de pago. Su objetivo es asegurar que el valor total de las deudas originales sea exactamente equivalente al valor total de los nuevos pagos, evaluados siempre en un punto focal específico.

**Fórmula General:**
La igualdad fundamental se expresa matemáticamente de la siguiente manera:

$$
\sum_{i=1}^{n} Deuda_i \cdot (1 + r \cdot t_i) = \sum_{j=1}^{m} Pago_j \cdot (1 + r \cdot t_j)
$$

**Consideraciones importantes sobre la fórmula:**

1.  **Cálculo del interés:** Al estar en el régimen de Interés Simple, el interés se calcula exclusivamente sobre el capital principal original, no sobre intereses acumulados.
2.  **Las variables de tiempo ($t_i$ y $t_j$):** Representan el tiempo exacto que hay desde la fecha de vencimiento de cada obligación (ya sea deuda o pago) hasta el punto focal elegido.
3.  **Convención de signos para el tiempo:**
    - Si para llegar al punto focal debes moverte hacia el **futuro** (es decir, la fecha de vencimiento ocurre _antes_ del punto focal), el tiempo es **positivo**. (Se están generando intereses).
    - Si para llegar al punto focal debes moverte hacia el **pasado** (es decir, la fecha de vencimiento ocurre _después_ del punto focal), el tiempo se considera **negativo**. (Al multiplicar por un tiempo negativo, el factor $(1 + r \cdot -t)$ actúa restando intereses, aproximando un descuento lineal, como se ve en el Ejemplo 1 más abajo).

---

## 4. Pasos para resolver una Ecuación de Valor

Para no cometer errores en problemas complejos, se recomienda seguir esta metodología:

1.  **Dibuja una línea de tiempo:** Grafica los meses o años. Pon las Deudas arriba y los Pagos abajo (o viceversa).
2.  **Identifica las obligaciones:** Separa claramente qué montos son las deudas originales y cuáles son los nuevos pagos propuestos.
3.  **Selecciona la Fecha Focal (FF):** Si el problema no la indica, puedes elegir cualquiera (comúnmente se elige la fecha del pago final o la fecha actual).
4.  **Traslada los valores:** Aplica las fórmulas de capitalización o actualización (vistas en el punto 2) para llevar cada monto a la FF.
5.  **Plantea y resuelve:** Iguala la suma de deudas trasladadas con la suma de pagos trasladados y despeja la variable desconocida ($X$).

---

## 5. Ejemplos Prácticos de Ecuaciones de Valor

### Ejemplo 1

> **Problema:** Juan tiene dos deudas: una de \$5,000 a pagar en 3 meses y otra de \$8,000 a pagar en 8 meses. Desea liquidarlas con un único pago en 6 meses con una Tasa de Interés Simple del 12% anual.

- **Fecha Focal (FF):** Mes 6.
- **Tasa de interés ($i$):** $12\% \text{ anual} = 0.12$. Como el tiempo está en meses, dividiremos los plazos entre 12.

**1. Llevar las deudas a la FF:**

- _Deuda 1 (\$5,000 en el mes 3):_ Se mueve hacia adelante (del mes 3 al 6). Se **capitaliza** por 3 meses.
  $$ Valor_1 = 5,000 \cdot \left(1 + 0.12 \cdot \frac{6-3}{12}\right) = 5,000 \cdot (1 + 0.03) = \$5,150 $$

- _Deuda 2 (\$8,000 en el mes 8):_ Se mueve hacia atrás (del mes 8 al 6). Se **actualiza** por 2 meses. _(Nota: El documento original utiliza una aproximación lineal multiplicando por un tiempo negativo para el descuento en este ejemplo específico)_:
  $$ Valor_2 = 8,000 \cdot \left(1 + 0.12 \cdot \frac{6-8}{12}\right) = 8,000 \cdot (1 - 0.02) = \$7,840 $$

**2. Ecuación y Solución:**
$$ X = 5,150 + 7,840 $$
$$ X = \$12,990 $$

---

### Ejemplo 2

> **Problema:** Una persona debe \$5,000 que vencen en 6 meses y \$8,000 que vencen en 12 meses. Acuerda saldar ambas con un solo pago dentro de 9 meses. Tasa de interés simple: 10% anual. ¿Cuál es el pago único?

- **Fecha Focal (FF):** Mes 9.
- **Tasa de interés ($i$):** $10\% \text{ anual} = 0.10$.

**1. Llevar las deudas a la FF (Mes 9):**

- _Deuda 1 (\$5,000 en el mes 6):_ Se mueve 3 meses hacia **adelante** (capitalización).
  $$ Valor_1 = 5,000 \cdot \left(1 + 0.10 \cdot \frac{3}{12}\right) = 5,000 \cdot (1.025) = \$5,125 $$

- _Deuda 2 (\$8,000 en el mes 12):_ Se mueve 3 meses hacia **atrás** (Actualización rigorosa usando división).
  $$ Valor_2 = \frac{8,000}{1 + 0.10 \cdot \frac{3}{12}} = \frac{8,000}{1.025} = \$7,804.88 $$

**2. Ecuación y Solución:**
$$ X = Valor_1 + Valor_2 $$
$$ X = 5,125 + 7,804.88 $$
$$ X = \$12,929.88 $$

---

## 6. El Descuento Simple

El descuento simple ocurre cuando decides pagar (o cobrar) una deuda **antes** de su fecha de vencimiento. Quien paga anticipadamente tiene derecho a que se le descuenten los intereses correspondientes a ese tiempo ahorrado.

**Componentes Clave:**

- **Valor Nominal ($VN$ o Valor Futuro):** Es el monto total de la deuda impreso en el documento (lo que se pagaría si se espera hasta la fecha de vencimiento). Esto ocurre cuando existe un documento financiero con valor (VF) fijado al vencimiento.
- **Valor Actual ($VA$ o Valor Líquido):** Es el dinero que se recibe o se paga HOY, una vez que ya se ha restado el descuento.
- **Descuento ($D$):** Es la cantidad de dinero exacta que se rebaja de la deuda.

$$ VA = VN - D $$

Existen dos formas principales de calcular este descuento:

### A. Descuento Racional (o Verdadero)

Es el método matemáticamente más justo. Los intereses que se van a descontar **se calculan sobre el Valor Actual ($VA$)**, es decir, sobre el dinero real que se está recibiendo o pagando en ese momento.

- **Fórmula del Descuento Racional ($D_r$):**
  $$ D_r = VA \cdot r \cdot t $$
- **Fórmula del Valor Actual Racional ($VA$):**
  $$ \boxed{VA = \frac{VN}{1 + r \cdot t}} $$

### B. Descuento Comercial (o Bancario)

Es el método utilizado por los bancos porque les genera mayores ganancias. Aquí, los intereses **se calculan sobre el Valor Nominal ($VN$)**, es decir, sobre el total de la deuda futura (que es un monto mayor).

- **Fórmula del Descuento Comercial ($D_c$):**
  $$ D_c = VN \cdot r \cdot t $$
- **Fórmula del Valor Actual Comercial ($VA$):**
  $$ VA = VN - D_c \quad \Rightarrow \quad \boxed{VA = VN(1 - r \cdot t)} $$

---

## 7. Cuadro Comparativo de Descuentos

Para entender rápidamente las diferencias prácticas entre ambos métodos:

| Característica              | Descuento Racional (Verdadero)       | Descuento Comercial (Bancario)        |
| :-------------------------- | :----------------------------------- | :------------------------------------ |
| **Base de Cálculo**         | El Valor Actual ($VA$)               | El Valor Nominal ($VN$)               |
| **Fórmula del V. Actual**   | $$ VA = \frac{VN}{1 + r \cdot t} $$  | $$ VA = VN(1 - r \cdot t) $$          |
| **Monto del Descuento**     | Siempre es **menor**                 | Siempre es **mayor**                  |
| **Beneficio para Acreedor** | Menor ganancia (descuento más justo) | Mayor ganancia (se cobra más interés) |
| **Uso Común**               | Ámbito académico / Teórico           | Ámbito bancario / Práctico            |

---

## Conclusiones

1.  Las **Ecuaciones de Valor Equivalente** son la herramienta indispensable para renegociar deudas. Permiten asegurar que ni el deudor ni el acreedor pierdan dinero por efecto del tiempo.
2.  El **Descuento Simple** es el mecanismo para liquidar obligaciones antes de su vencimiento.
3.  Es de vital importancia identificar si una transacción usa **Descuento Racional** o **Comercial**, ya que el Descuento Comercial siempre resultará en un cobro de intereses más alto (y por ende, recibes menos dinero líquido hoy) al calcularse sobre el valor final de la deuda y no sobre el valor presente.
