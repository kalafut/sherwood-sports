import { OrgList } from "../types";
import * as consts from "../consts";

export const orgs: OrgList = [
  {
    name: "Sherwood Youth Cheer",
    url: "http://www.sherwoodcheer.org",
    sport: consts.CHEER,
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
      {
        name: "Competitive Cheer",
        season: [consts.NOV, consts.FEB],
        gradeMin: 0,
        gradeMax: 8,
      },
    ],
  },
];

export default orgs;
