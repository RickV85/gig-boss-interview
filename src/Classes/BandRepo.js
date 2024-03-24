import { Band } from "./Band";

export class BandRepo {
  constructor(data) {
    this.bands = this.initializeBands(data.bands);
  }

  initializeBands(bandData) {
    const bands = bandData.map((band) => new Band(band));

    return bands;
  }
}
