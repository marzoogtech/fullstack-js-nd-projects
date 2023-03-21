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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Testing Image Precessing API endpoints', () => __awaiter(void 0, void 0, void 0, function* () {
    it('create fjord 200x200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request
            .get('/api/images?filename=fjord&width=200&height=200')
            .expect(200);
    }));
    yield it('not fourd for an image that is not in assets full', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request
            .get('/api/images?filename=marzoog&width=200&height=200')
            .expect(404);
    }));
    yield it('error 404 when the file name is not porvided', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/api/images').expect(404);
    }));
}));
