import { imgSrcConstructor } from "./utils";
import { useParams } from "react-router-dom";

/** Dog component that shows a Dog.
 *
 * Props: list of dogs
 * State: none
 *
 * App -> DogsList -> Dog
 */
function Dog({ dogs }) {
  console.log("Dog");

  const { name } = useParams();
  const dog = findDog();

  //given list of dogs and a name, find the dog obj
  function findDog() {
    for (const dog of dogs) {
      if (dog.name === name) {
        console.log("dog src", dog.src);
        return dog;
      }
    }
    return <p>No such dog: {name}</p>;
  }

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
    </div>
  );

};

export default Dog;
