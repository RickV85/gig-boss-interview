import { array } from "prop-types";

export default function AllMemAggregate({ memArr }) {
  const createDisplayElementsFromMemArr = () => {
    if (memArr?.length) {
      const memberElements = memArr.map((mem, i) => {
        let incomeClass = "mem-agg-income";
        // Create styled elements to highlight users with >= $600 income
        if (mem.income >= 600) {
          incomeClass += " over-600";
        }
        return (
          <tr className="mem-agg-table-row" key={`memAggInc-${i}`}>
            <td className="mem-agg-name">{`${mem.name}`}</td>
            <td className={incomeClass}>{`$${mem.income}`}</td>
          </tr>
        );
      });
      return memberElements;
    }
  };

  return (
    <section className="all-mem-agg-section">
      <table className="all-mem-table">
        <thead className="all-mem-table-header">
          <tr className="mem-agg-table-row">
            <th>Musician</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody className="all-mem-table-body">
          {createDisplayElementsFromMemArr()}
        </tbody>
      </table>
    </section>
  );
}

AllMemAggregate.propTypes = {
  memArr: array,
};
