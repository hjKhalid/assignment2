import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from './MOCK_DATA (1).json'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email', headerName: 'Email', width: 200
  },
  {
    field: 'gender', headerName: 'Gender', width: 90
  },
  {
    field: 'ip_address', headerName: 'IP Address', width: 100
  },
  {
    field: 'time', headerName: 'Time', width: 100
  },
  {
    field: 'status', headerName: 'Status', width: 100
  },
  {
    field: 'mobile', headerName: 'Mobile', width: 100
  },

]
// for(let i =0;i<=data.length;i++){
//     var name=[
//         data[1].first_name

//     ];
//     console.log(name);
// }
// data.forEach(element => {
//   var rows = 
//     {
//       id:(data.id), lastName:"", firstName:"", age:"", email:"", mobile:"", ip_address: "", gender:""
//     }
  
//   console.log(rows)
// }

// );

for (let i=1; i <data.length; i++) {
  
  for(let j=1;j<data.length;j++){
  var rows = [
    
    {
      id: (data[j].id), lastName: (data[i].last_name), firstName: (data[j].first_name), age: (data[i].age), email: (data[i].email), mobile: (data[i].mobile), ip_address: (data[i].ip_address), gender: (data[i].gender),status:(data[i].status),time:(data[i].time)
    },
     {
       id: (data[1].id), lastName: (data[1].last_name), firstName: (data[1].first_name), age: (data[1].age), email: (data[1].email), mobile: (data[1].mobile), ip_address: (data[1].ip_address), gender: (data[1].gender)
     },
    {
      id: (data[2].id), lastName: (data[2].last_name), firstName: (data[2].first_name), age: (data[2].age), email: (data[1].email), mobile: (data[1].mobile), ip_address: (data[1].ip_address), gender: (data[2].gender)
     },{
       id: (data[3].id), lastName: (data[3].last_name), firstName: (data[3].first_name), age: (data[3].age), email: (data[3].email), mobile: (data[3].mobile), ip_address: (data[3].ip_address), gender: (data[3].gender)
     }
  ]
}
}

//   console.log(rows)
// }


export default function DataTable() {
  return (<>
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}

      />
    </div></>
  );
}