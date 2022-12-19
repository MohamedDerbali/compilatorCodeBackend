import fs from "fs";
export class Stack {
  private stack: string[];
  constructor() {
    this.stack = [];
  }
  push(item: string) {
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
    const writeStream = fs.createWriteStream("./src/bootcode");
    if (!this.isEmpty()) {
      this.stack.forEach((element) => {
        writeStream.write(element);
        writeStream.write("\n");
      });
      writeStream.end();
    }
  }
}
