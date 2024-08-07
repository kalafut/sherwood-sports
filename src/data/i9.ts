import * as consts from "../consts";
import type { OrgList } from "../types";

const baseOrgs: OrgList = [
  {
    name: "i9 Sports",
    summary: "i9 has multiple locations and schedules. See their website for details.",
    url: "https://www.i9sports.com/venues/tigard---beaverton-fowler-middle-school-youth-sports-programs/2104",
    reviewed: "2024-08-07",
    location: "Tigard",
    programs: [
      {
        name: "Baseball",
        url: "https://www.i9sports.com/venues/tigard---beaverton-fowler-middle-school-youth-sports-programs/baseball/2104",
        sport: consts.BASEBALL,
        ageMin: 3,
        ageMax: 6,
      },
      {
        name: "Basketball",
        url: "https://www.i9sports.com/venues/tigard---beaverton-fowler-middle-school-youth-sports-programs/basketball/2104",
        sport: consts.BASKETBALL,
        ageMin: 4,
        ageMax: 9,
      },
      {
        name: "Soccer",
        url: "https://www.i9sports.com/venues/tigard---beaverton-fowler-middle-school-youth-sports-programs/soccer/2104",
        sport: consts.SOCCER,
        ageMin: 3,
        ageMax: 8,
      },
    ],
  },
];

export default baseOrgs;
