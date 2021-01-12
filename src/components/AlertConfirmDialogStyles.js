import styled from "styled-components";
import { AlertDialog } from "@reach/alert-dialog";

export const AlertContainer = styled.div`
  position: relative;
  text-align: center;
`;
export const AlertButtonContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const AlertDialogStyled = styled(AlertDialog)`
  border: 1px solid #cccccc;
  border-radius: 15px;
  position: absolute;
  right: 40px;
  bottom: -50px;
  background-color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 1rem;
  width: 300px;
  text-align: center;
`;

export const StyledButton = styled.button`
  border: 1px solid #cccccc;
  color: white;
  padding: 15px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
`;

export const AlertButton = styled(StyledButton)`
  background-color: #999999;
`;

export const ConfirmButton = styled(StyledButton)`
  background-color: #4caf50;
`;
