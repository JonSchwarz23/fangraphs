type LeadersQueryInternal = {
    age: string;
    pos: string;
    stats: string;
    lg: string;
    qual: string;
    season: string;
    season1: string;
    startdate: string;
    enddate: string;
    month: string;
    hand: string;
    team: string;
    pageitems: string;
    pagenum: string;
    ind: string;
    rost: string;
    players: string;
    type: string;
    postseason: string;
    sortdir: string;
    sortstat: string;
} & { [key: string]: string };

type ProspectsListQueryInternal = {
    pos: string;
    lg: string;
    stats: string;
    qual: string;
    type: string;
    team: string;
    season: string;
    seasonend: string;
    draft: string;
    valueheader: string;
    quickleaderboard: string;
} & { [key: string]: string };

type PlayerInfoQueryInternal = {
    playerid: string;
    position: string;
} & { [key: string]: string };

enum Position {
    All = "all",
    Pitcher = "p",
    Catcher = "c",
    FirstBase = "1b",
    SecondBase = "2b",
    ThirdBase = "3b",
    Shortstop = "ss",
    Outfield = "of",
    RightField = "rf",
    CenterField = "cf",
    LeftField = "lf",
    DesignatedHitter = "dh",
    NonPitcher = "np",
}

enum League {
    All = "all",
    American = "al",
    National = "nl",
}

enum Handness {
    All = "",
    Left = "L",
    Right = "R",
    Switch = "S",
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

enum SeasonType {
    Regular = "",
    Postseason = "Y",
    WorldSeries = "W",
    LeagueChampionshipSeries = "L",
    DivisionSeries = "D",
    WildCard = "F",
}

type LeadersQueryBase = {
    startingAge?: number;
    endingAge?: number;
    league?: League;
    season?: number;
    startingSeason?: number;
    endingSeason?: number;
    handness?: Handness;
    team?: Team;
    itemsPerPage?: number;
    pageNumber?: number;
    seasonType?: SeasonType;
};

type BatterLeadersQuery = LeadersQueryBase & {
    position?: Position;
    minimumPlateAppearances?: number | "y";
    //TODO: Split these so you can choose either a single season or multiple seasons but not both
};

type PitcherLeadersQuery = LeadersQueryBase & {
    minimumInningsPitched?: number | "y";
};

type PlayerInfoQuery = {
    id: string;
    position: string;
};

//TODO: this will need to be updated when the season changes
const currentSeason = "2023";

function convertToInternal(query: BatterLeadersQuery | PitcherLeadersQuery) {
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

function convertToInternalBatting(query: BatterLeadersQuery): LeadersQueryInternal {
    const queryInternal = convertToInternal(query);

    return {
        ...queryInternal,
        stats: "bat",
        pos: query.position ?? Position.All,
        qual: query.minimumPlateAppearances?.toString() ?? "y",
    };
}

function convertToInternalPitching(query: PitcherLeadersQuery): LeadersQueryInternal {
    const queryInternal = convertToInternal(query);

    return {
        ...queryInternal,
        stats: "pit",
        pos: Position.All,
        qual: query.minimumInningsPitched?.toString() ?? "y",
    };
}

function convertToInternalPlayerInfo(query: PlayerInfoQuery): PlayerInfoQueryInternal {
    return {
        playerid: query.id,
        position: query.position,
    };
}

export {
    Position,
    League,
    Handness,
    Team,
    SeasonType,
    BatterLeadersQuery,
    PitcherLeadersQuery,
    convertToInternalBatting,
    convertToInternalPitching,
    convertToInternalPlayerInfo,
    PlayerInfoQuery,
};
