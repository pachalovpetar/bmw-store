import { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import PageContainer from "../components/PageContainer";

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
            <Typography variant="h6" gutterBottom>
              Order #{order.id}
            </Typography>

            <Typography>
              Customer: {order.customer.name}
            </Typography>

            <Typography>
              Email: {order.customer.email}
            </Typography>

            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              Products Ordered:
            </Typography>

            {order.products.map((product, index) => (
              <Typography key={index}>
                • {product.name}
              </Typography>
            ))}

            <Typography sx={{ mt: 2 }}>
              Total Items: {order.products.length}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Orders;