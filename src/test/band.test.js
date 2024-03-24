import { describe, expect, test, beforeEach } from "@jest/globals";
import { Band } from "../Classes/Band";
import { Member } from "../Classes/Member";
import { sampleBandData } from "./sample_data/sample_band";

describe("Band", () => {
  let band;
  beforeEach(() => {
    band = new Band(sampleBandData);
  });

  test("should be an instance of Band", () => {
    expect(band).toBeInstanceOf(Band);
  });

  test("should be constructed with correct properties", () => {
    const name = band.bandName;
    const members = band.members;

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

  test("each member of a band should be an instance of Member", () => {
    band.members.forEach((mem) => {
      expect(mem).toBeInstanceOf(Member);
    });
  });

  test("should have a method to return user's income from other members", () => {
    const userIncome = band.findUserIncome();

    expect(userIncome).toEqual(300);
  });
});
