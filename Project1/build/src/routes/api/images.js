"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const validations_1 = require("../../../middlewares/validations");
const imgsRoute = (0, express_1.Router)();
imgsRoute.get('/', validations_1.validation, (req, res) => {
    const { filename, width, height } = req.query;
    const imgPath = path_1.default.join(__dirname, '../../../assets/thumb', `${filename}_thumb_${width}_${height}.jpg`);
    if (fs_1.default.existsSync(imgPath)) {
        return res.sendFile(imgPath);
    }
    return res.status(404).send('Image not found');
});
exports.default = imgsRoute;
