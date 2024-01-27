declare const leadersUrl = "https://www.fangraphs.com/api/leaders/major-league/data";
declare const playerInfoUrl = "https://www.fangraphs.com/api/players/stats/common";
declare const prospectBoardUrl = "https://www.fangraphs.com/api/prospects/board/prospects-list-combined\n                            ?pos=all&lg=2,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,30,32,33&stats=bat&qual=0&type=0&team=&season=2023&seasonend=2023&\n                            draft=2023updated&valueheader=prospect-new&quickleaderboard=2023all";
declare const _default: {
    leaders: string;
    playerInfo: string;
    prospectBoardBatters: string;
    prospectBoardPitchers: string;
};
export default _default;
export { leadersUrl, playerInfoUrl, prospectBoardUrl };
