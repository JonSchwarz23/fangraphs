import { FangraphsClient } from "./index";

const test = async () => {
    const client = new FangraphsClient();

    const batters = await client.getMajorLeagueBattingLeaders({
        itemsPerPage: 50,
        season: 2023,
        minimumPlateAppearances: 100,
    });
    console.log(batters);

    const pitchers = await client.getMajorLeaguePitchingLeaders({
        itemsPerPage: 50,
        season: 2023,
        minimumInningsPitched: 100,
    });
    console.log(pitchers);

    const Lindor = await client.getPlayerInfo({
        id: "27506",
        position: "2B/SS",
    });
    console.log(Lindor);

    const board = await client.getProspectBoard();
    console.log(board);
};

test();
