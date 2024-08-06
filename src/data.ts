import * as consts from "./consts";
import type { OrgList } from "./types";

import baseball from "./data/baseball";
import cheer from "./data/cheer";
import skating from "./data/skating";
import swimming from "./data/swimming";
import volleyball from "./data/volleyball";
import track from "./data/track";
import water_polo from "./data/water_polo";
import ymca from "./data/ymca";

const LACROSSE = "Lacrosse",
  // SAMPLE = "Sample",
  BASEBALL = "Baseball",
  BASKETBALL = "Basketball",
  FOOTBALL = "Football",
  GOLF = "Golf",
  GYMNASTICS = "Gymnastics",
  MARTIAL_ARTS = "Martial Arts",
  SOCCER = "Soccer",
  SOFTBALL = "Softball",
  WRESTLING = "Wrestling",
  __END = "";

export const orgs: OrgList = [];

orgs.push(...baseball);
orgs.push(...cheer);
orgs.push(...skating);
orgs.push(...swimming);
orgs.push(...track);
orgs.push(...volleyball);
orgs.push(...water_polo);
orgs.push(...ymca);

orgs.push(
  ...[
    /**
     * Baseball
     */
    /**
     * Basketball
     */
    {
      name: "Sherwood Youth Basketball",
      sport: BASKETBALL,
      url: "https://www.sherwoodbasketball.com",
      reviewed: "2024-08-05",
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
    {
      name: "The Practice Facility [basketball]",
      sport: BASKETBALL,
      url: "https://www.thepracticefacility.com/",
      reviewed: "2022-09-30",
      location: "Tigard",
      programs: [
        {
          name: "Skills Clinics",
          url: "https://www.thepracticefacility.com/skills-clinics",
          season: consts.ALL_YEAR,
          gradeMin: 3,
          gradeMax: 12,
        },
        {
          name: "B.A.S.E Training",
          url: "https://www.thepracticefacility.com/base",
          season: consts.ALL_YEAR,
          gradeMin: 3,
          gradeMax: 5,
        },
        {
          name: "Fly Academy (teams)",
          url: "https://www.thepracticefacility.com/team-fly",
          season: consts.ALL_YEAR,
          gradeMin: 2,
          gradeMax: 12,
        },
        {
          name: "Shot Lab",
          url: "https://www.thepracticefacility.com/shot-lab",
          season: consts.ALL_YEAR,
          allAges: true,
        },
      ],
    },
    {
      name: "MVP Sports",
      url: "https://mvpsl.com",
      reviewed: "2022-09-29",
      location: "Tualatin",
      programs: [
        {
          name: "Fall Basketball",
          sport: BASKETBALL,
          url: "https://mvpsl.com/basketball",
          season: [consts.NOV, consts.DEC],
          gradeMin: 0,
          gradeMax: 3,
        },
        {
          name: "Winter Basketball",
          sport: BASKETBALL,
          url: "https://mvpsl.com/basketball",
          season: [consts.JAN, consts.FEB],
          gradeMin: 0,
          gradeMax: 3,
        },
        {
          name: "Fall Flag Football",
          sport: FOOTBALL,
          url: "https://mvpsl.com/flag-football",
          season: [consts.SEP, consts.OCT],
          gradeMin: 0,
          gradeMax: 12,
        },
        {
          name: "Spring Flag Football",
          sport: FOOTBALL,
          url: "https://mvpsl.com/flag-football",
          season: [consts.APR, consts.JUN],
          gradeMin: 0,
          gradeMax: 12,
        },
        {
          name: "Summer Flag Football",
          sport: FOOTBALL,
          url: "https://mvpsl.com/flag-football",
          season: [consts.JUN, consts.JUL],
          gradeMin: 0,
          gradeMax: 12,
        },
      ],
    },

    /**
     * Football
     */
    {
      name: "Sherwood Youth Football",
      url: "https://www.sherwoodyouthfootball.com",
      sport: FOOTBALL,
      reviewed: "2022-09-29",
      reviewNotes: "Currently the tackle information link is broken.",
      programs: [
        {
          name: "Flag Football",
          url: "https://www.sherwoodyouthfootball.com/flag",
          season: [consts.SEP, consts.OCT],
          gradeMin: 0,
          gradeMax: 4,
        },
        {
          name: "Tackle Football",
          season: [consts.SEP, consts.NOV],
          gradeMin: 3,
          gradeMax: 8,
        },
      ],
    },

    /**
     * Golf
     */
    {
      name: "Tualatin Island Greens Golf",
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
     * Gymnastics
     */
    {
      name: "Jewart's Gymnastics NW",
      url: "https://jewartsgymnasticsnw.com",
      sport: GYMNASTICS,
      location: "Wilsonville",
      reviewed: "2022-09-29",
      programs: [
        {
          name: "Wobbler and Walker",
          url: "https://jewartsgymnasticsnw.com/class-descriptions",
          season: consts.ALL_YEAR,
          ageMax: 3,
        },
        {
          name: "Preschool",
          url: "https://jewartsgymnasticsnw.com/class-descriptions",
          season: consts.ALL_YEAR,
          ageMin: 3,
          ageMax: 6,
        },
        {
          name: "Recreational",
          url: "https://jewartsgymnasticsnw.com/class-descriptions",
          season: consts.ALL_YEAR,
          ageMin: 6,
          ageMax: 12,
        },
      ],
    },
    {
      name: "Metro Gymnastics",
      url: "https://www.metrogymnastics.com",
      sport: GYMNASTICS,
      location: "Tigard",
      reviewed: "2022-09-28",
      programs: [
        {
          name: "Mini Movers",
          url: "https://www.metrogymnastics.com/minimovers",
          season: consts.ALL_YEAR,
          ageMin: 2,
          ageMax: 6,
        },
        {
          name: "Recreational",
          url: "https://www.metrogymnastics.com/recreational-gymnastics-programs",
          season: consts.ALL_YEAR,
          ageMin: 6,
          ageMax: 17,
        },
        {
          name: "Boy's competitive",
          url: "https://www.metrogymnastics.com/boys-team-gymnastics-program",
          season: consts.ALL_YEAR,
        },
        {
          name: "Girls's competitive",
          url: "https://www.metrogymnastics.com/girls-team-gymnastics",
          season: consts.ALL_YEAR,
        },
      ],
    },
    {
      name: "Tumblebears Children's Gym",
      url: "https://www.tumblebearschildrensgym.com",
      sport: GYMNASTICS,
      reviewed: "2022-09-28",
      programs: [
        {
          name: "Tumbling",
          url: "https://www.tumblebearschildrensgym.com/services",
          season: consts.ALL_YEAR,
          ageMin: 3,
          ageMax: 13,
        },
        {
          name: "Ninja (tumbling w/games)",
          url: "https://www.tumblebearschildrensgym.com/services",
          season: consts.ALL_YEAR,
          ageMin: 3,
          ageMax: 13,
        },
        {
          name: "Parent and Me",
          url: "https://www.tumblebearschildrensgym.com/services",
          season: consts.ALL_YEAR,
          ageMin: 1,
          ageMax: 5,
        },
      ],
    },
    {
      name: "MyGym",
      url: "https://www.mygym.com/sherwood",
      sport: GYMNASTICS,
      reviewed: "2022-10-06",
      programs: [
        {
          name: "Tumbling & Gymnastics",
          url: "https://www.mygym.com/sherwood/schedules",
          season: consts.ALL_YEAR,
          ageMax: 9,
          uAges: true,
        },
        {
          name: "Ninja",
          url: "https://www.mygym.com/sherwood/schedules",
          season: consts.ALL_YEAR,
          ageMin: 5,
          ageMax: 8,
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
      reviewed: "2024-08-06",
      programs: [
        {
          name: "Fiddlesticks",
          url: "https://www.sherwoodyouthlacrosse.com/page/show/8011115-fiddlesticks",
          season: [consts.APR, consts.MAY],
          gradeMin: 0,
          gradeMax: 2,
        },
        {
          name: "Boy's Recreational",
          url: "https://www.sherwoodyouthlacrosse.com/page/show/8011116-boys-recreational-teams",
          gradeMin: 1,
          gradeMax: 8,
          season: [consts.MAR, consts.MAY],
        },
        {
          name: "Girl's Recreational",
          url: "https://www.sherwoodyouthlacrosse.com/page/show/8011117-girls-recreational-teams",
          gradeMin: 3,
          gradeMax: 8,
          season: [consts.MAR, consts.MAY],
        },
        {
          name: "Boy's Off-Season (Summer)",
          url: "https://www.sherwoodyouthlacrosse.com/page/show/8011134-boys-off-season-lacrosse",
          gradeMin: 1,
          gradeMax: 8,
          season: [consts.JUN, consts.JUL],
        },
        {
          name: "Boy's Off-Season (Fall/Winter)",
          url: "https://www.sherwoodyouthlacrosse.com/page/show/8011134-boys-off-season-lacrosse",
          gradeMin: 1,
          gradeMax: 8,
          season: [consts.SEP, consts.DEC],
        },
        {
          name: "Girl's Off-Season (Summer)",
          url: "https://www.sherwoodyouthlacrosse.com/page/show/8011135-girls-off-season-lacrosse",
          gradeMin: 1,
          gradeMax: 8,
          season: [consts.MAY, consts.JUL],
        },
        {
          name: "Girl's Off-Season (Fall/Winter)",
          url: "https://www.sherwoodyouthlacrosse.com/page/show/8011135-girls-off-season-lacrosse",
          gradeMin: 1,
          gradeMax: 8,
          season: [consts.SEP, consts.DEC],
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
      name: "Impact Jiu Jitsu",
      url: "https://impactjjsherwood.com",
      sport: MARTIAL_ARTS,
      reviewed: "2022-09-30",
      programs: [
        {
          name: "Brazilian Jiu Jitsu",
          url: "https://impactjjsherwood.com/classes",
          ageMin: 7,
          season: consts.ALL_YEAR,
        },
        {
          name: "No Gi Submission Grappling",
          url: "https://impactjjsherwood.com/classes",
          ageMin: 7,
          season: consts.ALL_YEAR,
        },
        {
          name: "Anti Bully Training",
          url: "https://impactjjsherwood.com/classes",
          ageMin: 7,
          ageMax: 15,
          season: consts.ALL_YEAR,
        },
        {
          name: "Code 4 Concepts (Police Jiu Jitsu)",
          url: "https://impactjjsherwood.com/classes",
          ageMin: 18,
          season: consts.ALL_YEAR,
        },
      ],
    },

    {
      name: "Westside Metros [soccer]",
      url: "https://www.westsidetimbers.org/",
      sport: SOCCER,
      summary:
        "Westside Metros (formerly Timbers) offers a large number of development and competitive programs throughout the year in Beaverton, Sherwood and Tualatin. See their site for details.",
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
      name: "Tualatin Indoor Soccer",
      url: "https://www.tualatinindoor.com",
      reviewed: "2022-09-30",
      sport: SOCCER,
      programs: [
        {
          name: "Youth Indoor League (Fall)",
          url: "https://www.tualatinindoor.com/schedules/youth-league-information",
          season: [consts.NOV, consts.JAN],
          ageMin: 6,
        },
        {
          name: "Adult Indoor League (Fall)",
          url: "https://www.tualatinindoor.com/schedules/adult-league-information",
          season: [consts.NOV, consts.JAN],
          ageMin: 18,
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
     * Softball
     */
    {
      name: "Sherwood Fireballs [softball]",
      url: "https://www.sherwoodfireballs.com",
      sport: SOFTBALL,
      reviewed: "2022-09-30",
      programs: [
        {
          name: "T-Ball",
          url: "https://www.sherwoodfireballs.com/Default.aspx?tabid=989735",
          gradeMin: -1,
          gradeMax: 0,

          season: [consts.APR, consts.MAY],
        },
        {
          name: "Recreational",
          url: "https://www.sherwoodfireballs.com/Default.aspx?tabid=989735",
          gradeMin: 1,
          gradeMax: 8,
          season: [consts.MAY, consts.JUL],
        },
        {
          name: "Competitive",
          url: "https://www.sherwoodfireballs.com/Default.aspx?tabid=989736",
          ageMin: 10,
          ageMax: 18,
          uAges: true,
          season: [consts.MAY, consts.JUL],
        },
      ],
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

    /**
     * Wrestling
     */
    {
      name: "Sherwood Wrestling",
      url: "https://www.sherwoodwrestling.com",
      sport: WRESTLING,
      reviewed: "2022-09-29",
      programs: [
        {
          name: "Boys/Girls Wrestling",
          season: [consts.OCT, consts.FEB],
          gradeMin: 0,
          gradeMax: 12,
        },
      ],
    },
  ]
);

// Build list of sports
const _sports = new Set<string>();
orgs.forEach((o) => {
  _sports.add(o.sport);
  o.programs.forEach((p) => _sports.add(p.sport));
});
export const sports = Array.from(_sports).filter((s) => s !== undefined);
sports.sort();

// Sort orgs
orgs.sort((a, b) => {
  if (a.location === undefined && b.location) {
    return -1;
  }
  if (b.location === undefined && a.location) {
    return 1;
  }

  const progLenDiff = a.programs.length - b.programs.length;
  if (progLenDiff !== 0) {
    return progLenDiff;
  }

  return a.name.localeCompare(b.name);
});
