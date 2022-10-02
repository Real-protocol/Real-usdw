const { execSync } = require("child_process");
const { writeFileSync } = require("fs");
const path = require("path");

const commitHash = execSync("git rev-parse HEAD", { encoding: "ascii" });
//const commitHash = "5174ecd0da4842157aba989499200d690b7e374f";
writeFileSync(path.join("artifacts", "version"), commitHash);
