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
      <table className="total-table">
        <tbody>
          <tr>
            <td className="total-table-label-col">
              Total paid to members with income of $600 or more
            </td>
            <td className="total-table-amt-col">${totalPaidOver600}</td>
          </tr>
          <tr>
            <td className="total-table-label-col">
              Total paid to members with less than $600 income
            </td>
            <td className="total-table-amt-col">${totalPaidUnder600}</td>
          </tr>
          <tr>
            <td className="total-table-label-col">
              Total paid to all band members
            </td>
            <td className="total-table-amt-col">${totalPaidAllMems}</td>
          </tr>
          <tr>
            <td className="total-table-label-col">Total income for 2023-24</td>
            <td className="total-table-amt-col">${totalIncomeAllBands}</td>
          </tr>
          <tr>
            <td className="total-table-label-col">Total personal income</td>
            <td className="total-table-amt-col">${totalUserIncome}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

TotalAggregate.propTypes = {
  bandRepo: object,
};
