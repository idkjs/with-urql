import React from "react";

class Error extends React.Component {
  render() {
    const { error } = this.props;
    console.log(error);
    return (
      <div>
        <h2>Oops. Something bad happened</h2>
        <p>{error.message}</p>
      </div>
    );
  }
}

export default Error;
