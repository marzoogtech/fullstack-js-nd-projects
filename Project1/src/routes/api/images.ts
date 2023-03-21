import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { validation } from '../../../middlewares/validations';

const imgsRoute = Router();

imgsRoute.get('/', validation, (req: Request, res: Response) => {
    const { filename, width, height } = req.query;
    const imgPath = path.join(
        __dirname,
        '../../../assets/thumb',
        `${filename}_thumb_${width}_${height}.jpg`
    );
    if (fs.existsSync(imgPath)) {
        return res.sendFile(imgPath);
    }

    return res.status(404).send('Image not found');
});

export default imgsRoute;
