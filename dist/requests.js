"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProspectBoard = exports.getPlayerInfo = exports.getMajorLeaguePitchingLeaders = exports.getMajorLeagueBattingLeaders = void 0;
const queries_1 = require("./queries");
const majorLeagueBatter_1 = require("./responses/majorLeagueBatter");
const majorLeaguePitcher_1 = require("./responses/majorLeaguePitcher");
const playerInfo_1 = require("./responses/playerInfo");
const prospectBoardPlayer_1 = require("./responses/prospectBoardPlayer");
const urls_1 = __importDefault(require("./urls"));
async function getMajorLeaguePitchingLeaders(params = {}) {
    const url = new URL(urls_1.default.leaders);
    const parameters = (0, queries_1.convertToInternalPitching)(params);
    Object.keys(parameters).forEach((key) => url.searchParams.set(key, parameters[key]));
    const response = await fetch(url.toString());
    const json = await response.json();
    const players = json.data;
    const result = new Array();
    for (const player of players) {
        result.push(majorLeaguePitcher_1.MajorLeaguePitcherSchema.parse(player));
    }
    return result;
}
exports.getMajorLeaguePitchingLeaders = getMajorLeaguePitchingLeaders;
async function getMajorLeagueBattingLeaders(params = {}) {
    const url = new URL(urls_1.default.leaders);
    const parameters = (0, queries_1.convertToInternalBatting)(params);
    Object.keys(parameters).forEach((key) => url.searchParams.set(key, parameters[key]));
    const response = await fetch(url.toString());
    const json = await response.json();
    const players = json.data;
    const result = new Array();
    for (const player of players) {
        result.push(majorLeagueBatter_1.MajorLeagueBatterSchema.parse(player));
    }
    return result;
}
exports.getMajorLeagueBattingLeaders = getMajorLeagueBattingLeaders;
async function getPlayerInfo(params) {
    const url = new URL(urls_1.default.playerInfo);
    const parameters = (0, queries_1.convertToInternalPlayerInfo)(params);
    Object.keys(parameters).forEach((key) => url.searchParams.set(key, parameters[key]));
    const response = await fetch(url.toString());
    const json = await response.json();
    const player = json.playerInfo;
    console.log(player);
    return playerInfo_1.PlayerInfoSchema.parse(player);
}
exports.getPlayerInfo = getPlayerInfo;
async function getProspectBoard() {
    const seenIds = new Map();
    let allPlayers = [];
    const getPlayers = async (url) => {
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        let players = json.dataScout;
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
    };
    await getPlayers(urls_1.default.prospectBoardBatters);
    await getPlayers(urls_1.default.prospectBoardPitchers);
    const result = new Array();
    for (const player of allPlayers) {
        result.push(prospectBoardPlayer_1.ProspectBoardPlayerSchema.parse(player));
    }
    return result;
}
exports.getProspectBoard = getProspectBoard;
