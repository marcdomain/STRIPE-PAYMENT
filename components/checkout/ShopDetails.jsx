import styled from "@emotion/styled";

import Image from "./Image";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
  text-align: center;
`;

const ShopDetails = () => {
  return (
    <Shop>
      <Image src="./logo.png" width="100px"></Image>
      <ShopName>My Shop Name</ShopName>
    </Shop>
  );
};

export default ShopDetails;
