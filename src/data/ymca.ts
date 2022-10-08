import * as consts from "../consts";
import type { OrgList } from "../types";

const LACROSSE = "Lacrosse",
  // SAMPLE = "Sample",
  BASEBALL = "Baseball",
  BASKETBALL = "Basketball",
  CHEER = "Cheer",
  FOOTBALL = "Football",
  GOLF = "Golf",
  GYMNASTICS = "Gymnastics",
  MARTIAL_ARTS = "Martial Arts",
  SOCCER = "Soccer",
  SWIMMING = "Swimming",
  WRESTLING = "Wrestling",
  __END = "";

const baseOrgs: OrgList = [
  /**
   * Baseball
   */
  {
    name: "Sherwood YMCA",
    summary: "This is a portion of their offerings which change regularly.",
    url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca",
    reviewed: "2022-09-30",
    programs: [
      {
        name: "Basketball (Winter)",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/sports/leagues",
        sport: BASKETBALL,
        gradeMin: 0,
        gradeMax: 2,
        season: [consts.JAN, consts.MAR],
      },
      {
        name: "Basketball (Spring)",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/sports/leagues",
        sport: BASKETBALL,
        gradeMin: 0,
        gradeMax: 2,
        season: [consts.APR, consts.JUN],
      },
      {
        name: "T-Ball (Spring)",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/sports/leagues",
        sport: BASEBALL,
        gradeMax: 0,
        season: [consts.APR, consts.JUN],
      },
      {
        name: "Basketball (Fall)",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/sports/leagues",
        sport: BASKETBALL,
        gradeMin: 0,
        gradeMax: 2,
        //season: [consts.APR, consts.JUN],
      },
      {
        name: "Swim Lessons",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/swimming/lessons",
        sport: consts.SWIMMING,
        allAges: true,
        season: consts.ALL_YEAR,
      },
      {
        name: "Swim Conditioning",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/aquatics",
        sport: consts.SWIMMING,
        season: consts.ALL_YEAR,
      },
      {
        name: "Swim League",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/aquatics",
        sport: consts.SWIMMING,
      },
    ],
  },
];

export default baseOrgs;
