import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";

import { usePerson } from "../context/Person";

function PersonCreate() {
  const { id, firstName, lastName, dispatch } = usePerson();

  function handleFNameInput(e) {
    dispatch({ type: "personFirsNameInput", payLoad: e.target.value });
  }

  function handleLNameInput(e) {
    dispatch({ type: "personLastNameInput", payLoad: e.target.value });
  }

  function handleCreatePerson() {
    const newPerson = {
      firstName,
      lastName,
    };

    dispatch({ type: "personCreateNew", payLoad: newPerson });
  }

  function handleResetPerson() {
    dispatch({ type: "personResetInput" });
  }

  return (
    <>
      <p>Person Create Page</p>
      <div>
        <ButtonBack />
        <Button type="primary">Reset</Button>
      </div>
      <div>
        <p>First Name</p>
        <input value={firstName} onChange={(e) => handleFNameInput(e)}></input>
        <p>Last Name</p>
        <input value={lastName} onChange={(e) => handleLNameInput(e)}></input>
      </div>
      <div>
        <Button
          type="create"
          onClick={() => {
            handleCreatePerson();
            handleResetPerson();
          }}
        >
          Create
        </Button>
      </div>
    </>
  );
}

export default PersonCreate;
