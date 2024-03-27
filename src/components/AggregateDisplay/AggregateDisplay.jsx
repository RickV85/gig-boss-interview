import { object } from "prop-types";
import "./AggregateData.css";
import AllMemAggregate from "../AllMemAggregate/AllMemAggregate";
import TotalAggregate from "../TotalAggregate/TotalAggregate";

export default function AggregateData({ bandRepo }) {
  const createMemArrSortedByIncome = () => {
    if (bandRepo?.bands) {
      return bandRepo
        .createYearlyTotalIncomeByMember()
        .toSorted((a, b) => b.income - a.income);
    }
  };

  const sortedMemArr = createMemArrSortedByIncome();

  return (
    <main>
      <h1>Aggregate Data 2023-24</h1>
      {/* If no bands, display message to add bands, else show all elements */}
      {bandRepo && !bandRepo?.bands?.length ? (
        <div>
          <p className="no-band-data-msg">
            No band data to display, add some bands to view aggregate data!
          </p>
        </div>
      ) : (
        <>
          {sortedMemArr && <AllMemAggregate memArr={sortedMemArr} />}
          {bandRepo && <TotalAggregate bandRepo={bandRepo} />}
        </>
      )}
    </main>
  );
}

AggregateData.propTypes = {
  bandRepo: object,
};
