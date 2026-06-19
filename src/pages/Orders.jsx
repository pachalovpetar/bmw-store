import { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>

      {orders.map((order) => (
        <Card
          key={order.id}
          sx={{ marginBottom: 2 }}
        >
          <CardContent>
            <Typography>
              Customer: {order.customer.name}
            </Typography>

            <Typography>
              Email: {order.customer.email}
            </Typography>

            <Typography>
              Products: {order.products.length}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Orders;