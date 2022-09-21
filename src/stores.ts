import { writable } from "svelte/store";

export const localOnlyState = writable(false);
export const page = writable("dashboard");
