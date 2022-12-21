"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileAndExecutePHP = exports.compileAndExecuteRust = exports.compileAndExecuteKotlin = exports.compileAndExecuteSwift = exports.compileAndExecuteRuby = exports.compileAndExecuteGo = exports.compileAndExecuteCSharp = exports.compileAndExecuteCPlusPlus = exports.compileAndExecuteC = exports.compileAndExecuteJava = exports.compileAndExecutePython = exports.compileAndExecuteJavascript = exports.buildCodingFile = void 0;
const Stack_1 = require("./Stack");
const child_process_1 = require("child_process");
const buildCodingFile = (code) => {
    const stack = new Stack_1.Stack();
    code.split("\n").forEach((line) => {
        stack.push(line);
    });
    stack.writeCodesInFile();
};
exports.buildCodingFile = buildCodingFile;
const compileAndExecuteJavascript = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("node ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteJavascript = compileAndExecuteJavascript;
const compileAndExecutePython = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("python3 ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecutePython = compileAndExecutePython;
const compileAndExecuteJava = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("java ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteJava = compileAndExecuteJava;
const compileAndExecuteC = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("gcc ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteC = compileAndExecuteC;
const compileAndExecuteCPlusPlus = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("g++ ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteCPlusPlus = compileAndExecuteCPlusPlus;
const compileAndExecuteCSharp = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("csc ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteCSharp = compileAndExecuteCSharp;
const compileAndExecuteGo = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("go ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteGo = compileAndExecuteGo;
const compileAndExecuteRuby = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("ruby ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteRuby = compileAndExecuteRuby;
const compileAndExecuteSwift = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("swift ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteSwift = compileAndExecuteSwift;
const compileAndExecuteKotlin = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("kotlinc ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteKotlin = compileAndExecuteKotlin;
const compileAndExecuteRust = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("rustc ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecuteRust = compileAndExecuteRust;
const compileAndExecutePHP = () => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)("php ./src/bootcode", (err, stdout, stderr) => {
            if (err) {
                reject(err.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};
exports.compileAndExecutePHP = compileAndExecutePHP;
//# sourceMappingURL=utils.js.map