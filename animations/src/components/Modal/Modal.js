import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const animationTiming = {
  enter: 400, //Spare time before it add
  exit: 1000, //Spare time before it remove
};

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
  // return (
  // <Transition
  //   mountOnEnter
  //   unmountOnExit
  //   in={props.show}
  //   timeout={animationTiming}
  // >
  //   {(state) => {
  //     const cssClasses = [
  //       "Modal",
  //       state === "entering"
  //         ? "ModalOpen"
  //         : state === "exiting"
  //         ? "ModalClosed"
  //         : null,
  //     ];
  //     return (
  //       <div className={cssClasses.join(" ")}>
  //         <h1>A Modal</h1>
  //         <button className="Button" onClick={props.closed}>
  //           Dismiss
  //         </button>
  //       </div>
  //     );
  //   }}
  // </Transition>
  // );
};

export default modal;
