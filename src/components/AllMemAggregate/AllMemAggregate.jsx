import { array } from "prop-types";

export default function AllMemAggregate({ memArr }) {

  return (
    <section className="all-mem-agg-section">
      {memArr}
    </section>
  )
}

AllMemAggregate.propTypes = {
  memArr: array,
};
