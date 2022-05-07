const ExplorerController = require( "./../../../lib/controllers/ExplorerController");

describe("Explorers ", () => {

    test("1) explorerbymission test", () => {
        const explorersbymission = ExplorerController.getExplorersByMission("node");
        expect(explorersbymission.length).toBe(10);
    });

    test("2) explorersamount test", () => {
        const explorersbymission = ExplorerController.getExplorersAmonutByMission("node");
        expect(10).toBe(10);
    });

    test("3) usernames test", () => {
        const explorersbymission = ExplorerController.getExplorerssUsernameByMission("node");
        expect(15).toBe(15);
    });


});