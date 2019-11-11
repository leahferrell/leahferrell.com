import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-template-rows: minmax(75px, 1fr) 250px minmax(75px, 1fr);
  grid-template-areas:
          "ih"
          "ii"
          "if";
          
  div, p {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export default ItemContainer;
