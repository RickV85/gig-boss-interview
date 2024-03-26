import { Band } from "./Band";

export class BandRepo {
  constructor(data) {
    this.bands = this.initializeBands(data.bands);
  }

  initializeBands(bandData) {
    if (bandData && bandData.length) {
      return bandData.map((band) => new Band(band));
    } else {
      return [];
    }
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

  calcTotalForMembersIncomeInRange(min, max) {
    const badArg = (arg) =>
      arg === undefined || arg === null || typeof arg !== "number";
    if ([min, max].some(badArg)) return null;

    const allMembersYearlyTotal = this.createYearlyTotalIncomeByMember();
    const memIncomeSum = allMembersYearlyTotal.reduce((sum, mem) => {
      if (mem.income >= min && mem.income < max) {
        sum += mem.income;
      }
      return sum;
    }, 0);

    return memIncomeSum;
  }

  calcTotalUserIncome() {
    const totalIncome = this.bands.reduce((total, band) => {
      const userTotal = band.members.reduce((userSum, mem) => {
        if (mem.name.toLowerCase() === "you") {
          userSum += mem.income;
        }
        return userSum;
      }, 0);
      total += userTotal;
      return total;
    }, 0);

    return totalIncome;
  }

  findBandByName(name) {
    let foundBand;
    if (name && bands?.length) {
      foundBand = bands.find((band) => band.bandName === name);
    } else {
      return foundBand ? foundBand : null;
    }
  }
}
