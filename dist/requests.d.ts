import { BatterLeadersQuery, PitcherLeadersQuery, PlayerInfoQuery } from "./queries";
import { MajorLeagueBatter } from "./responses/majorLeagueBatter";
import { MajorLeaguePitcher } from "./responses/majorLeaguePitcher";
import { PlayerInfo } from "./responses/playerInfo";
import { ProspectBoardPlayer } from "./responses/prospectBoardPlayer";
declare class FangraphsClient {
    constructor();
    getMajorLeagueBattingLeaders(params?: BatterLeadersQuery): Promise<MajorLeagueBatter[]>;
    getMajorLeaguePitchingLeaders(params?: PitcherLeadersQuery): Promise<MajorLeaguePitcher[]>;
    getPlayerInfo(params: PlayerInfoQuery): Promise<PlayerInfo>;
    getProspectBoard(): Promise<ProspectBoardPlayer[]>;
}
export { FangraphsClient };
