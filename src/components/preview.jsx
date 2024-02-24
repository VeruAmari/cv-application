import { toggleHideForm } from './hideForm';
/* eslint-disable react/prop-types */
function Preview({ children }) {
  return (
    <div className="preview-panel">
      <div className="header">
        <button
          className="toggleForm"
          onClick={() => {
            toggleHideForm();
          }}
        >
          Toggle Form
        </button>
        <h2>CV Preview</h2>
      </div>
      <div className="preview">{children}</div>
    </div>
  );
}

export { Preview };
