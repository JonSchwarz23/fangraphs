"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MajorLeaguePitcherSchema = void 0;
const zod_1 = require("zod");
var PitchingHand;
(function (PitchingHand) {
    PitchingHand["Right"] = "R";
    PitchingHand["Left"] = "L";
})(PitchingHand || (PitchingHand = {}));
const PitchingHandEnum = zod_1.z.nativeEnum(PitchingHand);
const MajorLeaguePitcherSchema = zod_1.z
    .object({
    Throws: PitchingHandEnum,
    xMLBAMID: zod_1.z.number().int(),
    Name: zod_1.z.string().min(1),
    Age: zod_1.z.number().int(),
    W: zod_1.z.number().int(),
    L: zod_1.z.number().int(),
    ERA: zod_1.z.number(),
    G: zod_1.z.number().int(),
    GS: zod_1.z.number().int(),
    CG: zod_1.z.number().int(),
    ShO: zod_1.z.number().int(),
    SV: zod_1.z.number().int(),
    BS: zod_1.z.number().int(),
    IP: zod_1.z.number(),
    TBF: zod_1.z.number().int(),
    H: zod_1.z.number().int(),
    R: zod_1.z.number().int(),
    ER: zod_1.z.number().int(),
    HR: zod_1.z.number().int(),
    BB: zod_1.z.number().int(),
    IBB: zod_1.z.number().int(),
    HBP: zod_1.z.number().int(),
    WP: zod_1.z.number().int(),
    BK: zod_1.z.number().int(),
    SO: zod_1.z.number().int(),
    GB: zod_1.z.number().int(),
    FB: zod_1.z.number().int(),
    LD: zod_1.z.number().int(),
    IFFB: zod_1.z.number().int(),
    Pitches: zod_1.z.number().int(),
    Balls: zod_1.z.number().int(),
    Strikes: zod_1.z.number().int(),
    RS: zod_1.z.number().int(),
    IFH: zod_1.z.number().int(),
    BU: zod_1.z.number().int(),
    BUH: zod_1.z.number().int(),
    "K/9": zod_1.z.number(),
    "BB/9": zod_1.z.number(),
    "K/BB": zod_1.z.number(),
    "H/9": zod_1.z.number(),
    "HR/9": zod_1.z.number(),
    AVG: zod_1.z.number(),
    WHIP: zod_1.z.number(),
    BABIP: zod_1.z.number(),
    "LOB%": zod_1.z.number(),
    FIP: zod_1.z.number(),
    "GB/FB": zod_1.z.number(),
    "LD%": zod_1.z.number(),
    "GB%": zod_1.z.number(),
    "FB%": zod_1.z.number(),
    "IFFB%": zod_1.z.number(),
    "HR/FB": zod_1.z.number(),
    "IFH%": zod_1.z.number(),
    "BUH%": zod_1.z.number(),
    "TTO%": zod_1.z.number(),
    CFraming: zod_1.z.number().nullish(),
    Starting: zod_1.z.number().nullish(),
    "Start-IP": zod_1.z.number().nullish(),
    Relieving: zod_1.z.number().nullish(),
    "Relief-IP": zod_1.z.number().nullish(),
    RAR: zod_1.z.number(),
    WAR: zod_1.z.number(),
    Dollars: zod_1.z.number(),
    "RA9-Wins": zod_1.z.number(),
    "LOB-Wins": zod_1.z.number(),
    "BIP-Wins": zod_1.z.number(),
    "BS-Wins": zod_1.z.number(),
    tERA: zod_1.z.number(),
    xFIP: zod_1.z.number(),
    WPA: zod_1.z.number(),
    "-WPA": zod_1.z.number(),
    "+WPA": zod_1.z.number(),
    RE24: zod_1.z.number(),
    REW: zod_1.z.number(),
    pLI: zod_1.z.number(),
    inLI: zod_1.z.number(),
    gmLI: zod_1.z.number(),
    exLI: zod_1.z.number().nullish(),
    Pulls: zod_1.z.number().int(),
    "WPA/LI": zod_1.z.number(),
    Clutch: zod_1.z.number().nullish(),
    "FB%1": zod_1.z.number().nullish(),
    FBv: zod_1.z.number().nullish(),
    "SL%": zod_1.z.number().nullish(),
    SLv: zod_1.z.number().nullish(),
    "CT%": zod_1.z.number().nullish(),
    CTv: zod_1.z.number().nullish(),
    "CB%": zod_1.z.number().nullish(),
    CBv: zod_1.z.number().nullish(),
    "CH%": zod_1.z.number().nullish(),
    CHv: zod_1.z.number().nullish(),
    "SF%": zod_1.z.number().nullish(),
    SFv: zod_1.z.number().nullish(),
    "KN%": zod_1.z.number().nullish(),
    KNv: zod_1.z.number().nullish(),
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
    "Z-Swing%": zod_1.z.number(),
    "Swing%": zod_1.z.number(),
    "O-Contact%": zod_1.z.number().nullish(),
    "Z-Contact%": zod_1.z.number().nullish(),
    "Contact%": zod_1.z.number(),
    "Zone%": zod_1.z.number(),
    "F-Strike%": zod_1.z.number().nullish(),
    "SwStr%": zod_1.z.number(),
    "CStr%": zod_1.z.number(),
    "C+SwStr%": zod_1.z.number(),
    HLD: zod_1.z.number().int(),
    SD: zod_1.z.number().int(),
    MD: zod_1.z.number().int(),
    "ERA-": zod_1.z.number(),
    "FIP-": zod_1.z.number(),
    "xFIP-": zod_1.z.number(),
    "K%": zod_1.z.number(),
    "BB%": zod_1.z.number(),
    "K-BB%": zod_1.z.number(),
    SIERA: zod_1.z.number(),
    kwERA: zod_1.z.number(),
    "RS/9": zod_1.z.number(),
    "E-F": zod_1.z.number(),
    Pull: zod_1.z.number().int(),
    Cent: zod_1.z.number().int(),
    Oppo: zod_1.z.number().int(),
    Soft: zod_1.z.number().int(),
    Med: zod_1.z.number().int(),
    Hard: zod_1.z.number().int(),
    bipCount: zod_1.z.number().int(),
    "Pull%": zod_1.z.number(),
    "Cent%": zod_1.z.number(),
    "Oppo%": zod_1.z.number(),
    "Soft%": zod_1.z.number(),
    "Med%": zod_1.z.number(),
    "Hard%": zod_1.z.number(),
    "K/9+": zod_1.z.number(),
    "BB/9+": zod_1.z.number(),
    "K/BB+": zod_1.z.number().nullish(),
    "HR/9+": zod_1.z.number(),
    "AVG+": zod_1.z.number(),
    "WHIP+": zod_1.z.number(),
    "BABIP+": zod_1.z.number(),
    "LOB%+": zod_1.z.number().nullish(),
    "K%+": zod_1.z.number(),
    "BB%+": zod_1.z.number(),
    "LD%+": zod_1.z.number(),
    "GB%+": zod_1.z.number(),
    "FB%+": zod_1.z.number(),
    "HRFB%+": zod_1.z.number().nullish(),
    "Pull%+": zod_1.z.number(),
    "Cent%+": zod_1.z.number(),
    "Oppo%+": zod_1.z.number(),
    "Soft%+": zod_1.z.number(),
    "Med%+": zod_1.z.number(),
    "Hard%+": zod_1.z.number(),
    xERA: zod_1.z.number(),
    pb_o_CH: zod_1.z.number().nullish(),
    pb_s_CH: zod_1.z.number().nullish(),
    pb_c_CH: zod_1.z.number().nullish(),
    pb_o_CU: zod_1.z.number().nullish(),
    pb_s_CU: zod_1.z.number().nullish(),
    pb_c_CU: zod_1.z.number().nullish(),
    pb_o_FF: zod_1.z.number().nullish(),
    pb_s_FF: zod_1.z.number().nullish(),
    pb_c_FF: zod_1.z.number().nullish(),
    pb_o_SI: zod_1.z.number().nullish(),
    pb_s_SI: zod_1.z.number().nullish(),
    pb_c_SI: zod_1.z.number().nullish(),
    pb_o_SL: zod_1.z.number().nullish(),
    pb_s_SL: zod_1.z.number().nullish(),
    pb_c_SL: zod_1.z.number().nullish(),
    pb_o_KC: zod_1.z.number().nullish(),
    pb_s_KC: zod_1.z.number().nullish(),
    pb_c_KC: zod_1.z.number().nullish(),
    pb_o_FC: zod_1.z.number().nullish(),
    pb_s_FC: zod_1.z.number().nullish(),
    pb_c_FC: zod_1.z.number().nullish(),
    pb_o_FS: zod_1.z.number().nullish(),
    pb_s_FS: zod_1.z.number().nullish(),
    pb_c_FS: zod_1.z.number().nullish(),
    pb_overall: zod_1.z.number().nullish(),
    pb_stuff: zod_1.z.number().nullish(),
    pb_command: zod_1.z.number().nullish(),
    pb_xRV100: zod_1.z.number().nullish(),
    pb_ERA: zod_1.z.number().nullish(),
    sp_s_CH: zod_1.z.number().nullish(),
    sp_l_CH: zod_1.z.number().nullish(),
    sp_p_CH: zod_1.z.number().nullish(),
    sp_s_CU: zod_1.z.number().nullish(),
    sp_l_CU: zod_1.z.number().nullish(),
    sp_p_CU: zod_1.z.number().nullish(),
    sp_s_FF: zod_1.z.number().nullish(),
    sp_l_FF: zod_1.z.number().nullish(),
    sp_p_FF: zod_1.z.number().nullish(),
    sp_s_SI: zod_1.z.number().nullish(),
    sp_l_SI: zod_1.z.number().nullish(),
    sp_p_SI: zod_1.z.number().nullish(),
    sp_s_SL: zod_1.z.number().nullish(),
    sp_l_SL: zod_1.z.number().nullish(),
    sp_p_SL: zod_1.z.number().nullish(),
    sp_s_KC: zod_1.z.number().nullish(),
    sp_l_KC: zod_1.z.number().nullish(),
    sp_p_KC: zod_1.z.number().nullish(),
    sp_s_FC: zod_1.z.number().nullish(),
    sp_l_FC: zod_1.z.number().nullish(),
    sp_p_FC: zod_1.z.number().nullish(),
    sp_s_FS: zod_1.z.number().nullish(),
    sp_l_FS: zod_1.z.number().nullish(),
    sp_p_FS: zod_1.z.number().nullish(),
    sp_s_FO: zod_1.z.number().nullish(),
    sp_l_FO: zod_1.z.number().nullish(),
    sp_p_FO: zod_1.z.number().nullish(),
    sp_stuff: zod_1.z.number().nullish(),
    sp_location: zod_1.z.number().nullish(),
    sp_pitching: zod_1.z.number().nullish(),
    EV: zod_1.z.number(),
    LA: zod_1.z.number(),
    Barrels: zod_1.z.number().int(),
    "Barrel%": zod_1.z.number(),
    maxEV: zod_1.z.number(),
    HardHit: zod_1.z.number().int(),
    "HardHit%": zod_1.z.number(),
    Q: zod_1.z.number(),
    TIP: zod_1.z.number(),
    PlayerNameRoute: zod_1.z.string().min(1),
    PlayerName: zod_1.z.string().min(1),
    playerid: zod_1.z.number().int(),
    TeamName: zod_1.z.string().min(1),
    TeamNameAbb: zod_1.z.string().min(1),
    teamid: zod_1.z.number().int(),
})
    .transform((obj) => {
    return {
        pitchingHand: obj.Throws,
        mlbId: obj.xMLBAMID,
        position: obj.Name.split("position=")[1].split('"')[0],
        age: obj.Age,
        wins: obj.W,
        losses: obj.L,
        earnedRunAverage: obj.ERA,
        games: obj.G,
        gamesStarted: obj.GS,
        completeGames: obj.CG,
        shutouts: obj.ShO,
        saves: obj.SV,
        blownSaves: obj.BS,
        inningsPitched: obj.IP,
        totalBattersFaced: obj.TBF,
        hits: obj.H,
        runs: obj.R,
        earnedRuns: obj.ER,
        homeRuns: obj.HR,
        walks: obj.BB,
        intentionalWalks: obj.IBB,
        hitByPitch: obj.HBP,
        wildPitches: obj.WP,
        balks: obj.BK,
        strikeouts: obj.SO,
        groundBalls: obj.GB,
        flyBalls: obj.FB,
        lineDrives: obj.LD,
        infieldFlyBalls: obj.IFFB,
        totalPitches: obj.Pitches,
        balls: obj.Balls,
        strikes: obj.Strikes,
        runSupport: obj.RS,
        infieldHits: obj.IFH,
        bunts: obj.BU,
        buntHits: obj.BUH,
        strikeoutsPerNineInnings: obj["K/9"],
        walksPerNineInnings: obj["BB/9"],
        strikeoutToWalkRatio: obj["K/BB"],
        hitsPerNineInnings: obj["H/9"],
        homeRunsPerNineInnings: obj["HR/9"],
        battingAverageAgainst: obj.AVG,
        walksAndHitsPerInningPitched: obj.WHIP,
        battingAverageOnBallsInPlay: obj.BABIP,
        leftOnBasePercentage: obj["LOB%"],
        fieldingIndependentPitching: obj.FIP,
        groundBallToFlyBallRatio: obj["GB/FB"],
        lineDrivePercentage: obj["LD%"],
        groundBallPercentage: obj["GB%"],
        flyBallPercentage: obj["FB%"],
        infieldFlyBallPercentage: obj["IFFB%"],
        homeRunPerFlyBallRatio: obj["HR/FB"],
        infieldHitPercentage: obj["IFH%"],
        buntHitPercentage: obj["BUH%"],
        threeTrueOutcomesPercentage: obj["TTO%"],
        framingValue: obj.CFraming,
        startingRunsAboveReplacement: obj.Starting,
        startingInningsPitched: obj["Start-IP"],
        relievingRunsAboveReplacement: obj.Relieving,
        relievingInningsPitched: obj["Relief-IP"],
        runsAboveReplacement: obj.RAR,
        winsAboveReplacement: obj.WAR,
        warDollars: obj.Dollars,
        runsAllowedWinsAboveReplacement: obj["RA9-Wins"],
        leftOnBaseWinsAboveAverage: obj["LOB-Wins"],
        ballsInPlayWinsAboveAverage: obj["BIP-Wins"],
        blownSavesWinsAboveAverage: obj["BS-Wins"],
        trueEarnedRunAverage: obj.tERA,
        expectedFieldingIndependentPitching: obj.xFIP,
        winProbabilityAdded: obj.WPA,
        lossAdvancement: obj["-WPA"],
        winAdvancement: obj["+WPA"],
        runsAboveAverage24: obj.RE24,
        winsAboveAverage24: obj.REW,
        averageLeverageIndex: obj.pLI,
        averageLeverageIndexAtStartOfInning: obj.inLI,
        averageLeverageIndexWhenEnteringTheGame: obj.gmLI,
        averageLeverageIndexWhenExitingTheGame: obj.exLI,
        timesPulled: obj.Pulls,
        situationalWins: obj["WPA/LI"],
        clutch: obj.Clutch,
        fastballPercentage: obj["FB%1"],
        fastballVelocity: obj.FBv,
        sliderPercentage: obj["SL%"],
        sliderVelocity: obj.SLv,
        cutterPercentage: obj["CT%"],
        cutterVelocity: obj.CTv,
        curveballPercentage: obj["CB%"],
        curveballVelocity: obj.CBv,
        changeupPercentage: obj["CH%"],
        changeupVelocity: obj.CHv,
        splitFingerPercentage: obj["SF%"],
        splitFingerVelocity: obj.SFv,
        knuckleballPercentage: obj["KN%"],
        knuckleballVelocity: obj.KNv,
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
        holds: obj.HLD,
        shutdowns: obj.SD,
        meltdowns: obj.MD,
        earnedRunAverageMinus: obj["ERA-"],
        fieldingIndependentPitchingMinus: obj["FIP-"],
        expectedFieldingIndependentPitchingMinus: obj["xFIP-"],
        strikeoutPercentage: obj["K%"],
        walkPercentage: obj["BB%"],
        strikeoutMinusWalkPercentage: obj["K-BB%"],
        skillInteractiveEarnedRunAverage: obj.SIERA,
        kwEarnedRunAverage: obj.kwERA,
        runsSupportPerNineInnings: obj["RS/9"],
        earnedRunAverageMinusFieldingIndependentPitching: obj["E-F"],
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
        strikeoutsPerNineInningsPlus: obj["K/9+"],
        walksPerNineInningsPlus: obj["BB/9+"],
        strikeoutToWalkRatioPlus: obj["K/BB+"],
        homeRunsPerNineInningsPlus: obj["HR/9+"],
        battingAveragePlus: obj["AVG+"],
        walksAndHitsPerInningPitchedPlus: obj["WHIP+"],
        battingAverageOnBallsInPlayPlus: obj["BABIP+"],
        leftOnBasePercentagePlus: obj["LOB%+"],
        strikeoutPercentagePlus: obj["K%+"],
        walkPercentagePlus: obj["BB%+"],
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
        expectedEarnedRunAverage: obj.xERA,
        pitchingBotChangeupOverall: obj.pb_o_CH,
        pitchingBotChangeupStuff: obj.pb_s_CH,
        pitchingBotChangeupCommand: obj.pb_c_CH,
        pitchingBotCurveballOverall: obj.pb_o_CU,
        pitchingBotCurveballStuff: obj.pb_s_CU,
        pitchingBotCurveballCommand: obj.pb_c_CU,
        pitchingBotFastballOverall: obj.pb_o_FF,
        pitchingBotFastballStuff: obj.pb_s_FF,
        pitchingBotFastballCommand: obj.pb_c_FF,
        pitchingBotSinkerOverall: obj.pb_o_SI,
        pitchingBotSinkerStuff: obj.pb_s_SI,
        pitchingBotSinkerCommand: obj.pb_c_SI,
        pitchingBotSliderOverall: obj.pb_o_SL,
        pitchingBotSliderStuff: obj.pb_s_SL,
        pitchingBotSliderCommand: obj.pb_c_SL,
        pitchingBotKnuckleCurveOverall: obj.pb_o_KC,
        pitchingBotKnuckleCurveStuff: obj.pb_s_KC,
        pitchingBotKnuckleCurveCommand: obj.pb_c_KC,
        pitchingBotCutterOverall: obj.pb_o_FC,
        pitchingBotCutterStuff: obj.pb_s_FC,
        pitchingBotCutterCommand: obj.pb_c_FC,
        pitchingBotSplitterOverall: obj.pb_o_FS,
        pitchingBotSplitterStuff: obj.pb_s_FS,
        pitchingBotSplitterCommand: obj.pb_c_FS,
        pitchingBotOverall: obj.pb_overall,
        pitchingBotStuff: obj.pb_stuff,
        pitchingBotCommand: obj.pb_command,
        pitchingBotExpectedRunValuePer100Pitches: obj.pb_xRV100,
        pitchingBotEarnedRunAverage: obj.pb_ERA,
        stuffPlusChangeup: obj.sp_s_CH,
        locationPlusChangeup: obj.sp_l_CH,
        pitchingPlusChangeup: obj.sp_p_CH,
        stuffPlusCurveball: obj.sp_s_CU,
        locationPlusCurveball: obj.sp_l_CU,
        pitchingPlusCurveball: obj.sp_p_CU,
        stuffPlusFastball: obj.sp_s_FF,
        locationPlusFastball: obj.sp_l_FF,
        pitchingPlusFastball: obj.sp_p_FF,
        stuffPlusSinker: obj.sp_s_SI,
        locationPlusSinker: obj.sp_l_SI,
        pitchingPlusSinker: obj.sp_p_SI,
        stuffPlusSlider: obj.sp_s_SL,
        locationPlusSlider: obj.sp_l_SL,
        pitchingPlusSlider: obj.sp_p_SL,
        stuffPlusKnuckleCurve: obj.sp_s_KC,
        locationPlusKnuckleCurve: obj.sp_l_KC,
        pitchingPlusKnuckleCurve: obj.sp_p_KC,
        stuffPlusCutter: obj.sp_s_FC,
        locationPlusCutter: obj.sp_l_FC,
        pitchingPlusCutter: obj.sp_p_FC,
        stuffPlusSplitter: obj.sp_s_FS,
        locationPlusSplitter: obj.sp_l_FS,
        pitchingPlusSplitter: obj.sp_p_FS,
        stuffPlusForkball: obj.sp_s_FO,
        locationPlusForkball: obj.sp_l_FO,
        pitchingPlusForkball: obj.sp_p_FO,
        stuffPlusOverall: obj.sp_stuff,
        locationPlusOverall: obj.sp_location,
        pitchingPlusOverall: obj.sp_pitching,
        averageExitVelocity: obj.EV,
        averageLaunchAngle: obj.LA,
        barrels: obj.Barrels,
        barrelPercentage: obj["Barrel%"],
        maxExitVelocity: obj.maxEV,
        hardHits: obj.HardHit,
        hardHitPercentage: obj["HardHit%"],
        inningsPitchedForQualifying: obj.Q,
        totalInningsPitched: obj.TIP,
        playerNameRoute: obj.PlayerNameRoute,
        playerName: obj.PlayerName,
        playerId: obj.playerid,
        teamName: obj.TeamName,
        teamNameAbbreviation: obj.TeamNameAbb,
        teamId: obj.teamid,
    };
});
exports.MajorLeaguePitcherSchema = MajorLeaguePitcherSchema;