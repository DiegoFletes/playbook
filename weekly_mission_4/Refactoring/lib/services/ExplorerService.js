// Clase anterior con la que obtenemos los explorers
const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");

// exports a class
export class ExplorerService {
    constructor () {
      this.filterByMission = filterByMission
      this.getAmountOfExplorersByMission = getAmountOfExplorersByMission
      this.getExplorersUsernamesByMission = getExplorersUsernamesByMission
    }
}