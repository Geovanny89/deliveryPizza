import React, { useState } from 'react'
import { TextField, Button, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux'
import { register } from '../../Redux/Action/index';

import './register.css'


export default function Register() {
    const dispatch = useDispatch();
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        identity: '',
        email: '',
        password: '',
        phone:'',
        adress:''
    });
    console.log(formData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const [formErrors, setFormErrors] = useState({
        name: '',
        lastName: '',
        identity: '',
        email: '',
        password: '',
        phone: '',
        adress: '',
      });
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Dispatches the register action with the form data
            await dispatch(register(formData));
            console.log('Registration successful');
            setRegistrationSuccess(true);
            setEmailExists(false);
            setFormData({
                name: '',
                lastName: '',
                identity: '',
                email: '',
                password: '',
                phone:'',
                adress:''
            });
            // You can redirect the user or show a success message here
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.error === 'El correo electrónico ya está registrado') {
                setEmailExists(true);
                setRegistrationSuccess(false);
            } else {
                console.error('Error during registration:', error.message);
                // Handle other registration errors (display an error message, etc.)
                setRegistrationSuccess(false);
                setEmailExists(false);
            }
        }

    };
    return (
        <Container component="main" maxWidth="xs" className='contenedor-register'>
            {registrationSuccess && (
                    <div className="success-alert">
                        <Typography variant="body1">Usuario registrado correctamente.</Typography>
                    </div>
                )}
                {emailExists && (
                    <div className="error-alert">
                        <Typography variant="body1">El correo electrónico ya está registrado.</Typography>
                    </div>
                )}
            <div>
                {/* <Typography component="h1" variant="h5">
                    <img src={Logo} alt="Img Not Found" width="200px" />
                </Typography> */}
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="identidad"
                        name="identity"
                        value={formData.identity}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Telefono"
                        name="phone"
                        type="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Dirección"
                        name="adress"
                        type="adress"
                        value={formData.adress}
                        onChange={handleChange}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Register
                    </Button>
                    <Button href='/login'  variant="contained" color="primary">
                        Volver
                    </Button>
                </form>
                
            </div>
        </Container>
    )
}
