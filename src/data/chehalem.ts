import * as consts from "../consts";
import type { OrgList } from "../types";

const baseOrgs: OrgList = [
  {
    name: "Chehalem Parks and Recreation",
    summary:
      "CPRD has many programs throughout the year. Check their website for details. A few are listed here that have limited Sherwood options.",
    url: "https://www.cprdnewberg.org",
    reviewed: "2024-08-07",
    location: "Newberg",
    programs: [
      {
        name: "Flag Football",
        url: "https://www.cprdnewberg.org/general/page/cprd-newberg-flag-football",
        sport: consts.FOOTBALL,
        gradeMin: 0,
        gradeMax: 4,
        season: [consts.SEP, consts.NOV],
      },
      {
        name: "Girls Volleyball",
        url: "https://www.cprdnewberg.org/general/page/cprd-girls-volleyball-grades-6-8",
        sport: consts.VOLLEYBALL,
        gradeMin: 6,
        gradeMax: 8,
        season: [consts.SEP, consts.NOV],
      },
    ],
  },
];

export default baseOrgs;
