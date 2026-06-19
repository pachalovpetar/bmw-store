import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

const handleSubmit = (event) => {
  event.preventDefault();

  const order = {
    customer: formData,
    products: items,
  };

  axios
    .post("http://localhost:3001/orders", order)
    .then(() => {
      alert("Order submitted successfully!");
    })
    .catch((error) => {
      console.error("Error submitting order:", error);
    });
};

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {items.length === 0 ? (
        <Typography>Cart is empty</Typography>
      ) : (
        <>
          {items.map((item, index) => (
            <Card key={index} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>€{item.price}</Typography>
              </CardContent>
            </Card>
          ))}

          <Typography variant="h5" sx={{ marginTop: 3, marginBottom: 2 }}>
            Checkout
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
            }}
          >
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <Button type="submit" variant="contained">
              Place Order
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Cart;