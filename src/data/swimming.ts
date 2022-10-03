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
];

export default orgs;
