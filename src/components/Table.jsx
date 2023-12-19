const Table = ({ sat }) => {
  return (
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Type of Satelite</th>
           <th>Launch Date</th>
           <th>Status</th>
         </tr>
       </thead>
       <tbody>
         {sat.map((data) => {
           return (
             <tr key={data.name}>
               <td>{data.name}</td>
               <td>{data.type}</td>
               <td>{data.launchDate}</td>
               <td>{data.operational ? 'This satelite is online' : 'This satelite is offline'}</td>
             </tr>
           );
         })}
       </tbody>
     </table>
  );
 };
 
 export default Table;