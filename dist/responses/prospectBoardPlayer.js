"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProspectBoardPlayerSchema = void 0;
const zod_1 = require("zod");
const regex_1 = __importDefault(require("../regex"));
var Level;
(function (Level) {
    Level["MLB"] = "MLB";
    Level["AAA"] = "AAA";
    Level["AA"] = "AA";
    Level["A+"] = "A+";
    Level["A"] = "A";
    Level["A-"] = "A-";
    Level["DSL"] = "DSL";
    Level["CPX"] = "CPX";
    Level["None"] = "";
})(Level || (Level = {}));
const LevelEnum = zod_1.z.nativeEnum(Level);
var RiskLevel;
(function (RiskLevel) {
    RiskLevel["High"] = "High";
    RiskLevel["Medium"] = "Med";
    RiskLevel["Low"] = "Low";
    RiskLevel["Short"] = "Short";
})(RiskLevel || (RiskLevel = {}));
const RiskLevelEnum = zod_1.z.nativeEnum(RiskLevel);
var FutureValue;
(function (FutureValue) {
    FutureValue["Eighty"] = "80";
    FutureValue["SeventyFive"] = "75";
    FutureValue["Seventy"] = "70";
    FutureValue["SixtyFive"] = "65";
    FutureValue["Sixty"] = "60";
    FutureValue["FiftyFive"] = "55";
    FutureValue["Fifty"] = "50";
    FutureValue["FortyFivePlus"] = "45+";
    FutureValue["FortyFive"] = "45";
    FutureValue["FortyPlus"] = "40+";
    FutureValue["Forty"] = "40";
    FutureValue["ThirtyFive"] = "35";
    FutureValue["ThirtyFivePlus"] = "35+";
    FutureValue["Thirty"] = "30";
    FutureValue["TwentyFive"] = "25";
    FutureValue["Twenty"] = "20";
})(FutureValue || (FutureValue = {}));
const FutureValueEnum = zod_1.z.nativeEnum(FutureValue);
var HittingSide;
(function (HittingSide) {
    HittingSide["Right"] = "R";
    HittingSide["Left"] = "L";
    HittingSide["Switch"] = "S";
})(HittingSide || (HittingSide = {}));
const HittingSideEnum = zod_1.z.nativeEnum(HittingSide);
var ThrowingArm;
(function (ThrowingArm) {
    ThrowingArm["Right"] = "R";
    ThrowingArm["Left"] = "L";
})(ThrowingArm || (ThrowingArm = {}));
const ThrowingArmEnum = zod_1.z.nativeEnum(ThrowingArm);
const getBirthDate = (days) => {
    const date = new Date(1899, 11, 30);
    date.setDate(30 + Number(days));
    return date;
};
const getTommyJohnDate = (date) => {
    if (!date)
        return null;
    if (date[0] === "*")
        return new Date(date.slice(1));
    if (date[date.length - 1] === "*")
        return new Date(date.slice(0, date.length - 1));
    return new Date(date);
};
const ProspectBoardPlayerSchema = zod_1.z.object({
    llevel: LevelEnum.nullish(),
    mlevel: LevelEnum.nullish(),
    minorMasterId: zod_1.z.string().min(1),
    playerName: zod_1.z.string().min(1),
    playerNameRoute: zod_1.z.string(),
    RPM: zod_1.z.string().nullish(),
    Vel: zod_1.z.string().nullish(),
    cBonus: zod_1.z.null(),
    cRisk: RiskLevelEnum.nullish(),
    cETA: zod_1.z.string(),
    cFV: FutureValueEnum,
    cWeight: zod_1.z.string(),
    cHeight: zod_1.z.string(),
    cRank: zod_1.z.null(),
    cOVR: zod_1.z.string().nullish(),
    cORG: zod_1.z.string(),
    cDraftSchool: zod_1.z.string(),
    Hit: zod_1.z.string(),
    Game: zod_1.z.string(),
    Raw: zod_1.z.string(),
    Spd: zod_1.z.string(),
    Fld: zod_1.z.string(),
    Arm: zod_1.z.string().nullish(),
    FB: zod_1.z.string(),
    SL: zod_1.z.string(),
    CB: zod_1.z.string(),
    CH: zod_1.z.string(),
    SPL: zod_1.z.string(),
    CT: zod_1.z.string(),
    CMD: zod_1.z.string(),
    cSeason: zod_1.z.string(),
    playerPageSortOrder: zod_1.z.number(),
    cCollegeCommit: zod_1.z.string().nullish(),
    ID: zod_1.z.number(),
    RowID: zod_1.z.null(),
    FirstName: zod_1.z.string(),
    LastName: zod_1.z.string(),
    Position: zod_1.z.string(),
    Age: zod_1.z.string(),
    Team: zod_1.z.string(),
    Season: zod_1.z.number(),
    Type: zod_1.z.string(),
    PlayerId: zod_1.z.string(),
    DraftRank: zod_1.z.null(),
    ProjTeam: zod_1.z.null(),
    Ovr_Rank: zod_1.z.number().nullish(),
    Org_Rank: zod_1.z.number(),
    FV_Current: zod_1.z.number(),
    Risk_Current: zod_1.z.null(),
    ETA_Current: zod_1.z.number(),
    Draft: zod_1.z.null(),
    CollegeCommit: zod_1.z.null(),
    Height: zod_1.z.number(),
    Weight: zod_1.z.number(),
    Bats: HittingSideEnum,
    Throws: ThrowingArmEnum,
    School: zod_1.z.string(),
    Summary: zod_1.z.string(),
    YouTube: zod_1.z.string().nullish(),
    pHit: zod_1.z.number().nullish(),
    fHit: zod_1.z.number().nullish(),
    pGame: zod_1.z.number().nullish(),
    fGame: zod_1.z.number().nullish(),
    pRaw: zod_1.z.number().nullish(),
    fRaw: zod_1.z.number().nullish(),
    pSpd: zod_1.z.number().nullish(),
    fSpd: zod_1.z.number().nullish(),
    pFld: zod_1.z.number().nullish(),
    fFld: zod_1.z.number().nullish(),
    pArm: zod_1.z.number().nullish(),
    fArm: zod_1.z.number().nullish(),
    pFB: zod_1.z.number().nullish(),
    fFB: zod_1.z.number().nullish(),
    pSL: zod_1.z.number().nullish(),
    fSL: zod_1.z.number().nullish(),
    pCB: zod_1.z.number().nullish(),
    fCB: zod_1.z.number().nullish(),
    pCH: zod_1.z.number().nullish(),
    fCH: zod_1.z.number().nullish(),
    pSPL: zod_1.z.number().nullish(),
    fSPL: zod_1.z.number().nullish(),
    pCT: zod_1.z.number().nullish(),
    fCT: zod_1.z.number().nullish(),
    pCMD: zod_1.z.number().nullish(),
    fCMD: zod_1.z.number().nullish(),
    bRPM: zod_1.z.number().nullish(),
    fRPM: zod_1.z.number().nullish(),
    Range: zod_1.z.string().regex(regex_1.default.range).nullish(),
    Touch: zod_1.z.number().nullish(),
    Variance: RiskLevelEnum.nullish(),
    State: zod_1.z.null(),
    BirthDate: zod_1.z.string().regex(regex_1.default.number),
    TLDR: zod_1.z.string().nullish(),
    Athleticism: zod_1.z.number().nullish(),
    Frame: zod_1.z.number().nullish(),
    Performer: zod_1.z.number().nullish(),
    Delivery: zod_1.z.number().nullish(),
    Agent: zod_1.z.string().nullish(),
    ProjBonus: zod_1.z.null(),
    Prev_Ovr_Rank: zod_1.z.null(),
    Prev_Org_Rank: zod_1.z.null(),
    Trend: zod_1.z.string().nullish(),
    TJDate: zod_1.z.string().nullish(),
    Ovr_Summary: zod_1.z.string().nullish(),
    Dist_Raw: zod_1.z.string().nullish(),
    Dist_JSON: zod_1.z.null(),
    DraftSign: zod_1.z.null(),
    Player_Type: zod_1.z.string().nullish(),
    PV: zod_1.z.null(),
    Upside: zod_1.z.null(),
    Pos_Rk: zod_1.z.number().nullish(),
    Birth_Yr_Rk: zod_1.z.null(),
    Class_Rk: zod_1.z.number().nullish(),
    Amateur_Rk: zod_1.z.number().nullish(),
    Signed_Yr: zod_1.z.number().nullish(),
    Signed_Mkt: zod_1.z.string().nullish(),
    Signed_Org: zod_1.z.string().nullish(),
    Draft_Rnd: zod_1.z.number().nullish(),
    Sign_Bonus: zod_1.z.number().nullish(),
    Bonus_Class_Rk: zod_1.z.number().nullish(),
    School_Type: zod_1.z.string().nullish(),
    HS_State: zod_1.z.string().nullish(),
    College_Commit: zod_1.z.string().nullish(),
    Country: zod_1.z.string().nullish(),
    Pitch_Sel: zod_1.z.number().nullish(),
    Bat_Ctrl: zod_1.z.number().nullish(),
    Avg_EV: zod_1.z.number().nullish(),
    Max_EV: zod_1.z.number().nullish(),
    Fantasy_Redraft: zod_1.z.number().nullish(),
    Fantasy_Dynasty: zod_1.z.number().nullish(),
    FYPD_Eligible: zod_1.z.string().regex(new RegExp("Y")).nullish(),
    "HardHit%": zod_1.z.number().nullish(),
    Levers: zod_1.z.string().nullish(),
    FBType: zod_1.z.string().nullish(),
    TypeDerived: zod_1.z.string().nullish(),
    IsVisible: zod_1.z.string().nullish(),
    options: zod_1.z.string().nullish(),
    servicetime: zod_1.z.string().nullish(),
})
    .strict()
    .transform((obj) => {
    return {
        currentLevel: obj.llevel,
        minorLeagueId: obj.minorMasterId,
        playerName: obj.playerName,
        riskLevel: obj.cRisk,
        futureValue: obj.cFV,
        draftSchool: obj.cDraftSchool,
        id: obj.ID,
        firstName: obj.FirstName,
        lastName: obj.LastName,
        position: obj.Position,
        team: obj.Team,
        overallRank: obj.Ovr_Rank,
        organizationRank: obj.Org_Rank,
        eta: obj.ETA_Current,
        height: obj.Height,
        weight: obj.Weight,
        hittingSide: obj.Bats,
        throwingArm: obj.Throws,
        school: obj.School,
        summary: obj.Summary,
        presentHit: obj.pHit,
        futureHit: obj.fHit,
        presentGamePower: obj.pGame,
        futureGamePower: obj.fGame,
        presentRawPower: obj.pRaw,
        futureRawPower: obj.fRaw,
        presentSpeed: obj.pSpd,
        futureSpeed: obj.fSpd,
        presentFielding: obj.pFld,
        futureFielding: obj.fFld,
        presentArm: obj.pArm,
        futureArm: obj.fArm,
        presentFastball: obj.pFB,
        futureFastball: obj.fFB,
        presentSlider: obj.pSL,
        futureSlider: obj.fSL,
        presentCurveball: obj.pCB,
        futureCurveball: obj.fCB,
        presentChangeup: obj.pCH,
        futureChangeup: obj.fCH,
        presentSplitter: obj.pSPL,
        futureSplitter: obj.fSPL,
        presentCutter: obj.pCT,
        futureCutter: obj.fCT,
        presentCommand: obj.pCMD,
        futureCommand: obj.fCMD,
        breakingBallSpinRate: obj.bRPM,
        fastballSpinRate: obj.fRPM,
        lowerRange: obj.Range ? Number(obj.Range.split("-")[0]) : null,
        upperRange: obj.Range ? Number(obj.Range.split("-")[1]) : null,
        touch: obj.Touch,
        birthDate: getBirthDate(obj.BirthDate),
        athleticism: obj.Athleticism ?? 0,
        frame: obj.Frame ?? 0,
        performer: obj.Performer ?? 0,
        delivery: obj.Delivery ?? 0,
        agent: obj.Agent,
        tommyJohnDate: obj.TJDate,
        draftRound: obj.Draft_Rnd,
        country: obj.Country,
        pitchSelection: obj.Pitch_Sel,
        batControl: obj.Bat_Ctrl,
        averageExitVelocity: obj.Avg_EV,
        maxExitVelocity: obj.Max_EV,
        firstYearPlayerDraftEligible: obj.FYPD_Eligible === "Y",
        hardHitPercentage: obj["HardHit%"],
        fastballType: obj.FBType,
    };
});
exports.ProspectBoardPlayerSchema = ProspectBoardPlayerSchema;
