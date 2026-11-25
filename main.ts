import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  'The Mournful Fridge Shelf: it hums a low apology every time the door opens, so you and the yogurt you keep buying and will never finish can grieve it together.';

const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`);
