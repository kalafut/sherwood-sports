export const JAN = 1,
  FEB = 2,
  MAR = 3,
  APR = 4,
  MAY = 5,
  JUN = 6,
  JUL = 7,
  AUG = 8,
  SEP = 9,
  OCT = 10,
  NOV = 11,
  DEC = 12,
  ALL_YEAR = [JAN, DEC];

export const MIN_FILTER_AGE = 2,
  MAX_FILTER_AGE = 18;

// This is a sentinel value to distinguish [] (which can be present after filtering)
// and no programs in the source data. It makes life easier for development but maybe
// using a great long term solution.
export const NO_PROGRAMS = [];

export const INITIAL_SEASON_FILTER = {
  summer: true,
  spring: true,
  fall: true,
  winter: true,
};
