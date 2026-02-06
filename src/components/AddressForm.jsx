import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateAddress } from "../feature/checkout-slice";
import { useTheme } from "@mui/material";

export default function AddressForm() {
  const address = useSelector((state) => state.checkout?.address);
  const dispatch = useDispatch();
  const theme = useTheme();
  function handleChange(event) {
    console.dir(event.target);
    const { name, value } = event.target ?? {};
    console.log(name, value);
    dispatch(updateAddress({ [name]: value }));
    event.preventDefault();
  }

  function Submit(event){
    event.preventDefault();
    alert("Address Updated")
    console.log(event.target);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Addresss
      </Typography>
      <Box component="form" onChange = {handleChange}  onSubmit={Submit}>
     
          <Grid item xs={12} sm={6}>
            <TextField
            required
            minLength="3"
            maxLength="10"
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              defaultValue={address.firstName ?? ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              required
              maxLength="10"
              minLength="3"
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              defaultValue={address.lastName ?? ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
            id="address1"
            name="address1"
            minLength="5"
            maxLength="30"
            label="Address Line 1"
            fullWidth
            variant="standard"
            defaultValue={address.address1 ?? ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
            id="address2"
            name="address2"
            minLength="5"
            maxLength="30"
            label="Address Line 2"
            fullWidth
            variant="standard"
            defaultValue={address.address2 ?? ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
            id="city"
            minLength="5"
            maxLength="15"
            name="city"
            label="City"
            fullWidth
            variant="standard"
            defaultValue={address.city ?? ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
            minLength="6"
            maxLength="6"
            type="number"
            id="zipCode"
            name="zipCode"
            label="Zip Code/Postal Code"
            fullWidth
            variant="standard"
            defaultValue={address.zipCode ?? ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="standard"
            defaultValue={address.country ?? ""}
            />
          </Grid>
       
        <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          margin: theme.spacing(3, 0, 2),
        }}
      >
        Update Address
      </Button>
      </Box>
    </>
  );
}
