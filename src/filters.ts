import { Org, Program } from "./types";
import * as consts from "./consts";
import { allYear, monthInSeason } from "./util";

type ProgramFilter = (p: Program) => boolean;
type OrgFilter = (o: Org) => boolean;

function filterOrgPrograms(org: Org, filters: ProgramFilter[]): Org {
  let newOrg = { ...org };

  // If the Org data doesn't list any programs at all we need to
  // unconditionally keep it, since we don't know enough to say
  // that we shouldn't include it.
  if (newOrg.programs !== consts.NO_PROGRAMS) {
    newOrg.programs = newOrg.programs.filter((program) => {
      return filters.every((f) => f(program));
    });
  }

  return newOrg;
}

// filterOrgs returns a list of Orgs with a filtered list
// of programs.
export function filteredOrgsFn(
  orgs: Org[],
  orgFilters: OrgFilter[],
  programFilters: ProgramFilter[]
): Org[] {
  let newOrgs = orgs.map((org) => filterOrgPrograms(org, programFilters));

  newOrgs = newOrgs.filter((org) => orgFilters.every((f) => f(org)));

  return newOrgs;
}

export function ageFunctionalFilter(
  program: Program,
  ageRange,
  uAge: boolean
): boolean {
  const { min, max } = ageRange;
  const effectiveAgeMin =
    program.ageMin ||
    (program.gradeMin !== undefined && gradeToAge(program.gradeMin, false)) ||
    consts.MIN_FILTER_AGE;
  const effectiveAgeMax =
    program.ageMax ||
    (program.gradeMax !== undefined && gradeToAge(program.gradeMax, true)) ||
    consts.MAX_FILTER_AGE;

  return effectiveAgeMax >= min && (uAge || effectiveAgeMin <= max);
}

export function localOnlyFilter(org: Org, localOnly: boolean): boolean {
  return !localOnly || !org.location;
}

export function emptyProgramsFilter(org: Org): boolean {
  return org.programs.length > 0 || org.programs === consts.NO_PROGRAMS;
}

// TODO unexport this
export function gradeToAge(grade: number, max: boolean) {
  const offset = max ? 6 : 5;

  return grade + offset;
}

export function seasonFunctionalFilter(program: Program, seasons) {
  if (!program.season || allYear(program.season)) {
    return true;
  }

  for (const season in seasons) {
    if (seasons[season] && monthInSeason(program.season![0], season)) {
      return true;
    }
  }

  return false;
}
