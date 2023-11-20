import { getBattingLeaders } from "./fangraphs";
import { DataType, MaxNumberOfResults, Stat } from "./types";

const test = async () => {
    const result = await getBattingLeaders({
        dataType: DataType.Advanced,
        stats: Stat.Batting,
        season: 2023,
        numberOfResults: MaxNumberOfResults,
        plateAppearancesQualifier: "y",
    });

    for (const player of result) {
        console.log(`${player.team}: ${player.name} - ${player.strikeoutRate}`);
    }
};

test();
