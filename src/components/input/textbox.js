import styled from "styled-components";
import {COLORS} from "../../config/theme";

export const InputTextBox = styled.input`
  background-color: ${COLORS.WHITE};
  font-size: inherit;
  color: inherit;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  border: 1px solid ${COLORS.WHITE};
  height: auto;
  width: 80%;
  
  :focus {
    outline: none;
    border: 1px solid ${COLORS.BLUE};
  }
`;

export default InputTextBox;
