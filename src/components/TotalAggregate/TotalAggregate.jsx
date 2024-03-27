import { object } from "prop-types";
import { formatCurrencyStrings } from "../../utils/utils";

export default function TotalAggregate({ bandRepo }) {
  let totalPaidOver600 = bandRepo.calcTotalForMembersIncomeInRange(
    600,
    Infinity
  );

  let totalPaidUnder600 = bandRepo.calcTotalForMembersIncomeInRange(0, 600);

  let totalPaidAllMems = bandRepo.calcTotalForMembersIncomeInRange(0, Infinity);

  let totalIncomeAllBands = bandRepo.calcTotalIncomeAllBands();

  let totalUserIncome = bandRepo.calcTotalUserIncome();

  const formattedTotals = formatCurrencyStrings([
    totalPaidOver600,
    totalPaidUnder600,
    totalPaidAllMems,
    totalIncomeAllBands,
    totalUserIncome,
  ]);

  [
    totalPaidOver600,
    totalPaidUnder600,
    totalPaidAllMems,
    totalIncomeAllBands,
    totalUserIncome,
  ] = formattedTotals;

  return (
    <section className="total-agg-section">
      <table className="total-table">
        <tbody>
          <tr>
            <td className="total-table-label-col">
              Total paid to members with income of $600 or more
            </td>
            <td className="total-table-amt-col">{totalPaidOver600}</td>
          </tr>
          <tr>
            <td className="total-table-label-col">
              Total paid to members with less than $600 income
            </td>
            <td className="total-table-amt-col">{totalPaidUnder600}</td>
          </tr>
          <tr>
            <td className="total-table-label-col">
              Total paid to all band members
            </td>
            <td className="total-table-amt-col">{totalPaidAllMems}</td>
          </tr>
          <tr>
            <td className="total-table-label-col">Total income for 2023-24</td>
            <td className="total-table-amt-col">{totalIncomeAllBands}</td>
          </tr>
          <tr>
            <td className="total-table-label-col">Total personal income</td>
            <td className="total-table-amt-col">{totalUserIncome}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

TotalAggregate.propTypes = {
  bandRepo: object,
};
