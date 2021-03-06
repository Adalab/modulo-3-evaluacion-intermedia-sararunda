const Header = (props) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="title">Frases de Friends</h1>
        <form action="">
          <label className="label" htmlFor="text">
            Filtrar por frase
          </label>
          <input
            className="input"
            type="text"
            onChange={props.handleChangeFilter}
            value={props.inputSearch}
          />
          <label className="label" htmlFor="select">
            Filtrar por personaje
          </label>
          <select name="select" id="select" onChange={props.handleChangeSelect}>
            <option value="">Todos</option>
            <option value="ross">Ross</option>
            <option value="monica">Monica</option>
            <option value="joey">Joey</option>
            <option value="phoebe">Phoebe</option>
            <option value="chandler">Chandler</option>
            <option value="rachel">Rachel</option>
          </select>
        </form>
      </div>
    </header>
  );
};
export default Header;
