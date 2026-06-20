import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import PageContainer from "../components/PageContainer";

import {
  Box,
  Button,
  CardMedia,
  Typography,
} from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <PageContainer>Loading product...</PageContainer>;
  }

  return (
    <PageContainer>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: 500,
            maxWidth: "100%",
            borderRadius: 3,
            objectFit: "cover",
          }}
        />

        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {product.name}
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            €{product.price}
          </Typography>

          <Typography sx={{ mb: 3 }}>
            {product.description}
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => dispatch(addToCart(product))}
            >
            Add To Cart
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
}

export default ProductDetails;