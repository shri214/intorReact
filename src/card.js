import "./card.css";
function Card(props) {
  let cardContainer = Array.from(document.querySelectorAll(".cards"));
  let btnArr = Array.from(document.querySelectorAll(".btn"));
  btnArr.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      cardContainer.forEach((elements) => {
        console.log(elements.getElementsByTagName("h3")[0].innerText);
      });
    });
  });
  return (
    <div className="cards">
      <img src={props.image} className="images" />
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <button className="btn">See More</button>
    </div>
  );
}
export default Card;
