import React, { useEffect, useState } from 'react';
import {
    Button,
    Grid,
    Paper,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';  // Nuevo ícono para Órdenes

import NavbarAdmin from '../../ADMIN/Nabvar/NabvarAdmin';
import TipoProduct from '../TipoPodructo/crear/TipoProduct';

import './dashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import { allCategories } from '../../../Redux/Action';

export default function Dashboard() {
    const dispatch = useDispatch();


    const tipeCategorias = useSelector((state) => state.tipeProducts)
    const [showTipoProductForm, setShowTipoProductForm] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    const handleCreateCategoryClick = () => {
        // Cuando se hace clic en "Crear Categoría", cambia el estado para mostrar el formulario
        setShowTipoProductForm(true);
        setShowCategories(false)
    };
    const handleViewCategoriesClick = () => {
        setShowTipoProductForm(false); // Ocultar el formulario de creación al hacer clic en "Ver Categorías"
        setShowCategories(true);
    };
    useEffect(() => {
        dispatch(allCategories())
    }, [])
    return (
        <div>
            <NavbarAdmin />
            <Grid container xs={12} >
                {/* Menú lateral */}
                <Grid item xs={12} md={3}>
                    <Paper className='menuPaper'>
                        <Typography variant="h5">Navegación</Typography>
                        {/* Menú desplegable para Productos */}
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <StorefrontIcon /> Productos
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Producto
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <a
                                    >
                                        <VisibilityIcon /> Ver Productos
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* Menú desplegable para Categorías */}
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <CategoryIcon /> Categorías
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails onClick={handleCreateCategoryClick}>
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Categoría
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails onClick={handleViewCategoriesClick}>
                                <Typography>
                                    <a>
                                        <VisibilityIcon /> Ver Categorías
                                    </a>
                                </Typography>
                            </AccordionDetails>

                        </Accordion>

                        {/* Menú desplegable para Usuarios */}
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <PeopleIcon /> Usuarios
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Usuario
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <a>
                                        <VisibilityIcon /> Ver Usuarios
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        {/* Menú desplegable para Órdenes */}
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <AssignmentIcon /> Órdenes
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Orden
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <a>
                                        <VisibilityIcon /> Ver Órdenes
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                </Grid>

                {/* Contenido principal */}
                <Grid item xs={12} md={9}>
                    <Paper className='menu-center'>
                        {/* Contenido principal, acciones realizadas, etc. aquí */}
                        {/* <Typography variant="h5">Acciones Realizadas</Typography> */}
                        {showCategories && (
                            <table className="category-table">
                                <h5>Categorias</h5>
                                <tbody>
                                    {tipeCategorias
                                        .slice() // Crear una copia para evitar modificar el estado original
                                        .sort((a, b) => a.name.localeCompare(b.name)) // Ordenar alfabéticamente
                                        .map((category) => (
                                            <tr key={category.id}>
                                                <td>{category.name}</td>
                                                <td className="action-buttons">
                                                    <a className="update-button">Actualizar</a>
                                                    <a className="delete-button">Eliminar</a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )}
                        {/* ... Tu contenido principal aquí */}
                        {showTipoProductForm && <TipoProduct />}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

