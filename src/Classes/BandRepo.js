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
}
