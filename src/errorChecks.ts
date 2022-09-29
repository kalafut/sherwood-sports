import { orgs } from "./data";

const dateRegex = /^20\d\d-[01]\d-[0123]\d$/;

function errorCheck(): string[] {
  const orgNames = new Set<string>();
  const errors: string[] = [];

  orgs.forEach((org) => {
    // Check for duplicate org names
    const name = org.name;
    if (orgNames.has(name)) {
      errors.push(`Duplicate organization name: <strong>${name}</strong>`);
    } else {
      orgNames.add(name);
    }

    // Check reviewed date format
    if (org.reviewed && !org.reviewed.match(dateRegex)) {
      errors.push(
        `Invalid date: "<strong>${org.reviewed}</strong>" doesn't match YYYY-MM-DD format`
      );
    }

    // Check that sport is defined either at the org, or (and only) on every program
    const someProgsHaveSport = org.programs.some((p) => p.sport !== undefined);
    const everyProgHasSport = org.programs.every((p) => p.sport !== undefined);
    if (org.sport === undefined) {
      if (!everyProgHasSport) {
        errors.push(
          `Sports data error: <strong>${org.name}</strong> must have sports defined at the Org level or for every Program.`
        );
      }
    } else {
      if (someProgsHaveSport) {
        errors.push(
          `Sports data error: <strong>${org.name}</strong> has sports defined at the Org and Program level. Only one is allowed.`
        );
      }
    }

    const programNames = new Set<string>();
    org.programs.forEach((program) => {
      // Check for duplicate program names
      const name = program.name;
      if (programNames.has(name)) {
        errors.push(
          `Duplicate program name: <strong>${org.name}/${name}</strong>`
        );
      } else {
        programNames.add(name);
      }

      // Check for age range mutual exclusivity
      if (
        (program.ageMin ||
          program.ageMax ||
          program.gradeMin ||
          program.gradeMax) &&
        program.allAges
      ) {
        errors.push(
          `Invalid ages: <strong>${org.name}/${name}</strong> is specifying both age limits and <span class="fw-bold font-monospace">allAges == true</span>`
        );
      }

      if (
        (program.ageMin || program.ageMax) &&
        (program.gradeMin || program.gradeMax)
      ) {
        errors.push(
          `Invalid ages: <strong>${org.name}/${name}</strong> is specifying both age and grade limits`
        );
      }
    });
  });

  return errors;
}

export const errors = errorCheck();
