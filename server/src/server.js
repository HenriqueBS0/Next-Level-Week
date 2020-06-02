"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/users', function (request, response) {
    console.log('Listagem de usuários');
    response.json([
        'Henrique',
        'Fabio',
        'Felipe',
        'Uelinton'
    ]);
});
app.listen(3333);
