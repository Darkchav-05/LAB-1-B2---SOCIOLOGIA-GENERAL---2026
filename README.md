# 🌅 RENACER

**Biografía Colectiva · Identidad · Socialización · Cambio Personal**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-22c55e?style=for-the-badge)

Proyecto académico desarrollado para representar una biografía colectiva a través de una experiencia web interactiva, moderna y visualmente cinematográfica.

---

# 📑 Índicetura |
| 2 | Estructura de archivos |
| 3 | Diseño visual |
| 4 | Flujo de navegación |
| 5 | Funciones JavaScript |
| 6 | Responsive Design |
| 7 | Recursos multimedia |

---

# 🏗️ Arquitectura

La aplicación está construida utilizando una arquitectura simple basada en tres archivos principales:

```text
index.html
      │
      ▼
style.css
      │
      ▼
function.js
```

Cada archivo tiene una responsabilidad específica:

- HTML → estructura del contenido.
- CSS → diseño visual y responsive.
- JavaScript → interactividad y animaciones.

---

# 🗂️ Estructura de Archivos

| Archivo | Función |
|----------|----------|
| `index.html` | Contiene toda la estructura semántica del sitio. |
| `style.css` | Define colores, tipografías, layouts, animaciones y adaptabilidad. |
| `function.js` | Controla el menú móvil, barra de progreso, animaciones y navegación dinámica. |
| `imagenes/` | Carpeta que almacena todas las imágenes utilizadas por el proyecto. |

---

## 📄 index.html

Archivo principal del proyecto.

Define:

### Header

```html
<header class="site-header">
```

Incluye:

- Logo RENACER
- Menú de navegación
- Botón responsive

---

### Hero

```html
<section class="hero">
```

Presenta:

- Imagen de portada
- Título principal
- Descripción
- Botón de inicio

---

### Historia

```html
<section id="historia">
```

Presenta la introducción de Mateo Rivas.

---

### Línea de Vida

```html
<section id="linea-de-vida">
```

Dividida en:

- Capítulo I
- Capítulo II
- Capítulo III
- Capítulo IV
- Capítulo V

---

### Instituciones Sociales

```html
<section id="instituciones">
```

Contiene:

- Familia
- Escuela
- Amigos
- Comunidad

---

### Socialización

```html
<section id="socializacion">
```

Explica:

- Socialización primaria
- Socialización secundaria
- Socialización terciaria

---

### Reflexión Final

```html
<section id="reflexion">
```

Conclusión de la historia.

---

### Footer

```html
<footer>
```

Información académica y créditos.

---

# 🎨 style.css

Controla la identidad visual completa del proyecto.

---

## Variables Globales

```css
:root
```

Define:

```css
--ink
--gold
--paper
--sand
--muted
```

Estas variables permiten mantener coherencia visual en toda la aplicación.

---

## Paleta de Colores

| Variable | Color |
|-----------|---------|
| `--ink` | Negro principal |
| `--gold` | Dorado decorativo |
| `--paper` | Fondo claro |
| `--sand` | Fondo arena |
| `--muted` | Texto secundario |

---

## Tipografías

### Playfair Display

Usada en:

- Títulos
- Capítulos
- Frases destacadas

### DM Sans

Usada en:

- Párrafos
- Menús
- Contenido general

---

## Layouts

Se utilizan:

### CSS Grid

```css
display:grid;
```

Para:

- Timeline
- Instituciones
- Intro

---

### Flexbox

```css
display:flex;
```

Para:

- Header
- Menús
- Botones

---

## Animaciones

Las clases:

```css
.reveal
.is-visible
```

Generan animaciones suaves al desplazarse por la página.

---

## Responsive Design

Implementado mediante:

```css
@media (max-width:900px)
```

y

```css
@media (max-width:680px)
```

Adaptando:

- Menús
- Imágenes
- Textos
- Columnas

---

# ⚙️ function.js

Gestiona todas las funciones interactivas.

---

## Barra de Progreso

Función:

```javascript
updateReadingProgress()
```

Calcula:

```text
Posición Scroll
        ↓
Porcentaje Leído
        ↓
Actualizar Barra
```

---

## Menú Responsive

Controla:

```javascript
menuToggle
```

Funciones:

- Abrir menú
- Cerrar menú
- Manejar tecla ESC
- Navegación móvil

---

## Animaciones Reveal

Usa:

```javascript
IntersectionObserver
```

Para detectar cuándo un elemento entra en pantalla.

Cuando ocurre:

```text
Elemento visible
        ↓
Agregar is-visible
        ↓
Animación CSS
```

---

## Control de Imágenes

Función automática que verifica:

```javascript
image.complete
```

Si una imagen falla:

```text
Imagen encontrada
      ↓
Mostrar imagen

Imagen faltante
      ↓
Mostrar placeholder
```

---

## Navegación Activa

Detecta la sección visible mediante:

```javascript
IntersectionObserver
```

Y agrega:

```css
.active
```

Al enlace correspondiente.

---

# 🧭 Flujo de Navegación

```mermaid
flowchart TD

A[Portada] --> B[Historia]
B --> C[Linea de Vida]
C --> D[Instituciones]
D --> E[Socialización]
E --> F[Reflexión]
F --> G[Créditos]
```

---

# 🖼️ Recursos Multimedia

El proyecto utiliza imágenes locales almacenadas en:

```text
imagenes/
```

Las imágenes son usadas para:

- Portada principal.
- Perfil del personaje.
- Capítulos de la historia.
- Instituciones sociales.
- Cierre visual.

En caso de no encontrarse una imagen, el sistema muestra automáticamente un placeholder diseñado mediante CSS.

---

# 🚀 Tecnologías Utilizadas

```text
HTML5
CSS3
JavaScript ES6
Google Fonts
Intersection Observer API
CSS Grid
Flexbox
```

---

# 👨‍💻 Autor

**Emerson Giancarlo Castro Pleitez**

Ingeniería en Sistemas y Redes Informáticas

Universidad Gerardo Barrios

---

> "El pasado explica parte de nuestra historia, pero nuestras decisiones ayudan a construir lo que llegamos a ser."
