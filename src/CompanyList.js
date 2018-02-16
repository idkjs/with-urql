import React from "react";
// import Loading from "./Loading";
// import Error from "./Error";
import Company from "./company";

class CompanyList extends React.Component {
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
    const { loaded, companies } = this.props;
    console.log(this.props);
    return loaded === false ? (
      "loading"
    ) : (
      <div>
        <ul className="company-list">
          {companies.map(d => (
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

export default CompanyList;
