import React from "react";
import ReactDOM from "react-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import pokemons from "./pokemons";

export default function App(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleClick}>Pokemons</button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {pokemons.map(pokemon => {
          return <MenuItem onClick={handleClose}>{pokemon}</MenuItem>;
        })}
      </Menu>
      <br />
      Sitewide search:
      <input
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
