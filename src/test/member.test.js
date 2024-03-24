import { describe, expect, test, beforeEach } from '@jest/globals';
import { sampleMemberData } from './sample_data/sample_member';
import { Member } from '../Classes/Member';

describe("Member", () => {
  let testMember;

  beforeEach(() => {
    testMember = new Member(sampleMemberData);
  })

  test("should be an instance of Member", () => {
    expect(testMember).toBeInstanceOf(Member);
  });

  test("should have correct properties", () => {
    const name = "";
    const income = 0;

    expect(name).toEqual("Deepak");
    expect(income).toEqual(2700);
  })
});
