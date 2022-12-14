export interface AgeRange {
  min: number;
  max: number;
}
export type ProgramFilter = (p: Program) => boolean;
export type OrgFilter = (o: Org) => boolean;

export interface Program {
  name: string;
  //registration?: number;
  season?: number[];
  sport?: string;
  gradeMin?: number;
  gradeMax?: number;
  ageMin?: number;
  ageMax?: number;
  uAges?: boolean;
  allAges?: boolean;
  effectiveAgeMin?: number;
  effectiveAgeMax?: number;
  url?: string;
}

export type OrgList = Org[];

export interface Org {
  name: string;
  summary?: string;
  sport?: string;
  programs: Program[];
  id?: string;
  url?: string;
  location?: string;
  status?: string;
  reviewed?: string;
  reviewNotes?: string;
}

export interface AgeFilter {
  min: number;
  max: number;
}

export type AgeFilterUpdater = (filter: AgeFilter) => void;
export type SportsFilterUpdater = (sport: string, included: boolean) => void;
export type SportsFilter = Set<string>;

export interface ProgramFilterer {
  filter: (program: Program, org: Org) => boolean;
}
