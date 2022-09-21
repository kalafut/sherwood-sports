import * as consts from "../consts";
import { OrgList } from "../types";

export const orgs: OrgList = [
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
        name: "FALL",
        season: [consts.SEP, consts.NOV],
      },
    ],
  },
];
