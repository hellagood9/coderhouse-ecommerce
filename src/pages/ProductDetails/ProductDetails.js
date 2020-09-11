import React from "react";
import { useParams } from "react-router-dom";

import Layout from "../../components/Common/Layout/Layout";
import ItemDetailsContainer from "../../components/ItemDetails/ItemDetailsContainer";

const ProductDetails = () => {
  const id = useParams();

  return (
    <Layout>
      <ItemDetailsContainer id={id} />
    </Layout>
  );
};

export default ProductDetails;
