import { createCanvas, loadImage } from 'canvas';
import jsQR from 'jsqr';

interface IExtractQrDataResult {
  type: 'OK' | 'ERROR';
  message: string;
}

export class ImageService {
  static async extractQrData(imagePath: string, width: number, height: number): Promise<IExtractQrDataResult> {
    try {
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext('2d');
      const image = await loadImage(imagePath);
      ctx.drawImage(image, 0, 0);
      const img = ctx.getImageData(0, 0, width, height);

      const parsedQr = jsQR(img.data, width, height);

      if (parsedQr === null) {
        console.error('Parse qr error');

        return {
          type: 'ERROR',
          message: 'Не могу распознать QR код 🙄',
        }
      }

      return {
        type: 'OK',
        message: parsedQr.data,
      };
    } catch (err) {
      console.error(err);

      return {
        type: 'ERROR',
        message: 'Не могу загрузить изображение 😔',
      }
    }
  }
}
