import { Link } from "react-router-dom";
import { imgSrcConstructor } from "./utils";

function DogsListDisplay({ dogs }) {
  //map over dogs and for ea dog create a link to dog component with name/img
  //create a Link to the dog endpoint
  return (
    <div className="DogListDisplay">
      <h1>Dog Finder</h1>
      <ul>
        {dogs.map(dog => (
          <li key={dog.id}>
            <Link to={`/dogs/${dog.name}`}>
              <h1>{dog.name}</h1>
              <img src={imgSrcConstructor(dog.src)}></img>
            </Link>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default DogsListDisplay;