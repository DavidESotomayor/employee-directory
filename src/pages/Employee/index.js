import React, { useEffect} from 'react'
import fetchAxios from '../../utils/fetch'

function Employee() {

useEffect(() => {
    fetchAxios({
        method: 'GET',
        url: 'https://randomuser.me/api/'
    }).then(console.log)
}, [])

  return (
    <h1>Hello!</h1>
  );
}

export default Employee;
