import path from 'path';
import fs from 'fs';
import { imageProceser } from '../../utils/imgProcessing';

const imgName = 'fjord';
const width = 400;
const height = 200;
const testImgPath = path.join(
    __dirname,
    '../../../assets/full',
    `${imgName}.jpg`
);
const thumbImgPath = path.join(
    __dirname,
    '../../../assets/thumb',
    `${imgName}_thumb_${width}_${height}.jpg`
);

describe('Testing image processing functions', async () => {
    beforeAll(async () => {
        await imageProceser(testImgPath, thumbImgPath, width, height);
    });

    it('resize an image to a given size', async () => {
        const result = await expect(fs.existsSync(thumbImgPath));
        expect(result).toBeTruthy();
    });
});
