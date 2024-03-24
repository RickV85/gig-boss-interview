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

  test("should be constructed with correct properties", () => {
    expect(bandRepo.bands).toEqual([
      {
        band_name: "Global Groove",
        members: [
          {
            name: "You",
            income: 2600,
          },
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
        ],
      },
      {
        band_name: "Melody Makers",
        members: [
          {
            name: "You",
            income: 400,
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
        ],
      },
    ]);
  });

  test("should have bands property of Band instances", () => {
    bandRepo.bands.forEach((band) => {
      expect(band).toBeInstanceOf(Band);
    });
  });
});
