import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const qboDir = path.resolve('public/images/projects/qbo');

const imageMap = [
  { src: 'qbo2.jpeg', dest: 'qbo_hub.webp', label: 'Mesa de Juegos (Hub Principal de Selección)' },
  { src: 'qbo7.jpeg', dest: 'qbo_cacho_alalay.webp', label: 'Cacho Alalay y Libreta Digital de Anotación' },
  { src: 'qbo4.jpeg', dest: 'qbo_todis.webp', label: 'Todis - Dinámica Social y Lanzamiento por Agitado' },
  { src: 'qbo5.jpeg', dest: 'qbo_mayor_menor.webp', label: 'Mayor y Menor con Cálculo de Probabilidades' },
  { src: 'qbo3.jpeg', dest: 'qbo_cacho_mentiroso.webp', label: 'Cacho Mentiroso (Dudo) y Configuración de Mesa' },
  { src: 'qbo6.jpeg', dest: 'qbo_config_alalay.webp', label: 'Ajustes y Reglas de Mesa para Cacho Alalay' },
  { src: 'qbo1.jpeg', dest: 'qbo_splash.webp', label: 'Pantalla de Inicio y Logotipo Qbo' }
];

async function optimizeImages() {
  console.log('Optimizando imágenes de Qbo...');
  for (const item of imageMap) {
    const srcPath = path.join(qboDir, item.src);
    const destPath = path.join(qboDir, item.dest);
    
    if (fs.existsSync(srcPath)) {
      const origStats = fs.statSync(srcPath);
      
      await sharp(srcPath)
        .resize({ width: 720, height: 1600, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85, effort: 6 })
        .toFile(destPath);
        
      const newStats = fs.statSync(destPath);
      const savings = (((origStats.size - newStats.size) / origStats.size) * 100).toFixed(1);
      console.log(`✓ ${item.src} -> ${item.dest} (${(origStats.size / 1024).toFixed(1)} KB -> ${(newStats.size / 1024).toFixed(1)} KB, -${savings}%)`);
    } else {
      console.warn(`Archivo no encontrado: ${srcPath}`);
    }
  }
}

optimizeImages().catch(err => {
  console.error('Error al optimizar:', err);
  process.exit(1);
});
