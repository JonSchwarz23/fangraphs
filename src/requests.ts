import {
    BatterLeadersQuery,
    PitcherLeadersQuery,
    convertToInternalBatting,
    convertToInternalPitching,
    PlayerInfoQuery,
    convertToInternalPlayerInfo,
} from "./queries";
import { MajorLeagueBatter, MajorLeagueBatterSchema } from "./responses/majorLeagueBatter";
import { MajorLeaguePitcher, MajorLeaguePitcherSchema } from "./responses/majorLeaguePitcher";
import { PlayerInfo, PlayerInfoSchema } from "./responses/playerInfo";
import { ProspectBoardPlayer, ProspectBoardPlayerSchema } from "./responses/prospectBoardPlayer";
import urls from "./urls";

class FangraphsClient {
    constructor() {}

    async getMajorLeagueBattingLeaders(params: BatterLeadersQuery = {}): Promise<MajorLeagueBatter[]> {
        const url = new URL(urls.leaders);
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

    async getMajorLeaguePitchingLeaders(params: PitcherLeadersQuery = {}): Promise<MajorLeaguePitcher[]> {
        const url = new URL(urls.leaders);
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

    async getPlayerInfo(params: PlayerInfoQuery): Promise<PlayerInfo> {
        const url = new URL(urls.playerInfo);
        const parameters = convertToInternalPlayerInfo(params);
        Object.keys(parameters).forEach((key) => url.searchParams.set(key, parameters[key]));

        const response = await fetch(url.toString());
        const json = await response.json();
        const player = json.playerInfo;

        return PlayerInfoSchema.parse(player);
    }

    async getProspectBoard(): Promise<ProspectBoardPlayer[]> {
        const seenIds: Map<string, boolean> = new Map();
        let allPlayers: any[] = [];

        const getPlayers = async (url: string) => {
            console.log(url);
            const response = await fetch(url);
            const json = await response.json();
            let players: any[] = json.dataScout;
            players = players.filter((player) => player.minorMasterId);

            for (const player of players) {
                if (!seenIds.has(player.minorMasterId)) {
                    allPlayers.push(player);
                    seenIds.set(player.minorMasterId, true);
                }
                else {
                    console.log(player.minorMasterId);
                }
            }
        }

        await getPlayers(urls.prospectBoardBatters);
        await getPlayers(urls.prospectBoardPitchers);

        const result = new Array<ProspectBoardPlayer>();
        for(const player of allPlayers) {
            result.push(ProspectBoardPlayerSchema.parse(player));
        }

        return result;
    }
}

export { FangraphsClient };
