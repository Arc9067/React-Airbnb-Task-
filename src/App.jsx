import Nav from "./Components/Nav";
import Image from "./Components/Image";
import Test from "./Components/Test";
import Person from "./Components/Person";
import Data from "./data";
import "./App.css";

function App() {
  let dat = Data.map((ele) => {
    return (
      <Person
        key={ele.id}
        coverImg={ele.coverImg}
        stats={ele.stats.rating}
        location={ele.location}
        title={ele.title}
        price={ele.price}
        openSpots={ele.openSpots}
      />
      // <div className="person-card" key={ele.id}>
      //   <div className="person-img-div">
      //     <img src={`../../public/assets/${ele.coverImg}`} alt="Person 1" />
      //     <button className="btn">sold out</button>
      //   </div>
      //   <div className="message-div">
      //     <p className="messageInfo">
      //       <i className="fa-solid fa-star"></i>
      //       <span>
      //         ({ele.stats.rating}). {ele.location}
      //       </span>
      //     </p>
      //     <p className="ProductName">{ele.title}</p>
      //     <p className="price">
      //       From ${ele.price} / <span>person</span>
      //     </p>
      //   </div>
      // </div>
    );
  });

  return (
    <>
      <Nav />
      <Image />
      <Test />

      <section className="person-div">{dat}</section>
    </>
  );
}

export default App;
