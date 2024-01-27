"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requests_1 = require("./requests");
const test = async () => {
    const batters = await (0, requests_1.getMajorLeagueBattingLeaders)({
        itemsPerPage: 50,
        season: 2023,
        minimumPlateAppearances: 100,
    });
    console.log(batters);
    const pitchers = await (0, requests_1.getMajorLeaguePitchingLeaders)({
        itemsPerPage: 50,
        season: 2023,
        minimumInningsPitched: 100,
    });
    console.log(pitchers);
    const Lindor = await (0, requests_1.getPlayerInfo)({
        id: "12916",
        position: "SS",
    });
    console.log(Lindor);
    const board = await (0, requests_1.getProspectBoard)();
    console.log(board);
};
test();
