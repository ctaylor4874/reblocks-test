// @flow
import React, { Component } from "react";
import { ReblocksPayment } from "reblocks";

const ACCOUNT_ID = "234";

const onSuccess = (data: PaymentResponse) => {
  console.log("Payment successful.");
  console.log(`Transaction ID: ${data.token}`);
};
class TestComponent extends Component {
  constructor(props: {}) {
    super(props);
    this.state = { accountId: ACCOUNT_ID, amount: 10000 };
  }

  onChangeAccountId = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    this.setState({ accountId: event.currentTarget.value });
  };

  onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    this.setState({ amount: parseFloat(event.currentTarget.value) });
  };

  render() {
    return (
      <div>
        <form>
          <p>
            Filling in the form below will dynamically change the payment button with the new account and amount
            specified
          </p>
          <fieldset>
            <label>Account ID</label>
            <input
              type="text"
              value={this.state.accountId}
              placeholder="Account ID"
              onChange={this.onChangeAccountId}
            />
            <label>Amount (in rai, 1,000,000 rai = 1 XRB)</label>

            <input type="number" value={this.state.amount} placeholder="Amount of rai" onChange={this.onChangeAmount} />
            <ReblocksPayment accountId={this.state.accountId} amount={this.state.amount} onPaymentSuccess={onSuccess} />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default TestComponent;
