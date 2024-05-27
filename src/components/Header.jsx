import { NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="mb-3 p-4">
      <div className="container d-flex justify-content-between">
        <h2>TOOLKIT</h2>
        <nav className="d-flex gap-3">
          <NavLink to="/"></NavLink>
          <NavLink to="/crud">C.R.U.D.</NavLink>
          <button onClick={() => dispatch(toggleTheme())}>Change Theme</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
