// One Line of Earned Pride — writes a single line of text to /output/entry.txt.
// Pure Node stdlib, no network, no reads outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "She'd practised the same three bars through four winters; tonight her father's hands stopped shaking long enough to turn the page.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
