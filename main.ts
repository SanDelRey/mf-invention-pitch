import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The Apologetic Fridge Shelf: it hums a short apology each time you open the door, so you and the yogurt you keep buying and will never finish can mourn it together.";

const out = (process.env.MAKEFUN_OUTPUT_DIR ?? "/output").replace(/\/+$/, "");
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`);
