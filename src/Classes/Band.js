import { Member } from "./Member";

export class Band {
  constructor(data) {
    this.bandName = data.band_name || "Unknown band";
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
    const totalIncome = this.members.reduce((sum, mem) => {
      sum += mem.income;
      return sum;
    }, 0);

    return totalIncome;
  }
}
