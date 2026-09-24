# Alex Electric Toolbox V4.5 Hybrid

La V4 reemplaza las versiones Online y Offline por una sola PWA. Las calculadoras y el estudio local siempre abren; Drive, Sheets y OpenAI o Gemini se activan cuando Apps Script responde.

Dentro de la app puedes cambiar el funcionamiento cuando quieras:

- **Automático:** usa Online cuando Apps Script responde y Offline cuando falla.
- **Online:** intenta conectar Apps Script inmediatamente.
- **Offline:** permanece con los datos locales hasta que tú vuelvas a activar Online o Automático.

El botón de Inicio permite pasar rápidamente de Offline a Online. Las tres opciones también están en **Ajustes → Modo de conexión**.

La pantalla de Inicio ahora muestra solo las 8 herramientas esenciales: Ley de Ohm, Potencia/Watt, Kirchhoff, Cuadro de carga, Conductores y protección, Cubicación, Empalme/concéntrico y Vivienda RIC. Las calculadoras anteriores siguen disponibles dentro de **Herramientas secundarias y de estudio**.

La barra inferior incorpora **Normas**, organizada igual que los ramos: elige un RIC, ábrelo, toma apuntes o consúltalo con IA. Para guardar toda la biblioteca en el iPhone o PC pulsa **Guardar normas offline** una sola vez con internet.

## 1. Actualizar Apps Script

En el proyecto actual de Alex Electric Toolbox:

1. No reemplaces `Código.gs` ni `Index.html`.
2. Crea o reemplaza el archivo de secuencia `HybridSync` con `apps-script/HybridSync.gs`.
3. Crea un archivo de secuencia llamado `OpenAIIntegration` y pega `apps-script/OpenAIIntegration.gs`.
4. Crea un archivo HTML llamado `HybridBridge` y pega `apps-script/HybridBridge.html`.
5. Guarda y ejecuta `setupHybridV4` una sola vez. Acepta los permisos de tu propio proyecto.
6. Ve a **Implementar → Administrar implementaciones → Editar → Versión nueva → Implementar**.
7. Conserva la URL terminada en `/exec`. Si cambia, reemplázala en `config.js`.

## 2. Reemplazar la PWA en GitHub

Usa el mismo repositorio `alex-electric-toolbox-offline`. Mantener la misma dirección permite que iPhone y PC conserven la instalación, las guías y el progreso local de la V3.

Sube a la raíz del repositorio todos los archivos de la carpeta V4 excepto la carpeta `apps-script`. Confirma el reemplazo de los archivos existentes y espera a que GitHub Pages termine de publicar.

No subas `alex-toolbox-offline-data.json`, respaldos, PIN, contraseñas ni claves de OpenAI o Gemini.

## Configurar OpenAI

1. Con la nueva versión publicada, abre la PWA desde GitHub Pages.
2. Entra a **Ajustes → IA y procesamiento**.
3. Pega tu API key de OpenAI, deja `gpt-6-luna` para comenzar y pulsa **Guardar y activar**.
4. Pulsa **Probar**. La respuesta debe mostrar `OK`.
5. Desde ese momento, procesar guías, estudiar todo el ramo y preguntar a una guía usarán OpenAI.

La consulta normativa usa OpenAI aunque Gemini esté elegido para las guías, porque envía directamente el PDF oficial seleccionado a la Responses API. Cada respuesta debe indicar el documento, la sección o artículo y la página cuando sea identificable.

La clave se guarda en las propiedades privadas de Apps Script. No queda en el código público, en GitHub ni en el almacenamiento de la PWA.

## 3. Primera apertura y migración

1. Abre con internet la misma dirección de GitHub Pages.
2. Entra a **Ajustes → Cuenta y sincronización**.
3. Escribe tu correo y PIN una sola vez.
4. Pulsa **Conectar cuenta** y después **Sincronizar ahora**.
5. La V4 descargará automáticamente una copia de las guías procesadas.

Importante: no pruebes el modo Online abriendo `index.html` directamente desde la carpeta del computador. Esa vista sirve para revisar la apariencia, pero la conexión con Apps Script y la instalación PWA funcionan desde la dirección HTTPS de GitHub Pages.

Si la V3 ya estaba instalada en esa misma dirección, la V4 reutiliza su base local y migra el progreso. El antiguo paquete `alex-toolbox-offline-data.json` también se puede importar desde **Ajustes → Copia local de estudio**.

Si publicas la V4 en otro repositorio o dominio, el navegador la considera una app nueva: primero exporta un respaldo en la V3 y luego impórtalo en la V4.

## 4. Comprobación rápida

Con internet, selecciona **Online** y comprueba que el indicador superior diga **Online manual**. Luego pulsa **Activar offline** en Inicio: el indicador debe decir **Offline manual**, pero las calculadoras, las guías guardadas y el quiz seguirán funcionando. Pulsa **Activar online** para regresar. Finalmente selecciona **Automático**, activa modo avión y vuelve a conectarte; el aviso de cambios pendientes debe regresar a **Todo el progreso está sincronizado**.

Prueba también Kirchhoff con un ejemplo simple, la revisión de conductores y la calculadora Vivienda RIC. En **Normas**, busca “puesta a tierra”, abre RIC N°06 y descarga la biblioteca offline. Las recomendaciones normativas son ayudas preliminares: deben contrastarse con el proyecto real, el pliego vigente y un instalador autorizado.

## Seguridad

La PWA no guarda las claves de OpenAI ni Gemini. El correo y el token de sesión quedan únicamente en el almacenamiento local del dispositivo. El PIN se envía al Apps Script solo al conectar la cuenta y no se escribe en los archivos de GitHub.
