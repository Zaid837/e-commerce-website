import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
