import { OrgList } from "../types";
import * as consts from "../consts";

export const orgs: OrgList = [
  {
    name: "Tigard Tualatin Swim Club",
    url: "https://www.teamunify.com/team/osttsc/page/home",
    sport: consts.SWIMMING,
    location: "Tualatin",
    reviewed: "2022-10-02",
    programs: [
      {
        name: "Competitive Swim",
        url: "https://www.teamunify.com/team/osttsc/page/team-info/swim-groups",
        ageMin: 5,
        ageMax: 18,
        season: consts.ALL_YEAR,
      },
      {
        name: "Summer Splash",
        url: "https://www.sherwoodjuniorbaseball.com/Default.aspx?tabid=494177",
        ageMin: 5,
        ageMax: 18,
      },
    ],
  },
  {
    name: "Chehalem Swim Team",
    summary: "See CST program page for squad details.",
    url: "https://www.teamunify.com/team/orcst/page/home",
    sport: consts.SWIMMING,
    location: "Newberg",
    programs: [
      {
        name: "Development",
        url: "https://www.teamunify.com/team/orcst/page/membership",
        ageMax: 14,
        uAges: true,
        season: consts.ALL_YEAR,
      },
      {
        name: "Performance",
        url: "https://www.teamunify.com/team/orcst/page/membership",
        ageMax: 14,
        uAges: true,
        season: consts.ALL_YEAR,
      },
      {
        name: "HS Recreation",
        url: "https://www.teamunify.com/team/orcst/page/membership",
        gradeMin: 9,
        gradeMax: 12,
        season: consts.ALL_YEAR,
      },
      {
        name: "Senior & Senior Performance",
        url: "https://www.teamunify.com/team/orcst/page/membership",
        season: consts.ALL_YEAR,
      },
    ],
  },
];

export default orgs;
