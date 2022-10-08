import { OrgList } from "../types";
import * as consts from "../consts";

export const orgs: OrgList = [
  {
    name: "Newberg Water Polo",
    url: "https://www.newbergwaterpolo.com",
    sport: consts.WATER_POLO,
    reviewed: "2022-10-08",
    location: "Newberg",
    programs: [
      {
        name: "11u Coed [Fall]",
        url: "https://www.newbergwaterpolo.com/page/show/7152975-11u-coed",
        season: [consts.SEP, consts.NOV],
        ageMax: 11,
        uAges: true,
      },
      {
        name: "14u Coed [Fall]",
        url: "https://www.newbergwaterpolo.com/page/show/7152977-14u-coed",
        season: [consts.SEP, consts.NOV],
        gradeMin: 6,
        gradeMax: 8,
      },
      {
        name: "18u Boys",
        url: "https://www.newbergwaterpolo.com/page/show/7152978-18u-boys",
        ageMax: 18,
        uAges: true,
      },
      {
        name: "18u Girls",
        url: "https://www.newbergwaterpolo.com/page/show/7152979-18u-girls",
        ageMax: 18,
        uAges: true,
      },
    ],
  },
  {
    name: "Tualatin Hill Water Polo",
    url: "https://www.thillswaterpolo.org",
    sport: consts.WATER_POLO,
    location: "Beaverton",
    reviewed: "2022-10-08",
    programs: [
      {
        name: "Beginner",
        url: "https://www.thillswaterpolo.org/beginner",
        ageMax: 18,
        uAges: true,
        season: consts.ALL_YEAR,
      },
      {
        name: "Intermediate",
        url: "https://www.thillswaterpolo.org/intermediate",
        ageMax: 18,
        uAges: true,
        season: consts.ALL_YEAR,
      },
      {
        name: "Advance",
        url: "https://www.thillswaterpolo.org/advance",
        gradeMin: 9,
        season: consts.ALL_YEAR,
      },
      {
        name: "Masters",
        url: "https://www.thillswaterpolo.org/masters",
        ageMin: 18,
        season: consts.ALL_YEAR,
      },
    ],
  },
];

export default orgs;
