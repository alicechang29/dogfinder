import { imgSrcConstructor } from "./utils";
import { Link } from "react-router-dom";

/** Dog component that shows a Dog.
 *
 * Props: list of dogs
 * State: none
 *
 * App -> DogsList -> Dog
 */
function Dog({ dog }) {
  console.log("Dog");

  return (
    <div className="Dog">
      <h1>{dog.name}, Age: {dog.age}</h1>
      <div className="Dog-img">
        <img src={imgSrcConstructor(dog.src)}></img>
      </div>
      <div className="Dog-facts">
        <ul>
          {dog.facts.map(fact => {
            return (
              <li key={dog.id + fact}>{fact}</li>
            );
          })}
        </ul>
      </div>
      <Link to="/">Back to all dogs</Link>
    </div>
  );

};

export default Dog;
