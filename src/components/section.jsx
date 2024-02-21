function Section({ children, sectionClass, sectionName }) {
  return (
    <div className={`section ${sectionClass}`}>
      <h1>{sectionName}</h1>
      {children}
    </div>
  );
}

export { Section };
