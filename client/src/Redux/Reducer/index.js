import Cookies from "js-cookie";
const initialState = {
    session: null,
    user: [],
    products: [],
    allProducts: [],
    tipeProducts: [],
    banners: [],
    rol: "",
}
function rootreducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                session: action.payload,
                rol: action.payload.user.role,
            }
        case 'LOGOUT':
            Cookies.remove('session')
            return {
                ...state,
                session: null,
                user: {},
                rol: ""
            };
        case 'GET_USER_PRODUCT':
            return {
                ...state,
                allProducts: action.payload,

            }
        case 'GET_BANNERS':
            return {
                ...state,
                banners: action.payload,

            }

        //Reducer para admin
        case 'POST_PRODUCT':
            return {
                ...state,
                allProducts: action.payload
            }
        case 'TYPE_PRODUCTS':
            return {
                ...state,
                tipeProducts: [...state.tipeProducts, action.payload]
            }
        case 'ALL_CATEGORIES':
            return {
                ...state,
                tipeProducts: action.payload
            }
        default:
            return state;
    }
}

export default rootreducer;