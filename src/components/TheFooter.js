export default function TheFooter() {
  const navFooter = ["Home Page", "Chi Siamo", "Le ultime news"];

  function handlerClick(text) {
    console.log(text);
  }

  return (
    <footer>
      <nav>
        <ul>
          {navFooter.map((elm, index) => (
            <li key={index}>
              <a href="#">{elm}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="btn btn__primary" onClick={() => handlerClick("ciao")}>
        Accedi
      </button>
    </footer>
  );
}
