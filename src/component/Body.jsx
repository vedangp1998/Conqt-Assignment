import { FormGroup, Box, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

const Body = () => {
  const [checkedItems, setCheckedItems] = useState({
    Item: "false",
    Suppliers: "false",
  });
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <FormGroup row>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.items}
                  onChange={handleChange}
                  name="Item"
                />
              }
              label="Items"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.items}
                  onChange={handleChange}
                  name="Suppliers"
                />
              }
              label="Suppliers"
            />
          </Box>
        </FormGroup>
      </Box>
    </>
  );
};

export default Body;
