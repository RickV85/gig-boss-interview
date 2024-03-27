import { object } from "prop-types";
import "./AggregateData.css";

export default function AggregateData({ bandRepo }) {
  
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
      ) : <></>}
    </main>
  );
}

AggregateData.propTypes = {
  bandRepo: object,
};
