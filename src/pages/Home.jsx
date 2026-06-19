import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/bmw-logo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        px: 8,
      }}
    >
      <Box sx={{ maxWidth: 700 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          BMW Store
        </Typography>

        <Typography variant="h5" gutterBottom>
          Premium BMW accessories for your car.
        </Typography>

        <Typography sx={{ mb: 4, fontSize: "18px" }}>
          Explore original BMW parts, interior accessories, performance upgrades
          and lifestyle products in one modern single page application.
        </Typography>

        <Button
          component={Link}
          to="/products"
          variant="contained"
          size="large"
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}

export default Home;