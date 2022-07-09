import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  align-items: center;
  row-gap: 15px;
  flex-direction: column;
  width: 100%;
  input {
    width: 80%;
    @media (max-width: 600px) {
      margin-left: auto;
      margin-right: auto;
      width: 70%;
    }
  }
`

export const Container = styled.div`
  width: 35vw;
  height: 50vh;
  @media (max-width: 600px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Button = styled.button`
  margin: 15px 0;
  color: #fff;
  border: none;
  background: #fad34f;
  font-size: 18px;
  border-radius: 50px;
  padding: 15px 30px;
  transition: 200ms;

  @media (max-width: 600px) {
    border-radius: 10px;
    width: 90%;
  }

  :hover {
    cursor: pointer;
    background: #e3b005;
  }
`

export const Textarea = styled.textarea`
  width: 80%;
  resize: none;
  background: #fff;
  padding: 25px 40px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  outline: none;
  ::placeholder {
    color: #2d2d2d;
  }
`
