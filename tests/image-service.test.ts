import * as path from 'path';
import { ImageService } from '../src/image-service';

const fixtureTestPath = path.join(process.cwd(), 'tests', 'fixtures', 'qr-exist-1.png')

describe('image-service', () => {
  it('should extract QR data from QR code', async () => {
    const result = await ImageService.extractQrData(fixtureTestPath, 3264, 2448);

    expect(result).toEqual({
      type: 'OK',
      message: 'http://sk.wikipedia.org/',
    });
  });
});

