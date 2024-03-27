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

  const totalIncomeAllBands = bandRepo.calcTotalIncomeAllBands();

  const totalUserIncome = bandRepo.calcTotalUserIncome();

  return (
    <section className="total-agg-section">
      <p>{totalPaidOver600}</p>
      <p>{totalPaidUnder600}</p>
      <p>{totalPaidAllMems}</p>
      <p>{totalIncomeAllBands}</p>
      <p>{totalUserIncome}</p>
    </section>
  );
}

TotalAggregate.propTypes = {
  bandRepo: object,
};
