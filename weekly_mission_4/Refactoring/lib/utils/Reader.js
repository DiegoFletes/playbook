/*const fs = require("fs");

// Part 1 Read json file ===========================
const rawdata = fs.readFileSync("./explorers.json");
const explorers = JSON.parse(rawdata);
*/

const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
