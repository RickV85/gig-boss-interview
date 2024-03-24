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

  createYearlyTotalIncomeByMember() {
    const hashMap = {};

    this.bands.forEach((band) => {
      band.members.forEach((mem) => {
        if (hashMap[mem.name]?.income) {
          hashMap[mem.name].income += mem.income;
        } else if (mem.name.toLowerCase() !== "you") {
          hashMap[mem.name] = { name: mem.name, income: mem.income };
        }
      });
    });

    const resultArr = Object.keys(hashMap).map((key) => hashMap[key]);
    console.log(resultArr);
    return resultArr;
  }
}
