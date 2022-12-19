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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.post("/compileAndRun", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, language } = req.body;
    try {
        if (language === "javascript") {
            (0, utils_1.buildCodingFile)(code);
            const result = yield (0, utils_1.compileAndExecuteJavascript)();
            res.status(200).json(result);
        }
        else if (language === "python") {
            (0, utils_1.buildCodingFile)(code);
            const result = yield (0, utils_1.compileAndExecutePython)();
            res.status(200).json(result);
        }
        else if (language === "java") {
            (0, utils_1.buildCodingFile)(code);
            const result = yield (0, utils_1.compileAndExecuteJava)();
            res.status(200).json(result);
        }
        else if (language === "c") {
            (0, utils_1.buildCodingFile)(code);
            const result = yield (0, utils_1.compileAndExecuteC)();
            res.status(200).json(result);
        }
        else if (language === "cpp") {
            (0, utils_1.buildCodingFile)(code);
            const result = yield (0, utils_1.compileAndExecuteCPlusPlus)();
            res.status(200).json(result);
        }
        else if (language === "php") {
            (0, utils_1.buildCodingFile)(code);
            const result = yield (0, utils_1.compileAndExecutePHP)();
            res.status(200).json(result);
        }
        else {
            res.status(200).json("Language is not supported");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map