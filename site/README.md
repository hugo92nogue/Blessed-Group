# Blessed Group — Sitio Web (para presentar al cliente)

Sitio estático, sin build. Se sube **arrastrando esta carpeta** a Vercel.
El cliente solo recibe un **link** — nunca ve el código.

---

## 🚀 Subir a Vercel arrastrando (lo más fácil — 2 minutos)

1. Entrá a **https://vercel.com** y creá una cuenta gratis (con tu Google/email).
2. Una vez dentro, andá a **https://vercel.com/new**.
3. Abajo de todo vas a ver la opción de **importar/arrastrar**. Arrastrá
   **toda esta carpeta `site`** a la zona de carga
   *(o hacé clic donde dice "Browse" y seleccioná la carpeta `site`)*.
4. Dejá todo por defecto y hacé clic en **Deploy**.
5. En ~30 segundos te da un link tipo **`blessed-group-xxxx.vercel.app`**.

👉 **Ese link es el que le pasás a tu cliente.** Entra desde cualquier celular o
computadora y ve el sitio completo, navegable. El formulario funciona en modo demo.

> Si Vercel pide "Framework Preset", elegí **Other**. Build Command vacío.
> Output Directory: dejalo vacío o poné `.`

---

## 🔁 Para hacer cambios después

Decime los cambios (fotos, textos, colores) y te paso la carpeta `site`
actualizada. Volvés a **https://vercel.com/new**, arrastrás la nueva carpeta y
listo — nuevo link con la versión corregida.

*(Si más adelante querés que el link se actualice solo sin volver a arrastrar,
conviene conectarlo a GitHub — te ayudo cuando quieras.)*

---

## 👀 Ver el sitio en tu compu antes de subirlo (opcional)
No funciona con doble clic (por seguridad del navegador). Usá un servidor local:
```bash
cd site
npx serve .
```
Y abrí el link que te muestra (ej. `http://localhost:3000`).

---

## Contenido de la carpeta
```
index.html     ← la página
styles.css     ← estilos · tokens/ ← colores, tipografía, espaciado
_ds_bundle.js  ← componentes de marca Blessed Group
data.js        ← TODO el texto e imágenes (acá se editan los datos)
icons.jsx · parts1.jsx · parts2.jsx ← secciones del sitio
assets/        ← logo
vercel.json · render.yaml ← configs de hosting
```

## Notas
- Imágenes de proyectos/hero son de archivo (placeholder) → reemplazables en `data.js`.
- Teléfono, WhatsApp y dirección son de referencia → confirmá en `data.js`.
