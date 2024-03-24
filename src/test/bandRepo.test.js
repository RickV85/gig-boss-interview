import { describe, expect, test, beforeEach } from "@jest/globals";
import { Band } from "../Classes/Band";
import { BandRepo } from "../Classes/BandRepo";
import { sampleBandRepoData } from "./sample_data/sample_band_repo";

describe("BandRepo", () => {
  let bandRepo;
  beforeEach(() => {
    bandRepo = new BandRepo(sampleBandRepoData);
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
});
