// import { Component } from "react";
// import React, { Component } from "react";

// class Count extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: "1" };
//   }

//   clickFun1() {
//     // console.log(this.state.count);

//     this.setState({ count: "4" });
//   }
//   clickFun2() {
//     console.log("+++");
//   }

//   render() {
//     return (
//       <div>
//         <h3>{this.state.count}</h3>
//         <div>
//           <button onClick={this.clickFun1}>-</button>
//           <span>and</span>
//           <button onClick={this.clickFun2}>+</button>
//         </div>
//       </div>
//     );
//   }
// }
// export default Count;

import { useState } from "react";

function Count() {
  const [count, setCount] = useState(1);

  function clickFun1() {
    if (count <= 1) {
      alert("u cannot go less than 1");
    } else {
      setCount(count - 1);
    }
  }
  function clickFun2() {
    if (count >= 10) {
      alert("you cannot go more than 10");
    } else {
      setCount(count + 1);
    }
  }
  return (
    <div>
      <h3>{count}</h3>
      <div>
        <button onClick={clickFun1}>-</button>
        <span>and</span>
        <button onClick={clickFun2}>+</button>
      </div>
    </div>
  );
}
export default Count;
