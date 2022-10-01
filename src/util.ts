import { Program } from "./types";
import * as consts from "./consts";

interface numStrConv {
  [key: number]: string;
}

const monthStrConv: numStrConv = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

type SeasonRange = {
  [key: string]: number[];
};

const seasons: SeasonRange = {
  winter: [12, 2],
  spring: [3, 5],
  summer: [6, 8],
  fall: [9, 11],
};

// courtesy of: https://stackoverflow.com/a/13627586
export function ordinal(i: number | undefined) {
  switch (i) {
    case undefined:
      return;
    case -1:
      return "PreK";
    case 0:
      return "K";
  }

  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}

export function monthStr(monthNum: number) {
  return monthStrConv[monthNum];
}

export function currentMonth() {
  //return consts.FEB;
  return new Date().getMonth() + 1;
}

export function monthInRange(month: number, [start, end]: number[]) {
  // Shift the range to handle spanning the end of year
  if (start > end) {
    end += 12;
    if (month < start) {
      month += 12;
    }
  }

  return start <= month && month <= end;
}

export function monthInSeason(month: number, season: string) {
  return monthInRange(month, seasons[season]);
}

export class ImmutableStringSet {
  private set: Set<string>;

  constructor(init: string[]) {
    this.set = new Set<string>(init);
  }

  has(v: string): boolean {
    return this.set.has(v);
  }

  add(v: string): ImmutableStringSet {
    this.set.add(v);
    return new ImmutableStringSet(Array.from(this.set.values()));
  }

  delete(v: string): ImmutableStringSet {
    this.set.delete(v);
    return new ImmutableStringSet(Array.from(this.set.values()));
  }

  public get size(): number {
    return this.set.size;
  }
}

export function isUpcoming(
  month: number,
  season: number[] | undefined
): boolean {
  if (!season) {
    return false;
  }

  let start = season[0];

  if (month > start) {
    start += 12;
  }

  return start - month <= 2;
}

export function allYear(season: number[]) {
  return season && season[0] == consts.JAN && season[1] == consts.DEC;
}

// TODO: refactor
export function ageStr(program: Program) {
  const { allAges, ageMin, ageMax, gradeMin, gradeMax } = program;

  let ret = "";

  if (allAges) {
    return "All ages";
  }

  if (ageMin && ageMax) {
    ret = `${ageMin}–${ageMax} years`;
  } else if (ageMax) {
    ret = `2–${ageMax} years`;
  } else if (ageMin) {
    ret = `${ageMin}+ years`;
  }

  if (ret !== "") {
    return ret;
  }

  if (gradeMin && gradeMax) {
    ret = `${ordinal(gradeMin)}–${ordinal(gradeMax)} grade`;
  } else if (gradeMax) {
    ret = `K–${ordinal(gradeMax)} grade`;
  } else if (gradeMin) {
    ret = `${ordinal(gradeMin)}+ grade`;
  }

  return ret;
}

type NumberMaybe = number | undefined;

function gradeRangeStr(gradeMin: NumberMaybe, gradeMax: NumberMaybe): string {
  let text = "";
  const hasMin = gradeMin !== undefined;
  const hasMax = gradeMax !== undefined;

  if (hasMin && hasMax) {
    if (gradeMin == gradeMax) {
      text = `${ordinal(gradeMin)}`;
    } else {
      text = `${ordinal(gradeMin)}–${ordinal(gradeMax)}`;
    }
  } else if (hasMax) {
    if (gradeMax == -1) {
      text = "PreK";
    } else {
      text = `PreK–${ordinal(gradeMax)}`;
    }
  } else if (hasMin) {
    text = `${ordinal(gradeMin)}+`;
  }
  return text;
}

function ageRangeStr(
  ageMin: NumberMaybe,
  ageMax: NumberMaybe,
  uAge: boolean = false
): string {
  let text = "";
  const uText = uAge ? "U" : "";

  const hasMin = ageMin !== undefined;
  const hasMax = ageMax !== undefined;

  if (hasMin && hasMax) {
    if (ageMin === ageMax) {
      text = `${ageMin}${uText}`;
    } else {
      text = `${ageMin}${uText}–${ageMax}${uText}`;
    }
  } else if (hasMax) {
    if (uText) {
      text = `${ageMax}${uText}`;
    } else {
      if (ageMax === 2) {
        text = `2${uText}`;
      } else {
        text = `2${uText}–${ageMax}${uText}`;
      }
    }
  } else if (hasMin) {
    text = `${ageMin}+`;
  }
  return text;
}

export function programAgeText(program: Program) {
  let { allAges, ageMin, ageMax, uAges, gradeMin, gradeMax } = program;

  let text = "";
  let color = "info";

  if (allAges) {
    text = "All";
    color = "primary";
  } else if (ageMin !== undefined || ageMax !== undefined) {
    text = ageRangeStr(ageMin, ageMax, uAges);
    color = "primary";
  } else if (gradeMin !== undefined || gradeMax !== undefined) {
    text = gradeRangeStr(gradeMin, gradeMax);
    color = "info";
  }

  return { text: text, color: color };
}

export function toTitlecase(s: string): string {
  return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
}
