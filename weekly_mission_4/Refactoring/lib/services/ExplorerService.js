class ExplorerService{
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission, )
        return explorerByMission
    }
    static getAmountOfExplorersByMission(explorers){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode.length
    }
    static getExplorersUsernamesByMission(explorers){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
}
module.exports = ExplorerService