import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
  

  render() {
    return (
    <section className="formulario">
      <form className="formHome">
        <label>Introduce Nombre:</label>
        <br />
        <input type="text" name="name" />
        <button type="submit">Login</button>
      </form>
      
    </section>

    )
  }
}

export default Home;