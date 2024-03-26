import "./Books.css";
import BandSelect from "../BandSelect/BandSelect";
import IncomeDisplay from "../IncomeDisplay/IncomeDisplay";
import TotalIncome from "../TotalIncome/TotalIncome";
import { object } from "prop-types";
import { useEffect, useRef, useState } from "react";
import MemberView from "../MemberView/MemberView";

export default function Books({ bandRepo }) {
  const [grandTotal, setGrandTotal] = useState(0);
  const [bands, setBands] = useState(undefined);
  const [selectedBandName, setSelectedBandName] = useState("");
  const [selectedBand, setSelectedBand] = useState(undefined);
  const [memViewActive, setMemViewActive] = useState(false);
  const bandSelectRef = useRef(undefined);
  const incomeByMusicianRef = useRef(undefined);

  useEffect(() => {
    if (!bandRepo) return;
    if (!grandTotal) {
      setGrandTotal(bandRepo.calcTotalIncomeAllBands());
    }
    if (!bands && bandRepo?.bands) {
      setBands(bandRepo.bands);
    }
  }, [bandRepo, bands, grandTotal]);

  // Find band in band repo when name is selected in BandSelect
  useEffect(() => {
    if (
      selectedBandName &&
      selectedBandName !== selectedBand?.bandName &&
      bandRepo
    ) {
      const foundBand = bandRepo.findBandByName(selectedBandName);
      setSelectedBand(foundBand);
      if (memViewActive) setMemViewActive(false);
    }
  }, [selectedBandName, selectedBand, bandRepo, memViewActive]);

  // Add active class to BandSelect or Income by Musician depending on
  // which view is active
  useEffect(() => {
    if (!bandSelectRef) return;
    if (selectedBand) {
      bandSelectRef.current.classList.add("active");
      incomeByMusicianRef.current.classList.remove("active");
    } else if (memViewActive) {
      bandSelectRef.current.classList.remove("active");
      incomeByMusicianRef.current.classList.add("active");
    } else {
      bandSelectRef.current.classList.remove("active");
      incomeByMusicianRef.current.classList.remove("active");
    }
  }, [selectedBand, memViewActive]);

  const handleMemViewClick = () => {
    if (selectedBandName) setSelectedBandName("");
    if (selectedBand) setSelectedBand(null);
    // Toggle memViewActive based on current state
    memViewActive ? setMemViewActive(false) : setMemViewActive(true);
  };

  return (
    <main>
      <h1 className="books-header">Books</h1>
      {bandRepo && !bandRepo.bands.length ? (
        <div>
          <p className="no-band-data-msg">
            No band data to display, add some bands to view the Books for each
            band and all members!
          </p>
        </div>
      ) : null}
      <TotalIncome total={grandTotal} />
      <BandSelect
        bands={bands}
        selectedBandName={selectedBandName}
        setSelectedBandName={setSelectedBandName}
        bandSelectRef={bandSelectRef}
      />
      <button
        className="books-btn"
        onClick={() => handleMemViewClick()}
        ref={incomeByMusicianRef}
      >
        Income by Musician
      </button>
      <button className="books-btn">Export Data</button>
      <section className="income-display">
        {!selectedBand && !memViewActive ? (
          <p style={{ marginTop: "1rem" }}>
            Select a band above to view their books!
          </p>
        ) : null}
        {selectedBand && <IncomeDisplay selectedBand={selectedBand} />}
        {memViewActive && bandRepo && <MemberView bandRepo={bandRepo} />}
      </section>
    </main>
  );
}

Books.propTypes = {
  bandRepo: object,
};
