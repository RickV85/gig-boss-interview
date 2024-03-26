import { describe, expect, test, beforeEach } from "@jest/globals";
import { Band } from "../Classes/Band";
import { BandRepo } from "../Classes/BandRepo";
import { sampleBandRepoData } from "./sample_data/sample_band_repo";

describe("BandRepo", () => {
  let bandRepo;
  let emptyBandRepo;

  beforeEach(() => {
    bandRepo = new BandRepo(sampleBandRepoData);
    emptyBandRepo = new BandRepo({ bands: [] });
  });

  test("should be an instance of BandRepo", () => {
    expect(bandRepo).toBeInstanceOf(BandRepo);
  });

  test("should have bands property of Band instances", () => {
    bandRepo.bands.forEach((band) => {
      expect(band).toBeInstanceOf(Band);
    });
  });

  test("should calculate total yearly income for all bands a user is in", () => {
    const totalIncomeAllBands = bandRepo.calcTotalIncomeAllBands();

    expect(totalIncomeAllBands).toEqual(12400);
  });

  test("should create an array of total each member made in all bands", () => {
    const memberIncomeArr = bandRepo.createYearlyTotalIncomeByMember();

    expect(memberIncomeArr).toEqual([
      {
        name: "Carlos",
        income: 2400,
      },
      {
        name: "Deepak",
        income: 2700,
      },
      {
        name: "Elena",
        income: 2500,
      },
      {
        name: "Liam",
        income: 500,
      },
      {
        name: "Aisha",
        income: 600,
      },
      {
        name: "Raj",
        income: 700,
      },
    ]);
  });

  test("it should add totals if a member is in multiple bands", () => {
    const newBand = new Band({
      band_name: "New Band",
      members: [
        {
          name: "You",
          income: 1000,
        },
        {
          name: "Liam",
          income: 150,
        },
        {
          name: "Jojo",
          income: 200,
        },
        {
          name: "Raj",
          income: 100,
        },
      ],
    });

    bandRepo.bands.push(newBand);
    const addedBandRepo = bandRepo.createYearlyTotalIncomeByMember();

    expect(addedBandRepo).toEqual([
      {
        name: "Carlos",
        income: 2400,
      },
      {
        name: "Deepak",
        income: 2700,
      },
      {
        name: "Elena",
        income: 2500,
      },
      {
        name: "Liam",
        income: 650,
      },
      {
        name: "Aisha",
        income: 600,
      },
      {
        name: "Raj",
        income: 800,
      },
      {
        name: "Jojo",
        income: 200,
      },
    ]);
  });

  test("should calculate total for band members excluding user with income of at least $600 for the year", () => {
    expect(bandRepo.calcTotalForMembersIncomeInRange(600, Infinity)).toEqual(
      8900
    );
  });

  test("should calculate total for band members excluding user with income of less than $600 for the year", () => {
    expect(bandRepo.calcTotalForMembersIncomeInRange(0, 600)).toEqual(500);
  });

  test("should calculate total income of all members excluding user", () => {
    expect(bandRepo.calcTotalForMembersIncomeInRange(0, Infinity)).toEqual(
      9400
    );
  });

  test("should calculate total income for the user", () => {
    expect(bandRepo.calcTotalUserIncome()).toEqual(3000);
  });

  test("should initialize BandRepo if no bands provided", () => {
    expect(emptyBandRepo).toBeInstanceOf(BandRepo);
    expect(emptyBandRepo.bands).toEqual([]);
  });

  test("calcTotalIncomeAllBands should return zero income if no bands in repo", () => {
    expect(emptyBandRepo.calcTotalIncomeAllBands()).toEqual(0);
  });

  test("createYearlyTotalIncomeByMember should return empty array if no bands in repo", () => {
    expect(emptyBandRepo.createYearlyTotalIncomeByMember()).toEqual([]);
  });

  test("calcTotalForMembersIncomeInRange should return 0 for empty band repo", () => {
    expect(emptyBandRepo.calcTotalForMembersIncomeInRange(0, Infinity)).toEqual(
      0
    );
  });

  test("calcTotalForMembersIncomeInRange should return null if non-number args provided", () => {
    expect(bandRepo.calcTotalForMembersIncomeInRange()).toEqual(null);
    expect(bandRepo.calcTotalForMembersIncomeInRange(false, 600)).toEqual(null);
    expect(bandRepo.calcTotalForMembersIncomeInRange(0, null)).toEqual(null);
    expect(bandRepo.calcTotalForMembersIncomeInRange("a", true)).toEqual(null);
    expect(bandRepo.calcTotalForMembersIncomeInRange(0)).toEqual(null);
  });

  test("calcTotalUserIncome should return 0 for empty band repo", () => {
    expect(emptyBandRepo.calcTotalUserIncome()).toEqual(0);
  });
});
