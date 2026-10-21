# fvilches.cl – Currículum online

Sitio estático hecho con [Astro](https://astro.build).

## Actualizar el CV

Todo el contenido está en **`src/data/cv.ts`** (español e inglés). Al editarlo se actualizan solas:

| Página      | Para qué                                                         |
| :---------- | :--------------------------------------------------------------- |
| `/`         | Web pública. Sin RUT, dirección ni datos personales.             |
| `/print`    | CV de entrega (imprimir / guardar PDF), con todos los datos.     |
| `/print-en` | Igual que `/print`, en inglés.                                   |

- `print: false` en un ítem lo oculta en la versión imprimible (para que quepa en la hoja).
- `short` es la descripción breve que usa la versión imprimible.
- `evidence` en una aptitud es la línea de respaldo (dónde se ha aplicado). Las áreas con `evidence` se muestran como principales; las demás, como etiquetas.
- `linkedin` / `github`: si se completan, aparecen en la sección de contacto.

`/print` y `/print-en` llevan `noindex`: se abren con el enlace o el QR, pero no aparecen en Google.

## Imágenes

`og-image.jpg` (vista previa al compartir el link), `apple-touch-icon.png` y `images/qr.png` se generan con:

```sh
node scripts/generate-images.mjs
```

Vuelve a ejecutarlo si cambias la foto (`src/assets/profile-photo.webp`) o el título.

## Comandos

| Comando           | Acción                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Instala dependencias                    |
| `npm run dev`     | Servidor local en `localhost:4321`      |
| `npm run build`   | Genera el sitio en `./dist/`            |
| `npm run preview` | Previsualiza el build                   |
| `npm run check`   | Revisa tipos y errores                  |
