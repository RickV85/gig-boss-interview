import "./Books.css";
import BandSelect from "../BandSelect/BandSelect";
import IncomeDisplay from "../IncomeDisplay/IncomeDisplay";
import TotalIncome from "../TotalIncome/TotalIncome";
import { object } from "prop-types";

export default function Books({ bandData }) {
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
      <TotalIncome total={null} />
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
