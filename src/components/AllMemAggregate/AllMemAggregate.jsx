import { array } from "prop-types";

export default function AllMemAggregate({ memArr }) {
  console.log(memArr)
  return (
    <section className="all-mem-agg-section">
    </section>
  )
}

AllMemAggregate.propTypes = {
  memArr: array,
};
