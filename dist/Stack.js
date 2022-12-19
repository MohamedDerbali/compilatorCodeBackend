"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const fs_1 = __importDefault(require("fs"));
class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    printStack() {
        this.stack.forEach((item) => {
            console.log(item);
        });
    }
    writeCodesInFile() {
        const writeStream = fs_1.default.createWriteStream("./src/bootcode");
        if (!this.isEmpty()) {
            this.stack.forEach((element) => {
                writeStream.write(element);
                writeStream.write("\n");
            });
            writeStream.end();
        }
    }
}
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map