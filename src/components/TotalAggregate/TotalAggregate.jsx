import { object } from "prop-types";

export default function TotalAggregate({ bandRepo }) {
  const totalPaidOver600 = bandRepo.calcTotalForMembersIncomeInRange(
    600,
    Infinity
  );

  const totalPaidUnder600 = bandRepo.calcTotalForMembersIncomeInRange(0, 600);

  const totalPaidAllMems = bandRepo.calcTotalForMembersIncomeInRange(
    0,
    Infinity
  );

  return (
    <section className="total-agg-section">
      <p>{totalPaidOver600}</p>
      <p>{totalPaidUnder600}</p>
      <p>{totalPaidAllMems}</p>
    </section>
  );
}

TotalAggregate.propTypes = {
  bandRepo: object,
};
