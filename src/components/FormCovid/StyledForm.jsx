import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  padding: 6rem;
  margin-bottom: 5rem;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const FormLeft = styled.div`
  flex-basis: 55%;
  margin-right: 3rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const FormRight = styled.div`
  flex-basis: 50%;
  margin-top: 1.2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  font-size: 2.44rem;
  color: #00cba9;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 3000px;
  padding: 8px;
  margin-bottom: 1.2rem;
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
`;

export const Select = styled.select`
  padding: 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  padding: 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  max-width: 3000px;
  border: none;
  border-radius: 0.2rem;
  background-color: #00cba9;
  color: white;
  cursor: pointer;
`;
