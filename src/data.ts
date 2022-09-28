import * as consts from "./consts";
import type { OrgList } from "./types";

const LACROSSE = "Lacrosse",
  BASKETBALL = "Basketball",
  SOCCER = "Soccer",
  // SAMPLE = "Sample",
  MARTIAL_ARTS = "Martial Arts",
  CHEER = "Cheer",
  BASEBALL = "Baseball",
  GOLF = "Golf";

const baseOrgs: OrgList = [
  /**
   * Baseball
   */
  {
    name: "Sherwood Junior Baseball",
    url: "https://www.sherwoodjuniorbaseball.com",
    sport: BASEBALL,
    programs: [
      {
        name: "T-Ball",
        gradeMax: 0,
      },
    ],
  },

  /**
   * Basketball
   */
  {
    name: "Sherwood Youth Basketball",
    sport: BASKETBALL,
    url: "https://www.sherwoodbasketball.com",
    reviewed: "2022-09-28",
    programs: [
      {
        name: "Recreational",
        url: "https://www.sherwoodbasketball.com/programs",
        season: [consts.NOV, consts.MAR],
        gradeMin: 3,
        gradeMax: 12,
      },
      {
        name: "Classic (competitive)",
        url: "https://www.sherwoodbasketball.com/programs",
        season: [consts.NOV, consts.MAR],
        gradeMin: 4,
        gradeMax: 8,
      },
    ],
  },

  /**
   * Cheer
   */
  {
    name: "Sherwood Youth Cheer",
    url: "http://www.sherwoodcheer.org",
    sport: CHEER,
    reviewed: "2022-09-28",
    reviewNotes:
      'Their site calendar doesn\'t work. Season dates were pulled from <a href="https://static1.squarespace.com/static/5343935be4b00493c5019003/t/62573671ad604f00b720ce48/1649882744382/parent+night+2022.1+copy.pdf">Parents night</>',
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
   * Golf
   */
  {
    name: "Tualatin Island Greens",
    url: "https://www.tualatinislandgreens.com/",
    sport: GOLF,
    reviewed: "2022-09-28",
    programs: [
      {
        name: "Youth Lessons",
        url: "https://www.tualatinislandgreens.com/lessons.html",
        season: consts.ALL_YEAR,
        ageMax: 17,
      },
      {
        name: "Adult Lessons",
        url: "https://www.tualatinislandgreens.com/lessons.html",
        season: consts.ALL_YEAR,
        ageMin: 18,
      },
    ],
  },

  /**
   * Lacrosse
   */
  {
    name: "Sherwood Youth Lacrosse",
    url: "http://www.sherwoodyouthlacrosse.com",
    sport: LACROSSE,
    reviewed: "2022-09-28",
    programs: [
      {
        name: "Fiddlesticks",
        url: "http://www.sherwoodyouthlacrosse.com/Page.asp?n=107395&org=sherwoodyouthlacrosse.com",
        season: [consts.APR, consts.MAY],
        gradeMin: 0,
        gradeMax: 2,
      },
      {
        name: "Boy's Recreational",
        url: "http://www.sherwoodyouthlacrosse.com/Page.asp?n=107396&org=sherwoodyouthlacrosse.com",
        gradeMin: 1,
        gradeMax: 8,
        season: [consts.MAR, consts.MAY],
      },
      {
        name: "Girl's Recreational",
        url: "http://www.sherwoodyouthlacrosse.com/Page.asp?n=107397&org=sherwoodyouthlacrosse.com",
        gradeMin: 3,
        gradeMax: 8,
        season: [consts.MAR, consts.MAY],
      },
    ],
  },
  /**
   * Martial arts
   */
  {
    name: "Musa Martial Arts",
    url: "https://musasherwood.com/",
    sport: MARTIAL_ARTS,
    reviewed: "2022-09-28",
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
        ageMin: 18,
      },
      {
        name: "Family Taekwondo",
        url: "https://musasherwood.com/adult-martial-arts",
        season: consts.ALL_YEAR,
        allAges: true,
      },
    ],
  },

  /**
   * Soccer
   */
  {
    name: "Sherwood Youth Soccer",
    url: "https://www.sherwoodsoccer.org/",
    sport: SOCCER,
    reviewed: "2022-09-28",
    programs: [
      {
        name: "Fall Soccer",
        url: "https://www.sherwoodsoccer.org/Default.aspx?tabid=854292",
        season: [consts.AUG, consts.OCT],
        gradeMin: 0,
        gradeMax: 12,
      },
      {
        name: "Spring Soccer",
        url: "https://www.sherwoodsoccer.org/Default.aspx?tabid=854291",
        season: [consts.APR, consts.MAY],
        gradeMin: 0,
        gradeMax: 12,
      },
    ],
  },
  {
    name: "Westside Timbers",
    url: "https://www.westsidetimbers.org/",
    sport: SOCCER,
    summary:
      "WT offers a large number of development and competitive programs throughout the year in Beaverton, Sherwood and Tualatin. See their site for details.",
    reviewed: "2022-09-28",
    programs: [
      {
        name: "Timber Tots",
        url: "http://www.westsidetimbers.org/about-us/program-overview/timber-tots-program",
        ageMax: 6,
        season: consts.CHECK_SITE,
      },
      {
        name: "Development Program",
        url: "http://www.westsidetimbers.org/about-us/program-overview/development-program-wdp",
        ageMin: 7,
        ageMax: 10,
        season: consts.CHECK_SITE,
      },
      {
        name: "Premier Development",
        url: "http://www.westsidetimbers.org/about-us/program-overview/premier-development-program-pd",
        ageMin: 9,
        ageMax: 10,
        season: consts.CHECK_SITE,
      },
      {
        name: "Competitive",
        url: "http://www.westsidetimbers.org/about-us/program-overview/competitive-u11-u19",
        ageMin: 11,
        ageMax: 19,
        season: consts.CHECK_SITE,
      },
    ],
  },
  {
    sport: SOCCER,
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
  // /**
  //  * Sample Data
  //  */
  // {
  //   name: "Sample Org",
  //   sport: SAMPLE,
  //   programs: [
  //     {
  //       name: "Sample 1",
  //       season: [consts.NOV, consts.MAR],
  //       ageMin: 7,
  //       ageMax: 10,
  //     },
  //     {
  //       name: "No age limit",
  //       season: [consts.JAN, consts.MAR],
  //       allAges: true,
  //     },
  //     {
  //       name: "Winter",
  //       season: [consts.DEC, consts.FEB],
  //     },
  //     {
  //       name: "Spring",
  //       season: [consts.MAR, consts.MAY],
  //       ageMin: 8,
  //       ageMax: 9,
  //     },
  //     {
  //       name: "Summer",
  //       season: [consts.JUN, consts.AUG],
  //     },
  //     {
  //       name: "Fall",
  //       season: [consts.SEP, consts.NOV],
  //     },
  //   ],
  // },
];

// Build list of sports
const _orgs = new Set<string>();
baseOrgs.forEach((v) => _orgs.add(v.sport));
export const sports = Array.from(_orgs);
sports.sort();

// Sort orgs
export const orgs = [...baseOrgs];
orgs.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
