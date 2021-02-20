import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { auth } from "../firebase/firebase.utils";

class MainLayout extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Navbar user={currentUser} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
