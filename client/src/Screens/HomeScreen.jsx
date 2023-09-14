import React from "react";
// import pizzas from "../PizzaData";
import { Pizza } from "../Components/Pizza";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../Actions/pizzaActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducers);
  const { pizzas, error, loading } = pizzasState;
  console.log(pizzasState);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading  ? (
         
         <Loading/>
        ) : error ? (
          <Error error='something went wrong'/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div >
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
