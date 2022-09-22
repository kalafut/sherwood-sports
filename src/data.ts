import * as consts from "./consts";
import { Org, OrgList } from "./types";

export const orgs: OrgList = [
  /**
   * Basketball
   */
  {
    name: "Sherwood Youth Basketball",
    summary: "Hoops!",
    sport: consts.BASKETBALL,
    programs: [
      {
        name: "Rec Basketball",
        season: [consts.NOV, consts.FEB],
        gradeMin: 3,
        gradeMax: 12,
      },
      {
        name: "Competitive Basketball",
      },
    ],
  },

  /**
   * Cheer
   */
  {
    name: "Sherwood Youth Cheer",
    url: "http://www.sherwoodcheer.org",
    sport: consts.CHEER,
    programs: [
      {
        name: "Youth Cheer",
        season: [consts.AUG, consts.OCT],
        gradeMin: 0,
        gradeMax: 8,
      },
    ],
  },

  /**
   * Lacrosse
   */
  {
    name: "Sherwood Youth Lacrosse",
    summary: "We play Lacrosse",
    url: "https://www.leagueathletics.com/Schedule.asp?org=sherwoodyouthlacrosse.com",
    sport: consts.LACROSSE,
    programs: [
      {
        name: "Fiddlesticks",
        url: "https://www.leagueathletics.com/Page.asp?n=107395&org=sherwoodyouthlacrosse.com",
        season: [consts.APR, consts.MAY],
        gradeMin: 0,
        gradeMax: 2,
      },
      {
        name: "Youth Lacrosse",
        season: [consts.APR, consts.JUN],
      },
      {
        name: "Adult Lacrosse",
        season: [consts.MAY, consts.JUN],
      },
    ],
  },
  {
    name: "Fake Lacrosse",
    summary: "We play Lacrosse too",
    sport: consts.LACROSSE,
    programs: [
      {
        name: "Fake Youth Lacrosse",
      },
      {
        name: "Fake Adult Lacrosse",
      },
    ],
  },

  /**
   * Martial arts
   */
  {
    name: "Musa Martial Arts",
    summary: "We play Lacrosse",
    url: "https://musasherwood.com/",
    sport: consts.MARTIAL_ARTS,
    programs: [
      {
        name: "Little Warriors",
        url: "https://musasherwood.com/kids-martial-arts",
        season: consts.ALL_YEAR,
        ageMin: 3,
        ageMax: 5,
      },
      {
        name: "Youth Taekwondo",
        url: "https://musasherwood.com/kids-martial-arts",
        season: consts.ALL_YEAR,
        ageMin: 6,
      },
      {
        name: "Adult Taekwondo, Hapkido, Jiu-Jitsu",
        url: "https://musasherwood.com/adult-martial-arts",
        season: consts.ALL_YEAR,
        gradeMax: 5,
      },
    ],
  },

  /**
   * Soccer
   */
  {
    name: "Sherwood Youth Soccer",
    url: "https://www.sherwoodsoccer.org/",
    sport: consts.SOCCER,
    programs: [
      {
        name: "Fall Soccer",
        season: [consts.APR, consts.JUN],
      },
      {
        name: "Westside Timbers",
      },
    ],
  },
  {
    name: "Westside Timbers",
    url: "http://www.westsidetimbers.org/",
    sport: consts.SOCCER,
    programs: [
      {
        name: "Timber Tots",
        season: [consts.APR, consts.JUN],
        url: "http://www.westsidetimbers.org/about-us/program-overview/timber-tots-program",
        ageMax: 6,
      },
      {
        name: "Development Program",
        url: "http://www.westsidetimbers.org/about-us/program-overview/development-program-wdp",
        ageMin: 7,
        ageMax: 10,
      },
      {
        name: "Development Program 2",
        url: "http://www.westsidetimbers.org/about-us/program-overview/development-program-wdp",
        gradeMin: 3,
        gradeMax: 5,
      },
      {
        name: "At least 10",
        url: "http://www.westsidetimbers.org/about-us/program-overview/development-program-wdp",
        ageMin: 10,
      },
    ],
  },
  {
    sport: consts.SOCCER,
    name: "Tualatin Indoor Soccer",
    summary: "Nearby soccer",
    url: "https://www.tualatinindoor.com",
    programs: [
      {
        name: "Youth Indoor League",
        url: "https://www.tualatinindoor.com/schedules/youth-league-information",
        season: [consts.MAR, consts.MAY],
      },
      {
        name: "SoccerKids (Fall)",
        url: "https://www.tualatinindoor.com/schedules/soccerkids-information",
        season: [consts.SEP, consts.NOV],
        ageMin: 2,
        ageMax: 10,
      },
    ],
    location: "Tualatin",
  },
  /**
   * Sample Data
   */
  {
    name: "Sample Org",
    sport: consts.SAMPLE,
    programs: [
      {
        name: "Sample 1",
        season: [consts.NOV, consts.MAR],
        ageMin: 7,
        ageMax: 10,
      },
      {
        name: "No age limit",
        season: [consts.JAN, consts.MAR],
        allAges: true,
      },
      {
        name: "Winter",
        season: [consts.DEC, consts.FEB],
      },
      {
        name: "Spring",
        season: [consts.MAR, consts.MAY],
        ageMin: 8,
        ageMax: 9,
      },
      {
        name: "Summer",
        season: [consts.JUN, consts.AUG],
      },
      {
        name: "Fall",
        season: [consts.SEP, consts.NOV],
      },
    ],
  },
];

const _orgs = new Set<string>();
orgs.forEach((v) => _orgs.add(v.sport));

export const sports = Array.from(_orgs);
