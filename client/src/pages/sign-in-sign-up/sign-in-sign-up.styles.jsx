import styled from "styled-components";

export const SignComponent = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 50px;
    width: unset;
    align-items: center;
  }
`;
