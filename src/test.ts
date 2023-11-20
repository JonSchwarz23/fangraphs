import { getMajorLeagueLeaders, getPlayerInfo } from "./fangraphs";
import { DataType, MaxNumberOfResults, Position, Stat, Team } from "./types";

const test = async () => {
    const result = await getMajorLeagueLeaders({
        stats: Stat.Pitching,
        dataType: DataType.Advanced,
        season: 2023,
        numberOfResults: MaxNumberOfResults,
        inningsPitchedQualifier: "0",
    });

    for (const player of result) {
        console.log(`${player.team}: ${player.name} - ${player.skillInteractiveEarnedRunAverage}`);
    }

    const playerInfo = await getPlayerInfo(result[0].id);
    console.log(playerInfo);
};

test();
