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
});
