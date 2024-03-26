export const findBandByName = (name, bands) => {
  let foundBand;
  if (name && bands?.length) {
    foundBand = bands.find((band) => band.bandName === name);
  } else {
    return foundBand ? foundBand : null;
  }
};
