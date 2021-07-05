import { mkdir, writeFile } from "fs/promises";
import { getTheme } from "./theme.js";

mkdir("./dist", { recursive: true })
  .then(() =>
    writeFile(
      "./dist/schemes.json",
      JSON.stringify(
        {
          schemes: [getTheme("dark"), getTheme("dimmed"), getTheme("light")],
        },
        null,
        2
      )
    )
  )

  .catch(() => process.exit(1));
