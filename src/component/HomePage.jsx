import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Items from "./Items";
import Suppliers from "./Suplliers";
import SubmitteData from "./SubmittedData";

const HomePage = () => {
  const [showItem, setShowItem] = useState(true);
  const [showSupplier, setShowSupplier] = useState(true);

  const handleItemShow = () => {
    setShowItem((showItem) => !showItem);
  };

  const handleSupplierShow = () => {
    setShowSupplier(true);
  };

  return (
    <>
      <Header />
      <Body />
      {showItem && <Items handleItemShow={handleItemShow} />}
      {showSupplier && <Suppliers handleSupplierShow={handleSupplierShow} />}
      <SubmitteData />
    </>
  );
};

export default HomePage;
