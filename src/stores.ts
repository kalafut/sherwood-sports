import { derived, writable } from "svelte/store";
import { filteredOrgsFn } from "./filters";
import { orgs as allOrgs, sports } from "./data/data";
import { localOnlyFilter as lof } from "./filters";
import { ProgramFilter, OrgFilter } from "./types";
import { Org } from "./types";
import { Set } from "immutable";

// Stores
export const localOnlyFilter = writable(false);
export const page = writable("dashboard");
export const sportsFilter = writable(Set<string>(sports));

export const filteredOrgs = derived(
  [localOnlyFilter, sportsFilter],
  ([$localOnlyFilter, $sportsFilter]) => {
    let programFilters: ProgramFilter[] = [];

    let orgFilters: OrgFilter[] = [
      // Local only
      (org: Org) => lof(org, $localOnlyFilter),
      // Sports
      (org: Org): boolean => {
        return $sportsFilter.has(org.sport);
      },
    ];

    return filteredOrgsFn(allOrgs(), orgFilters, []);
  }
);
