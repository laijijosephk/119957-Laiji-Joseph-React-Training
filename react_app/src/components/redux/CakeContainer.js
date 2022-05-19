import React from "react";
import { connect } from "react-redux";
import { build_cake, buy_cake } from "./cake/cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Counter-1</h2>
      <h2>No. of Cake:{props.noOfCakes} </h2>
      <button className="btn btn-primary mt-2" onClick={props.buyCake}>
        Buy Cake
      </button>
      <button className="btn btn-info mt-2 mx-2" onClick={props.buildCake}>
        Build New Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buy_cake());
    },
    buildCake: () => {
      dispatch(build_cake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
