"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToInternalPlayerInfo = exports.convertToInternalPitching = exports.convertToInternalBatting = exports.SeasonType = exports.Team = exports.Handness = exports.League = exports.Position = void 0;
var Position;
(function (Position) {
    Position["All"] = "all";
    Position["Pitcher"] = "p";
    Position["Catcher"] = "c";
    Position["FirstBase"] = "1b";
    Position["SecondBase"] = "2b";
    Position["ThirdBase"] = "3b";
    Position["Shortstop"] = "ss";
    Position["Outfield"] = "of";
    Position["RightField"] = "rf";
    Position["CenterField"] = "cf";
    Position["LeftField"] = "lf";
    Position["DesignatedHitter"] = "dh";
    Position["NonPitcher"] = "np";
})(Position || (Position = {}));
exports.Position = Position;
var League;
(function (League) {
    League["All"] = "all";
    League["American"] = "al";
    League["National"] = "nl";
})(League || (League = {}));
exports.League = League;
var Handness;
(function (Handness) {
    Handness["All"] = "";
    Handness["Left"] = "L";
    Handness["Right"] = "R";
    Handness["Switch"] = "S";
})(Handness || (Handness = {}));
exports.Handness = Handness;
var Team;
(function (Team) {
    Team[Team["All"] = 0] = "All";
    Team[Team["Angels"] = 1] = "Angels";
    Team[Team["Astros"] = 21] = "Astros";
    Team[Team["Athletics"] = 10] = "Athletics";
    Team[Team["BlueJays"] = 14] = "BlueJays";
    Team[Team["Braves"] = 16] = "Braves";
    Team[Team["Brewers"] = 23] = "Brewers";
    Team[Team["Cardinals"] = 28] = "Cardinals";
    Team[Team["Cubs"] = 17] = "Cubs";
    Team[Team["Diamondbacks"] = 15] = "Diamondbacks";
    Team[Team["Dodgers"] = 22] = "Dodgers";
    Team[Team["Giants"] = 30] = "Giants";
    Team[Team["Guardians"] = 5] = "Guardians";
    Team[Team["Mariners"] = 11] = "Mariners";
    Team[Team["Marlins"] = 20] = "Marlins";
    Team[Team["Mets"] = 25] = "Mets";
    Team[Team["Nationals"] = 24] = "Nationals";
    Team[Team["Orioles"] = 2] = "Orioles";
    Team[Team["Padres"] = 29] = "Padres";
    Team[Team["Phillies"] = 26] = "Phillies";
    Team[Team["Pirates"] = 27] = "Pirates";
    Team[Team["Rangers"] = 13] = "Rangers";
    Team[Team["Rays"] = 12] = "Rays";
    Team[Team["RedSox"] = 3] = "RedSox";
    Team[Team["Reds"] = 18] = "Reds";
    Team[Team["Rockies"] = 19] = "Rockies";
    Team[Team["Royals"] = 7] = "Royals";
    Team[Team["Tigers"] = 6] = "Tigers";
    Team[Team["Twins"] = 8] = "Twins";
    Team[Team["WhiteSox"] = 4] = "WhiteSox";
    Team[Team["Yankees"] = 9] = "Yankees";
})(Team || (Team = {}));
exports.Team = Team;
var SeasonType;
(function (SeasonType) {
    SeasonType["Regular"] = "";
    SeasonType["Postseason"] = "Y";
    SeasonType["WorldSeries"] = "W";
    SeasonType["LeagueChampionshipSeries"] = "L";
    SeasonType["DivisionSeries"] = "D";
    SeasonType["WildCard"] = "F";
})(SeasonType || (SeasonType = {}));
exports.SeasonType = SeasonType;
//TODO: this will need to be updated when the season changes
const currentSeason = "2023";
function convertToInternal(query) {
    let age = "";
    if (query.startingAge || query.endingAge) {
        age = `${query.startingAge ?? "14"},${query.endingAge ?? "58"}`;
    }
    return {
        age,
        stats: "bat",
        lg: query.league ?? League.All,
        season: query.season?.toString() ?? query.startingSeason?.toString() ?? currentSeason,
        season1: query.season?.toString() ?? query.endingSeason?.toString() ?? currentSeason,
        startdate: `${currentSeason}-03-01`,
        enddate: `${currentSeason}-11-01`,
        month: "0",
        hand: query.handness ?? Handness.All,
        team: query.team?.toString() ?? Team.All.toString(),
        pageitems: query.itemsPerPage?.toString() ?? "30",
        pagenum: query.pageNumber?.toString() ?? "1",
        ind: "0",
        rost: "0",
        players: "",
        type: "8",
        postseason: query.seasonType ?? SeasonType.Regular,
        sortdir: "default",
        sortstat: "WAR",
    };
}
function convertToInternalBatting(query) {
    const queryInternal = convertToInternal(query);
    return {
        ...queryInternal,
        stats: "bat",
        pos: query.position ?? Position.All,
        qual: query.minimumPlateAppearances?.toString() ?? "y",
    };
}
exports.convertToInternalBatting = convertToInternalBatting;
function convertToInternalPitching(query) {
    const queryInternal = convertToInternal(query);
    return {
        ...queryInternal,
        stats: "pit",
        pos: Position.All,
        qual: query.minimumInningsPitched?.toString() ?? "y",
    };
}
exports.convertToInternalPitching = convertToInternalPitching;
function convertToInternalPlayerInfo(query) {
    return {
        playerid: query.id,
        position: query.position,
    };
}
exports.convertToInternalPlayerInfo = convertToInternalPlayerInfo;
