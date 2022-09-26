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

const DEFAULT_AGE_RANGE = { min: 2, max: 18 };

// Filters
export const localOnlyFilter = writable(false);
export const sportsFilter = writable(new Set(sports));
export const ageRange = writable(DEFAULT_AGE_RANGE);
export const seasonFilter = writable({ ...INITIAL_SEASON_FILTER });

export const resetFilters = () => {
  localOnlyFilter.set(false);
  sportsFilter.set(new Set(sports));
  ageRange.set(DEFAULT_AGE_RANGE);
  seasonFilter.set({ ...INITIAL_SEASON_FILTER });
};

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
