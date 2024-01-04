import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [searchText, setSearchText] = useState("");

  let [result, setResult] = useState([]);

  const getTrip = (e) => {
    setSearchText(e.target.value);
    fetch("http://localhost:4001/trips?keywords=" + e.target.value)
      .then((respon) => {
        return respon.json();
      })
      .then((data) => {
        console.log(data);
        setResult(data.data);
      });
  };
  console.log(result);
  return (
    <div className="App">
      {/* Start coding here */}

      <h1 className="Head">เที่ยวไหนดี</h1>
      <p>กรุณาพิมพ์เพื่อแสดงผล</p>
      <input onChange={getTrip} value={searchText}></input>
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
