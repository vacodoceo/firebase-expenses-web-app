import React, { Component } from "react";
import RegisterExpense from "./RegisterExpense";
import ExpensesList from "./ExpensesList";
import Firebase from "firebase";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: undefined,
      type: "Bencina",
      expenses: []
    };

    this.writeExpensesData = this.writeExpensesData.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleAmountChange = e => {
    const amount = e.target.value;
    this.setState({ amount });
  };

  handleTypeChange = e => {
    const type = e.target.value;
    this.setState({ type });
  };

  writeExpensesData = () => {
    let { expenses } = this.state;
    expenses.push({
      amount: this.state.amount,
      type: this.state.type,
      author: this.props.user.displayName,
      date: Firebase.database.ServerValue.TIMESTAMP
    });
    Firebase.database()
      .ref("/")
      .set(expenses);
  };

  getExpensesData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      let expenses = snapshot.val();
      this.setState({ expenses });
    });
  };

  componentDidMount() {
    this.getExpensesData();
  }

  render() {
    const { amount, type } = this.state;
    const { user, signOut } = this.props;
    return (
      <div>
        <p>Bienvenido {user.displayName}</p>
        <button onClick={signOut}>Sign out</button>
        <RegisterExpense
          onSubmit={this.writeExpensesData}
          amount={amount}
          type={type}
          handleAmountChange={this.handleAmountChange}
          handleTypeChange={this.handleTypeChange}
        />
        <ExpensesList expenses={this.state.expenses} />
      </div>
    );
  }
}

export default Menu;
