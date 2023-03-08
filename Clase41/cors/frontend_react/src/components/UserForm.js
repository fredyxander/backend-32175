import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserForm = ()=> {

    const handleSubmitForm = async(event)=>{
        event.preventDefault();
        const newUser = {
            nombre:event.target[0].value,
            apellido:event.target[1].value,
            dni:event.target[2].value
        };
        console.log(newUser);
        await fetch("http://localhost:8080/users",{
            method:"POST",
            body:JSON.stringify(newUser),
            headers:{"Content-type":"application/json"}
        });
        window.location.reload(true);
    };

    return (
        <div className='formContainer'>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Apellido" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar DNI" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    );
}

export {UserForm};