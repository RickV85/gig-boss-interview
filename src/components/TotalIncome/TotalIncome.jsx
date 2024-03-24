import PropTypes from "prop-types";

export default function TotalIncome({ total }) {
  return (
    <div className="total-income-div">
      <h2 className="total-income">Total Income for 2023-24</h2>
      <h2 className="total-income-amt">{`$${total ? total : "______"}`}</h2>
    </div>
  );
}

TotalIncome.propTypes = {
  total: PropTypes.string,
};
