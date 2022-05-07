const Reader = require("./../utils/Reader");
const ExplorerService = require( "./../services/ExplorerService");
const FizzbuzzService = require( "./../services/FizzbuzzService");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorerssUsernameByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission);
    }

    static getFizzbuzzStatus(number){
        return FizzbuzzService.applyValidationInExplorer(number);
    }
    
}
module.exports = ExplorerController;