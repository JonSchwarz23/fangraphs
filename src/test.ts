import { getMajorLeagueBattingLeaders, getMajorLeaguePitchingLeaders } from "./majorLeagueLeaders";

const test = async () => {
    const batters = await getMajorLeagueBattingLeaders({
        itemsPerPage: 30,
        season: 2023,
        minimumPlateAppearances: 100,
    });
    console.log(batters);
};

test();
