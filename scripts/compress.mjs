import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

const directory = "./src/assets/images/*.{webp,png}";

(async () => {
  const files = await imagemin([directory], {
    destination: "./src/assets/images",
    plugins: [
      imageminPngquant({ quality: [0.8, 0.8] }),
      imageminWebp({ quality: 80 })
    ]
  })
})();
