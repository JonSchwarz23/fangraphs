import { BatterLeadersQuery, PitcherLeadersQuery, convertToInternalBatting, convertToInternalPitching } from "./queries";
import { MajorLeagueBatter, MajorLeagueBatterSchema } from "./responses/majorLeagueBatter";
import { MajorLeaguePitcher, MajorLeaguePitcherSchema } from "./responses/majorLeaguePitcher";

const urlStr = "https://www.fangraphs.com/api/leaders/major-league/data";

async function getMajorLeaguePitchingLeaders(params: PitcherLeadersQuery = {}): Promise<MajorLeaguePitcher[]> {
    const url = new URL(urlStr);
    const parameters = convertToInternalPitching(params);
    Object.keys(parameters).forEach((key) => url.searchParams.set(key, parameters[key]));

    const response = await fetch(url.toString());
    const json = await response.json();
    const players = json.data;
    const result = new Array<MajorLeaguePitcher>();

    for (const player of players) {
        result.push(MajorLeaguePitcherSchema.parse(player));
    }

    return result;
}

async function getMajorLeagueBattingLeaders(params: BatterLeadersQuery = {}): Promise<MajorLeagueBatter[]> {
    const url = new URL(urlStr);
    const parameters = convertToInternalBatting(params);
    Object.keys(parameters).forEach((key) => url.searchParams.set(key, parameters[key]));

    const response = await fetch(url.toString());
    const json = await response.json();
    const players = json.data;
    const result = new Array<MajorLeagueBatter>();

    for (const player of players) {
        result.push(MajorLeagueBatterSchema.parse(player));
    }

    return result;
}

export { getMajorLeagueBattingLeaders, getMajorLeaguePitchingLeaders };
