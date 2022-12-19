import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { buildCodingFile, compileAndExecuteC, compileAndExecuteCPlusPlus, compileAndExecuteJava, compileAndExecuteJavascript, compileAndExecutePHP, compileAndExecutePython } from "./utils";
const app = express();
const port = 5000;
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.post("/compileAndRun", async (req: Request, res: Response) => {
  const { code, language } = req.body;
  try {
    if (language === "javascript") {
      buildCodingFile(code);
      const result = await compileAndExecuteJavascript();
      res.status(200).json(result);
    } else if (language === "python") {
      buildCodingFile(code);
      const result = await compileAndExecutePython();
      res.status(200).json(result);
    } else if (language === "java") {
      buildCodingFile(code);
      const result = await compileAndExecuteJava();
      res.status(200).json(result);
    }
    else if (language === "c") {
      buildCodingFile(code);
      const result = await compileAndExecuteC();
      res.status(200).json(result);
    }
    else if (language === "cpp") {
      buildCodingFile(code);
      const result = await compileAndExecuteCPlusPlus();
      res.status(200).json(result);
    }
    else if (language === "php") {
      buildCodingFile(code);
      const result = await compileAndExecutePHP();
      res.status(200).json(result);
    }
    else {
      res.status(200).json("Language is not supported");
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
