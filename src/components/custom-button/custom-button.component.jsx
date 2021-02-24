import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  invertedProp,
  ...otherProps
}) => {
  return (
    <button
      className={`${invertedProp ? "inverted" : " "} ${
        isGoogleSignIn ? "google-signIn" : " "
      } custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
