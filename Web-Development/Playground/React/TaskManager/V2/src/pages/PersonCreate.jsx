import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";

import { usePerson } from "../context/Person";

function PersonCreate() {
  const { firstName, lastName } = usePerson();

  return (
    <>
      <p>Person Create Page</p>
      <div>
        <ButtonBack />
        <Button type="primary">Reset</Button>
      </div>
      <div>
        <p>Person Full Name</p>
        <input></input>
      </div>
      <div>
        <Button type="create">Create</Button>
      </div>
    </>
  );
}

export default PersonCreate;
