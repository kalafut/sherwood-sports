import { derived, writable } from "svelte/store";
import { filteredOrgs } from "./filters";
import { orgs as allOrgs } from "./data/data";
import { localOnlyFilter as lof } from "./filters";
import { Org } from "./types";

export const localOnlyFilter = writable(false);
export const page = writable("dashboard");

export const orgs = derived(localOnlyFilter, ($localOnlyFilter) => {
  const f = (org: Org) => lof(org, $localOnlyFilter);
  return filteredOrgs(allOrgs(), [f], []);
});
