import _ from "lodash";
import { orgs as lacrosse } from "./lacrosse";
import { orgs as basketball } from "./basketball";
import { orgs as soccer } from "./soccer";
import { orgs as sample } from "./sample";
import { orgs as martialArts } from "./martial_arts";
import { Org, Program, ProgramFilterer } from "../types";

// sport can be overridden per program
export const data: { orgs: Org[] } = {
  orgs: [...basketball, ...lacrosse, ...soccer, ...martialArts, ...sample],
};

// TODO: combine
export function orgs() {
  return data.orgs;
}

// filterOrgs returns a list of Orgs with a filtered list
// of programs.
// export function filteredOrgs(filters: ProgramFilterer[]): Org[] {
//   const forceKeep = new Set<Org>();

//   const newOrgs = data.orgs.map((org) => {
//     let newOrg = { ...org };

//     // If the Org data doesn't list any programs at all we need to
//     // unconditionally keep it, since we don't know enough to say
//     // that we shouldn't include it.
//     if (newOrg.programs.length === 0) {
//       forceKeep.add(newOrg);
//     }

//     newOrg.programs = org.programs.filter((program) => {
//       let f = filters.every((f) => f.filter(program, newOrg));

//       // TODO: obviously hacked in here for testing
//       return ageFunctionalFilter(program);
//     });

//     return newOrg;
//   });

//   return newOrgs.filter(
//     (org: Org) => forceKeep.has(org) || org.programs.length > 0
//   );
// }

export const sports: string[] = _.uniq(
  data.orgs.map((v: Org): string => v.sport)
).sort();
