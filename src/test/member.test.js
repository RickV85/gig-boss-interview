import { describe, expect, test, beforeEach } from "@jest/globals";
import { sampleMemberData } from "./sample_data/sample_member";
import { Member } from "../Classes/Member";

describe("Member", () => {
  let member;

  beforeEach(() => {
    member = new Member(sampleMemberData);
  });

  test("should be an instance of Member", () => {
    expect(member).toBeInstanceOf(Member);
  });

  test("should be constructed with correct properties", () => {
    const name = member.name;
    const income = member.income;

    expect(name).toEqual("Deepak");
    expect(income).toEqual(2700);
  });

  test("should have default values for properties", () => {
    const missingInfo = new Member({ name: "", income: undefined });

    const name = missingInfo.name;
    const income = missingInfo.income;

    expect(name).toEqual("Unknown");
    expect(income).toEqual(0);
  });

  test("should not allow negative income values", () => {
    const negIncome = new Member({ name: "", income: -500 });

    expect(negIncome.income).toEqual(0);
  });
});
