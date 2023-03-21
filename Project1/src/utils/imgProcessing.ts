import sharp from 'sharp';

export const imageProceser = async (
    fullImgPath: string,
    thumbImgPath: string,
    width: number,
    height: number
) => {
    console.log('processing the image...');
    await sharp(fullImgPath).resize(width, height).toFile(thumbImgPath);
};
