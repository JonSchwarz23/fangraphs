import { z } from "zod";

enum HittingSide {
    Right = "R",
    Left = "L",
    Both = "B",
}
//TODO: Create a generic spot for these
const HittingSideEnum = z.nativeEnum(HittingSide);

enum ThrowingHand {
    Right = "R",
    Left = "L",
}
const ThrowingHandEnum = z.nativeEnum(ThrowingHand);

const PlayerInfoSchema = z
    .object({
        UPId: z.string().min(1),
        PlayerId: z.number().int(),
        MLBAMId: z.number().int(),
        MinorMasterId: z.string().min(1),
        KBOId: z.string().min(1).nullish(),
        KBOBISId: z.string().min(1).nullish(),
        AltMMId: z.string().min(1).nullish(),
        RRId: z.string().min(1).nullish(),
        FirstName: z.string().min(1),
        LastName: z.string().min(1),
        firstLastName: z.string().min(1),
        Height: z.number().int(),
        Weight: z.number().int(),
        BirthDate: z.preprocess((val) => `${val}Z`, z.string().datetime()),
        NameKorean: z.string().min(1).nullish(),
        Bats: HittingSideEnum,
        Throws: ThrowingHandEnum,
        Position: z.string().min(1),
        BirthCity: z.string(),
        College: z.string(),
        Debut: z.preprocess((val) => `${val}Z`, z.string().datetime()),
        LastGame: z.preprocess((val) => `${val}Z`, z.string().datetime()),
        DeathDate: z.string().datetime().nullish(),
        Retired: z.string().nullish(),
        RookieSeason: z.number().int(),
        CurrentLeague: z.string().nullish(),
        HOF: z.string().nullish(),
        Age: z.number().int(),
        servicetime: z.string().regex(new RegExp("[0-9]+.[0-9]+")),
        minSeason: z.number().int(),
        maxSeason: z.number().int(),
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
type PlayerInfo = z.infer<typeof PlayerInfoSchema>;

export { PlayerInfoSchema, PlayerInfo };
