// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #ffffff;
`
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 36px;
  font-weight: 600;
  color: #4c63b6;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  width: 80vw;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 16px #d8d8d8;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 30px;
    margin-top: 50px;
  }
`
export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
`

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  padding: 10px;
  overflow: auto;
  height: 90px;
  width: 100%;
`

export const AddButton = styled.button`
  align-self: flex-end;
  padding: 10px;
  background-color: #4c63b6;
  border: none;
  outline: none;
  margin-right: 40px;
  color: #ffffff;
  border-radius: 7px;
  width: 80px;
  @media screen and (max-width: 767px) {
    margin-right: 15px;
  }
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 10px;
  @media screen and (max-width: 767px) {
    margin-top: 25px;
    margin-bottom: 35px;
  }
`
export const EmptyImg = styled.img`
  height: 150px;
  @media screen and (max-width: 767px) {
    height: 100px;
  }
`
export const EmptyHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
`
export const EmptyPara = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
`
export const NotesListContainer = styled.ul`
  height: 100%;
  width: 80vw;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
