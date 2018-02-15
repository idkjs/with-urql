import React from "react";
// import { Connect, query } from "urql";
import { graphql } from "react-apollo";
import { loader } from "graphql.macro";
import Company from "./company";

const CompanyQuery = loader("./gql/query.gql");

// class Companies extends React.Component {
//   render() {
//     const { data: { allCompanies = [] } } = this.props;
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         allCompanies:
//         <pre>{JSON.stringify(allCompanies, null, 2)}</pre>
//         Data from:{" "}
//         <a href="https://github.com/evenchange4/todomvc-subscriptions">
//           todomvc-subscriptions
//         </a>
//       </div>
//     );
//   }
// }

// export default graphql(CompanyQuery)(Companies);
class Companies extends React.Component {
  state = {
    selected: null
  };
  setSelected = id => {
    this.setState({
      selected: id
    });
  };
  unsetSelected = () => {
    this.setState({
      selected: null
    });
  };
  render() {
    const { loaded, data: { allCompanies = [] } } = this.props;
    console.log(this.props);
    return loaded === false ? (
      "loading"
    ) : (
      <div>
        <ul className="company-list">
          {allCompanies.map(d => (
            <li key={d.id} className="company-list-item">
              <button
                type="button"
                onClick={this.setSelected.bind(null, d.id)}
                className="button-wrapper"
              >
                <img src={d.logo} alt="company poster" />
                <h2>{d.name}</h2>
                <p>Twitter: {d.twitter}</p>
              </button>
            </li>
          ))}
        </ul>
        {this.state.selected && (
          <Company id={this.state.selected} onClose={this.unsetSelected} />
        )}
      </div>
    );
  }
}
export default graphql(CompanyQuery)(Companies);
