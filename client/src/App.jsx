import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let [searchText, setSearchText] = useState("");

  let [result, setResult] = useState([]);

  const getTrip = () => {
    axios
      .get("http://localhost:4001/trips?keywords=" + searchText)
      .then((respon) => {
        console.log(respon);
        setResult(respon.data.data);
      });
  };

  useEffect(() => {
    getTrip();
  }, [searchText]);

  console.log(result);
  return (
    <div className="App">
      {/* Start coding here */}

      <h1 className="Head">เที่ยวไหนดี</h1>
      <p>กรุณาพิมพ์เพื่อแสดงผล</p>
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      {result.map((trip) => {
        return (
          <div>
            <div className="mainPhoto">
              <img src={trip.photos[0]} />
            </div>
            <div>
              <h1>{trip.title}</h1>
              <p>{trip.description.slice(0, 100)}</p>{" "}
              <a href={trip.url}>อ่านต่อ </a>
              <p>{trip.tags}</p>
              <div className="miniPhoto">
                <img src={trip.photos[1]} />
                <img src={trip.photos[2]} />
                <img src={trip.photos[3]} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
