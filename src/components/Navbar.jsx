import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>

        <Button color="inherit" component={Link} to="/cart">
          Cart ({cartItems.length})
        </Button>

        <Button color="inherit" component={Link} to="/orders">
          Orders
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;