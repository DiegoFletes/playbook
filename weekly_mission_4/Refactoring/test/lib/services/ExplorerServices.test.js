const Reader = require("./lib/utils/Reader");

describe("Unit Tests explorer services", () => {

  test('1) Create empty object', () => {
    const explorerByMission = explorers.filter((explorer) => explorer.mission === "node" );
    expect(explorerByMission).toBeUndefined("node")

  })})