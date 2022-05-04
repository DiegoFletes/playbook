const ExplorerService = require( "./../../../lib/services/ExplorerService");

describe("Unit Tests explorer services", () => {

  test('1) Create empty object', () => {
    const explorers = [{mission : "node"}];
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.length).toBe(1);
  });

})