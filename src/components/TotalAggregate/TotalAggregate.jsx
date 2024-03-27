import { object } from "prop-types";

export default function TotalAggregate({ bandRepo }) {
  const totalPaidOver600 = bandRepo.calcTotalForMembersIncomeInRange(
    600,
    Infinity
  );

  return <section className="total-agg-section">
  {totalPaidOver600}</section>;
}

TotalAggregate.propTypes = {
  bandRepo: object,
};
