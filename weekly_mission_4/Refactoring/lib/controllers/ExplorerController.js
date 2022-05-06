const Reader = require("./../utils/Reader");
const ExplorerService = require( "./../services/ExplorerService");
const FizzbuzzService = require( "./../services/FizzbuzzService");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const Bymission = explorers.filter((explorer) => explorer.mission === mission, );
        return Bymission;
    }

    static getExplorerssUsernameByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const Username = explorers.filter((explorer) => explorer.name === mission, );
        return Username;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const Amount = explorers.length((explorer) => explorer.name === mission, );
        return Amount;
    }
    
}
module.exports = ExplorerController;