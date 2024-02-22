/* eslint-disable react/prop-types */
function capitalized(word) {
  const w = word.charAt(0).toUpperCase();
  const ord = word.substring(1);
  return w + ord;
}
function Info({ type, info }) {
  return (
    <>
      <label htmlFor={'preview-' + type}>{capitalized(type)}</label>{' '}
      <p id={'preview-' + type}>{info || 'My ' + type + ' here'}</p>
    </>
  );
}
function Data({ data, onChange, field, inputType, isInput }) {
  return (
    (isInput && (
      <>
        <label htmlFor={field}>{capitalized(field)}</label>
        <input
          value={data}
          type={inputType}
          name={field}
          id={field}
          placeholder={capitalized(field)}
          onChange={onChange}
        />
      </>
    )) || (
      <>
        <Info type={field} info={data} />
      </>
    )
  );
}
export { Data };
