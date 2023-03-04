import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
function ManageProduit() {
  return (
    <>
        <Button variant='primary' className='buttonAdd'> Ajouter </Button>
        <div >
            <Table sresponsive="md" className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>prise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td className='flex-grow-3 pe-8'>
                            <Button className='button' variant="primary" >Edit</Button>
                            <Button className='button' variant="danger" >Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </>
  )
}

export default ManageProduit