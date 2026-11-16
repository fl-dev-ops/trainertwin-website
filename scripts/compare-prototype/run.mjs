import { run, diff } from './harness.mjs';
import c1 from './cases1.mjs';
import c2 from './cases2.mjs';
import c3 from './cases3.mjs';

const only = process.argv[2] ? process.argv[2].split(",") : undefined;
const themes = process.argv[3] ? process.argv[3].split(",") : ["light", "dark"];
const res = await run([...c1, ...c2, ...c3], { themes, only });
const noise = /fontSize|lineHeight|columnGap|rowGap|textAlign|justifyContent|alignItems|flexDirection|cursor|\.height|\.padding(Right|Left|Top|Bottom)/;
const all = diff(res);
const lines = all.filter((l) => !noise.test(l));
console.log(lines.join("\n") || "NO DIFFERENCES");
console.log(`\ncases ${res.length / themes.length}, raw diffs ${all.length}, after noise filter ${lines.length}`);
