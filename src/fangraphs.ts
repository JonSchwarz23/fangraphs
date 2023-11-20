import { load } from "cheerio";
import {
    AdvancedBattingLeaderParameters,
    BattingLeadersParameters,
    DashboardBattingLeaderParameters,
    DataType,
    StandardBattingLeaderParameters,
} from "./types";
import {
    BattingAdvancedResponse,
    BattingAdvancedResponseSchema,
    BattingDashboardResponse,
    BattingDashboardResponseSchema,
    BattingStandardResponse,
    BattingStandardResponseSchema,
} from "./schema";
import { get } from "http";

function isValidNumber(value: string): boolean {
    if (value === "") return false;
    if (value.replaceAll(" ", "") === "") return false;
    return !isNaN(Number(value));
}

function toNumber(value: string): number {
    if (!isValidNumber(value)) throw new Error(`Invalid number: ${value}`);
    return Number(value);
}

function getChildText(row: { find: any }, childIndex: number): string {
    return row.find(`td:nth-child(${childIndex})`).text();
}

function addOptionalNumber(key: string, childIndex: number, row: { find: any }, response: any) {
    const value = getChildText(row, childIndex);
    if (isValidNumber(value)) {
        response[key] = Number(value);
    }
}

function getDashboardBattingLeaders(html: string): BattingDashboardResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    const result: BattingDashboardResponse[] = [];

    for (const r of rows) {
        const response: any = {};
        const row = $(r);

        response["id"] = row.find("td:nth-child(2) > a").attr("href")!.split("/")[5];
        response["name"] = getChildText(row, 2);
        response["team"] = getChildText(row, 3);
        response["games"] = toNumber(getChildText(row, 4));
        response["plateAppearances"] = toNumber(getChildText(row, 5));
        response["homeRuns"] = toNumber(getChildText(row, 6));
        response["runs"] = toNumber(getChildText(row, 7));
        response["runsBattedIn"] = toNumber(getChildText(row, 8));
        response["stolenBases"] = toNumber(getChildText(row, 9));
        response["walkRate"] = toNumber(getChildText(row, 11).slice(0, -1));
        response["strikeoutRate"] = toNumber(getChildText(row, 12).slice(0, -1));
        response["isolatedPower"] = toNumber(getChildText(row, 13));
        response["battingAverageOnBallsInPlay"] = toNumber(getChildText(row, 14));
        response["battingAverage"] = toNumber(getChildText(row, 16));
        response["onBasePercentage"] = toNumber(getChildText(row, 17));
        response["sluggingPercentage"] = toNumber(getChildText(row, 18));
        response["weightedOnBaseAverage"] = toNumber(getChildText(row, 19));
        addOptionalNumber("expectedWeightedOnBaseAverage", 20, row, response);
        response["weightedRunsCreatedPlus"] = toNumber(getChildText(row, 21));
        response["baseRuns"] = toNumber(getChildText(row, 23));
        response["offense"] = toNumber(getChildText(row, 25));
        response["defense"] = toNumber(getChildText(row, 26));
        response["winsAboveReplacement"] = toNumber(getChildText(row, 27));

        const expectedStr = getChildText(row, 20);
        if (isValidNumber(expectedStr)) {
            response["expectedWeightedOnBaseAverage"] = Number(expectedStr);
        }

        result.push(BattingDashboardResponseSchema.parse(response));
    }

    return result;
}

function getStandardBattingLeaders(html: string): BattingStandardResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    console.log(rows.length);

    const result: BattingStandardResponse[] = [];

    for (const r of rows) {
        const response: any = {};
        const row = $(r);

        response["id"] = row.find("td:nth-child(2) > a").attr("href")!.split("/")[5];
        response["name"] = getChildText(row, 2);
        response["team"] = getChildText(row, 3);
        response["games"] = toNumber(getChildText(row, 4));
        response["atBats"] = toNumber(getChildText(row, 5));
        response["plateAppearances"] = toNumber(getChildText(row, 6));
        response["hits"] = toNumber(getChildText(row, 7));
        response["singles"] = toNumber(getChildText(row, 8));
        response["doubles"] = toNumber(getChildText(row, 9));
        response["triples"] = toNumber(getChildText(row, 10));
        response["homeRuns"] = toNumber(getChildText(row, 11));
        response["runs"] = toNumber(getChildText(row, 12));
        response["runsBattedIn"] = toNumber(getChildText(row, 13));
        response["walks"] = toNumber(getChildText(row, 14));
        response["intentionalWalks"] = toNumber(getChildText(row, 15));
        response["strikeouts"] = toNumber(getChildText(row, 16));
        response["hitByPitch"] = toNumber(getChildText(row, 17));
        response["sacrificeFlies"] = toNumber(getChildText(row, 18));
        response["sacrificeHits"] = toNumber(getChildText(row, 19));
        response["doublePlays"] = toNumber(getChildText(row, 20));
        response["stolenBases"] = toNumber(getChildText(row, 21));
        response["caughtStealing"] = toNumber(getChildText(row, 22));
        response["battingAverage"] = toNumber(getChildText(row, 23));

        result.push(BattingStandardResponseSchema.parse(response));
    }

    return result;
}

function getAdvancedBattingLeaders(html: string): BattingAdvancedResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    const result: BattingAdvancedResponse[] = [];

    for (const r of rows) {
        const response: any = {};
        const row = $(r);

        response["id"] = row.find("td:nth-child(2) > a").attr("href")!.split("/")[5];
        response["name"] = getChildText(row, 2);
        response["team"] = getChildText(row, 3);
        response["plateAppearances"] = toNumber(getChildText(row, 4));
        response["walkRate"] = toNumber(getChildText(row, 5).slice(0, -1));
        response["strikeoutRate"] = toNumber(getChildText(row, 6).slice(0, -1));
        response["walkToStrikeoutRatio"] = toNumber(getChildText(row, 7));
        response["battingAverage"] = toNumber(getChildText(row, 9));
        response["onBasePercentage"] = toNumber(getChildText(row, 10));
        response["sluggingPercentage"] = toNumber(getChildText(row, 11));
        response["onBasePlusSlugging"] = toNumber(getChildText(row, 12));
        response["isolatedPower"] = toNumber(getChildText(row, 14));
        response["speedScore"] = toNumber(getChildText(row, 15));
        response["battingAverageOnBallsInPlay"] = toNumber(getChildText(row, 16));
        addOptionalNumber("ultimateBaseRunning", 18, row, response);
        addOptionalNumber("weightedGroundedIntoDoublePlays", 19, row, response);
        response["weightedStolenBaseRuns"] = toNumber(getChildText(row, 20));
        response["weightedRunsCreated"] = toNumber(getChildText(row, 22));
        response["weightedRunsAboveAverage"] = toNumber(getChildText(row, 23));
        response["weightedOnBaseAverage"] = toNumber(getChildText(row, 24));
        addOptionalNumber("weightedRunsCreatedPlus", 25, row, response);

        result.push(BattingAdvancedResponseSchema.parse(response));
    }

    return result;
}

async function getBattingLeaders(parameters: StandardBattingLeaderParameters): Promise<BattingStandardResponse[]>;
async function getBattingLeaders(parameters: DashboardBattingLeaderParameters): Promise<BattingDashboardResponse[]>;
async function getBattingLeaders(parameters: AdvancedBattingLeaderParameters): Promise<BattingAdvancedResponse[]>;
async function getBattingLeaders(parameters: BattingLeadersParameters): Promise<any[]> {
    const url = new URL("https://www.fangraphs.com/leaders/major-league");

    if (parameters.league) url.searchParams.set("lg", parameters.league);
    if (parameters.team) url.searchParams.set("team", parameters.team.toString());
    if (parameters.seasonType) url.searchParams.set("postseason", parameters.seasonType);
    if ("season" in parameters && parameters.season) {
        url.searchParams.set("season", parameters.season.toString());
        url.searchParams.set("season1", parameters.season.toString());
    }
    if ("startSeason" in parameters && parameters.startSeason) url.searchParams.set("season1", parameters.startSeason.toString());
    if ("endSeason" in parameters && parameters.endSeason) url.searchParams.set("season", parameters.endSeason.toString());
    if (parameters.plateAppearancesQualifier) url.searchParams.set("qual", parameters.plateAppearancesQualifier);
    if (parameters.dataType) url.searchParams.set("type", parameters.dataType.toString());
    if (parameters.numberOfResults) url.searchParams.set("pageitems", parameters.numberOfResults.toString());

    url.searchParams.set("type", parameters.dataType.toString());

    console.log(url.toString());
    const response = await fetch(url.toString());
    const html = await response.text();

    if (parameters.dataType === DataType.Dashboard) {
        return getDashboardBattingLeaders(html);
    } else if (parameters.dataType === DataType.Standard) {
        return getStandardBattingLeaders(html);
    } else if (parameters.dataType === DataType.Advanced) {
        return getAdvancedBattingLeaders(html);
    }

    return [];
}

export { getBattingLeaders };
