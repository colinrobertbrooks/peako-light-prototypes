import React from "react";
import NavButton from "../navigation/NavButton";
import { useDocumentTitle } from "../../hooks";

const NotFoundPage = () => {
  useDocumentTitle("Page Not Found | Peako Light Prototype");

  return (
    <>
      <h1 className="text-danger">Page Not Found</h1>
      <NavButton to="/" outline>
        Go Home
      </NavButton>
    </>
  );
};

export default NotFoundPage;
