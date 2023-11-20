import { load } from "cheerio";
import {
    AdvancedBattingLeaderParameters,
    DashboardBattingLeaderParameters,
    DataType,
    StandardBattingLeaderParameters,
    BattedBallBattingLeaderParameters,
    LeadersParameters,
    Stat,
    DashboardPitchingLeaderParameters,
    StandardPitchingLeaderParameters,
    AdvancedPitchingLeaderParameters,
} from "./types";
import {
    AdvancedBattingResponse,
    AdvancedBattingResponseSchema,
    AdvancedPitchingResponse,
    AdvancedPitchingResponseSchema,
    BattedBallBattingResponse,
    BattedBallBattingResponseSchema,
    DashboardBattingResponse,
    DashboardBattingResponseSchema,
    DashboardPitchingResponse,
    DashboardPitchingResponseSchema,
    PlayerInfo,
    PlayerInfoSchema,
    StandardBattingResponse,
    StandardBattingResponseSchema,
    StandardPitchingResponse,
    StandardPitchingResponseSchema,
} from "./schema";
import { get } from "http";
import { is } from "cheerio/lib/api/traversing";

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

function addOptionalNumber(key: string, childIndex: number, row: { find: any }, response: any, isPercentage = false) {
    let value = getChildText(row, childIndex);
    if (isPercentage) value = value.slice(0, -1);
    if (isValidNumber(value)) {
        response[key] = Number(value);
    }
}

function getDashboardBattingLeaders(html: string): DashboardBattingResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    const result: DashboardBattingResponse[] = [];

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

        result.push(DashboardBattingResponseSchema.parse(response));
    }

    return result;
}

function getStandardBattingLeaders(html: string): StandardBattingResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    console.log(rows.length);

    const result: StandardBattingResponse[] = [];

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

        result.push(StandardBattingResponseSchema.parse(response));
    }

    return result;
}

function getAdvancedBattingLeaders(html: string): AdvancedBattingResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    const result: AdvancedBattingResponse[] = [];

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

        result.push(AdvancedBattingResponseSchema.parse(response));
    }

    return result;
}

function getBattedBallBattingLeaders(html: string): BattedBallBattingResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    const result: BattedBallBattingResponse[] = [];

    for (const r of rows) {
        const response: any = {};
        const row = $(r);

        response["id"] = row.find("td:nth-child(2) > a").attr("href")!.split("/")[5];
        response["name"] = getChildText(row, 2);
        response["team"] = getChildText(row, 3);
        response["battingAverageOnBallsInPlay"] = toNumber(getChildText(row, 4));
        response["groundBallToFlyBallRatio"] = toNumber(getChildText(row, 5));
        response["lineDrivePercentage"] = toNumber(getChildText(row, 6).slice(0, -1));
        response["groundBallPercentage"] = toNumber(getChildText(row, 7).slice(0, -1));
        response["flyBallPercentage"] = toNumber(getChildText(row, 8).slice(0, -1));
        response["infieldFlyBallPercentage"] = toNumber(getChildText(row, 9).slice(0, -1));
        response["homeRunPerFlyBallRatio"] = toNumber(getChildText(row, 10).slice(0, -1));
        response["infieldHits"] = toNumber(getChildText(row, 11));
        response["infieldHitPercentage"] = toNumber(getChildText(row, 12).slice(0, -1));
        response["buntHits"] = toNumber(getChildText(row, 13));
        response["buntHitPercentage"] = toNumber(getChildText(row, 14).slice(0, -1));
        addOptionalNumber("pullPercentage", 16, row, response, true);
        addOptionalNumber("centerFieldPercentage", 17, row, response, true);
        addOptionalNumber("oppositeFieldPercentage", 18, row, response, true);
        addOptionalNumber("softHitPercentage", 20, row, response, true);
        addOptionalNumber("mediumHitPercentage", 21, row, response, true);
        addOptionalNumber("hardHitPercentage", 22, row, response, true);

        result.push(BattedBallBattingResponseSchema.parse(response));
    }

    return result;
}

function getDashboardPitchingLeaders(html: string): DashboardPitchingResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    const result: DashboardPitchingResponse[] = [];

    for (const r of rows) {
        const response: any = {};
        const row = $(r);

        response["id"] = row.find("td:nth-child(2) > a").attr("href")!.split("/")[5];
        response["name"] = getChildText(row, 2);
        response["team"] = getChildText(row, 3);
        response["wins"] = toNumber(getChildText(row, 4));
        response["losses"] = toNumber(getChildText(row, 5));
        response["saves"] = toNumber(getChildText(row, 6));
        response["games"] = toNumber(getChildText(row, 7));
        response["gamesStarted"] = toNumber(getChildText(row, 8));
        response["inningsPitched"] = toNumber(getChildText(row, 9));
        response["strikeoutsPerNineInnings"] = toNumber(getChildText(row, 11));
        response["walksPerNineInnings"] = toNumber(getChildText(row, 12));
        response["homeRunsPerNineInnings"] = toNumber(getChildText(row, 13));
        response["battingAverageOnBallsInPlay"] = toNumber(getChildText(row, 14));
        response["leftOnBasePercentage"] = toNumber(getChildText(row, 15).slice(0, -1));
        response["groundBallPercentage"] = toNumber(getChildText(row, 16).slice(0, -1));
        response["homeRunPerFlyBallRatio"] = toNumber(getChildText(row, 17).slice(0, -1));
        addOptionalNumber("fastballVelocity", 19, row, response);
        response["earnedRunAverage"] = toNumber(getChildText(row, 21));
        addOptionalNumber("expectedEarnedRunAverage", 22, row, response);
        response["fieldingIndependentPitching"] = toNumber(getChildText(row, 23));
        response["expectedFieldingIndependentPitching"] = toNumber(getChildText(row, 24));
        response["winsAboveReplacement"] = toNumber(getChildText(row, 26));

        result.push(DashboardPitchingResponseSchema.parse(response));
    }

    return result;
}

function getStandardPitchingLeaders(html: string): StandardPitchingResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    console.log(rows.length);

    const result: StandardPitchingResponse[] = [];

    for (const r of rows) {
        const response: any = {};
        const row = $(r);

        response["id"] = row.find("td:nth-child(2) > a").attr("href")!.split("/")[5];
        response["name"] = getChildText(row, 2);
        response["team"] = getChildText(row, 3);
        response["wins"] = toNumber(getChildText(row, 4));
        response["losses"] = toNumber(getChildText(row, 5));
        response["era"] = toNumber(getChildText(row, 6));
        response["games"] = toNumber(getChildText(row, 7));
        response["gamesStarted"] = toNumber(getChildText(row, 8));
        response["completeGames"] = toNumber(getChildText(row, 9));
        response["shutouts"] = toNumber(getChildText(row, 10));
        response["saves"] = toNumber(getChildText(row, 11));
        response["holds"] = toNumber(getChildText(row, 12));
        response["blownSaves"] = toNumber(getChildText(row, 13));
        response["inningsPitched"] = toNumber(getChildText(row, 14));
        response["totalBattersFaced"] = toNumber(getChildText(row, 15));
        response["hits"] = toNumber(getChildText(row, 16));
        response["runs"] = toNumber(getChildText(row, 17));
        response["earnedRuns"] = toNumber(getChildText(row, 18));
        response["homeRuns"] = toNumber(getChildText(row, 19));
        response["walks"] = toNumber(getChildText(row, 20));
        response["intentionalWalks"] = toNumber(getChildText(row, 21));
        response["hitByPitch"] = toNumber(getChildText(row, 22));
        response["wildPitches"] = toNumber(getChildText(row, 23));
        response["balks"] = toNumber(getChildText(row, 24));
        response["strikeouts"] = toNumber(getChildText(row, 25));

        result.push(StandardPitchingResponseSchema.parse(response));
    }

    return result;
}

function getAdvancedPitchingLeaders(html: string): AdvancedPitchingResponse[] {
    const $ = load(html);
    const rows = $('div[class*="leaders-major__table"] tbody:first').find("tr");

    const result: AdvancedPitchingResponse[] = [];

    for (const r of rows) {
        const response: any = {};
        const row = $(r);

        response["id"] = row.find("td:nth-child(2) > a").attr("href")!.split("/")[5];
        response["name"] = getChildText(row, 2);
        response["team"] = getChildText(row, 3);
        response["strikeoutsPerNineInnings"] = toNumber(getChildText(row, 4));
        response["walksPerNineInnings"] = toNumber(getChildText(row, 5));
        response["strikeoutToWalkRatio"] = toNumber(getChildText(row, 6));
        response["homeRunsPerNineInnings"] = toNumber(getChildText(row, 7));
        response["strikeoutPercentage"] = toNumber(getChildText(row, 9).slice(0, -1));
        response["walkPercentage"] = toNumber(getChildText(row, 10).slice(0, -1));
        response["strikeoutMinusWalkPercentage"] = toNumber(getChildText(row, 11).slice(0, -1));
        response["battingAverageAgainst"] = toNumber(getChildText(row, 13));
        response["walkHitsPerInningsPitched"] = toNumber(getChildText(row, 14));
        response["battingAverageOnBallsInPlay"] = toNumber(getChildText(row, 15));
        response["leftOnBasePercentage"] = toNumber(getChildText(row, 16).slice(0, -1));
        response["earnedRunAverageMinus"] = toNumber(getChildText(row, 18));
        response["fieldingIndependentPitchingMinus"] = toNumber(getChildText(row, 19));
        response["expectedFieldingIndependentPitchingMinus"] = toNumber(getChildText(row, 20));
        response["earnedRunAverage"] = toNumber(getChildText(row, 22));
        response["fieldingIndependentPitching"] = toNumber(getChildText(row, 23));
        response["earnedRunAverageMinusFieldingIndependentPitching"] = toNumber(getChildText(row, 24));
        response["expectedFieldingIndependentPitching"] = toNumber(getChildText(row, 26));
        response["skillInteractiveEarnedRunAverage"] = toNumber(getChildText(row, 27));

        result.push(AdvancedPitchingResponseSchema.parse(response));
    }

    return result;
}

async function getMajorLeagueLeaders(parameters: BattedBallBattingLeaderParameters): Promise<BattedBallBattingResponse[]>;
async function getMajorLeagueLeaders(parameters: StandardBattingLeaderParameters): Promise<StandardBattingResponse[]>;
async function getMajorLeagueLeaders(parameters: DashboardBattingLeaderParameters): Promise<DashboardBattingResponse[]>;
async function getMajorLeagueLeaders(parameters: AdvancedBattingLeaderParameters): Promise<AdvancedBattingResponse[]>;
async function getMajorLeagueLeaders(parameters: DashboardPitchingLeaderParameters): Promise<DashboardPitchingResponse[]>;
async function getMajorLeagueLeaders(parameters: StandardPitchingLeaderParameters): Promise<StandardPitchingResponse[]>;
async function getMajorLeagueLeaders(parameters: AdvancedPitchingLeaderParameters): Promise<AdvancedPitchingResponse[]>;
async function getMajorLeagueLeaders(parameters: LeadersParameters): Promise<any[]> {
    const url = new URL("https://www.fangraphs.com/leaders/major-league");

    url.searchParams.set("type", parameters.dataType.toString());
    url.searchParams.set("stats", parameters.stats.toString());
    if (parameters.numberOfResults) url.searchParams.set("pageitems", parameters.numberOfResults.toString());
    if (parameters.league) url.searchParams.set("lg", parameters.league);
    if (parameters.team) url.searchParams.set("team", parameters.team.toString());
    if (parameters.seasonType) url.searchParams.set("postseason", parameters.seasonType);
    if ("season" in parameters && parameters.season) {
        url.searchParams.set("season", parameters.season.toString());
        url.searchParams.set("season1", parameters.season.toString());
    }
    if ("startSeason" in parameters && parameters.startSeason) url.searchParams.set("season1", parameters.startSeason.toString());
    if ("endSeason" in parameters && parameters.endSeason) url.searchParams.set("season", parameters.endSeason.toString());
    if ("position" in parameters && parameters.position) url.searchParams.set("pos", parameters.position.toString());

    if (parameters.stats === Stat.Batting) {
        if (parameters.plateAppearancesQualifier) url.searchParams.set("qual", parameters.plateAppearancesQualifier);
    } else {
        if (parameters.inningsPitchedQualifier) url.searchParams.set("qual", parameters.inningsPitchedQualifier);
    }

    console.log(url.toString());
    const response = await fetch(url.toString());
    const html = await response.text();

    if (parameters.stats === Stat.Batting) {
        if (parameters.dataType === DataType.Dashboard) {
            return getDashboardBattingLeaders(html);
        } else if (parameters.dataType === DataType.Standard) {
            return getStandardBattingLeaders(html);
        } else if (parameters.dataType === DataType.Advanced) {
            return getAdvancedBattingLeaders(html);
        } else if (parameters.dataType === DataType.BattedBall) {
            return getBattedBallBattingLeaders(html);
        }
    } else {
        if (parameters.dataType === DataType.Dashboard) {
            return getDashboardPitchingLeaders(html);
        } else if (parameters.dataType === DataType.Standard) {
            return getStandardPitchingLeaders(html);
        } else if (parameters.dataType === DataType.Advanced) {
            return getAdvancedPitchingLeaders(html);
        }
    }

    return [];
}

async function getPlayerInfo(id: string): Promise<PlayerInfo> {
    const url = new URL(`https://www.fangraphs.com/players/player/${id}`);

    const response = await fetch(url.toString());
    const html = await response.text();

    const $ = load(html);

    const result: any = {};
    result["id"] = id;
    result["name"] = $("h1").text().trim();

    const birthDate = $('tr[class="player-info__bio-birthdate"] > td').text().split(" ")[0];
    const [month, day, year] = birthDate.split("/");
    result["birthDate"] = new Date(Number(year), Number(month) - 1, Number(day));

    return PlayerInfoSchema.parse(result);
}

export { getMajorLeagueLeaders, getPlayerInfo };
