import { Typography, Box, Button } from "@mui/material";
import Icon from "../assets/Icon.png";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          background: "#007AFF",
          height: "80px",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={Icon} alt="Icon" />
          <Typography color="tertiory" variant="h2">
            Inventory Management System
          </Typography>
        </Box>
        <Button variant="h2" sx={{ background: "white" }}>
          Home
        </Button>
      </Box>
    </>
  );
};

export default Header;
