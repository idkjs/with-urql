// import React from "react";
// import { graphql } from "react-apollo";
// import { loader } from "graphql.macro";

// const QueryString = `
// query Company($id: ID) {
//   Company(id: $id) {
//     id
//     name
//     description
//     sector
//     logo
//   }
// }
// `;

// const CompanyQuery = loader("./graphql/company.gql");

// const Company = ({ id, onClose }) => (
//   <div>
//     <Connect
//       query={graphql(CompanyQuery)}
//       query={query(QueryString, { id: id })}
//       render={({ loaded, data }) => {
//         return (
//           <div className="modal">
//             {loaded === false ? (
//               <p>Loading</p>
//             ) : (
//               <div>
//                 <h2>{data.Company.name}</h2>
//                 <p>{data.Company.description}</p>
//                 <button onClick={onClose}>Close</button>
//               </div>
//             )}
//           </div>
//         );
//       }}
//     />
//   </div>
// );

// export default Company;
