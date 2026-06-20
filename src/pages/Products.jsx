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
  Box,
} from "@mui/material";

function Products() {
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

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

      <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
        <Button
          variant={viewMode === "grid" ? "contained" : "outlined"}
          onClick={() => setViewMode("grid")}
        >
          Grid View
        </Button>

        <Button
          variant={viewMode === "list" ? "contained" : "outlined"}
          onClick={() => setViewMode("list")}
        >
          List View
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: viewMode === "grid" ? "repeat(4, 1fr)" : "1fr",
          gap: 3,
        }}
      >
        {products.map((product) => (
          <Card
            sx={{
              height: viewMode === "grid" ? 430 : 180,
              width: viewMode === "grid" ? "100%" : 900,
              display: "flex",
              flexDirection: viewMode === "grid" ? "column" : "row",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <Box
              sx={{
                display: viewMode === "list" ? "flex" : "block",
                alignItems: "center",
                justifyContent: "center",
                width: viewMode === "list" ? 250 : "100%",
                minWidth: viewMode === "list" ? 250 : undefined,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  objectFit: "cover",
                  width: viewMode === "grid" ? "100%" : 180,
                  height: viewMode === "grid" ? 220 : 180,
                  borderRadius: 2,
                }}
                image={product.image}
                alt={product.name}
              />
            </Box>

            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" fontWeight="bold" noWrap>
                {product.name}
              </Typography>

              <Typography sx={{ mb: 1 }}>€{product.price}</Typography>

              <Typography sx={{ flexGrow: 1 }}>
                {product.description}
              </Typography>

              <Button
                component={Link}
                to={`/products/${product.id}`}
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </PageContainer>
  );
}

export default Products;