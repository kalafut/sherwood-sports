import { derived, writable } from "svelte/store";
import {
  filteredOrgsFn,
  ageFunctionalFilter,
  seasonFunctionalFilter,
  emptyProgramsFilter,
} from "./filters";
import { orgs as allOrgs, sports } from "./data";
import { localOnlyFilter as lof } from "./filters";
import type { ProgramFilter, OrgFilter } from "./types";
import type { Org, Program } from "./types";
import { ImmutableStringSet as Set } from "./util";
import { INITIAL_SEASON_FILTER } from "./consts";

// Stores
export const localOnlyFilter = writable(false);
export const page = writable("dashboard");
export const sportsFilter = writable(new Set(sports));
export const ageRange = writable({ min: 2, max: 18 });
export const seasonFilter = writable({ ...INITIAL_SEASON_FILTER });

export const filteredOrgs = derived(
  [ageRange, localOnlyFilter, sportsFilter, seasonFilter],
  ([$ageRange, $localOnlyFilter, $sportsFilter, $seasonFilter]) => {
    let orgFilters: OrgFilter[] = [
      // Local only
      (org: Org) => lof(org, $localOnlyFilter),

      // Sports
      (org: Org): boolean => {
        return $sportsFilter.has(org.sport);
      },
      emptyProgramsFilter,
    ];

    let programFilters: ProgramFilter[] = [
      (program: Program) => ageFunctionalFilter(program, $ageRange),
      (program: Program) => seasonFunctionalFilter(program, $seasonFilter),
    ];

    return filteredOrgsFn(allOrgs, orgFilters, programFilters);
  }
);
