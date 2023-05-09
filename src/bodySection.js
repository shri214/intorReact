import "./bodySec.css";
import Card from "./card";
import Count from "./counter";
import Maping from "./map";
function BodySection() {
  return (
    <>
      <section id="container">
        <div className="box-container">
          <h3 className="h-primary center">
            Welcome To My First React Website
          </h3>
          <p className="loremWord">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </section>
      <section className="about-section">
        <h2 className="center h-secondary">Some Random Paragraph !!!'🍷🍷🍷</h2>

        <div className="images-div">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt="random img"
          />
          <span>
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only
          </span>
        </div>
        <div className="images-div">
          <span>
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only
          </span>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt="random img"
          />
        </div>
      </section>
      <section className="cardsList">
        <Card
          name={"Tony Stark"}
          desc={
            "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer"
          }
          image={
            "https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg"
          }
        />
        <Card
          name={"Clark Joseph"}
          desc={
            "Clark Joseph Kent, best known by his superhero persona Superman, is a superhero"
          }
          image={
            "https://imageio.forbes.com/blogs-images/jvchamary/files/2016/03/man_of_steel-1200x800.jpg?format=jpg&width=960"
          }
        />
        <Card
          name={"Peter Parker"}
          desc={
            "Spider-Man is a superhero appearing in American comic books published by Marvel Comics"
          }
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9yx-sSAD5snbqGF6txTDiNdpkxIGM7P3MA&usqp=CAU"
          }
        />
        <Card
          name={"Christopher Hemsworth"}
          desc={
            "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. "
          }
          image={
            "https://images.indianexpress.com/2019/09/avengers-endgame-chris-hemsworth-fat-thor-1200.jpg"
          }
        />
        <Card
          name={"Mark Ruffalo"}
          desc={
            "The Hulk is a superhero appearing in American comic books published by Marvel Comics"
          }
          image={
            "https://sportshub.cbsistatic.com/i/2021/11/25/e1bb4b76-8058-47ae-a98f-511f7a7b10a1/marvel-reveals-starship-hulk-new-form-and-powers-comic-spoilers.jpg"
          }
        />
        <Card
          name={"Tony Stark"}
          desc={
            "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer"
          }
          image={
            "https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg"
          }
        />
        <Card
          name={"Clark Joseph"}
          desc={
            "Clark Joseph Kent, best known by his superhero persona Superman, is a superhero"
          }
          image={
            "https://imageio.forbes.com/blogs-images/jvchamary/files/2016/03/man_of_steel-1200x800.jpg?format=jpg&width=960"
          }
        />
        <Card
          name={"Peter Parker"}
          desc={
            "Spider-Man is a superhero appearing in American comic books published by Marvel Comics"
          }
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9yx-sSAD5snbqGF6txTDiNdpkxIGM7P3MA&usqp=CAU"
          }
        />
        <Card
          name={"Christopher Hemsworth"}
          desc={
            "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. "
          }
          image={
            "https://images.indianexpress.com/2019/09/avengers-endgame-chris-hemsworth-fat-thor-1200.jpg"
          }
        />
        <Card
          name={"Mark Ruffalo"}
          desc={
            "The Hulk is a superhero appearing in American comic books published by Marvel Comics"
          }
          image={
            "https://sportshub.cbsistatic.com/i/2021/11/25/e1bb4b76-8058-47ae-a98f-511f7a7b10a1/marvel-reveals-starship-hulk-new-form-and-powers-comic-spoilers.jpg"
          }
        />
        <Card
          name={"Christopher Hemsworth"}
          desc={
            "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. "
          }
          image={
            "https://images.indianexpress.com/2019/09/avengers-endgame-chris-hemsworth-fat-thor-1200.jpg"
          }
        />
        <Card
          name={"Mark Ruffalo"}
          desc={
            "The Hulk is a superhero appearing in American comic books published by Marvel Comics"
          }
          image={
            "https://sportshub.cbsistatic.com/i/2021/11/25/e1bb4b76-8058-47ae-a98f-511f7a7b10a1/marvel-reveals-starship-hulk-new-form-and-powers-comic-spoilers.jpg"
          }
        />
      </section>
      <section className="classBaseSection">
        <Count />
        <Maping />
      </section>
    </>
  );
}
export default BodySection;
