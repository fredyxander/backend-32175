import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const UsersTable =({users})=> {

    const handleDeleteUser = async(user)=>{ };

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length && users.map(user=>(
                        <tr key={user._id}>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.dni}</td>
                            <td>
                                <Button variant="outline-primary" onClick={()=>handleDeleteUser(user)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}
export {UsersTable};