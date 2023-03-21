import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { imageProceser } from '../src/utils/imgProcessing';

export const validation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const filename: string = req.query.filename as unknown as string;
    const widthstr: string = req.query.width as unknown as string;
    const heightstr: string = req.query.height as unknown as string;
    const numbersRgx = /^[0-9]+$/;

    if (!filename) {
        return res.status(404).send('You should includle filename');
    }

    if (!numbersRgx.test(widthstr) || !numbersRgx.test(heightstr)) {
        return res
            .status(404)
            .send(
                `Invalid width/heigt parameters: width=${widthstr} height=${heightstr}`
            );
    }

    const width: number = parseInt(widthstr);
    const height: number = parseInt(heightstr);

    const fullImgPath: string = path.join(
        __dirname,
        '../assets/full',
        `${filename}.jpg`
    );

    const thumbImgPath: string = path.join(
        __dirname,
        '../assets/thumb',
        `${filename}_thumb_${width}_${height}.jpg`
    );

    if (!fs.existsSync(fullImgPath)) {
        return res
            .status(404)
            .send(`Invalid original filename, filename=${filename}`);
    }

    if (fs.existsSync(thumbImgPath)) {
        return next();
    } else {
        await imageProceser(fullImgPath, thumbImgPath, width, height);
        return next();
    }
};
