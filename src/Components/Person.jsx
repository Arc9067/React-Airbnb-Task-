// import Person1 from "../assets/image 12.png";
// import Person2 from "../assets/wedding-photography 1.png";
// import Person3 from "../assets/mountain-bike 1.png";

function Person(props) {
  let badgetxt;
  if (props.openSpots === 0) {
    badgetxt = "sold out";
  } else if (props.location === "Online") {
    badgetxt = "Online";
  }

  return (
    <>
      <div className="person-card">
        <div className="person-img-div">
          <img src={`../../public/assets/${props.coverImg}`} alt="Person 1" />
          {badgetxt && <button className="btn">{badgetxt}</button>}
        </div>
        <div className="message-div">
          <p className="messageInfo">
            <i className="fa-solid fa-star"></i>
            <span>
              ({props.stats}). {props.location}
            </span>
          </p>
          <p className="ProductName">{props.title}</p>
          <p className="price">
            From ${props.price} / <span>person</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Person;

// /* <div className="person-card">
//   <div className="person-img-div">
//     <img src={Person1} alt="Person 1" />
//     <button className="btn">sold out</button>
//   </div>
//   <div className="message-div">
//     <p className="messageInfo">
//       <i className="fa-solid fa-star"></i>
//       5.0 <span>(06). USA</span>
//     </p>
//     <p className="ProductName">Life lessons with Katie Zaferes</p>
//     <p className="price">
//       From $136 / <span>person</span>
//     </p>
//   </div>
// </div>
// <div className="person-card">
//   <div className="person-img-div">
//     <img src={Person2} alt="Person 1" />
//     <button className="btn">online</button>
//   </div>
//   <div className="message-div">
//     <p className="messageInfo">
//       <i className="fa-solid fa-star"></i>
//       5.0 <span>(30). USA</span>
//     </p>
//     <p className="ProductName">Learn wedding photography</p>
//     <p className="price">
//       From $125 /<span>person</span>
//     </p>
//   </div>
// </div>
// <div className="person-card">
//   <div className="person-img-div">
//     <img src={Person2} alt="Person 1" />
//   </div>
//   <div className="message-div">
//     <p className="messageInfo">
//       <i className="fa-solid fa-star"></i>
//       5.0 <span>(06). USA</span>
//     </p>
//     <p className="ProductName">Life lessons with Katie Zaferes</p>
//     <p className="price">
//       From $136 / <span>person</span>
//     </p>
//   </div>
// </div>
