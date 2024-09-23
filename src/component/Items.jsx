import { Typography, Box } from "@mui/material";

const Items = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "2rem",
          }}
        >
          Items Details
        </Typography>
        <form>
          <Box
            sx={{
              background: "#EBEEFD",
              width: "100%",
              maxWidth: "1100px",
              margin: "1rem auto",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItem: "center",
                    gap: "8px",
                  }}
                >
                  <Typography variant="h4">Item Name</Typography>
                  <input
                    type="text"
                    placeholder="Enter Item Name"
                    style={{
                      width: "478px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "16px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Max 50 Cheracters
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItem: "center",
                    gap: "6px",
                  }}
                >
                  <Typography variant="h4">Unit Price</Typography>
                  <input
                    type="text"
                    placeholder="Enter Unit Price"
                    style={{
                      width: "478px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "16px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Numeric value (USD)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItem: "center",
                    gap: "8px",
                  }}
                >
                  <Typography variant="h4">Quantity</Typography>
                  <input
                    type="text"
                    placeholder="Enter Quantity"
                    style={{
                      width: "478px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "16px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Numeric value
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItem: "center",
                    gap: "6px",
                  }}
                >
                  <Typography variant="h4">Date of Submission</Typography>
                  <input
                    type="date"
                    placeholder="Select Date"
                    style={{
                      width: "478px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "16px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Format: MM/DD/YYYY
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Items;
