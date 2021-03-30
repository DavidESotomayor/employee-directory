import React, { useEffect, useState } from 'react'
import fetchAxios from '../../utils/fetch'
import MaterialTable from './../../components/Table.js'

function Employee() {
  const [rows, setRows] = useState([])
  useEffect(() => {
    let mounted = true;
    fetchAxios({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=100'
    }).then(response => {
      if (mounted) {
        const data = (response.results || []).map(item => {
          return {
            name: `${item.name.first} ${item.name.last}`, 
            age: item.dob.age, 
            email: item.email,
          }
        })
        setRows(data)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Age', field: 'age' },
          { title: 'Email', field: 'email' },
        ]}
        data={rows}
        title="Employee"
      />
    </div>
  );
}

export default Employee;
