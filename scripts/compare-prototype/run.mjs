import { run, diff } from './harness.mjs';
import c1 from './cases1.mjs';
import c2 from './cases2.mjs';
import c3 from './cases3.mjs';

const args = process.argv.slice(2).filter((a) => a !== "--strict");
const only = args[0] ? args[0].split(",") : undefined;
const themes = args[1] ? args[1].split(",") : ["light", "dark"];
const res = await run([...c1, ...c2, ...c3], { themes, only });
const noise = /fontSize|lineHeight|columnGap|rowGap|textAlign|justifyContent|alignItems|flexDirection|cursor|\.height|\.padding(Right|Left|Top|Bottom)/;
const strict = process.argv.includes("--strict");
const all = diff(res, { strict });
const lines = strict ? all : all.filter((l) => !noise.test(l));
console.log(lines.join("\n") || "NO DIFFERENCES");
console.log(`\ncases ${res.length / themes.length}, raw diffs ${all.length}, after noise filter ${lines.length}`);
