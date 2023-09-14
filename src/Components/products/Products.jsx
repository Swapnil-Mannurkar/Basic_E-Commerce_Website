import "./Products.css";
import ProductCard from "./ProductCard";
import ProductData from "./ProductsData.json";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

const Products = () => {
  const [sortMethod, setSortMethod] = useState("default");
  const [productData, setProductData] = useState(ProductData);

  const sortProducts = (method) => {
    const sortedData = [...ProductData];

    if (method === "priceLowToHigh") {
      sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (method === "priceHighToLow") {
      sortedData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setSortMethod(method);
    setProductData(sortedData);
  };

  let windowSize = window.innerWidth;
  let laptopScreen = windowSize > 850;
  let padScreen = windowSize > 480 && windowSize < 850;

  return (
    <div className="productsContainer">
      <Grid container className="productTitleContainer">
        {laptopScreen && <Grid xs></Grid>}
        <Grid xs={padScreen ? 8 : 6} className="productTitleMainContainer">
          <h1 className="productsTitle">PRODUCTS</h1>
        </Grid>
        <Grid xs>
          <div className="productFilter">
            <label>Sort by:&nbsp;</label>
            <select
              value={sortMethod}
              onChange={(e) => sortProducts(e.target.value)}
              className="sortOptions"
            >
              <option value="default">Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
        </Grid>
      </Grid>
      <div className="productsCardContainer">
        {productData.map((productItem) => (
          <ProductCard
            key={productItem.id}
            id={productItem.id}
            img={productItem.img}
            title={productItem.title}
            price={productItem.price}
            mrp={productItem.mrp}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
