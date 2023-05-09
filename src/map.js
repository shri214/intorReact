// import { useState } from "react";
// export default function Maping() {
//   const [lat, setLat] = useState("calculating");
//   const [long, setLong] = useState("calculating");
//   navigator.geolocation.getCurrentPosition((position) => {
//     setLat(position.coords.latitude);
//     setLong(position.coords.longitude);
//   });
//   return (
//     <div>
//       <h2>the latitude is :{lat}</h2>
//       <h2>the longitude is :{long}</h2>
//     </div>
//   );
// }

import { Component } from "react";
class Maping extends Component {
  state = { lat: "" };
  state = { long: "" };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ lat: position.coords.latitude });
      this.setState({ long: position.coords.longitude });
    });
  }
  render() {
    return (
      <div>
        <h2>the latitude is :{this.state.lat}</h2>
        <h2>the longitude is :{this.state.long}</h2>
      </div>
    );
  }
}
export default Maping;
