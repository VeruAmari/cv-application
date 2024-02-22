/* eslint-disable react/prop-types */
function Section({ children, sectionClass, sectionName, type }) {
  return (
    (type === 'form' && (
      <fieldset className={`form section ${sectionClass}`}>
        <legend>{sectionName}</legend>
        {children}
      </fieldset>
    )) ||
    (type === 'preview' && (
      <>
        <h2>{sectionName}</h2>
        {children}
      </>
    ))
  );
}

export { Section };
