import { DEFAULT_SELECT_PLACEHOLDER } from "../constants/constants";

function SelectListWithTitle({ name, id, value, onChange, isTitle, children }) {
  return (
    <>
      {isTitle !== "" ? <p>{isTitle}</p> : ""}
      <select name={name} id={id} value={value} onChange={onChange}>
        {/*Default select option*/}
        <option value="">{DEFAULT_SELECT_PLACEHOLDER}</option>
        {children}
      </select>
    </>
  );
}

export default SelectListWithTitle;
