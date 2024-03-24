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
});
