import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  background-color: #06d6a0;
  font-family: "Poppins", sans-serif;
  padding: 0.8rem 2rem;
  color: #fff;
  flex-direction: column;

  div:first-child {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1.8rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }
`;

export default StyledFooter;
