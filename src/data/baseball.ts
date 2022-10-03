import { OrgList } from "../types";
import * as consts from "../consts";

export const orgs: OrgList = [
  {
    name: "Sherwood Junior Baseball",
    summary:
      "Note: some competitive tryouts can start months in advance. Check SJB site for details.",
    url: "https://www.sherwoodjuniorbaseball.com",
    sport: consts.BASEBALL,
    reviewed: "2022-09-28",
    programs: [
      {
        name: "T-Ball",
        url: "https://www.sherwoodjuniorbaseball.com/Default.aspx?tabid=494177",
        gradeMin: 0,
        gradeMax: 0,
        season: [consts.APR, consts.JUN],
      },
      {
        name: "Recreational",
        url: "https://www.sherwoodjuniorbaseball.com/Default.aspx?tabid=494177",
        gradeMin: 1,
        gradeMax: 3,
        season: [consts.APR, consts.JUN],
      },
      {
        name: "Competitive",
        url: "https://www.sherwoodjuniorbaseball.com/Default.aspx?tabid=494177",
        gradeMin: 3,
        gradeMax: 8,
        season: [consts.MAR, consts.JUN],
      },
      {
        name: "Fall Ball",
        url: "https://www.sherwoodjuniorbaseball.com/Default.aspx?tabid=494177",
        gradeMin: 3,
        gradeMax: 8,
        season: [consts.AUG, consts.OCT],
      },
    ],
  },
  {
    name: "Portland Baseball Club",
    url: "https://www.portlandbaseballclub.com",
    sport: consts.BASEBALL,
    reviewed: "2022-10-02",
    programs: [
      {
        name: "Team play",
        url: "https://www.portlandbaseballclub.com/Team.html",
        gradeMin: 5,
        gradeMax: 12,
      },
      {
        name: "Fall Ball",
        url: "https://www.portlandbaseballclub.com/FallBall.html",
        ageMin: 16,
        ageMax: 18,
        uAges: true,
        season: [consts.SEP, consts.OCT],
      },
    ],
  },
];

export default orgs;
