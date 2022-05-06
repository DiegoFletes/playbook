const ExplorerService = require( "./../../../lib/services/ExplorerService");
const Reader = require("./../../../lib/utils/Reader");
const FizzbuzzService = require( "./../../../lib/services/FizzbuzzService");
const ExplorerController = require( "./../../../lib/controllers/ExplorerController");

describe("Explorers by mission", () => {

    test("1) Create empty object", () => {
        const explorersbymission = ExplorerController.getExplorersByMission("node");
        expect(explorersbymission.length).toBe(10);
    });

});