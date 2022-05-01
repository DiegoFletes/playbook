export class ExplorerService {
    constructor () {
      this.filterByMission = filterByMission
      this.getAmountOfExplorersByMission = getAmountOfExplorersByMission
      this.getExplorersUsernamesByMission = getExplorersUsernamesByMission
    }
}

class ExplorerService{
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission)
        return this.filterByMission
    }
    static getAmountOfExplorersByMission(explorers, mission){
        //const explorerAmount = explorers.filter((explorer) => explorer.mission === mission)
        return this.getAmountOfExplorersByMission
    }
    static getExplorersUsernamesByMission(explorers, mission){

    }
}


module.exports = ExplorerService