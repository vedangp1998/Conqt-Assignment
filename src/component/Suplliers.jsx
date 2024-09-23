import { Typography, Box, Select } from "@mui/material";

const Suppliers = () => {
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
          Supplier Details
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
                  <Typography variant="h4">Supplier Name</Typography>
                  <input
                    type="text"
                    placeholder="Enter supplier name"
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
                  <Typography variant="h4">Country</Typography>
                  {/* <input
                    type="dropdown"
                    placeholder="USA"
                    style={{
                      width: "478px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                  /> */}
                  <Select
                    label="USA"
                    sx={{
                      width: "478px",
                      height: "36px",
                      padding: "10px",
                      borderRadius: "6px",
                      background: "#ffffff",
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
                    Select country from the list
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
                  <Typography variant="h4">Company Name</Typography>
                  <input
                    type="text"
                    placeholder="Enter Company name"
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
                    Max 50 characters
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
                  <Typography variant="h4">State</Typography>
                  <input
                    type="date"
                    placeholder="florida"
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
                    Select state from the list
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                marginTop: "40px",
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
                  <Typography variant="h4">City</Typography>
                  {/* <input
                    type="text"
                    placeholder="Enter City"
                    style={{
                      width: "478px",
                      height: "36px",
                      padding: "10px",
                      borderRadius: "6px",
                      background: "#ffffff",
                    }}
                  /> */}
                  <Select
                    label="Select City"
                    sx={{
                      width: "478px",
                      height: "36px",
                      padding: "10px",
                      borderRadius: "6px",
                      background: "#ffffff",
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
                  <Typography variant="h4">Email Address</Typography>
                  <input
                    type="dropdown"
                    placeholder="Enter email address"
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
                    Valid email format
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItem: "center",
                    gap: "8px",
                  }}
                >
                  <Typography variant="h4">Email Address</Typography>
                  <input
                    type="text"
                    placeholder="Enter email address"
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
                    Valid email format
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

export default Suppliers;
