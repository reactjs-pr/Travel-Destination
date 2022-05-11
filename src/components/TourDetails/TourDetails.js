import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import cityData from "../data/db.json";
import './TourDetails.css';
export default function TourDetails() {
  const { id } = useParams();

  const [isShown, setShown] = useState(false);
  const filterData = () => cityData.filter((city) => city.id === id);

  function clickhandle() {
    setShown(!isShown);
  }
  return (
    <>
      <Navbar />

      <h1>Tour Details</h1>

      {filterData().map(
        (el) => (
          <>
            <p>{el.name}</p>
            <p>
              {isShown ? el.info : `${el.info.substring(0, 250)}`}
              {isShown ? (
                <button onClick={clickhandle}>see less</button>
              ) : (
                <button onClick={clickhandle}>see more</button>
              )}
            </p>
            <p>{el.price}</p>
            <img src={el.image}></img>
          </>
        )
      )}

      
    </>
  );
}
