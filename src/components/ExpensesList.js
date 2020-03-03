import React, { Component } from "react";
import MaterialTable from "material-table";

class ExpensesList extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div style={{ maxWidth: "90%" }}>
        <MaterialTable
          columns={[
            {
              title: "Fecha",
              field: "date",
              type: "date"
            },
            { title: "Autor", field: "author" },
            { title: "Tipo", field: "type" },
            { title: "Monto", field: "amount", type: "numeric" }
          ]}
          data={expenses.map(e => ({
            author: e.author,
            type: e.type,
            amount: e.amount,
            date: new Date(e.date)
          }))}
          title="Demo Title"
        />
      </div>
    );
  }
}

export default ExpensesList;
