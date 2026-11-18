# Case Study: Qbo — Suite de Juegos de Mesa con Dados & Motor 2D

> **Ficha para Portafolio Profesional de Desarrollo Mobile**  
> **Proyecto:** Qbo: Cacho, Todis y Dados  
> **Package ID:** `dev.codedd.qbo`  
> **Plataforma:** Android (Google Play Store)  
> **Rol:** Desarrollador Mobile Lead / Arquitecto de Software  
> **Dominio:** [codedd.dev](https://codedd.dev)  
> **Stack Principal:** Flutter, Dart, Flame Engine, Riverpod (Code Generation), Google Play Billing (IAP), Google AdMob (UMP/GDPR), Sensors Plus.

---

## 1. Resumen Ejecutivo (The Elevator Pitch)

**Qbo** es una aplicación móvil social de juegos de mesa tradicionales y casuales con dados (Cacho Alalay, Cacho Dudo, Todis, Mayor o Menor y Modo Libre). Diseñada bajo una estética sobria y minimalista (*Nocturnal Tabletop*), la app sustituye el uso de dados y cubiletes físicos en reuniones familiares o de amigos mediante un modo multijugador local presencial (*Pass & Play*).

El proyecto destaca por su rigurosa separación arquitectónica entre un **motor gráfico 2D de física en tiempo real (Flame)** y la **lógica de dominio en Dart puro**, gestionada de forma reactiva mediante **Riverpod con generación de código**, integrando sensores de movimiento físico (acelerómetro), audio de baja latencia con pools acotados y un modelo freemium no invasivo (AdMob + In-App Purchase de Google Play Billing).

---

## 2. Tecnologías y Herramientas

| Área | Tecnologías Utilizadas |
| :--- | :--- |
| **Framework & Lenguaje** | Flutter 3.x, Dart 3.x (Null-safety estricto) |
| **Motor Gráfico 2D** | `flame`, `flame_riverpod` (animación por spritesheets, estados de balanceo y asentamiento de dados) |
| **Gestión de Estado** | `flutter_riverpod`, `riverpod_annotation`, `riverpod_generator` (arquitectura 100% reactiva y generada) |
| **Monetización & Pagos** | `in_app_purchase` (Google Play Billing), `google_mobile_ads` (AdMob Interstitial + UMP Consent RGPD) |
| **Hardware & Sensores** | `sensors_plus` (acelerómetro para gesto de agitar), `HapticFeedback` nativo |
| **Persistencia & Offline** | `shared_preferences` (almacenamiento local aislado), `google_fonts` (empaquetado 100% offline) |
| **Audio Engine** | `flame_audio` con pool circular acotado y reproductores de baja latencia |
| **Navegación & Routing** | `go_router` con transiciones personalizadas |
| **Testing & CI** | Pruebas unitarias de dominio y de widgets (`flutter_test`, 69 tests automatizados) |
| **Optimización de Release** | Gradle, R8 / ProGuard, Adaptive Launcher Icons, Android 12+ Splash API |

---

## 3. Retos de Ingeniería y Soluciones Arquitectónicas

### A. Clean Architecture Híbrida: Desacople Flame vs. Dominio
* **El Problema:** En juegos móviles construidos sobre Flutter, es común acoplar la física y los sprites del motor de juego con las reglas de negocio (puntuaciones, turnos, validaciones), dificultando los tests automatizados y provocando fugas de memoria.
* **La Solución:**
  * **Flame es exclusivamente Vista y Física (`shared/dice_engine`):** El componente de juego `QboDiceGame` y los dados `DieComponent` desconocen las reglas del juego; únicamente reciben órdenes de lanzamiento (`rollDice`) y emiten un evento cuando todos los dados se detienen (`settled`) enviando una lista de enteros `List<int>`.
  * **Dominio en Dart Puro (`features/<juego>/domain/`):** Toda la lógica de evaluación (combinaciones de Cacho como Escaleras, Full, Póker, Grandes y Dormidas de mano, o deducciones en Dudo) está escrita en Dart sin importar paquetes de Flame ni Flutter, permitiendo pruebas unitarias instantáneas con cobertura exhaustiva.
  * **Orquestación con Riverpod:** Notifiers generados con `@riverpod` sirven de puente reactivo entre la entrada del usuario, el mundo de Flame y el estado de la partida.

### B. Control por Movimiento Físico (Shake-to-Roll)
* **El Problema:** La detección ingenua del acelerómetro suele generar falsos positivos por movimientos involuntarios o bloquear la interfaz si se procesan ráfagas masivas de eventos.
* **La Solución:**
  * Implementación de un servicio especializado (`ShakeDetectorService`) que calcula en tiempo real la norma de aceleración lineal neta ($\sqrt{x^2+y^2+z^2}/g$) en memoria volátil.
  * Filtro con umbral calibrable ($0.8g$ a $2.4g$) y un *cooldown* estricto de 1200 ms.
  * Soporte dual: el usuario puede alternar fluidamente entre agitar el teléfono o usar el botón táctil principal en la pantalla baja.

### C. Optimización de Audio Nativo y Prevención de Cuellos de Botella
* **El Problema:** Los lanzamientos consecutivos y rápidos al agitar el dispositivo generaban saturación en los canales de plataforma nativos de audio (`audioplayers`), provocando pérdida de frames y retraso en los sonidos de dados.
* **La Solución:**
  * Reestructuración del servicio de audio (`FlameAudioService`) con **reproductores acotados fijos** (slots monofónicos dedicados para el cubilete y el dado individual) y un **buffer circular** para las colisiones de dados (*dice clack*).
  * Modo `PlayerMode.lowLatency` y liberación garantizada de instancias (`dispose`), eliminando las fugas de memoria y manteniendo 60 FPS estables.

### D. Monetización Ética, Resiliente y Modelo "Remove Ads"
* **Cadencia Publicitaria:** La publicidad intersticial de AdMob se muestra únicamente tras acumular **10 tiradas reales** completas, con precarga silenciosa al tiro 7.
* **Resiliencia Offline:** Si el usuario no tiene conexión a internet, el juego jamás se bloquea; la partida continúa con fluidez.
* **Google Play Billing (IAP):** Integración del producto no consumible `qbo_remove_ads`. Cuando el usuario compra la versión sin anuncios (o restaura compras previas), el estado reactivo desactiva de inmediato cualquier llamada o precarga publicitaria, persistiendo la compra en almacenamiento local seguro.
* **Consentimiento RGPD:** Configuración completa del SDK User Messaging Platform (UMP) de Google para cumplir con la normativa europea de protección de datos.

---

## 4. Diseño UI/UX e Identidad Visual

* **Estética "Nocturnal Tabletop":**
  * Fondo base: Azul noche profundo (`#0B162C`).
  * Superficies elevadas: Azul pizarra (`#132240`).
  * Tablero y dados: Blanco marfil cálido (`#F4F1EA`).
  * Acentos funcionales: Ámbar de juego (`#D4A359`) para turnos y aciertos; Terracota (`#C84B31`) para penalizaciones y errores.
* **Ergonomía de Mesa:** Los paneles de puntuación y los resultados de los dados fueron diseñados para una legibilidad óptima a distancia de brazo apoyando el móvil en el centro de una mesa.
* **Offline-First Fonts:** Tipografías `SpaceGrotesk` y `Geist` empaquetadas localmente en el binario (`GoogleFonts.config.allowRuntimeFetching = false`) para evitar cualquier consumo de datos o dependencias externas de red.

---

## 5. Juegos y Módulos Implementados

1. **Cacho Alalay:**
   - 5 dados, modalidades de 2 o 3 tiros con bloqueo de dados ("al cubilete").
   - Libreta completa de anotación tradicional boliviana: Balas a Senas, Escalera (20/25), Full (30/35), Póker (40/45), Grande (50) y Dormida (victoria automática de mano).
2. **Cacho Dudo:**
   - Juego de faroleo por turnos con cubiletes individuales virtuales, dados ocultos, vidas por jugador y declaración de apuestas crecientes.
3. **Todis:**
   - Juego social de dados (1 dado) que traduce cada número a una dinámica de grupo (*Toma 1, Reparte 2, Todos toman / Todis, Izquierda, Derecha, Obliga*).
4. **Mayor y Menor:**
   - Juego ágil con 2 dados donde los jugadores apuestan si la siguiente tirada será mayor, menor o igual, con cálculo dinámico en tiempo real de probabilidades matemáticas.
5. **Modo Libre:**
   - Simulador versátil con selección configurable de 1 a 6 dados y color de dados personalizable (Azul, Rojo, Verde).

---

## 6. Métricas de Calidad e Ingeniería

* **Tests Automatizados:** 69 pruebas unitarias y de widgets ejecutadas con éxito (`flutter test`), cubriendo evaluadores de reglas, detección de sacudida, controladores de anuncios, persistencia y ciclo de vida de compras.
* **Compilación de Producción:**
  * Formato: Android App Bundle (`.aab`) firmado y optimizado con R8 minification.
  * Tamaño optimizado: ~60.5 MB (con tree-shaking de fuentes e iconos al 99.6%).
  * Target SDK: Android 14+ (API 34/35) con soporte hacia atrás hasta Android 7.0 (API 24).
* **Seguridad y Privacidad:** Cumplimiento total con Google Play Data Safety, COPPA y RGPD.

---

## 7. Extracto para Portafolio Web (Copy-Paste Ready)

### Descripción Corta (Tarjeta / Resumen de Proyecto)
> **Qbo — Juegos de Mesa con Dados (Flutter & Flame Engine)**  
> Aplicación móvil social para Android que digitaliza los juegos de mesa clásicos con dados (Cacho Alalay, Dudo, Todis). Desarrollada con **Flutter** y el motor **Flame 2D**, implementa Clean Architecture desacoplando la física de la lógica de negocio en Dart puro con **Riverpod**. Incluye soporte para acelerómetro (lanzamiento por sacudida), audio de baja latencia con pools acotados, monetización híbrida con **AdMob** y compras integradas con **Google Play Billing**.

### Principales Logros Técnicos para CV / Resumen:
* Diseñó e implementó una arquitectura limpia híbrida separando el motor gráfico de Flame de las reglas de negocio en Dart puro, logrando una suite de pruebas unitarias con **69 tests automatizados**.
* Construyó un detector de acelerómetro de baja latencia (`sensors_plus`) con filtrado vectorial de fuerza G y cooldown adaptativo para lanzamiento por movimiento físico.
* Resolvió cuellos de botella de audio nativo mediante un pool circular acotado de reproductores con `PlayerMode.lowLatency`.
* Integró compras dentro de la aplicación (IAP) con Google Play Billing y anuncios de baja frecuencia de AdMob compatibles con RGPD (UMP SDK).
