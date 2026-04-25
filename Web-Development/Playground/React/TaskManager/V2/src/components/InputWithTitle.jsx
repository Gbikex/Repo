function InputWithTitle({ placeholder, value, onChange, isTitle }) {
  return (
    <>
      <p>{isTitle}</p>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}

export default InputWithTitle;
