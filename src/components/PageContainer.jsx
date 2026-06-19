import { Container, Paper } from "@mui/material";

function PageContainer({ children }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 4,
        px: 6,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "rgba(255,255,255,0.95)",
        }}
      >
        {children}
      </Paper>
    </Container>
  );
}

export default PageContainer;