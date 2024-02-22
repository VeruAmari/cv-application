/* eslint-disable react/prop-types */
function Form({ children }) {
  function handle(e) {
    e.preventDefault();
  }
  return (
    <form action="" onSubmit={handle}>
      {children}
    </form>
  );
}

export { Form };
