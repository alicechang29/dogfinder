import Dog from "./Dog";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
/**Filters Dog data based on url param given
 *
 * Props: { Dogs }
 * State: None
 *
 * App -> RoutesList -> { DogFilter }
 */

function DogFilter({ dogs }) {

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
  }

  if (!dog) {
    return (
      <div>
        <p> No such dog: "{name}"</p>
        <Link to="/">Back to all dogs</Link>
      </div>
    );
  } else {
    return (
      <Dog dog={dog} />
    );
  }


}


export default DogFilter;