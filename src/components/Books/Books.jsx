import "./Books.css";
import BandSelect from "../BandSelect/BandSelect";
import IncomeDisplay from "../IncomeDisplay/IncomeDisplay";
import TotalIncome from "../TotalIncome/TotalIncome";
import { object } from "prop-types";
import { useEffect, useState } from "react";
import { BandRepo } from "../../Classes/BandRepo";

export default function Books({ bandRepo }) {
  const [grandTotal, setGrandTotal] = useState(0);
  const [bands, setBands] = useState(undefined);
  const [selectedBand, setSelectedBand] = useState("");

  useEffect(() => {
    if (!bandRepo || !(bandRepo instanceof BandRepo)) return;
    if (!grandTotal) {
      setGrandTotal(bandRepo.calcTotalIncomeAllBands());
    }
    if (!bands && bandRepo?.bands) {
      setBands(bandRepo.bands);
    }
  }, [bandRepo, bands, grandTotal]);

  return (
    <main>
      <h1 className="books-header">Books</h1>
      {bandRepo && !bandRepo.bands.length ? (
        <div>
          <p className="no-band-data-msg">
            No band data to display, add some bands to view the Books for each
            band and all members!
          </p>
        </div>
      ) : null}
      <TotalIncome total={grandTotal} />
      <BandSelect
        bands={bands}
        selectedBand={selectedBand}
        setSelectedBand={setSelectedBand}
      />
      <button className="books-btn">Income by Musician</button>
      <button className="books-btn">Export Data</button>
      <IncomeDisplay />
    </main>
  );
}

Books.propTypes = {
  bandRepo: object,
};
