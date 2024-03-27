import { object } from "prop-types";
import "./AggregateData.css";

export default function AggregateData({ bandRepo }) {
  console.log(bandRepo);
  return null;
}

AggregateData.propTypes = {
  bandRepo: object,
};
