import { OrgList } from "../types";
import * as consts from "../consts";

export const orgs: OrgList = [
  {
    name: "West Linn - Wilsonville Youth Volleyball",
    url: "https://www.westlinnwilsonvilleyouthvolleyballprogram.com",
    sport: consts.VOLLEYBALL,
    location: "West Linn",
    reviewed: "2022-09-30",
    programs: [
      {
        name: "Fall Recreational",
        url: "https://www.westlinnwilsonvilleyouthvolleyballprogram.com/fallleague.html",
        gradeMin: 3,
        gradeMax: 8,
        season: [consts.AUG, consts.OCT],
      },
    ],
  },
  {
    name: "Athena Volleyball",
    url: "https://www.athenavb.net",
    sport: consts.VOLLEYBALL,
    location: "Tigard",
    reviewed: "2022-09-30",
    programs: [
      {
        name: "Girls Programs",
        url: "https://www.athenavb.net/tryouts",
        ageMin: 12,
        ageMax: 18,
        uAges: true,
        season: [consts.DEC, consts.MAY],
      },
      {
        name: "Boys Programs",
        url: "https://www.athenavb.net/tryouts",
      },
      {
        name: "Fall Clinics",
        url: "https://www.athenavb.net/athenaclinics",
        gradeMin: 0,
        gradeMax: 8,
        season: [consts.SEP, consts.OCT],
      },
    ],
  },
  {
    name: "Portland Volleyball Club",
    url: "https://portlandvolleyballclub.com",
    sport: consts.VOLLEYBALL,
    location: "Tualatin",
    reviewed: "2022-09-30",
    programs: [
      {
        name: "Girls Teams",
        url: "https://portlandvolleyballclub.com/coaches",
        ageMin: 12,
        ageMax: 18,
        uAges: true,
        season: [consts.NOV, consts.JUN],
      },
      {
        name: "Open Gyms",
        url: "https://portlandvolleyballclub.com/volleyball-open-gyms/",
        ageMin: 12,
        ageMax: 18,
        uAges: true,
      },
    ],
  },
  {
    name: "Oregon Juniors Volleyball Academy",
    url: "https://www.oregonjuniorsvbacad.com/",
    sport: consts.VOLLEYBALL,
    location: "Beaverton",
    reviewed: "2022-09-30",
    programs: [
      {
        name: "Girls Teams",
        url: "https://www.oregonjuniorsvbacad.com/page/show/5988996-tryouts",
        ageMin: 10,
        ageMax: 18,
        uAges: true,
        season: [consts.NOV, consts.JUN],
      },
    ],
  },
  {
    name: "NPJ Portland",
    url: "https://www.npjvolleyball.com/portland",
    sport: consts.VOLLEYBALL,
    location: "Tigard",
    reviewed: "2022-09-30",
    programs: [
      {
        name: "Girls Teams",
        ageMin: 12,
        ageMax: 18,
        uAges: true,
        season: [consts.NOV, consts.MAY],
      },
    ],
  },
];

export default orgs;
