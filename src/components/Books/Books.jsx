import BandSelect from "../BandSelect/BandSelect";
import TotalIncome from "../TotalIncome/TotalIncome";
import "./Books.css"

export default function Books() {
  return (
    <main>
      <h1 className="books-header">Books</h1>
      <TotalIncome total={null} />
      <BandSelect />
      <button className="books-btn">Income by Musician</button>
      <button className="books-btn">Export Data</button>
    </main>
  );
}
