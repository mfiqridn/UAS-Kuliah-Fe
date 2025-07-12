import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #06d6a0;
  font-family: "Poppins", sans-serif;
  padding: 0.8rem 2rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 3rem;
    padding-bottom: 1.8rem;
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      padding-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
`;

export default StyledNavbar;
