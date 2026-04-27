import { DEFAULT_SELECT_PLACEHOLDER } from "../constants/constants";

function SelectListWithTitle({
  name,
  id,
  value,
  onChange,
  isTitle,
  isDefaultOption = true,
  children,
}) {
  return (
    <>
      {isTitle !== "" ? <p>{isTitle}</p> : ""}
      <select name={name} id={id} value={value} onChange={onChange}>
        {/*Default select option*/}
        {isDefaultOption ? (
          <option value="">{DEFAULT_SELECT_PLACEHOLDER}</option>
        ) : (
          ""
        )}
        {children}
      </select>
    </>
  );
}

export default SelectListWithTitle;
