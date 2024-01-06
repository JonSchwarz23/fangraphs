import { getMajorLeagueBattingLeaders, getMajorLeaguePitchingLeaders, getPlayerInfo, getProspectBoard } from "./requests";

const test = async () => {
    const batters = await getMajorLeagueBattingLeaders({
        itemsPerPage: 50,
        season: 2023,
        minimumPlateAppearances: 100,
    });
    console.log(batters);

    const pitchers = await getMajorLeaguePitchingLeaders({
        itemsPerPage: 50,
        season: 2023,
        minimumInningsPitched: 100,
    });
    console.log(pitchers);

    const Lindor = await getPlayerInfo({
        id: "12916",
        position: "SS",
    });
    console.log(Lindor);

    const board = await getProspectBoard();
    console.log(board);
};

test();
