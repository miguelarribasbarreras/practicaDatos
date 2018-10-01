# Trabajo Estadística. Estudio del Índice de Producción Industrial Nacional

Este trabajo tiene el objetivo de recoger los datos acerca del Índice de Producción Industrial Nacional de España de los años 2016-2017 y representarlo graficamente en un gráfico lineal (Line Chart).

El IPI es un indicador coyuntural que mide la evolución de la actividad productiva de las ramas industriales. El índice tiene como objetivo medir la evolución del volumen del valor añadido bruto generado por las ramas industriales y el conjunto de la industria. Por lo tanto, mide los cambios en la producción industrial sin el efecto de los precios.

Los datos provienen de la página del INE, como se observa en el siguiente link: [Tabla de Índice de Producción](http://www.ine.es/jaxiT3/Tabla.htm?t=26061).
Una vez hallamos entrado al link, seleccionaremos lo siguiente:
- Primer desplegable: Total Nacional (solamente).
- Segundo desplegable: Todas las opciones.
- Tercer desplegable: Índice (solamente).
- Cuarto desplegable: Los doce meses de 2016 y los de 2017.

Por último, le daremos a "Consultar selección".

Una vez obtenida la tabla deseada, se han extraído con WebScraping mediante la función leerIndices() del [fichero JavaScript](../TrabajoEstadistica/funcion.js)

Estos datos obtenidos se han guardado posteriormente como JSON en un fichero de nombre [indData.js](../TrabajoEstadistica/indData.js).

Para visualizar los datos, se ha empleado la librería de [Google Chart](https://developers.google.com/chart/) y el tipo de gráfico [Line Chart](https://developers.google.com/chart/interactive/docs/gallery/linechart).
El resultado es el que se muestra en la página [chart.html](../TrabajoEstadistica/chart.html)
