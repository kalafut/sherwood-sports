import { OrgList } from "../types";
import * as consts from "../consts";

export const orgs: OrgList = [
  {
    name: "Sherwood Track",
    url: "https://www.sherwoodtrack.com/",
    sport: consts.TRACK,
    reviewed: "2022-10-02",
    programs: [
      {
        name: "Youth Track Club",
        url: "https://www.sherwoodtrack.com/youth-club",
        gradeMin: 2,
        gradeMax: 5,
        season: [consts.MAR, consts.JUN],
      },
      {
        name: "Middleschool Track/XC",
        url: "https://www.sherwoodtrack.com/middle-school",
        gradeMin: 6,
        gradeMax: 8,
        season: [consts.MAR, consts.JUN],
      },
      {
        name: "High School Track/XC",
        url: "https://www.sherwoodtrack.com/high-school",
        gradeMin: 9,
        gradeMax: 12,
        season: [consts.MAR, consts.JUN],
      },
    ],
  },
];

export default orgs;
