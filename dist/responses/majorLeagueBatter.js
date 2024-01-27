"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MajorLeagueBatterSchema = void 0;
const zod_1 = require("zod");
var HittingSide;
(function (HittingSide) {
    HittingSide["Right"] = "R";
    HittingSide["Left"] = "L";
    HittingSide["Both"] = "B";
})(HittingSide || (HittingSide = {}));
const HittingSideEnum = zod_1.z.nativeEnum(HittingSide);
//TODO: Come back and make these strict
const MajorLeagueBatterSchema = zod_1.z
    .object({
    Bats: HittingSideEnum,
    xMLBAMID: zod_1.z.number().int(),
    Name: zod_1.z.string().min(1),
    Age: zod_1.z.number().int(),
    G: zod_1.z.number().int(),
    AB: zod_1.z.number().int(),
    PA: zod_1.z.number().int(),
    H: zod_1.z.number().int(),
    "1B": zod_1.z.number().int(),
    "2B": zod_1.z.number().int(),
    "3B": zod_1.z.number().int(),
    HR: zod_1.z.number().int(),
    R: zod_1.z.number().int(),
    RBI: zod_1.z.number().int(),
    BB: zod_1.z.number().int(),
    IBB: zod_1.z.number().int(),
    SO: zod_1.z.number().int(),
    HBP: zod_1.z.number().int(),
    SF: zod_1.z.number().int(),
    SH: zod_1.z.number().int(),
    GDP: zod_1.z.number().int(),
    SB: zod_1.z.number().int(),
    CS: zod_1.z.number().int(),
    AVG: zod_1.z.number(),
    GB: zod_1.z.number().int(),
    FB: zod_1.z.number().int(),
    LD: zod_1.z.number().int(),
    IFFB: zod_1.z.number().int(),
    Pitches: zod_1.z.number().int(),
    Balls: zod_1.z.number().int(),
    Strikes: zod_1.z.number().int(),
    IFH: zod_1.z.number().int(),
    BU: zod_1.z.number().int(),
    BUH: zod_1.z.number().int(),
    "BB%": zod_1.z.number(),
    "K%": zod_1.z.number(),
    "BB/K": zod_1.z.number(),
    OBP: zod_1.z.number(),
    SLG: zod_1.z.number(),
    OPS: zod_1.z.number(),
    ISO: zod_1.z.number(),
    BABIP: zod_1.z.number(),
    "GB/FB": zod_1.z.number(),
    "LD%": zod_1.z.number().nullish(),
    "GB%": zod_1.z.number(),
    "FB%": zod_1.z.number(),
    "IFFB%": zod_1.z.number(),
    "HR/FB": zod_1.z.number(),
    "IFH%": zod_1.z.number(),
    "BUH%": zod_1.z.number(),
    "TTO%": zod_1.z.number().nullish(),
    wOBA: zod_1.z.number(),
    wRAA: zod_1.z.number(),
    wRC: zod_1.z.number(),
    Batting: zod_1.z.number(),
    Fielding: zod_1.z.number().nullish(),
    Replacement: zod_1.z.number(),
    Positional: zod_1.z.number(),
    wLeague: zod_1.z.number(),
    CFraming: zod_1.z.number().nullish(),
    Defense: zod_1.z.number(),
    Offense: zod_1.z.number(),
    RAR: zod_1.z.number(),
    WAR: zod_1.z.number(),
    Dollars: zod_1.z.number(),
    BaseRunning: zod_1.z.number(),
    Spd: zod_1.z.number(),
    "wRC+": zod_1.z.number().nullish(),
    wBsR: zod_1.z.number(),
    WPA: zod_1.z.number().nullish(),
    "-WPA": zod_1.z.number().nullish(),
    "+WPA": zod_1.z.number().nullish(),
    RE24: zod_1.z.number().nullish(),
    REW: zod_1.z.number().nullish(),
    pLI: zod_1.z.number().nullish(),
    phLI: zod_1.z.number().nullish(),
    PH: zod_1.z.number().int(),
    "WPA/LI": zod_1.z.number().nullish(),
    Clutch: zod_1.z.number().nullish(),
    "FB%1": zod_1.z.number().nullish(),
    "SL%": zod_1.z.number().nullish(),
    "CT%": zod_1.z.number().nullish(),
    "CB%": zod_1.z.number().nullish(),
    "CH%": zod_1.z.number().nullish(),
    "SF%": zod_1.z.number().nullish(),
    "KN%": zod_1.z.number().nullish(),
    "XX%": zod_1.z.number().nullish(),
    "PO%": zod_1.z.number().nullish(),
    wFB: zod_1.z.number().nullish(),
    wSL: zod_1.z.number().nullish(),
    wCT: zod_1.z.number().nullish(),
    wCB: zod_1.z.number().nullish(),
    wCH: zod_1.z.number().nullish(),
    wSF: zod_1.z.number().nullish(),
    wKN: zod_1.z.number().nullish(),
    "wFB/C": zod_1.z.number().nullish(),
    "wSL/C": zod_1.z.number().nullish(),
    "wCT/C": zod_1.z.number().nullish(),
    "wCB/C": zod_1.z.number().nullish(),
    "wCH/C": zod_1.z.number().nullish(),
    "wSF/C": zod_1.z.number().nullish(),
    "wKN/C": zod_1.z.number().nullish(),
    "O-Swing%": zod_1.z.number().nullish(),
    "Z-Swing%": zod_1.z.number().nullish(),
    "Swing%": zod_1.z.number().nullish(),
    "O-Contact%": zod_1.z.number().nullish(),
    "Z-Contact%": zod_1.z.number().nullish(),
    "Contact%": zod_1.z.number().nullish(),
    "Zone%": zod_1.z.number().nullish(),
    "F-Strike%": zod_1.z.number().nullish(),
    "SwStr%": zod_1.z.number().nullish(),
    "CStr%": zod_1.z.number().nullish(),
    "C+SwStr%": zod_1.z.number().nullish(),
    Pull: zod_1.z.number().int().nullish(),
    Cent: zod_1.z.number().int().nullish(),
    Oppo: zod_1.z.number().int().nullish(),
    Soft: zod_1.z.number().int().nullish(),
    Med: zod_1.z.number().int().nullish(),
    Hard: zod_1.z.number().int().nullish(),
    bipCount: zod_1.z.number().int().nullish(),
    "Pull%": zod_1.z.number().nullish(),
    "Cent%": zod_1.z.number().nullish(),
    "Oppo%": zod_1.z.number().nullish(),
    "Soft%": zod_1.z.number().nullish(),
    "Med%": zod_1.z.number().nullish(),
    "Hard%": zod_1.z.number().nullish(),
    UBR: zod_1.z.number().nullish(),
    GDPRuns: zod_1.z.number().nullish(),
    "AVG+": zod_1.z.number().nullish(),
    "BB%+": zod_1.z.number().nullish(),
    "K%+": zod_1.z.number().nullish(),
    "OBP+": zod_1.z.number().nullish(),
    "SLG+": zod_1.z.number().nullish(),
    "ISO+": zod_1.z.number().nullish(),
    "BABIP+": zod_1.z.number().nullish(),
    "LD%+": zod_1.z.number().nullish(),
    "GB%+": zod_1.z.number().nullish(),
    "FB%+": zod_1.z.number().nullish(),
    "HRFB%+": zod_1.z.number().nullish(),
    "Pull%+": zod_1.z.number().nullish(),
    "Cent%+": zod_1.z.number().nullish(),
    "Oppo%+": zod_1.z.number().nullish(),
    "Soft%+": zod_1.z.number().nullish(),
    "Med%+": zod_1.z.number().nullish(),
    "Hard%+": zod_1.z.number().nullish(),
    xwOBA: zod_1.z.number().nullish(),
    xAVG: zod_1.z.number().nullish(),
    xSLG: zod_1.z.number().nullish(),
    //Skipping Pitcher Pitch Time Violations (Maybe add later)
    EV: zod_1.z.number().nullish(),
    LA: zod_1.z.number().nullish(),
    Barrels: zod_1.z.number().int().nullish(),
    "Barrel%": zod_1.z.number().nullish(),
    maxEV: zod_1.z.number().nullish(),
    HardHit: zod_1.z.number().int().nullish(),
    "HardHit%": zod_1.z.number().nullish(),
    Q: zod_1.z.number(),
    TPA: zod_1.z.number().int(),
    PlayerNameRoute: zod_1.z.string().min(1),
    PlayerName: zod_1.z.string().min(1),
    playerid: zod_1.z.number().int(),
    TeamName: zod_1.z.string().min(1),
    TeamNameAbb: zod_1.z.string().min(1),
    teamid: zod_1.z.number().int(),
})
    .transform((obj) => {
    return {
        hittingSide: obj.Bats,
        mlbId: obj.xMLBAMID,
        position: obj.Name.split("position=")[1].split('"')[0],
        age: obj.Age,
        games: obj.G,
        atBats: obj.AB,
        plateAppearances: obj.PA,
        hits: obj.H,
        singles: obj["1B"],
        doubles: obj["2B"],
        triples: obj["3B"],
        homeRuns: obj.HR,
        runs: obj.R,
        runsBattedIn: obj.RBI,
        walks: obj.BB,
        intentionalWalks: obj.IBB,
        strikeouts: obj.SO,
        hitByPitch: obj.HBP,
        sacrificeFlies: obj.SF,
        sacrificeHits: obj.SH,
        groundedIntoDoublePlays: obj.GDP,
        stolenBases: obj.SB,
        caughtStealing: obj.CS,
        battingAverage: obj.AVG,
        groundBalls: obj.GB,
        flyBalls: obj.FB.toString(),
        lineDrives: obj.LD,
        infieldFlyBalls: obj.IFFB,
        totalPitchesFaced: obj.Pitches,
        balls: obj.Balls,
        strikes: obj.Strikes,
        infieldHits: obj.IFH,
        bunts: obj.BU,
        buntHits: obj.BUH,
        walkRate: obj["BB%"],
        strikeoutRate: obj["K%"],
        walkToStrikeoutRatio: obj["BB/K"],
        onBasePercentage: obj.OBP,
        sluggingPercentage: obj.SLG,
        onBasePlusSlugging: obj.OPS,
        isolatedPower: obj.ISO,
        battingAverageOnBallsInPlay: obj.BABIP,
        groundBallToFlyBallRatio: obj["GB/FB"],
        lineDrivePercentage: obj["LD%"],
        groundBallPercentage: obj["GB%"],
        flyBallPercentage: obj["FB%"],
        infieldFlyBallPercentage: obj["IFFB%"],
        homeRunPerFlyBallRatio: obj["HR/FB"],
        infieldHitPercentage: obj["IFH%"],
        buntHitPercentage: obj["BUH%"],
        threeTrueOutcomesPercentage: obj["TTO%"],
        weightedOnBaseAverage: obj.wOBA,
        weightedRunsAboveAverage: obj.wRAA,
        weightedRunsCreated: obj.wRC,
        battingRunsAboveAverage: obj.Batting,
        fieldingRunsAboveAverage: obj.Fielding,
        replacementRuns: obj.Replacement,
        positionalAdjustment: obj.Positional,
        leagueAdjustment: obj.wLeague,
        framingValue: obj.CFraming,
        defensiveRunsAboveAverage: obj.Defense,
        offensiveRunsAboveAverage: obj.Offense,
        runsAboveReplacement: obj.RAR,
        winsAboveReplacement: obj.WAR,
        warDollars: obj.Dollars,
        baseRunningRunsAboveAverage: obj.BaseRunning,
        speedScore: obj.Spd,
        weightedRunsCreatedPlus: obj["wRC+"],
        weightedBaseRunning: obj.wBsR,
        winProbabilityAdded: obj.WPA,
        lossAdvancement: obj["-WPA"],
        winAdvancement: obj["+WPA"],
        runsAboveAverage24: obj.RE24,
        winsAboveAverage24: obj.REW,
        averageLeverageIndex: obj.pLI,
        averageLeverageIndexWhilePinchHinting: obj.phLI,
        pinchHitOpportunities: obj.PH,
        situationalWins: obj["WPA/LI"],
        clutch: obj.Clutch,
        fastballPercentage: obj["FB%1"],
        sliderPercentage: obj["SL%"],
        cutterPercentage: obj["CT%"],
        curveballPercentage: obj["CB%"],
        changeupPercentage: obj["CH%"],
        splitFingerPercentage: obj["SF%"],
        knuckleballPercentage: obj["KN%"],
        unknownPitchPercentage: obj["XX%"],
        pitchoutPercentage: obj["PO%"],
        fastballRunsAboveAverage: obj.wFB,
        sliderRunsAboveAverage: obj.wSL,
        cutterRunsAboveAverage: obj.wCT,
        curveballRunsAboveAverage: obj.wCB,
        changeupRunsAboveAverage: obj.wCH,
        splitFingerRunsAboveAverage: obj.wSF,
        knuckleballRunsAboveAverage: obj.wKN,
        fastballRunsAboveAveragePer100Pitches: obj["wFB/C"],
        sliderRunsAboveAveragePer100Pitches: obj["wSL/C"],
        cutterRunsAboveAveragePer100Pitches: obj["wCT/C"],
        curveballRunsAboveAveragePer100Pitches: obj["wCB/C"],
        changeupRunsAboveAveragePer100Pitches: obj["wCH/C"],
        splitFingerRunsAboveAveragePer100Pitches: obj["wSF/C"],
        knuckleballRunsAboveAveragePer100Pitches: obj["wKN/C"],
        outsideZoneSwingPercentage: obj["O-Swing%"],
        zoneSwingPercentage: obj["Z-Swing%"],
        swingPercentage: obj["Swing%"],
        outsideZoneContactPercentage: obj["O-Contact%"],
        zoneContactPercentage: obj["Z-Contact%"],
        contactPercentage: obj["Contact%"],
        zonePercentage: obj["Zone%"],
        firstPitchStrikePercentage: obj["F-Strike%"],
        swingingStrikePercentage: obj["SwStr%"],
        calledStrikePercentage: obj["CStr%"],
        calledPlusSwingingStrikePercentage: obj["C+SwStr%"],
        pullHits: obj.Pull,
        centerFieldHits: obj.Cent,
        oppositeFieldHits: obj.Oppo,
        softContactHits: obj.Soft,
        mediumContactHits: obj.Med,
        hardContactHits: obj.Hard,
        ballsInPlay: obj.bipCount,
        pullPercentage: obj["Pull%"],
        centerFieldPercentage: obj["Cent%"],
        oppositeFieldPercentage: obj["Oppo%"],
        softContactPercentage: obj["Soft%"],
        mediumContactPercentage: obj["Med%"],
        hardContactPercentage: obj["Hard%"],
        ultimateBaseRunning: obj.UBR,
        groundingIntoDoublePlayRunsAboveAverage: obj.GDPRuns,
        battingAveragePlus: obj["AVG+"],
        walkRatePlus: obj["BB%+"],
        strikeoutRatePlus: obj["K%+"],
        onBasePercentagePlus: obj["OBP+"],
        sluggingPercentagePlus: obj["SLG+"],
        isolatedPowerPlus: obj["ISO+"],
        battingAverageOnBallsInPlayPlus: obj["BABIP+"],
        lineDrivePercentagePlus: obj["LD%+"],
        groundBallPercentagePlus: obj["GB%+"],
        flyBallPercentagePlus: obj["FB%+"],
        homeRunPerFlyBallRatioPlus: obj["HRFB%+"],
        pullPercentagePlus: obj["Pull%+"],
        centerFieldPercentagePlus: obj["Cent%+"],
        oppositeFieldPercentagePlus: obj["Oppo%+"],
        softContactPercentagePlus: obj["Soft%+"],
        mediumContactPercentagePlus: obj["Med%+"],
        hardContactPercentagePlus: obj["Hard%+"],
        expectedWeightedOnBaseAverage: obj.xwOBA,
        expectedBattingAverage: obj.xAVG,
        expectedSluggingPercentage: obj.xSLG,
        averageExitVelocity: obj.EV,
        averageLaunchAngle: obj.LA,
        barrels: obj.Barrels,
        barrelPercentage: obj["Barrel%"],
        maxExitVelocity: obj.maxEV,
        hardHits: obj.HardHit,
        hardHitPercentage: obj["HardHit%"],
        plateAppearancesForQualifying: obj.Q,
        totalPlateAppearances: obj.TPA,
        playerNameRoute: obj.PlayerNameRoute,
        playerName: obj.PlayerName,
        playerId: obj.playerid,
        teamName: obj.TeamName,
        teamNameAbbreviation: obj.TeamNameAbb,
        teamId: obj.teamid,
    };
});
exports.MajorLeagueBatterSchema = MajorLeagueBatterSchema;
