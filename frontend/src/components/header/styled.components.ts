import styled from "styled-components";

export const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 5px 10px;
  width: 50%;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-beetwen;
  align-items: center;
  width: fit-content;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Batch = styled.div`
  position: absolute;
  right: 0px;
  top: -10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: red;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
