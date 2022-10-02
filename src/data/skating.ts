import { OrgList } from "../types";
import * as consts from "../consts";

export const orgs: OrgList = [
  {
    name: "Carousel Sherwood Figure Skating Club",
    url: "https://www.carouselsherwoodfsc.org",
    sport: consts.SKATING,
    reviewed: "2022-10-02",
    programs: [
      {
        name: "General Membership",
        allAges: true,
        season: consts.ALL_YEAR,
      },
    ],
  },
];

export default orgs;
