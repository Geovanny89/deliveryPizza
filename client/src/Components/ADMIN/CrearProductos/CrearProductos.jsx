import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { crateProduct } from '../../../Redux/Action';
import './crearProductos.css';

export default function CrearProductos() {
    const dispatch = useDispatch();
    const tipeProductos = useSelector((state) => state.tipeProducts);

    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
        image: [''],
        tipoId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', product);
        try {
            // Verificar si se ha seleccionado un archivo

            // Llamada a la acción para crear la PQR
            await dispatch(crateProduct(product));

            // Restablecer el formulario o redirigir si es necesario
            setProduct({
                name: '',
                price: '',
                stock: '',
                description: '',
                image: [''],
                tipoId: '',
            });
        } catch (error) {
            console.error('Error al crear el Producto:', error);
        }
    };

    const handleImageChange = (e, index) => {
        const newImages = [...product.image];
        newImages[index] = e.target.value;
        setProduct({
            ...product,
            image: newImages,
        });
    };

    return (
        <Form onSubmit={handleSubmit} className="crear-productos-form mt-3">
            <Row className="mb-3">
                <Col xs={12} md={6}>
                    <Form.Group controlId="productName">
                        <Form.Label>Nombre del Producto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre del producto"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group controlId="productTipoId">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control
                            as="select"
                            name="tipoId"
                            value={product.tipoId}
                            onChange={handleChange}
                            required={true}
                        >
                            <option value="">Seleccione un tipo de ID</option>
                            {tipeProductos.map((tipo) => (
                                <option key={tipo._id} value={tipo._id}>
                                    {tipo.name}
                                </option>
                            ))}

                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12} md={6}>
                    <Form.Group controlId="productPrice">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el precio"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group controlId="productStock">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese la cantidad en stock"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Form.Group controlId="productDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Ingrese la descripción"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Form.Group controlId="productImages">
                        <Form.Label>Imágenes (URL)</Form.Label>
                        {product.image.map((url, index) => (
                            <Form.Control
                                key={index}
                                type="text"
                                placeholder={`URL de la imagen ${index + 1}`}
                                value={url}
                                onChange={(e) => handleImageChange(e, index)}
                                required={true}
                            />
                        ))}
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Button variant="primary" type="submit">
                        Crear Producto
                    </Button>
                </Col>
                
            </Row>
            <Row>
            <Col xs={12}>
                    <Button variant="secondary" type="submit" href='/admin'>
                        Volver
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
