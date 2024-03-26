import "./Books.css";
import BandSelect from "../BandSelect/BandSelect";
import IncomeDisplay from "../IncomeDisplay/IncomeDisplay";
import TotalIncome from "../TotalIncome/TotalIncome";
import { object } from "prop-types";
import { useEffect, useState } from "react";
import { BandRepo } from "../../Classes/BandRepo";

export default function Books({ bandData }) {
  const [grandTotal, setGrandTotal] = useState();

  useEffect(() => {
    if (bandData && bandData instanceof BandRepo) {
      setGrandTotal(bandData.calcTotalIncomeAllBands());
    }
  }, [bandData]);
  
  return (
    <main>
      <h1 className="books-header">Books</h1>
      {bandData && !bandData.bands.length ? (
        <div>
          <p className="no-band-data-msg">
            No band data to display, add some bands to view the Books for each
            band and all members!
          </p>
        </div>
      ) : null}
      <TotalIncome total={grandTotal} />
      <BandSelect />
      <button className="books-btn">Income by Musician</button>
      <button className="books-btn">Export Data</button>
      <IncomeDisplay />
    </main>
  );
}

Books.propTypes = {
  bandData: object,
};
