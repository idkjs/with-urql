import React from "react";
import { Connect, query } from "urql";

import Company from "./company";

const CompanyQuery = query(`
{
  allCompanies {
    id,
    name,
    twitter,
    logo
  }
}
`);

export default class Companies extends React.Component {
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
    return (
      <div>
        <Connect
          query={CompanyQuery}
          render={({ loaded, data, error }) => {
            return loaded === false ? (
              "loading"
            ) : (
              <div>
                <ul className="company-list">
                  {data.allCompanies.map(d => (
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
              </div>
            );
          }}
        />
        {this.state.selected && (
          <Company id={this.state.selected} onClose={this.unsetSelected} />
        )}
      </div>
    );
  }
}
