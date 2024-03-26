import "./Books.css";
import BandSelect from "../BandSelect/BandSelect";
import IncomeDisplay from "../IncomeDisplay/IncomeDisplay";
import TotalIncome from "../TotalIncome/TotalIncome";

export default function Books() {
  return (
    <main>
      <h1 className="books-header">Books</h1>
      <TotalIncome total={null} />
      <BandSelect />
      <button className="books-btn">Income by Musician</button>
      <button className="books-btn">Export Data</button>
      <IncomeDisplay />
    </main>
  );
}
