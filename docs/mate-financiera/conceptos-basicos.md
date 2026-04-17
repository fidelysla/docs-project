# **Matemática Financiera**

La **Matemática Financiera** estudia el valor del dinero en el tiempo. Analiza la relación entre el _capital_, la _tasa_ y el _plazo_ para calcular _intereses_ y facilitar la toma de decisiones de inversión.

## Valor del Dinero en el Tiempo (TVM)

El dinero hoy vale más que mañana. Debido a la **inflación** (pérdida de poder de compra) y al **costo de oportunidad** (la posibilidad de invertirlo), una suma actual siempre es preferible a la misma cantidad en el futuro.

1. **Valor Futuro (VF)**: Es mirar hacia adelante. Calculas cuánto crecerá tu dinero hoy si lo inviertes a una tasa de interés durante un tiempo. Es un proceso de capitalización.

$$
VF = VA \times (1 + i)^n
$$

2. **Valor Actual (VA)**: Es mirar hacia atrás. Calculas cuánto vale hoy una cantidad que recibirás en el futuro, restándole los intereses que podría haber ganado. Es un proceso de descuento o actualización.

$$
VA = \frac{VF}{(1 + i)^n}
$$

- **VF**: Valor Futuro.
- **VA**: Valor Actual (o Capital inicial).
- *i*: Tasa de interés por periodo (en decimales, ej: 0.10 para 10%).
- *n*: Número de periodos (años, meses, etc.).

## Tiempo

El **Tiempo** es fundamental, los administramos, para determinar las ganancias o intereses percibidos o pagados (rendimiento), sobre el capital al aplicarle una tasa de interés.

## Porcentaje

Significa una cierta parte de cada ciento de una cosa cualquiera. (%)

### **Tanto por Ciento**

- Una parte se denomina el uno por ciento (1%)
- La cantidad total representa el cien por ciento (100%).

### Expresiones del Tanto por Ciento

20% = 20 (1/100) = (20/100) = 0.20
Tasa  = Quebrado o fracción = Decimal o tanto por uno

Lo siguiente exprese en tanto por uno:
5 %
28 %
0.25%

## Interes

La tasa de interés (*i*) es el costo de alquilar dinero ajeno. Se resume en tres tipos clave:

- **Nominal**: Es una tasa de referencia anual "de etiqueta" que no incluye reinversión de intereses.
- **Efectiva**: Es el rendimiento o costo real de la operación; sí incluye la capitalización (interés sobre interés).
- **Real**: Es lo que realmente ganas o pagas tras descontar la inflación (poder adquisitivo).

## Plazo Comprendido entre dos Fechas

El tiempo (*n* o *t*) es el multiplicador que define cuánto crece el dinero. En finanzas, existen dos formas de medirlo:

- **Tiempo Exacto (Real)**: Usa los días exactos del calendario (365 o 366 días). Es el más preciso y se usa en operaciones bancarias oficiales.

- **Tiempo Ordinario (Comercial)**: Simplifica todo a meses de 30 días y años de 360 días. Es el estándar en cálculos comerciales rápidos porque facilita las divisiones.

**Formula de Interes Simple**

$$
I = C \times i \times n
$$

- *I*: Interés (ganancia en dinero).
- *C*: Capital inicial.
- *i*: Tasa de interés (en decimales).
- *n*: Tiempo (debe estar en la misma unidad que la tasa, ej: años con años).

## Cálculo Practico de Fechas

Días entre fechas: Para calcular el plazo exacto, se excluye el primer día y se incluye el último.

Ejemplo: Del 1 de marzo al 15 de abril.

- Comercial: 30 (marzo) + 15 (abril) - 1 = 44 días.
- Exacto: 31 (marzo) + 15 (abril) - 1 = 45 días.

---

## Aplicaciones de las Matemáticas Financieras

- **Amortización**: Es el plan para matar una deuda. Te dice qué parte de tu cuota mensual va a pagar el préstamo (capital) y qué parte se queda el banco (intereses). Tabla de Amortización

- **VPN (Valor Presente Neto)**: Trae las ganancias futuras al valor de hoy y le resta la inversión. Si sobra dinero (es positivo), el negocio va.

- **TIR (Tasa Interna de Retorno)**: Es la tasa de rentabilidad propia del proyecto. Si la TIR es más alta que lo que te cobra el banco por prestarte, el proyecto es rentable.

- **Ahorro e Inversión**: Te permite proyectar cuánto tendrás en el futuro si ahorras una cantidad fija cada mes (anualidades), considerando que esos ahorros también generan intereses.

---

## Amortización

La **amortización** es el proceso mediante el cual una deuda se extingue gradualmente a través de pagos periódicos que incluyen:

* **Intereses** sobre el saldo pendiente
* **Capital** (reducción de la deuda)

Cada pago se denomina **cuota**, y su estructura depende del sistema (francés, alemán, americano, etc.).

## VPN (Valor Presente Neto)

El **Valor Presente Neto (VPN)** es la diferencia entre:

* El valor presente de los flujos de caja futuros
* La inversión inicial

> “¿Vale la pena esta inversión hoy?”

Se expresa como:

$$
VPN = \sum_{t=1}^{n} \frac{F_t}{(1+i)^t} - I_0
$$

Donde:

* $F_t$: flujo en el periodo (t)
* $i$: tasa de descuento
* $I_0$: inversión inicial

**Criterio:**

* $VPN > 0$: proyecto rentable
* $VPN = 0$: indiferente
* $VPN < 0$: no rentable

---

## TIR (Tasa Interna de Retorno)

La **TIR** es la tasa de descuento que hace que el VPN sea igual a cero:

> “¿Qué porcentaje me está rindiendo esta inversión?”

$$
0 = \sum_{t=1}^{n} \frac{F_t}{(1+\text{TIR})^t} - I_0
$$

**Criterio:**

* Si $\text{TIR} > i$ → aceptar
* Si $\text{TIR} < i$ → rechazar

---

## Ahorro e Inversión

* **Ahorro**: parte del ingreso no consumida, destinada a preservar valor.
* **Inversión**: utilización del ahorro con el objetivo de generar rentabilidad futura, asumiendo riesgo.

---

| Concepto     | Idea clave                 |
| ------------ | -------------------------- |
| Amortización | Pagar deuda poco a poco    |
| VPN          | ¿Gano o pierdo dinero hoy? |
| TIR          | ¿Qué % me rinde?           |
| Ahorro       | Guardar dinero             |
| Inversión    | Hacer crecer el dinero     |

> El VPN mide la rentabilidad absoluta de un proyecto, mientras que la TIR mide su rentabilidad relativa; ambos permiten evaluar decisiones de inversión en el tiempo.
