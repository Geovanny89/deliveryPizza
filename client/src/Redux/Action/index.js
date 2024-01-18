import axios from "axios";

import { getAuthToken, setAuthToken } from "../../Auth/Auth";

export function register(newUser) {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/api/register", newUser);

        dispatch({
            type: 'REGISTER',
            payload: response.data
        })

    }

}

export function login(formData) {
    console.log("la data", formData)
    return async function (dispatch) {
        try {
            const responseLogin = await axios.post("http://localhost:3001/api/login", formData)
            const token = responseLogin.data.token;
            console.log(responseLogin)


            setAuthToken(token);

            dispatch({
                type: 'LOGIN',
                payload: responseLogin.data
            })

            return responseLogin;
        } catch (error) {
            console.log('Error al iniciar sesion:', error.message);
            if (error.response) {
                console.log('Error de respuesta:', error.response.data);
            }
            throw error;
        }
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};


//Acciones USER

//Acciones para el banner
export function allBanner(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/api/banners/all")
            return dispatch({
                type:'GET_BANNERS',
                payload:response.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}
//accion para mostrar los Prdocutos al usuario 
export function getAllProduct() {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/api/user/allProducts')
            console.log("holassss", response.data)
            return dispatch({
                type: 'GET_USER_PRODUCT',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}

//Acciones ADMIN

//Acciones para el banner

//Accion para Crear productos 

export function crateProduct(newProduct) {
    return async function (dispatch) {
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const json = await axios.post("http://localhost:3001/api/create", newProduct, config)
            dispatch({
                type: 'POST_PRODUCT',
                payload: json.data
            })
            return json
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

// Crear los tipos de productos 

export function createTipeProduct(newTipe) {
    return async function (dispatch) {
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const tipeProduct = await axios.post("http://localhost:3001/api/createTipe", newTipe, config);
            console.log("hola soy el tipo de producto", tipeProduct)
            dispatch({
                type: 'TYPE_PRODUCTS',
                payload: tipeProduct.data
            })
            return tipeProduct;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

// ver todos los tipos de productos 
export function allCategories(){
    return async function(dispatch){
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const response = await axios.get("http://localhost:3001/api/all/tipes",config);
            dispatch({
                type:'ALL_CATEGORIES',
                payload:response.data
            })

        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}