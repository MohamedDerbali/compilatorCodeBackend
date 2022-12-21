import { Stack } from "./Stack";
import { exec } from "child_process";

export const buildCodingFile = (code: string) => {
    const stack = new Stack();
    code.split("\n").forEach((line) => {
        stack.push(line);
    });
    stack.writeCodesInFile();
}

export const compileAndExecuteJavascript = () => {
    return new Promise((resolve, reject) => {
        exec("node ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecutePython = () => {
    return new Promise((resolve, reject) => {
        exec("python3 ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteJava = () => {
    return new Promise((resolve, reject) => {
        exec("java ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteC = () => {
    return new Promise((resolve, reject) => {
        exec("gcc ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteCPlusPlus = () => {
    return new Promise((resolve, reject) => {
        exec("g++ ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteCSharp = () => {
    return new Promise((resolve, reject) => {
        exec("csc ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteGo = () => {
    return new Promise((resolve, reject) => {
        exec("go ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteRuby = () => {
    return new Promise((resolve, reject) => {
        exec("ruby ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteSwift = () => {
    return new Promise((resolve, reject) => {
        exec("swift ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteKotlin = () => {
    return new Promise((resolve, reject) => {
        exec("kotlinc ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecuteRust = () => {
    return new Promise((resolve, reject) => {
        exec("rustc ./src/bootcode", (err, stdout, stderr) => {
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

export const compileAndExecutePHP = () => {
    return new Promise((resolve, reject) => {
        exec("php ./src/bootcode", (err, stdout, stderr) => {
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