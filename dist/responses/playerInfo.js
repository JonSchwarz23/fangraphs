"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInfoSchema = void 0;
const zod_1 = require("zod");
var HittingSide;
(function (HittingSide) {
    HittingSide["Right"] = "R";
    HittingSide["Left"] = "L";
    HittingSide["Both"] = "B";
})(HittingSide || (HittingSide = {}));
//TODO: Create a generic spot for these
const HittingSideEnum = zod_1.z.nativeEnum(HittingSide);
var ThrowingHand;
(function (ThrowingHand) {
    ThrowingHand["Right"] = "R";
    ThrowingHand["Left"] = "L";
})(ThrowingHand || (ThrowingHand = {}));
const ThrowingHandEnum = zod_1.z.nativeEnum(ThrowingHand);
const PlayerInfoSchema = zod_1.z
    .object({
    UPId: zod_1.z.string().min(1),
    PlayerId: zod_1.z.number().int(),
    MLBAMId: zod_1.z.number().int(),
    MinorMasterId: zod_1.z.string().min(1).nullish(),
    KBOId: zod_1.z.string().min(1).nullish(),
    KBOBISId: zod_1.z.string().min(1).nullish(),
    AltMMId: zod_1.z.string().min(1).nullish(),
    RRId: zod_1.z.string().min(1).nullish(),
    FirstName: zod_1.z.string().min(1),
    LastName: zod_1.z.string().min(1),
    firstLastName: zod_1.z.string().min(1),
    Height: zod_1.z.number().int(),
    Weight: zod_1.z.number().int(),
    BirthDate: zod_1.z.preprocess((val) => `${val}Z`, zod_1.z.string().datetime()),
    NameKorean: zod_1.z.string().min(1).nullish(),
    Bats: HittingSideEnum,
    Throws: ThrowingHandEnum,
    Position: zod_1.z.string().min(1),
    BirthCity: zod_1.z.string(),
    College: zod_1.z.string(),
    Debut: zod_1.z.preprocess((val) => `${val}Z`, zod_1.z.string().datetime()),
    LastGame: zod_1.z.preprocess((val) => `${val}Z`, zod_1.z.string().datetime()),
    DeathDate: zod_1.z.string().datetime().nullish(),
    Retired: zod_1.z.string().nullish(),
    RookieSeason: zod_1.z.number().int(),
    CurrentLeague: zod_1.z.string().nullish(),
    HOF: zod_1.z.string().nullish(),
    Age: zod_1.z.number().int(),
    servicetime: zod_1.z.string().regex(new RegExp("[0-9]+.[0-9]+")).nullish(),
    minSeason: zod_1.z.number().int(),
    maxSeason: zod_1.z.number().int(),
})
    .strict()
    .transform((obj) => {
    return {
        id: obj.PlayerId,
        mlbId: obj.MLBAMId,
        minorLeagueId: obj.MinorMasterId,
        firstName: obj.FirstName,
        lastName: obj.LastName,
        fullName: obj.firstLastName,
        height: obj.Height,
        weight: obj.Weight,
        birthDate: new Date(obj.BirthDate),
        hittingSide: obj.Bats,
        throwingHand: obj.Throws,
        position: obj.Position,
        birthCity: obj.BirthCity === "" ? null : obj.BirthCity,
        college: obj.College === "" ? null : obj.College,
        debut: new Date(obj.Debut),
        lastGame: new Date(obj.LastGame),
        rookieSeason: obj.RookieSeason,
        serviceTime: Number(obj.servicetime),
        minSeason: obj.minSeason,
        maxSeason: obj.maxSeason,
    };
});
exports.PlayerInfoSchema = PlayerInfoSchema;
