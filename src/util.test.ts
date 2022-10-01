import { monthInRange, isUpcoming, programAgeText, toTitlecase } from "./util";
import * as c from "./consts";
import { Program } from "./types";

test("calculates month in range", () => {
  const m = monthInRange;

  expect(m(c.DEC, [c.JAN, c.MAR])).toBe(false);
  expect(m(c.JAN, [c.JAN, c.MAR])).toBe(true);
  expect(m(c.FEB, [c.JAN, c.MAR])).toBe(true);
  expect(m(c.MAR, [c.JAN, c.MAR])).toBe(true);
  expect(m(c.APR, [c.JAN, c.MAR])).toBe(false);
});

test("calculates month in range (spanning EOY)", () => {
  const m = monthInRange;

  expect(m(c.OCT, [c.NOV, c.FEB])).toBe(false);
  expect(m(c.NOV, [c.NOV, c.FEB])).toBe(true);
  expect(m(c.DEC, [c.NOV, c.FEB])).toBe(true);
  expect(m(c.JAN, [c.NOV, c.FEB])).toBe(true);
  expect(m(c.FEB, [c.NOV, c.FEB])).toBe(true);
  expect(m(c.MAR, [c.NOV, c.FEB])).toBe(false);
});

test("checks if program start is within 2 months of the season", () => {
  const u = isUpcoming;

  expect(u(c.JAN, [c.APR, c.JUN])).toBe(false);
  expect(u(c.FEB, [c.APR, c.JUN])).toBe(true);
  expect(u(c.MAR, [c.APR, c.JUN])).toBe(true);
  expect(u(c.APR, [c.APR, c.JUN])).toBe(true);
  expect(u(c.MAY, [c.APR, c.JUN])).toBe(false);

  expect(u(c.OCT, [c.JAN, c.FEB])).toBe(false);
  expect(u(c.NOV, [c.JAN, c.FEB])).toBe(true);
  expect(u(c.DEC, [c.JAN, c.FEB])).toBe(true);
  expect(u(c.JAN, [c.JAN, c.FEB])).toBe(true);
  expect(u(c.FEB, [c.JAN, c.FEB])).toBe(false);
});

test("converts a program age or grade range into a string", () => {
  const pt = programAgeText;
  const P = "primary";
  const I = "info";
  const S = "success";

  // Note the dashes not hypens!
  const ageTests = [
    { ageMin: 3, ageMax: 6, expected: { text: "3–6", color: P } },
    { ageMax: 6, expected: { text: "2–6", color: P } },
    { ageMax: 2, expected: { text: "2", color: P } },
    { ageMin: 3, expected: { text: "3+", color: P } },
    { ageMin: 4, ageMax: 4, expected: { text: "4", color: P } },
    { expected: { text: "", color: I } },
  ];

  ageTests.forEach((t, idx) => {
    let p: Program = {
      name: "Test",
      ageMin: t.ageMin,
      ageMax: t.ageMax,
    };
    expect(pt(p)).toMatchObject(t.expected);
  });

  const uAgeTests = [
    { ageMin: 3, ageMax: 6, expected: { text: "3U–6U", color: P } },
    { ageMax: 6, expected: { text: "6U", color: P } },
    { ageMax: 2, expected: { text: "2U", color: P } },
    { ageMin: 3, expected: { text: "3+", color: P } }, // Invalid
    { ageMin: 4, ageMax: 4, expected: { text: "4U", color: P } },
    { expected: { text: "", color: I } },
  ];

  uAgeTests.forEach((t, idx) => {
    let p: Program = {
      name: "Test",
      ageMin: t.ageMin,
      ageMax: t.ageMax,
      uAges: true,
    };
    expect(pt(p)).toMatchObject(t.expected);
  });

  const gradeTests = [
    { gradeMin: 0, gradeMax: 1, expected: { text: "K–1st", color: I } },
    { gradeMin: 0, gradeMax: 2, expected: { text: "K–2nd", color: I } },
    { gradeMin: 2, gradeMax: 2, expected: { text: "2nd", color: I } },
    { gradeMax: 2, expected: { text: "K–2nd", color: I } },
    { gradeMax: 0, expected: { text: "K", color: I } },
    { gradeMin: 1, gradeMax: 3, expected: { text: "1st–3rd", color: I } },
    { gradeMin: 3, gradeMax: 6, expected: { text: "3rd–6th", color: I } },
    { gradeMax: 6, expected: { text: "K–6th", color: I } },
    { gradeMin: 3, expected: { text: "3rd+", color: I } },
    { gradeMin: 4, gradeMax: 4, expected: { text: "4th", color: I } },
    { expected: { text: "", color: I } },
  ];

  gradeTests.forEach((t, idx) => {
    let p: Program = {
      name: "Test",
      gradeMin: t.gradeMin,
      gradeMax: t.gradeMax,
    };
    expect(pt(p), `${idx}`).toMatchObject(t.expected);
  });

  let p: Program = {
    name: "Test",
    allAges: true,
  };
  expect(pt(p)).toMatchObject({ text: "All", color: P });

  // ALL ages
});

test("Titlecases a string", () => {
  const t = toTitlecase;

  expect(t("foo")).toBe("Foo");
  expect(t("Foo")).toBe("Foo");
  expect(t("FOO")).toBe("Foo");
  expect(t("fOO")).toBe("Foo");

  expect(t("5 foo")).toBe("5 foo");
  expect(t("")).toBe("");
});
