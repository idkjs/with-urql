import React from "react";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Fetching } from "./Fetching";
import Error from "./Error";

const CO_ID_QUERY = gql`
  query Company($id: ID) {
    company(where: { id: $id }) {
      id
      ...CompanyFragment
    }
  }

  fragment CompanyFragment on Company {
    name
    description
    sector
    logo
  }
`;

const Company = ({ id, onClose }) => (
  <Query query={CO_ID_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <Fetching />;
      if (error) return <Error />;
      return (
        <div className="modal">
          <div>
            <h2>{data.company.name}</h2>
            <p>{data.company.description}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      );
    }}
  </Query>
);

export default Company;
