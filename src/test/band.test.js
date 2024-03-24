import { describe, expect, test, beforeEach } from "@jest/globals";
import { Band } from "../Classes/Band";
import { sampleBandData } from "./sample_data/sample_band";
import { Member } from "../Classes/Member";

describe("Band", () => {
  let band;
  beforeEach(() => {
    band = new Band(sampleBandData);
  });

  test("should be an instance of Band", () => {
    expect(band).toBeInstanceOf(Band);
  });

  test("should be constructed with correct properties", () => {
    const name = "";
    const members = [];

    expect(name).toEqual("Harmony Fusion");
    expect(members).toEqual([
      {
        name: "You",
        income: 300,
      },
      {
        name: "Chen",
        income: 150,
      },
      {
        name: "Yuki",
        income: 200,
      },
      {
        name: "Oliver",
        income: 100,
      },
    ]);
  });
});
