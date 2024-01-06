const leadersUrl = "https://www.fangraphs.com/api/leaders/major-league/data";
const playerInfoUrl = "https://www.fangraphs.com/api/players/stats/common";
const prospectBoardUrl = `https://www.fangraphs.com/api/prospects/board/prospects-list-combined
                            ?pos=all&lg=2,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,30,32,33&stats=bat&qual=0&type=0&team=&season=2023&seasonend=2023&
                            draft=2023updated&valueheader=prospect-new&quickleaderboard=2023all`;

export default {
    leaders: "https://www.fangraphs.com/api/leaders/major-league/data",
    playerInfo: "https://www.fangraphs.com/api/players/stats/common",
    prospectBoardBatters: `https://www.fangraphs.com/api/prospects/board/prospects-list-combined?pos=all&lg=2,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,30,32,33&stats=bat&qual=0&type=0&team=&season=2023&seasonend=2023&draft=2023updated&valueheader=prospect-new&quickleaderboard=2023all`,
    prospectBoardPitchers: `https://www.fangraphs.com/api/prospects/board/prospects-list-combined?pos=all&lg=2,4,5,6,7,8,9,10,11,14,12,13,15,16,17,18,30,32,33&stats=pit&qual=0&type=0&team=&season=2023&seasonend=2023&draft=2023updated&valueheader=prospect-new&quickleaderboard=2023all`,
}

export {leadersUrl, playerInfoUrl, prospectBoardUrl}