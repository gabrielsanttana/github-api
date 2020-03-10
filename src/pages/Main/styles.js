import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 80px auto;
  padding: 30px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export const RepoList = styled.ul`
  list-style: none;
  padding: 20px 10px;

  li {
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;

    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #7159c1;
  margin-left: 10px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
