# Especificaciones Técnicas y de Privacidad de Qbo
**Documento base para la generación de la Política de Privacidad y el Formulario de Seguridad de los Datos (Google Play Data Safety)**

Este documento contiene la radiografía técnica y legal completa de la aplicación móvil **Qbo: Cacho, Todis y Dados**. Ha sido redactado para que otro proyecto o generador web (HTML, React, Astro, Next.js, GitHub Pages, etc.) pueda crear la página pública de Política de Privacidad requerida por Google Play Store y las normativas internacionales (RGPD / GDPR, CCPA / CPRA, COPPA).

---

## 1. Ficha de Identificación de la Aplicación

| Parámetro | Detalle |
| :--- | :--- |
| **Nombre de la Aplicación** | Qbo: Cacho, Todis y Dados (Nombre corto: *Qbo*) |
| **Identificador de Paquete (Application ID)** | `dev.codedd.qbo` |
| **Versión Inicial** | `1.0.0+1` |
| **Plataforma Soportada** | Android (Google Play Store) |
| **Categoría en la Tienda** | Juegos de mesa / Juegos de dados / Ocio social |
| **Modelo de Monetización** | Gratuito con publicidad, con opción de compra integrada para eliminar la publicidad |
| **Compras In-App (IAP)** | Sí: 1 producto integrado no consumible ("Quitar Publicidad", ID: `qbo_remove_ads`) gestionado vía Google Play Billing |
| **Desarrollador / Responsable** | `[Completar: Nombre o Razón Social del Desarrollador]` |
| **Correo de Contacto / Soporte** | `[Completar: soporte@tudominio.com o correo de contacto]` |
| **Fecha de Efectividad** | `[Completar: Fecha de publicación, ej. Noviembre 2026]` |

---

## 2. Resumen Ejecutivo de Privacidad

* **Cero Cuentas de Usuario:** Qbo no requiere registro, inicio de sesión ni creación de perfiles. No solicita correos electrónicos, nombres reales, contraseñas ni autenticación social (Google Sign-In, Facebook, Apple, etc.).
* **Sin Servidores Propios:** Qbo es una aplicación **autónoma y offline-first**. No cuenta con servidores de backend propios, APIs propietarias en la nube ni bases de datos remotas.
* **Datos Personales Recopilados Directamente:** **Ninguno (0%)**. Qbo no recopila, almacena, transmite ni comercializa directamente ninguna Información de Identificación Personal (PII).
* **Almacenamiento 100% Local:** Cualquier preferencia del usuario (volumen, vibración, color de dados, nombres de turno para la partida) se guarda de manera privada y local en el almacenamiento del dispositivo (`SharedPreferences`).
* **Servicios de Terceros:** La única conexión a internet es ejecutada por el SDK de **Google AdMob / Google Mobile Ads** para mostrar anuncios intersticiales de baja frecuencia y el SDK de **Google UMP** para la gestión de consentimiento en la Unión Europea / EEE.

---

## 3. Detalle de Almacenamiento Local (`SharedPreferences`)

La app utiliza la librería `shared_preferences` exclusivamente para guardar configuraciones del jugador en el almacenamiento aislado de la aplicación (`/data/data/dev.codedd.qbo/shared_prefs/`). Ninguno de estos datos se envía a internet ni sale del teléfono.

| Clave Técnica | Tipo | Propósito | ¿Contiene PII? |
| :--- | :--- | :--- | :--- |
| `qbo_sound_enabled` | `bool` | Recordar si los efectos de sonido de dados están activos o silenciados. | No |
| `qbo_haptics_enabled` | `bool` | Recordar si la vibración háptica está encendida o apagada. | No |
| `qbo_shake_enabled` | `bool` | Recordar si la función de agitar para lanzar dados está activa. | No |
| `qbo_shake_sensitivity` | `double` | Umbral de fuerza G calibrado por el usuario para el acelerómetro. | No |
| `qbo_selected_dice_color`| `String` | Tema cosmético de los dados seleccionado (ej. `"blue"`, `"red"`, `"green"`). | No |
| `qbo_recent_players` | `List<String>` | Lista de apodos o identificadores locales ingresados para el turno (ej. `"Jugador 1"`, `"Carlos"`). | No (alias temporales locales) |
| `qbo_ad_roll_count` | `int` | Contador de lanzamientos completados (reseteado a 0 cada 10 tiros para regular la frecuencia de anuncios). | No |
| `qbo_ads_removed` | `bool` | Indica si el usuario adquirió la compra para eliminar la publicidad de forma permanente. | No |

> **Eliminación de datos locales:** El usuario puede eliminar completamente estos datos en cualquier momento desde **Ajustes de Android > Aplicaciones > Qbo > Almacenamiento > Borrar datos**, o simplemente desinstalando la aplicación.

---

## 4. Hardware, Sensores y Permisos del Dispositivo

### 4.1. Uso del Acelerómetro (Detección de Agitado)
* **Librería:** `sensors_plus` (`SensorsEventStream`).
* **Propósito:** Permitir al usuario lanzar los dados virtuales de forma natural agitando su teléfono físico en la mesa o en la mano.
* **Procesamiento de datos:**
  * Las lecturas de los ejes $X, Y, Z$ de la aceleración lineal son procesadas **únicamente en memoria RAM** en tiempo real mediante un cálculo matemático de norma vectorial neta ($\sqrt{x^2 + y^2 + z^2} / g$).
  * En cuanto se evalúa si superó el umbral configurado ($0.8g$ a $2.4g$), **el dato es descartado de inmediato**.
  * **Los datos del acelerómetro nunca se graban, no se persisten en disco y nunca se transmiten por la red.**

### 4.2. Motor Háptico / Vibración
* Se utiliza el servicio nativo de `HapticFeedback` de Android para brindar una respuesta táctil breve al colisionar y rodar los dados sobre el tablero.

### 4.3. Permisos de Red y Android Manifest
En el archivo `AndroidManifest.xml` solo operan los permisos requeridos por el sistema operativo y el motor de anuncios:

| Permiso de Android | Motivo / Justificación | Nivel de Riesgo |
| :--- | :--- | :--- |
| `android.permission.INTERNET` | Requerido por el SDK de Google AdMob para descargar anuncios publicitarios y verificar el consentimiento de privacidad (UMP). | Normal |
| `android.permission.ACCESS_NETWORK_STATE` | Permite a AdMob comprobar si el dispositivo tiene conexión a internet antes de solicitar un anuncio. | Normal |
| `com.google.android.gms.permission.AD_ID` | Identificador de publicidad de Google Play Services en Android 13+ para servir publicidad (personalizada o no personalizada según consentimiento). | Estándar de AdMob |

### 4.4. Permisos que Qbo **NO** solicita ni utiliza
Para absoluta tranquilidad de los usuarios y auditorías de seguridad:
* ❌ **NO Cámara:** No se accede a la cámara (`CAMERA`).
* ❌ **NO Micrófono:** No se graba audio (`RECORD_AUDIO`).
* ❌ **NO Ubicación:** No se pide ubicación GPS precisa ni aproximada (`ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`).
* ❌ **NO Contactos:** No se accede a la agenda ni contactos (`READ_CONTACTS`).
* ❌ **NO Almacenamiento Externo / Fotos:** No se leen fotos, videos ni archivos del usuario (`READ_EXTERNAL_STORAGE`, `READ_MEDIA_IMAGES`).
* ❌ **NO Estado del Teléfono:** No se lee el número de teléfono, IMEI ni estado de llamadas (`READ_PHONE_STATE`).

---

## 5. Tipografías y Recursos Offline

A diferencia de muchas apps Flutter que descargan fuentes web en tiempo de ejecución:
* Qbo tiene configurado estrictamente:
  ```dart
  GoogleFonts.config.allowRuntimeFetching = false;
  ```
* Todas las fuentes (`SpaceGrotesk`, `Geist`) y recursos visuales/sonoros están empaquetados dentro de los binarios locales del APK/AAB (`assets/fonts/`, `assets/audio/`, `assets/dice/sheets/`).
* **La app no realiza ninguna solicitud HTTP a servidores de Google Fonts.**

---

## 6. Proveedores de Terceros: Publicidad y Consentimiento

La aplicación integra **Google AdMob** (a través del paquete oficial `google_mobile_ads: ^9.2.0`) para mantener el juego 100% gratuito sin compras integradas.

### 6.1. Frecuencia y Experiencia de Usuario
* El formato utilizado es **Anuncio Intersticial a Pantalla Completa**.
* La app implementa un controlador de cadencia estricto: la publicidad se muestra únicamente tras acumular **10 lanzamientos reales de dados**, evitando saturar al usuario o interrumpir momentos activos de juego.
* Si el dispositivo está sin conexión a internet (modo avión o sin datos), la app continúa funcionando con total normalidad sin bloquear al jugador.

### 6.2. Datos que Google AdMob puede procesar
Al interactuar con la red publicitaria de Google, dicho proveedor puede recopilar y procesar de manera automatizada:
1. **Identificadores del dispositivo:** Identificador de Publicidad de Android (Google Advertising ID / GAID), identificadores específicos de la app de AdMob.
2. **Datos de red y técnicos:** Dirección IP (utilizada para inferir una geolocalización aproximada a nivel ciudad/país y para prevención de fraudes), modelo de dispositivo, versión de sistema operativo, operador móvil.
3. **Métricas de rendimiento e interacción:** Si el anuncio fue visualizado, clics, tiempos de carga y respuesta de red.

### 6.3. Marco de Consentimiento Europeo (RGPD / UMP SDK)
* Qbo inicializa el **Google User Messaging Platform (UMP) SDK** conforme al marco regulatorio TCF v2.2 de IAB Europe.
* A los usuarios residentes en el Espacio Económico Europeo (EEE), Reino Unido y Suiza se les presenta un diálogo de consentimiento previo donde pueden elegir entre:
  * Aceptar anuncios personalizados.
  * Solicitar anuncios no personalizados / limitados.
  * Gestionar sus opciones de proveedores publicitarios.

### 6.4. Enlaces Oficiales de Google
* **Política de Privacidad de Google:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
* **Cómo utiliza Google la información de sitios o apps asociados:** [https://policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites)
* **Control y configuración de anuncios del usuario:** [https://adssettings.google.com/](https://adssettings.google.com/)

---

## 7. Clasificación de Edad, Familia y Contenido (COPPA / IARC)

* **Público Objetivo:** Adolescentes y Adultos (Mayores de 13 años / Mayores de 18 años según la jurisdicción).
* **Cumplimiento de COPPA (Children's Online Privacy Protection Act):** Qbo **no** está dirigida a niños menores de 13 años. No recopila intencionalmente datos de menores de edad.
* **Contexto de Contenido Social (Minijuego "Todis"):**
  * La app incluye el juego de mesa social "Todis" (conocido popularmente como juego de fiesta o de tragos: *Toma 1, Reparte 2, Todos toman, etc.*).
  * **Aclaración legal:** La aplicación es un simulador de dados y entretenimiento digital; no comercializa, no suministra, no patrocina marcas de alcohol ni obliga al consumo de bebidas alcohólicas. Los usuarios deciden libremente la dinámica de sus reuniones (por ejemplo, con bebidas no alcohólicas, retos sociales o golosinas).
  * **Cuestionario IARC / Clasificación:** Se recomienda clasificar la app como adecuada para adolescentes/adultos (PEGI 12 / Teen / IARC 12+) debido a las referencias a dinámicas sociales de fiesta.

---

## 8. Guía para el Formulario "Seguridad de los Datos" de Google Play (Data Safety Form)

Al completar la ficha en **Google Play Console > Seguridad de los datos**, utiliza las siguientes respuestas exactas correspondientes a la arquitectura de Qbo:

### ¿Tu app recopila o comparte alguno de los tipos de datos de usuario requeridos?
* **Respuesta:** **Sí** (Debido a la presencia del SDK de Google AdMob).

### ¿Todos los datos de usuario que recopila tu app se cifran en tránsito?
* **Respuesta:** **Sí** (El SDK de Google Mobile Ads transmite todas sus solicitudes mediante canales seguros HTTPS/TLS cifrados).

### ¿Ofreces a los usuarios una forma de solicitar que se borren sus datos?
* **Respuesta:** **No aplica / Sí**. La app no almacena cuentas ni datos en servidores remotos. Los datos locales se eliminan inmediatamente cuando el usuario borra los datos de la app o la desinstala.

### Categorías de Datos Específicas a Declarar:

| Categoría | Tipo de Dato | ¿Recopilado? | ¿Compartido? | Finalidad | Obligatorio u Opcional |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ubicación** | Ubicación aproximada (inferida por IP) | Sí (por AdMob) | Sí (a redes publicitarias) | Publicidad o marketing, Prevención de fraudes | Obligatorio para anuncios |
| **Identificadores del dispositivo u otros** | ID de dispositivo o ID de publicidad (GAID) | Sí (por AdMob) | Sí (a Google / anunciantes) | Publicidad o marketing, Analítica de anuncios, Seguridad | Obligatorio para anuncios |
| **Rendimiento de la app** | Registros de fallos / Diagnósticos de red | Sí (por AdMob) | Sí (a Google) | Rendimiento publicitario y diagnóstico | Obligatorio |
| **Información Personal (Nombre, Email, Teléfono)** | Ninguno | **NO** | **NO** | N/A | N/A |
| **Información Financiera (Tarjetas, Cuentas)** | Datos de pago procesados 100% por Google Play | **NO** (gestionado por Google) | **NO** | Compras integradas de Google Play | N/A (gestionado por Google Play Billing) |
| **Fotos, Videos, Archivos** | Ninguno | **NO** | **NO** | N/A | N/A |
| **Contactos, Mensajes, Micrófono** | Ninguno | **NO** | **NO** | N/A | N/A |

---

## 9. Derechos de los Usuarios y Mecanismos de Control

1. **Control de Anuncios y Restablecimiento de ID:**
   Los usuarios pueden revocar la personalización de anuncios en cualquier momento desde su propio dispositivo Android dirigiéndose a:
   * **Ajustes > Google > Anuncios > Restablecer ID de publicidad** o **Eliminar ID de publicidad**.
2. **Derecho al Olvido y Eliminación de Preferencias:**
   Como no existen bases de datos ni cuentas en servidores de Qbo, el usuario ejerce su derecho de supresión de datos locales simplemente limpiando el caché y datos de almacenamiento desde el menú de aplicaciones de Android o desinstalando la app.
3. **Contacto para Consultas de Privacidad:**
   El usuario puede remitir dudas o solicitudes al correo del desarrollador indicado en la ficha inicial.

---

## 10. Plantilla Base de Texto para la Página Web (Copy-Paste Ready)

A continuación, se provee el texto modelo estructurado en formato Markdown que puede ser montado directamente en el HTML o framework web del otro proyecto:

```markdown
# Política de Privacidad de Qbo

**Última actualización:** [FECHA]

Bienvenido a **Qbo: Cacho, Todis y Dados** (en adelante, "la Aplicación"), desarrollada por [NOMBRE DEL DESARROLLADOR O EMPRESA] ("nosotros"). Nos comprometemos a proteger su privacidad. Esta Política de Privacidad describe el tratamiento de la información cuando usted utiliza nuestra aplicación móvil disponible en Google Play Store.

### 1. Resumen: No recopilamos sus datos personales
La Aplicación está diseñada para disfrutarse sin registro ni cuentas de usuario. Nosotros **NO** recopilamos, almacenamos, comercializamos ni compartimos nombres reales, correos electrónicos, números de teléfono, contactos, fotografías, ubicación GPS precisa ni archivos personales.

### 2. Información almacenada localmente en su dispositivo
Para garantizar una experiencia fluida de juego, la Aplicación almacena ciertas preferencias exclusivamente de forma local en su dispositivo mediante almacenamiento interno seguro (`SharedPreferences`):
- Preferencias de sonido y vibración.
- Activación y sensibilidad del acelerómetro para la función de agitar el dispositivo.
- Preferencia de color de los dados.
- Apodos temporales de los jugadores para anotar puntuaciones en partidas locales.

Estos datos nunca se transmiten por internet y permanecen exclusivamente en su teléfono. Puede borrarlos en cualquier momento limpiando los datos de la aplicación en los Ajustes de Android o al desinstalar la app.

### 3. Sensores del dispositivo (Acelerómetro)
La Aplicación utiliza el acelerómetro del dispositivo con el único objetivo de detectar el gesto físico de agitado para hacer rodar los dados virtuales. Los cálculos de movimiento se evalúan momentáneamente en la memoria volátil del dispositivo y se descartan inmediatamente; jamás se registran ni se transmiten.

### 4. Publicidad y Servicios de Terceros
Para mantener la Aplicación gratuita, integramos la plataforma de anuncios **Google AdMob** (suministrada por Google LLC).
Google AdMob puede recopilar y procesar automáticamente cierta información de su dispositivo conforme a sus propias políticas de privacidad, tales como:
- Identificador de Publicidad de Android (Google Advertising ID).
- Dirección IP (utilizada para determinar la ubicación aproximada y prevenir fraudes).
- Información del dispositivo (modelo, versión de sistema operativo) y datos de interacción con los anuncios.

En regiones cubiertas por el Reglamento General de Protección de Datos (RGPD) en Europa, la Aplicación utiliza la plataforma de mensajes de consentimiento de Google (UMP SDK) para permitirle elegir si consiente el uso de anuncios personalizados o prefiere anuncios limitados.

Para más detalles sobre cómo Google utiliza los datos, visite:
- [Política de Privacidad de Google](https://policies.google.com/privacy)
- [Cómo utiliza Google la información de apps asociadas](https://policies.google.com/technologies/partner-sites)

### 5. Privacidad de Menores
La Aplicación no está dirigida a niños menores de 13 años y no recopila deliberadamente información de menores. Si usted es padre, madre o tutor legal y considera que un menor ha proporcionado información indebida a través de servicios de terceros, contáctenos para tomar las medidas necesarias.

### 6. Cambios a esta Política
Podemos actualizar nuestra Política de Privacidad ocasionalmente para reflejar actualizaciones técnicas o normativas. Le recomendamos revisar periódicamente esta página para conocer cualquier cambio.

### 7. Contacto
Si tiene preguntas o sugerencias respecto a esta Política de Privacidad, puede contactarnos a través del siguiente correo electrónico:
📧 **[codedd.dev@gmail.com / SOPORTE]**
```
