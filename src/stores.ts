import { derived, writable } from "svelte/store";
import { filteredOrgsFn, ageFunctionalFilter } from "./filters";
import { orgs as allOrgs, sports } from "./data/data";
import { localOnlyFilter as lof } from "./filters";
import { ProgramFilter, OrgFilter } from "./types";
import { Org, Program } from "./types";
import { Set } from "immutable";

// Stores
export const localOnlyFilter = writable(false);
export const page = writable("dashboard");
export const sportsFilter = writable(Set<string>(sports));
export const ageRange = writable({ min: 2, max: 18 });

export const filteredOrgs = derived(
  [ageRange, localOnlyFilter, sportsFilter],
  ([$ageRange, $localOnlyFilter, $sportsFilter]) => {
    let orgFilters: OrgFilter[] = [
      // Local only
      (org: Org) => lof(org, $localOnlyFilter),
      // Sports
      (org: Org): boolean => {
        return $sportsFilter.has(org.sport);
      },
    ];

    let programFilters: ProgramFilter[] = [
      (program: Program) => ageFunctionalFilter(program, $ageRange),
    ];

    return filteredOrgsFn(allOrgs(), orgFilters, programFilters);
  }
);
