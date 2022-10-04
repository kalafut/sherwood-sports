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
        gradeMin: 0,
        gradeMax: 12,
        season: [consts.MAR, consts.JUN],
      },
      {
        name: "Middleschool Track",
        url: "https://www.sherwoodtrack.com/middle-school",
        gradeMin: 6,
        gradeMax: 8,
        season: [consts.MAR, consts.MAY],
      },
      {
        name: "Middleschool Cross-country",
        url: "https://www.sherwoodtrack.com/middle-school",
        gradeMin: 6,
        gradeMax: 8,
        season: [consts.AUG,consts.NOV],
      },
      {
        name: "High School Track",
        url: "https://www.sherwoodtrack.com/high-school",
        gradeMin: 9,
        gradeMax: 12,
        season: [consts.MAR, consts.MAY],
      },
      {
        name: "High School Cross-country",
        url: "https://www.sherwoodtrack.com/high-school",
        gradeMin: 9,
        gradeMax: 12,
        season: [consts.AUG,consts.NOV],
      },
    ],
  },
];

export default orgs;
