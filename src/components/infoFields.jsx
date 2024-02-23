/* eslint-disable react/prop-types */
function capitalized(word) {
  const w = word.charAt(0).toUpperCase();
  const ord = word.substring(1);
  return w + ord;
}
function Info({ field, info }) {
  return (
    <>
      <label htmlFor={'preview-' + field}>{capitalized(field)}</label>{' '}
      <p id={'preview-' + field}>{info || 'My ' + field + ' here'}</p>
    </>
  );
}

function InputOrDisplay({ data, onChange, field, inputType, isInput }) {
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
        <Info field={field} info={data} />
      </>
    )
  );
}

function GeneralInfoFields({ isInput, generalInfo, onChange }) {
  return (
    <>
      <InputOrDisplay
        data={generalInfo.name}
        onChange={isInput && onChange}
        field="name"
        inputType="text"
        isInput={isInput}
      />
      <InputOrDisplay
        data={generalInfo.email}
        onChange={isInput && onChange}
        field="email"
        inputType="email"
        isInput={isInput}
      />
      <InputOrDisplay
        data={generalInfo.tel}
        onChange={isInput && onChange}
        field="tel"
        inputType="tel"
        isInput={isInput}
      />
    </>
  );
}

export { InputOrDisplay, GeneralInfoFields };
