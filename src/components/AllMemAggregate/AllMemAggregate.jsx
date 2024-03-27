import { array } from "prop-types";

export default function AllMemAggregate({ memArr }) {
  const createDisplayElementsFromMemArr = () => {
    if (memArr?.length) {
      const memberElements = memArr.map((mem, i) => {
        let memClass = "mem-agg-income";
        // Create styled elements to highlight users with >= $600 income
        if (mem.income >= 600) {
          memClass += " over-600";
        }
        return (
          <div className="mem-agg-income-div" key={`memAggInc-${i}`}>
            <p className={memClass}>{`${mem.name}`}</p>
            <p className={memClass}>{`$${mem.income}`}</p>
          </div>
        );
      });
      return memberElements;
    }
  };

  return (
    <section className="all-mem-agg-section">
      <div className="all-mem-agg-container">
        <header className="all-mem-agg-header">
          <h2>Musician</h2>
          <h2>Income</h2>
        </header>
        <div className="all-mem-agg-display">
          {createDisplayElementsFromMemArr()}
        </div>
      </div>
    </section>
  );
}

AllMemAggregate.propTypes = {
  memArr: array,
};
