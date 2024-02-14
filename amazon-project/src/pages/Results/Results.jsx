import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import LayOut from "../../components/LayOut/LayOut"
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { productUrl } from '../../API/Endpoint';
// import ProductCard from '../ProductDetail/productCard';
function Results() {
    const { categoryName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`${productUrl}/products/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log("API response:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(`${productUrl}/products/${categoryName}`);
  }, [categoryName]);

  console.log("Results state:", results);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}> Results</h1>
        <p style={{ padding: "30px" }}> Category /{categoryName}</p>
        <hr />

        {/* <div className={classes.products_container}>
          {Array.isArray(results) ? (
            results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No results found</p>
          )}
        </div> */}
      </section>
    </LayOut>
  );
}

export default Results
