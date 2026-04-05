# **Distribución Normal**

## 1. Conceptos básicos

La **distribución normal** es una distribución de probabilidad continua, simétrica y con forma de campana. Se caracteriza por dos parámetros:

- **Media ($\mu$):** valor central de la distribución.
- **Desviación estándar ($\sigma$):** medida de dispersión.

Se denota matemáticamente como:

$$
X \sim N(\mu, \sigma)
$$

---

## 2. Distribución normal estándar

![Distribucion Normal Estándar](/assets/images/estadistica-aplicada/distr-normal-std.jpg)

Una variable tiene distribución normal estándar si:

$$
Z \sim N(0,1)
$$

Esto significa que:

- Media ($\mu$) = $0$
- Desviación estándar ($\sigma$) = $1$

---

## 3. **Estandarización**

Para transformar una variable normal $X$ a una normal estándar $Z$, se utiliza la siguiente fórmula:

$$
Z = \frac{X - \mu}{\sigma}
$$

Este proceso permite usar tablas de distribución normal o funciones informáticas para calcular probabilidades más fácilmente.

---

## 4. Tipos de probabilidades

- **Probabilidad acumulada (Cola izquierda):**

  $$
  P(X \le x)
  $$

- **Cola derecha (Complemento):**

  $$
  P(X > x) = 1 - P(X \le x)
  $$

- **Intervalo:**
  $$
  P(a \le X \le b) = P(X \le b) - P(X \le a)
  $$

---

## 5. Funciones en Excel

Las siguientes funciones de Excel son el estándar actual para resolver problemas de distribución normal:

- **Probabilidad acumulada X:**
  ```excel
  =NORM.DIST(x; media; desviación; 1)
  ```

- **Probabilidad estándar:**
  ```excel
  =NORM.S.DIST(z, 1)
  ```
- **Cola derecha:**
  ```excel
  =1 - NORM.DIST(x; media; desviación; 1)
  ```
- **Inversa normal estándar ($Z$):** _(Devuelve el valor Z (puntuación estándar) dada una probabilidad)_
  ```excel
  =NORM.S.INV(probabilidad)
  =DISTR.NORM.ESTAND.INV(probabilidad)
  ```
- **Inversa normal general ($X$):** _(Devuelve el valor X dada una probabilidad)_
  ```excel
  =NORM.INV(probabilidad; media; desviación)
  ```

---

## Problema 1

**Enunciado:**
Los puntajes obtenidos por el personal de una empresa en una prueba de aptitudes siguen una distribución normal con:

- Media: $\mu = 75$
- Desviación estándar: $\sigma = 10$

### a) Hallar la probabilidad de que un trabajador obtenga a lo más 70 puntos

Buscamos:

$$
P(X \le 70)
$$

**Resolución:**

$$
Z = \frac{70 - 75}{10} = -0.5
$$

$$
P(Z \le -0.5) = 0.3085
$$

**Excel:**

```excel
=DISTR.NORM.N(70; 75; 10; 1)

=NORM.S.DIST(-0.5)
```

### b) Que porcentaje de trabajadores obtuvo más de 80 puntos?

Buscamos:

$$
P(X > 80)
$$

**Resolución:**

$$
P(X > 80) = 1 - P(X \leq 80)
$$

$$
Z = \frac{80 - 75}{10} = 0.5
$$



$$
P(X > 80) = 1 - P(Z \le 0.5) = 1 - 0.6915 = 0.3085
$$

_(El porcentaje es 30.85%)_

**Excel:**

```excel
=1 - DISTR.NORM.N(80; 75; 10; 1)

=1 - NORM.S.DIST(0.5)
```

### c) Porcentaje dentro de $\pm 8$ puntos de la media

Buscamos:

- Media: $\mu = 75$

$$
P(67 \le X \le 83)
$$

$$
\begin{gather*}
P(a \le X \le b) = P(X \le b) - P(X \le a) \\ \\
P(67 \le X \le 83) = P(X \le 83) - P(X \le 67)
\end{gather*}
$$


**Resolución:**

$$
Z_1 = \frac{67 - 75}{10} = -0.8 \quad ; \quad Z_2 = \frac{83 - 75}{10} = 0.8
$$

$$
\begin{gather*}
P(a \le X \le b) = P(X \le b) - P(X \le a) \\ \\
P(-0.8 \le X \le 0.8) = P(X \le 0.8) - P(X \le -0.8)
\end{gather*}
$$

$$
P = 0.7881 - 0.2119 = 0.5763
$$

_(El porcentaje es 57.63%)_

**Excel:**

```excel
=DISTR.NORM.N(83; 75; 10; 1) - DISTR.NORM.N(67; 75; 10; 1)

=NORM.S.DIST(0.8) - NORM.S.DIST(-0.8)
```

### d) Puntaje mínimo del décimo superior (percentil 90)

Buscamos el valor $K$ tal que:

$$
P(X \geq K) = 0.10
$$

$$
P(X < K) = 0.90
$$

**Resolución:**

_(Devuelve el valor Z (puntuación estándar) dada una probabilidad)_

```excel
=NORM.S.INV(probabilidad)
```

$$
Z = 1.28
$$

$$
Z = \frac{K - \mu}{\sigma}
$$


$$
K = \mu + Z\sigma = 75 + (1.28)(10) = 87.8
$$

**Excel:**

```excel
=INV.NORM.N(0.90; 75; 10)
```

### e) ¿82 puntos está en el quinto superior?

El "quinto superior" corresponde al top 20%, es decir, estar por encima del **percentil 80**.

**Resolución:**

$$
Z = 0.84
$$

$$
K = 75 + (0.84)(10) = 83.4
$$

Como el puntaje de corte es $83.4$ y tenemos que:

$$
82 < 83.4
$$

**Conclusión:** No pertenece al quinto superior.

**Excel:**

```excel
=INV.NORM.N(0.80; 75; 10)
```

---

## Problema 2

**Enunciado:**
Los ingresos diarios de unas bodegas siguen una distribución normal con una media de $\mu = 400$. Se sabe que:

$$
P(X > 500) = 0.04
$$

### a) Hallar la desviación estándar ($\sigma$)

**Resolución:**
Si la cola derecha es $0.04$, la probabilidad acumulada es:

$$
P(X < 500) = 1 - 0.04 = 0.96
$$

Buscamos el valor de $Z$ para un área de $0.96$:

$$
Z = 1.75
$$

Aplicamos la fórmula de estandarización:

$$
1.75 = \frac{500 - 400}{\sigma}
$$

$$
\sigma = \frac{100}{1.75} = 57.14
$$

**Excel (para hallar Z):**

```excel
=INV.NORM.ESTAND(0.96)
```

### b) Número de bodegas con ingresos menores a 350 (en una muestra de 200)

Buscamos primero la probabilidad:

$$
P(X < 350)
$$

**Resolución:**

$$
Z = \frac{350 - 400}{57.14} \approx -0.875
$$

$$
P(Z < -0.875) = 0.1907
$$

Para calcular la cantidad en 200 bodegas:

$$
200 \times 0.1907 = 38.14 \approx 38 \text{ bodegas}
$$

**Excel:**

```excel
=DISTR.NORM.N(350; 400; 57.14; 1)
```

---

## 📌 Conclusión

1. La **distribución normal** permite modelar eficientemente una gran cantidad de fenómenos reales.
2. La **estandarización** ($Z$) simplifica drásticamente los cálculos analíticos.
3. Herramientas como **Excel** facilitan y automatizan la resolución de estos problemas rápidamente.
4. Para resolver cualquier problema, la clave está en identificar correctamente de qué tipo de cálculo se trata:
   - Probabilidad **acumulada** (hacia la izquierda).
   - Probabilidad por **complemento** (hacia la derecha).
   - Cálculo de un **percentil** (búsqueda del valor de $X$ a partir de la probabilidad).
