import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_MOCKUP = [
  {
    id: 1,
    price: 6,
    title: "My first book",
    description: "Chao` ban, toi la first book",
  },
  {
    id: 2,
    price: 5,
    title: "My middle book",
    description: "Chao` ban, toi la middle book",
  },
  {
    id: 3,
    price: 2,
    title: "My cheap book",
    description: "Chao` ban, toi la re rach",
  },
];

const Products = (props) => {
  const productItemsList = DUMMY_MOCKUP.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItemsList}</ul>
    </section>
  );
};

export default Products;
