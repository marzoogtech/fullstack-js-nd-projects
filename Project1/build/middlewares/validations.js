"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const imgProcessing_1 = require("../src/utils/imgProcessing");
const validation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const widthstr = req.query.width;
    const heightstr = req.query.height;
    const numbersRgx = /^[0-9]+$/;
    if (!filename) {
        return res.status(404).send('You should includle filename');
    }
    if (!numbersRgx.test(widthstr) || !numbersRgx.test(heightstr)) {
        return res
            .status(404)
            .send(`Invalid width/heigt parameters: width=${widthstr} height=${heightstr}`);
    }
    const width = parseInt(widthstr);
    const height = parseInt(req.query.height);
    const fullImgPath = path_1.default.join(__dirname, '../assets/full', `${filename}.jpg`);
    const thumbImgPath = path_1.default.join(__dirname, '../assets/thumb', `${filename}_thumb_${width}_${height}.jpg`);
    if (!fs_1.default.existsSync(fullImgPath)) {
        return res
            .status(404)
            .send(`Invalid original filename, filename=${filename}`);
    }
    if (fs_1.default.existsSync(thumbImgPath)) {
        return next();
    }
    else {
        yield (0, imgProcessing_1.imageProceser)(fullImgPath, thumbImgPath, width, height);
        return next();
    }
});
exports.validation = validation;
