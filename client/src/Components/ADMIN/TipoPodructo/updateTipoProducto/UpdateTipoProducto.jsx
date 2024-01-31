import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  updateCategori } from '../../../../Redux/Action';
import {  Snackbar, TextField } from '@mui/material';
// import './tipoProduct.css';

export default function UpdateTipoProducto({id}) {
    const dispatch = useDispatch();
    const [tipeProduct, setTipeProduct] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(true);

    console.log("Hola soy el tipo ", tipeProduct)
    const handleChange = (e) => {
        setTipeProduct(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!tipeProduct) {
            setError('El tipo de Producto no puede estar vacío');
            return;
        }
        try {
            dispatch(updateCategori(id,{ name: tipeProduct }));
            setSuccess(true);
            setTipeProduct('');
        } catch (error) {
            console.error('Error al crear el tipo de Producto:', error);
            setError('Error al crear el tipo de Producto');
        }
    };

    const handleCancel = () => {
        // Cerrar el formulario al hacer clic en Cancelar
        setIsFormOpen(false);
    };

    const handleSnackbarClose = () => {
        setSuccess(false);
        setError('');
    };
    return (
        <div>
            <h3>Actualizar Tipo</h3>
            {isFormOpen && (
                <form className='formContainer' onSubmit={handleSubmit}>
                    <div className='name-category'>
                        <TextField
                            label="Categoria de Producto"
                            variant="outlined"
                            fullWidth
                            value={tipeProduct}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />
                    </div>
                    <div className="botones-tipes">
                        <a href="#" onClick={handleSubmit} className="create-link">
                            Crear
                        </a>
                        <a href="/admin" onClick={handleCancel} className="cancel-link">
                            Cancelar
                        </a>
                    </div>
                </form>
            )}
            <Snackbar
                open={success || !!error}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={success ? 'Categoria creada exitosamente' : error}
                sx={{ top: '-350px' }}
                style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
            />
        </div>
    )
}


