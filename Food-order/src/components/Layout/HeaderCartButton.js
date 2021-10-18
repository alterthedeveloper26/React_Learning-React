import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [btnIsHL, setBtnHL] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numberOfCartItems = items.reduce((finalNumber, item) => {
    return finalNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHL ? styles.bump : ""} `;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    //to create bump
    setBtnHL(true);

    //to clear the style for the next add, to create bump
    //300 is the time when the animation finish
    const timer = setTimeout(() => {
      setBtnHL(false);
    }, 300);

    //to ensure that when multiple clicking happen, the cart
    //icon will only blink once
    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
