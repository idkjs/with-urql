import React from "react";
import { graphql } from "react-apollo";
import { loader } from "graphql.macro";

const CompanyIdQuery = loader("./gql/company.gql");

// function Company({ id }) {
//   return (
//     <h6>
//       {Company.name}: {Company.description}
//     </h6>
//   );
// }
function CompanyCom({ loaded, props, data, id, onClose }) {
  console.log(id);
  console.log(props);
  console.log("DATA: ", data);
  const { Company } = data;
  console.log("COMPANY", Company);
  // console.log(CompanyIdQuery);
  return (
    // const { Company } = data,

    <div className="modal">
      {loaded === false ? (
        <p>Loading</p>
      ) : (
        (console.log("DATA", data.Company),
        (
          <div>
            {/* <h2>{data.Company.name}</h2> */}
            <pre>{JSON.stringify(Company, null, 2)}</pre>
            {/* <h3>{Company.description}</h3>
        <p>{Company.id}</p> */}
            <button onClick={onClose}>Close</button>
          </div>
        ))
      )}
    </div>
  );
}

export default graphql(CompanyIdQuery)(CompanyCom);
