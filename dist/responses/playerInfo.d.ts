import { z } from "zod";
declare enum HittingSide {
    Right = "R",
    Left = "L",
    Both = "B"
}
declare enum ThrowingHand {
    Right = "R",
    Left = "L"
}
declare const PlayerInfoSchema: z.ZodEffects<z.ZodObject<{
    UPId: z.ZodString;
    PlayerId: z.ZodNumber;
    MLBAMId: z.ZodNumber;
    MinorMasterId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    KBOId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    KBOBISId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    AltMMId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    RRId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    FirstName: z.ZodString;
    LastName: z.ZodString;
    firstLastName: z.ZodString;
    Height: z.ZodNumber;
    Weight: z.ZodNumber;
    BirthDate: z.ZodEffects<z.ZodString, string, unknown>;
    NameKorean: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Bats: z.ZodNativeEnum<typeof HittingSide>;
    Throws: z.ZodNativeEnum<typeof ThrowingHand>;
    Position: z.ZodString;
    BirthCity: z.ZodString;
    College: z.ZodString;
    Debut: z.ZodEffects<z.ZodString, string, unknown>;
    LastGame: z.ZodEffects<z.ZodString, string, unknown>;
    DeathDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Retired: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    RookieSeason: z.ZodNumber;
    CurrentLeague: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    HOF: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Age: z.ZodNumber;
    servicetime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minSeason: z.ZodNumber;
    maxSeason: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    Bats: HittingSide;
    Age: number;
    Throws: ThrowingHand;
    UPId: string;
    PlayerId: number;
    MLBAMId: number;
    FirstName: string;
    LastName: string;
    firstLastName: string;
    Height: number;
    Weight: number;
    BirthDate: string;
    Position: string;
    BirthCity: string;
    College: string;
    Debut: string;
    LastGame: string;
    RookieSeason: number;
    minSeason: number;
    maxSeason: number;
    MinorMasterId?: string | null | undefined;
    KBOId?: string | null | undefined;
    KBOBISId?: string | null | undefined;
    AltMMId?: string | null | undefined;
    RRId?: string | null | undefined;
    NameKorean?: string | null | undefined;
    DeathDate?: string | null | undefined;
    Retired?: string | null | undefined;
    CurrentLeague?: string | null | undefined;
    HOF?: string | null | undefined;
    servicetime?: string | null | undefined;
}, {
    Bats: HittingSide;
    Age: number;
    Throws: ThrowingHand;
    UPId: string;
    PlayerId: number;
    MLBAMId: number;
    FirstName: string;
    LastName: string;
    firstLastName: string;
    Height: number;
    Weight: number;
    Position: string;
    BirthCity: string;
    College: string;
    RookieSeason: number;
    minSeason: number;
    maxSeason: number;
    MinorMasterId?: string | null | undefined;
    KBOId?: string | null | undefined;
    KBOBISId?: string | null | undefined;
    AltMMId?: string | null | undefined;
    RRId?: string | null | undefined;
    BirthDate?: unknown;
    NameKorean?: string | null | undefined;
    Debut?: unknown;
    LastGame?: unknown;
    DeathDate?: string | null | undefined;
    Retired?: string | null | undefined;
    CurrentLeague?: string | null | undefined;
    HOF?: string | null | undefined;
    servicetime?: string | null | undefined;
}>, {
    id: number;
    mlbId: number;
    minorLeagueId: string | null | undefined;
    firstName: string;
    lastName: string;
    fullName: string;
    height: number;
    weight: number;
    birthDate: Date;
    hittingSide: HittingSide;
    throwingHand: ThrowingHand;
    position: string;
    birthCity: string | null;
    college: string | null;
    debut: Date;
    lastGame: Date;
    rookieSeason: number;
    serviceTime: number;
    minSeason: number;
    maxSeason: number;
}, {
    Bats: HittingSide;
    Age: number;
    Throws: ThrowingHand;
    UPId: string;
    PlayerId: number;
    MLBAMId: number;
    FirstName: string;
    LastName: string;
    firstLastName: string;
    Height: number;
    Weight: number;
    Position: string;
    BirthCity: string;
    College: string;
    RookieSeason: number;
    minSeason: number;
    maxSeason: number;
    MinorMasterId?: string | null | undefined;
    KBOId?: string | null | undefined;
    KBOBISId?: string | null | undefined;
    AltMMId?: string | null | undefined;
    RRId?: string | null | undefined;
    BirthDate?: unknown;
    NameKorean?: string | null | undefined;
    Debut?: unknown;
    LastGame?: unknown;
    DeathDate?: string | null | undefined;
    Retired?: string | null | undefined;
    CurrentLeague?: string | null | undefined;
    HOF?: string | null | undefined;
    servicetime?: string | null | undefined;
}>;
type PlayerInfo = z.infer<typeof PlayerInfoSchema>;
export { PlayerInfoSchema, PlayerInfo };
