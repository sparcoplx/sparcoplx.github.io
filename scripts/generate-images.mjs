// Genera las imágenes estáticas del sitio a partir de la foto de perfil.
// Uso: node scripts/generate-images.mjs  (volver a ejecutar si cambia la foto o el título)
import sharp from 'sharp';

const photo = 'src/assets/profile-photo.webp';
const out = 'public';

const circle = (size) =>
  Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></svg>`);

const roundPhoto = (size) =>
  sharp(photo)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: circle(size), blend: 'dest-in' }])
    .png()
    .toBuffer();

// Ícono de inicio para iPhone/iPad (180×180)
await sharp(photo)
  .resize(180, 180, { fit: 'cover' })
  .png({ palette: true, quality: 90, compressionLevel: 9 })
  .toFile(`${out}/apple-touch-icon.png`);

// Imagen de vista previa al compartir el link (WhatsApp, LinkedIn, Facebook): 1200×630
const bg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2563eb"/>
      <stop offset="1" stop-color="#1e3a8a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="250" cy="315" r="172" fill="rgba(255,255,255,0.25)"/>
  <g font-family="Arial, Helvetica, sans-serif" fill="#ffffff">
    <text x="470" y="250" font-size="56" font-weight="700">Félix Vilches Acuña</text>
    <text x="470" y="320" font-size="31" opacity="0.95">Ingeniero Civil en Computación e Informática</text>
    <text x="470" y="370" font-size="27" opacity="0.85">Profesor Técnico Profesional · Telecomunicaciones</text>
    <text x="470" y="450" font-size="27" font-weight="700" opacity="0.9">www.fvilches.cl</text>
  </g>
</svg>`);

await sharp(bg)
  .composite([{ input: await roundPhoto(320), left: 90, top: 155 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(`${out}/og-image.jpg`);

// QR liviano para la versión imprimible (el original es 3000×3000)
await sharp('public/images/qr-code.png')
  .flatten({ background: '#ffffff' })
  .resize(600, 600, { kernel: 'nearest' })
  .png({ palette: true, colours: 2, compressionLevel: 9 })
  .toFile(`${out}/images/qr.png`);

console.log('Imágenes generadas en /public');
