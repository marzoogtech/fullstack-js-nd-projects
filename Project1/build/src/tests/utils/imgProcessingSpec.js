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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const imgProcessing_1 = require("../../utils/imgProcessing");
const imgName = 'fjord';
const width = 400;
const height = 200;
const testImgPath = path_1.default.join(__dirname, '../../../assets/full', `${imgName}.jpg`);
const thumbImgPath = path_1.default.join(__dirname, '../../../assets/thumb', `${imgName}_thumb_${width}_${height}.jpg`);
describe('Testing image processing functions', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, imgProcessing_1.imageProceser)(testImgPath, thumbImgPath, width, height);
    }));
    it('resize an image to a given size', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield expect(fs_1.default.existsSync(thumbImgPath));
        expect(result).toBeTruthy();
    }));
}));
