# Resumen Teórico

### 📊 1. Conceptos Básicos de Estadística e Inferencia

- **Población y Muestra:** La población es el conjunto total de elementos de interés; la muestra es un subconjunto extraído aleatoriamente para representarla y reducir costos/tiempo.
- **Parámetro:** Medida numérica fija y generalmente desconocida que describe a la población completa (ej. media $\mu$, varianza $\sigma^2$). Se halla mediante un censo.
- **Estadígrafo (Estadístico):** Medida calculada exclusivamente con los datos de la muestra (ej. media $\bar{X}$, varianza $S^2$). Se usa para estimar el parámetro poblacional.
- **Error de Muestreo:** Diferencia matemática esperada entre el estadígrafo y el parámetro. Es medible y controlable con un buen diseño probabilístico.
- **Error No Muestral:** Sesgos ajenos a la estadística, generados por mal diseño del cuestionario, errores del entrevistador o falta de respuestas.

### 🎲 2. Métodos de Muestreo Probabilístico (Azar y error medible)

- **Aleatorio Simple (M.A.S):** Cada elemento poblacional tiene idéntica probabilidad de ser elegido por sorteo directo. Ideal para poblaciones homogéneas.
- **Sistemático:** Selecciona un arranque aleatorio y luego extrae elementos con un intervalo fijo ($k = N/n$). Requiere una población sin patrones cíclicos ocultos.
- **Estratificado:** Divide a la población en grupos (estratos) que son similares por dentro pero diferentes entre sí. Se extrae una muestra aleatoria de cada grupo.
- **Por Conglomerados:** Divide la población en bloques naturales (heterogéneos por dentro, homogéneos entre bloques). Se sortean bloques y se evalúa a todos sus miembros.
- **Multietápico:** Muestreo en varias fases o etapas sucesivas (ej. sortear ciudades, luego barrios, luego personas). Reduce enormemente los costos logísticos.

### 👤 3. Métodos de Muestreo No Probabilístico (Sin azar, error no medible)

- **Por Conveniencia:** Selección de elementos basada en la facilidad de acceso o proximidad física para el investigador. Útil solo para fases exploratorias.
- **Juicio de Expertos (Intencional):** La muestra se elige según el criterio profesional de un especialista, asumiendo qué elementos son los más representativos.
- **Por Cuotas:** Busca replicar porcentajes poblacionales (ej. 50% hombres, 50% mujeres), pero el encuestador elige a las personas "a dedo" hasta llenar el cupo.

### 📈 4. Teoría de las Distribuciones Muestrales

- **Muestra Aleatoria:** Sucesión de variables independientes e idénticamente distribuidas (i.i.d.), garantizando que la muestra represente fielmente a la población original.
- **Distribución Muestral:** Es la distribución de las probabilidades de un estadístico (ej. la media), evaluando todas las muestras posibles de tamaño $n$ que pueden existir.
- **Teorema del Límite Central (TLC):** Afirma que, si el tamaño de muestra es grande ($n \ge 30$), la distribución de la media muestral se aproxima a una Normal, sin importar la forma poblacional.

### 📐 5. Distribuciones de Estadísticos Específicos

- **Distribución de la Media Muestral:** Usa distribución Normal ($Z$) si la varianza poblacional es conocida; si es desconocida y se usa la muestral ($S^2$), cambia a $t$ de Student.
- **Distribución de la Proporción Muestral:** Modela variables cualitativas (éxito/fracaso). Por el TLC, para muestras $>30$, se aproxima a una Normal estándar ($Z$).
- **Distribución de la Varianza Muestral:** Modela la dispersión de una muestra respecto a la poblacional. Se rige por la distribución asimétrica Ji-cuadrado ($\chi^2$).
- **Diferencia de Medias/Proporciones:** Compara dos poblaciones distintas. Se ajusta a distribución Normal ($Z$) o $t$ de Student dependiendo de si se conocen las varianzas poblacionales.
- **Razón de Varianzas:** Divide las varianzas de dos muestras independientes para probar si sus poblaciones tienen dispersiones iguales. Usa la distribución F de Fisher.

### 🌊 6. Distribuciones de Probabilidad Continuas

- **Coeficiente de Variación (CV):** Medida porcentual ($S/\bar{X}$) que relaciona la dispersión con la media. Permite comparar la variabilidad de dos poblaciones en distintas unidades.
- **Distribución Uniforme ($U$):** La probabilidad es constante dentro de un intervalo $[\alpha, \beta]$. Su gráfica es plana (rectangular) y áreas iguales tienen probabilidad igual.
- **Distribución Exponencial ($E$):** Modela el tiempo o distancia transcurrida hasta que ocurre un evento aleatorio. Está inversamente relacionada con la distribución de Poisson.
- **Distribución Normal ($Z$):** Campana de Gauss simétrica donde coinciden media, mediana y moda. Al estandarizarse ($Z$), su media es 0 y desviación estándar es 1.
- **Ji-Cuadrado ($\chi^2$):** Asimétrica a la derecha y solo toma valores positivos. Depende de sus grados de libertad ($n$). Nace de sumar variables normales estandar al cuadrado.
- **F de Fisher-Snedecor ($F$):** Asimétrica positiva, nace del cociente de dos variables Ji-cuadrado. Depende de dos grados de libertad (numerador $m$ y denominador $n$).
- **t de Student ($t$):** Simétrica como la Normal pero con colas más anchas (mayor probabilidad en extremos). Se usa con varianzas desconocidas y muestras pequeñas ($n<30$). Cuando $n$ crece, se vuelve idéntica a la Normal.

---

### 📋 7. Elementos Estructurales de la Investigación Estadística

- **Población Objetivo:** Es la porción específica de la población general que está perfectamente delimitada y de la cual se extraerá efectivamente la muestra.
- **Marco Muestral:** Es el listado físico o referencial (padrón, mapa, base de datos) que contiene a todos los elementos elegibles para el sorteo aleatorio.
- **Unidad de Análisis vs. de Muestreo:** La unidad de análisis es el sujeto individual medido; la de muestreo es el elemento sorteado (puede ser el individuo o un grupo/conglomerado que lo contiene).
- **Muestreo con vs. sin Reemplazo:** Con reemplazo devuelve el elemento y genera $N^n$ muestras posibles. Sin reemplazo lo retira, usando variaciones/combinaciones para hallar las muestras posibles.
- **Justificación Práctica del Muestreo:** Se usa en lugar del censo para reducir costos/tiempo, por imposibilidad física de abarcar todo, o porque la prueba destruye al producto (ej. resistencia de materiales).

### 🛠️ 8. Reglas Técnicas y Fórmulas del Diseño Muestral

- **Afijación Proporcional:** Fórmula para estratos donde el tamaño de cada submuestra ($n_i$) depende proporcionalmente del peso o porcentaje que tiene ese estrato dentro de la población total.
- **Regla de Variabilidad (Estratos vs. Conglomerados):** Los estratos exigen baja variabilidad interna y alta externa. Los conglomerados exigen la regla opuesta: alta variabilidad interna (heterogéneos).
- **Costo Total de Muestreo:** Su ecuación suma un Costo Fijo logístico más un Costo Variable, el cual es la suma de los costos individuales de encuestar en cada estrato ($C = CF + \sum n_i c_i$).

### ⚙️ 9. Ajustes y Fórmulas de las Distribuciones Muestrales

- **Distribución Muestral Teórica vs. Experimental:** La teórica asume una población infinita donde no se pueden listar todas las muestras. La experimental usa poblaciones finitas moderadas.
- **Error Estándar:** Es el denominador en las fórmulas de estandarización (ej. $\sigma/\sqrt{n}$). Representa la desviación estándar de la distribución de la media muestral.
- **Factor de Corrección por Población Finita (FCPF):** Raíz de $(N-n)/(N-1)$. Se usa para ajustar la varianza al conocer la población total ($N$). Se omite si la muestra es $<5\%$ de la población.
- **Varianza Agrupada o Combinada ($s_p^2$):** Es un promedio ponderado de varianzas muestrales. Se usa en distribución $t$ para diferencias de medias cuando las varianzas poblacionales son desconocidas pero _iguales_.
- **Aproximación de Welch-Satterthwaite:** Fórmula compleja para ajustar grados de libertad ($G$). Se aplica al comparar medias con varianzas poblacionales desconocidas y que se asumen _diferentes_.

### 📈 10. Propiedades Matemáticas de las Variables Continuas

- **Función de Densidad ($f(x)$) vs. Acumulada ($F(x)$):** La densidad dibuja la curva pero no da probabilidades directas; la acumulada ($F(x)$) mide el área a la izquierda, dando la probabilidad exacta $\le x$.
- **Relación Poisson / Exponencial:** Poisson (discreta, $\lambda$) mide el número de ocurrencias. Exponencial (continua, $\beta$) mide el _tiempo transcurrido_ entre dichas ocurrencias. Matemáticamente $\beta = 1/\lambda$.
- **Propiedad Reproductiva de la Normal:** Si sumas, restas o haces una combinación lineal de múltiples variables Normales independientes, el resultado será siempre una nueva variable con distribución Normal.
- **Convergencia de Grados de Libertad:** A medida que crecen los grados de libertad ($n$), la forma de la Ji-cuadrado y la t de Student se vuelve cada vez más simétrica, convergiendo a la Normal Estándar ($Z$).
