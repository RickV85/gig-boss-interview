import { Band } from "./Band";

export class BandRepo {
  constructor(data) {
    this.bands = this.initializeBands(data.bands);
  }

  initializeBands(bandData) {
    const bands = bandData.map((band) => new Band(band));

    return bands;
  }

  calcTotalIncomeAllBands() {
    const grandTotal = this.bands.reduce((sum, band) => {
      sum += band.findBandIncomeForYear();
      return sum;
    }, 0);

    return grandTotal;
  }

  // I'm summing a member's income if first name matches another
  // member (same person in another band the user is also in) but
  // in the real world, I'd be matching up ID's not first names.
  createYearlyTotalIncomeByMember() {
    const hashMap = this.bands.reduce((hash, band) => {
      band.members.forEach((mem) => {
        if (hash[mem.name]?.income) {
          hash[mem.name].income += mem.income;
          // Only add to hash if member is not user/you
        } else if (mem.name.toLowerCase() !== "you") {
          hash[mem.name] = { name: mem.name, income: mem.income };
        }
      });
      return hash;
    }, {});

    return Object.values(hashMap);
  }

  calcTotalForMembersIncomeOver600() {
    const allMembersYearlyTotal = this.createYearlyTotalIncomeByMember();
    const memIncomeSum = allMembersYearlyTotal.reduce((sum, mem) => {
      if (mem.income >= 600) {
        sum += mem.income;
      }
      return sum;
    }, 0);

    return memIncomeSum;
  }

  calcTotalForMembersIncomeUnder600() {
    const allMembersYearlyTotal = this.createYearlyTotalIncomeByMember();
    const memIncomeSum = allMembersYearlyTotal.reduce((sum, mem) => {
      if (mem.income < 600) {
        sum += mem.income;
      }
      return sum;
    }, 0);

    return memIncomeSum;
  }

  calcTotalIncomeAllMembers() {
    const totalIncome = this.bands.reduce((total, band) => {
      const bandTotal = band.members.reduce((bandSum, mem) => {
        if (mem.name.toLowerCase() !== "you") {
          bandSum += mem.income;
        }
        return bandSum;
      }, 0);
      total += bandTotal;
      return total;
    }, 0);

    return totalIncome;
  }

  calcTotalIncomeUser() {
    return null;
  }
}
