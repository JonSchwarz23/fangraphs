// enum Position {
//     All = "all",
//     Pitcher = "p",
//     Catcher = "c",
//     FirstBase = "1b",
//     SecondBase = "2b",
//     ThirdBase = "3b",
//     Shortstop = "ss",
//     Outfield = "of",
//     RightField = "rf",
//     CenterField = "cf",
//     LeftField = "lf",
//     DesignatedHitter = "dh",
//     NoPosition = "np",
// }

import { type } from "os";

const MaxNumberOfResults = 2000000000;

enum Stat {
    Batting = "bat",
    Pitching = "pit",
    Fielding = "fld",
}

enum League {
    American = "al",
    National = "nl",
}

enum Team {
    All = 0,
    Angels = 1,
    Astros = 21,
    Athletics = 10,
    BlueJays = 14,
    Braves = 16,
    Brewers = 23,
    Cardinals = 28,
    Cubs = 17,
    Diamondbacks = 15,
    Dodgers = 22,
    Giants = 30,
    Guardians = 5,
    Mariners = 11,
    Marlins = 20,
    Mets = 25,
    Nationals = 24,
    Orioles = 2,
    Padres = 29,
    Phillies = 26,
    Pirates = 27,
    Rangers = 13,
    Rays = 12,
    RedSox = 3,
    Reds = 18,
    Rockies = 19,
    Royals = 7,
    Tigers = 6,
    Twins = 8,
    WhiteSox = 4,
    Yankees = 9,
}

const Qualifed = "y";
type PlateAppearancesQualifier =
    | typeof Qualifed
    | "0"
    | "10"
    | "20"
    | "30"
    | "40"
    | "50"
    | "60"
    | "70"
    | "80"
    | "90"
    | "100"
    | "110"
    | "120"
    | "130"
    | "140"
    | "150"
    | "160"
    | "170"
    | "180"
    | "190"
    | "200"
    | "210"
    | "220"
    | "230"
    | "240"
    | "250"
    | "300"
    | "350"
    | "400"
    | "450"
    | "500"
    | "550"
    | "600"
    | "650"
    | "700"
    | "750"
    | "800"
    | "850"
    | "900"
    | "950"
    | "1000"
    | "1500"
    | "2000"
    | "2500"
    | "3000"
    | "3500"
    | "4000"
    | "4500"
    | "5000"
    | "5500"
    | "6000"
    | "6500"
    | "7000"
    | "7500"
    | "8000"
    | "8500"
    | "9000"
    | "9500"
    | "10000";

enum SeasonType {
    Regular = "",
    Postseason = "Y",
    WorldSeries = "W",
    LeagueChampionshipSeries = "L",
    DivisionSeries = "D",
    WildCard = "F",
}

enum DataType {
    Dashboard = 8,
    Standard = 0,
    Advanced = 1,
}

type BattingLeadersParametersBase = {
    stats: Stat.Batting;
    league?: League;
    team?: Team;
    seasonType?: SeasonType;
    plateAppearancesQualifier?: PlateAppearancesQualifier;
    numberOfResults?: number;
};

type BattingLeadersParametersSingleSeason = BattingLeadersParametersBase & {
    season?: number;
    startSeason?: never;
    endSeason?: never;
};

type BattingLeadersParametersMultipleSeasons = BattingLeadersParametersBase & {
    startSeason?: number;
    endSeason?: number;
    season?: never;
};

type BattingLeadersParametersSeasons = BattingLeadersParametersSingleSeason | BattingLeadersParametersMultipleSeasons;

type DashboardBattingLeaderParameters = BattingLeadersParametersSeasons & {
    dataType: DataType.Dashboard;
};

type StandardBattingLeaderParameters = BattingLeadersParametersSeasons & {
    dataType: DataType.Standard;
};

type AdvancedBattingLeaderParameters = BattingLeadersParametersSeasons & {
    dataType: DataType.Advanced;
};

type BattingLeadersParameters = DashboardBattingLeaderParameters | StandardBattingLeaderParameters | AdvancedBattingLeaderParameters;

export {
    League,
    Team,
    SeasonType,
    DataType,
    PlateAppearancesQualifier,
    Stat,
    MaxNumberOfResults,
    BattingLeadersParameters,
    DashboardBattingLeaderParameters,
    StandardBattingLeaderParameters,
    AdvancedBattingLeaderParameters,
};
