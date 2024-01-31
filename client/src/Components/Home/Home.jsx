import React, { useEffect, useState } from 'react';
import Nabvar from '../NavBar/Nabvar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/Action';
import Card from '../Card/Card';
import Paginado from '../Pagination/Paginado';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa los estilos de Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './home.css';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPorPage, setProductsPorPage] = useState(9);
  const filteredProducts = useSelector((state) => state.filteredProducts);

  const indexOfLastProduct = currentPage * productsPorPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPorPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className='home'>
      <Nabvar setCurrentPage={setCurrentPage} />
      <hr />
      <Banner />
      <hr />
      <div className="whatsapp-icon">
        <a href="https://wa.me/573023453519" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div className="container mt-3">

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3"> {/* Utiliza clases de columnas específicas para diferentes tamaños de pantalla */}
          {/* {currentProducts.map((el, index) => (
            <div key={index} className="col mb-3">
              <Card name={el.name} description={el.description} image={el.image} price={el.price} stock={el.stock} />
            </div>
          ))} */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((el, index) => (
              <div key={index} className="col mb-3">
                <Card name={el.name} description={el.description} image={el.image} price={el.price} stock={el.stock} />
              </div>
            ))
          ) : (
            allProducts.map((el, index) => (
              <div key={index} className="col mb-3">
                <Card name={el.name} description={el.description} image={el.image} price={el.price} stock={el.stock} />
              </div>
            ))
          )}

        </div>
      </div>
      <Paginado
        productsPorPage={productsPorPage}
        allProducts={allProducts.length}
        paginate={paginate}
      />

      <Footer />
    </div>
  );
}

{/* {currentProducts.length > 0 ? (
filteredProducts.map((el, index) => (
<div key={index} className="col mb-3">
<Card name={el.name} description={el.description} image={el.image} price={el.price} stock={el.stock} />
</div>
))
) : (
<p>No se encontraron productos que coincidan con la búsqueda.</p>
)} */}