import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <PageContainer>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        BMW Products
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.03)" }
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  €{product.price}
                </Typography>

                <Typography sx={{ flexGrow: 1 }}>
                  {product.description}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Button
                    component={Link}
                    to={`/products/${product.id}`}
                    variant="contained"
                    fullWidth
                    size="large"
                  >
                    View Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}

export default Products;