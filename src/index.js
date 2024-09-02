import { of, map } from "rxjs";

map((x) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`Output is: ${v}`));
