import { toggleHideForm } from './hideForm';
/* eslint-disable react/prop-types */
function Form({ children }) {
  function handle(e) {
    e.preventDefault();
    toggleHideForm();
  }
  return (
    <form className="form" action="" onSubmit={handle}>
      <h2>CV Info</h2>
      {children}
      <button type="submit" onSubmit={handle}>
        Hide Form
      </button>
    </form>
  );
}

export { Form };
