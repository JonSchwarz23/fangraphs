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
} & {
    [key: string]: string;
};
type PlayerInfoQueryInternal = {
    playerid: string;
    position: string;
} & {
    [key: string]: string;
};
declare enum Position {
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
    NonPitcher = "np"
}
declare enum League {
    All = "all",
    American = "al",
    National = "nl"
}
declare enum Handness {
    All = "",
    Left = "L",
    Right = "R",
    Switch = "S"
}
declare enum Team {
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
    Yankees = 9
}
declare enum SeasonType {
    Regular = "",
    Postseason = "Y",
    WorldSeries = "W",
    LeagueChampionshipSeries = "L",
    DivisionSeries = "D",
    WildCard = "F"
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
};
type PitcherLeadersQuery = LeadersQueryBase & {
    minimumInningsPitched?: number | "y";
};
type PlayerInfoQuery = {
    id: string;
    position: string;
};
declare function convertToInternalBatting(query: BatterLeadersQuery): LeadersQueryInternal;
declare function convertToInternalPitching(query: PitcherLeadersQuery): LeadersQueryInternal;
declare function convertToInternalPlayerInfo(query: PlayerInfoQuery): PlayerInfoQueryInternal;
export { Position, League, Handness, Team, SeasonType, BatterLeadersQuery, PitcherLeadersQuery, convertToInternalBatting, convertToInternalPitching, convertToInternalPlayerInfo, PlayerInfoQuery, };
