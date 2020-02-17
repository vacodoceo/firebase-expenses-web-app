import React, { Component } from "react";
import { Container } from "@material-ui/core";
import MaterialTable from "material-table";

class ExpensesList extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div style={{ maxWidth: "90%" }}>
        <MaterialTable
          columns={[
            { title: "Fecha", field: "date", type: "date" },
            { title: "Autor", field: "author" },
            { title: "Tipo", field: "type" },
            { title: "Monto", field: "amount", type: "numeric" }
          ]}
          data={expenses}
          title="Demo Title"
        />
      </div>
    );
  }
}

export default ExpensesList;
