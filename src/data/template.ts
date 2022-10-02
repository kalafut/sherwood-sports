import { OrgList } from "../types";
import * as consts from "../consts";

export const orgs: OrgList = [
  {
    name: "West Linn - Wilsonville Youth Volleyball",
    url: "https://www.westlinnwilsonvilleyouthvolleyballprogram.com",
    sport: consts.VOLLEYBALL,
    location: "West Linn",
    reviewed: "2022-09-30",
    programs: [
      {
        name: "Fall Recreational",
        url: "https://www.westlinnwilsonvilleyouthvolleyballprogram.com/fallleague.html",
        gradeMin: 3,
        gradeMax: 8,
        season: [consts.AUG, consts.OCT],
      },
    ],
  },
];

export default orgs;
