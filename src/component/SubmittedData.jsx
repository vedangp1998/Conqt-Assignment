import { Typography, Box, Button } from "@mui/material";

const SubmitteData = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            alignItem: "center",
            marginTop: "2rem",
          }}
        >
          Submitted Data
        </Typography>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          The data submitted by users will be displayed below
        </Typography>
        <Button
          sx={{
            background: "#007AFF",
            width: "240px",
            height: "48px",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
            color: "#ffffff",
          }}
        >
          Submit Data
        </Button>
      </Box>
    </>
  );
};

export default SubmitteData;
