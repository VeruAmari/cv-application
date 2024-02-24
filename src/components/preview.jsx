/* eslint-disable react/prop-types */
function Preview({ children }) {
  return (
    <div className="preview-panel">
      <h1>CV Preview</h1>
      <div className="preview">{children}</div>
    </div>
  );
}

export { Preview };
