import { Member } from "./Member";

export class Band {
  constructor(data) {
    this.bandName = data.band_name;
    this.members = this.initializeMembers(data.members);
  }

  initializeMembers(members) {
    return members.map((mem) => new Member(mem));
  }

  findUserIncome() {
    const user = this.members.find((mem) => mem.name.toLowerCase() === "you");

    return user ? user.income : null;
  }

  findBandIncomeForYear() {
    
  }
}
