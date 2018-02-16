import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Loading from "./Loading";
import Error from "./Error";
import CompanyList from "./CompanyList";
// import Company from "./company";

const CO_QUERY = gql`
  query companies {
    companies {
      id
      ...CompanyFragment
    }
  }

  fragment CompanyFragment on Company {
    name
    description
    sector
    logo
    twitter
  }
`;

const Companies = () => (
  <Query query={CO_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <Error />;
      const { companies } = data;
      // const companiesList = companies.map(company => <li>{company.name}</li>);
      // console.log("LIST", companiesList);
      // console.log("DATA_Companies", JSON.stringify(data, null, 2));
      return <CompanyList companies={companies} />;
      // return <ul className="company-list">{companiesList} </ul>;
    }}
  </Query>
);

export default Companies;
