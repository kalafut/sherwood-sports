import * as consts from "../consts";
import type { OrgList } from "../types";

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
        sport: consts.BASKETBALL,
        gradeMin: 0,
        gradeMax: 2,
        season: [consts.JAN, consts.MAR],
      },
      {
        name: "Basketball (Spring)",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/sports/leagues",
        sport: consts.BASKETBALL,
        gradeMin: 0,
        gradeMax: 2,
        season: [consts.APR, consts.JUN],
      },
      {
        name: "T-Ball (Spring)",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/sports/leagues",
        sport: consts.BASEBALL,
        gradeMax: 0,
        season: [consts.APR, consts.JUN],
      },
      {
        name: "Basketball (Fall)",
        url: "https://www.ymcacw.org/locations/sherwood-regional-family-ymca/programs/sports/leagues",
        sport: consts.BASKETBALL,
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
