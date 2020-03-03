import React, { Component } from "react";
import {
  Button,
  Container,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

class RegisterExpense extends Component {
  render() {
    const {
      type,
      amount,
      onSubmit,
      handleAmountChange,
      handleTypeChange
    } = this.props;

    return (
      <Container>
        <TextField
          error={amount <= 0}
          id="amount"
          label="Monto del gasto"
          type="number"
          value={amount}
          inputProps={{ step: "1000" }}
          onChange={e => handleAmountChange(e)}
        />
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={type}
          onChange={e => handleTypeChange(e)}
        >
          <FormControlLabel
            value="Bencina"
            control={<Radio />}
            label="Bencina"
          />
          <FormControlLabel
            value="Materiales"
            control={<Radio />}
            label="Materiales"
          />
          <FormControlLabel value="Otros" control={<Radio />} label="Otros" />
        </RadioGroup>
        <Button onClick={onSubmit} variant="contained">
          Ingresar Gasto
        </Button>
      </Container>
    );
  }
}

export default RegisterExpense;
