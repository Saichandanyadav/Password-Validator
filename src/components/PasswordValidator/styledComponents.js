import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const PasswordValidatorContainer = styled.div`
  background-color: #383a4e;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`

export const ValidatorHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 50px;
  font-weight: none;
`

export const Paragraph = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 40px;
`

export const PasswordInput = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #383a4e;
  border-radius: 4px;
  margin-bottom: 30px;
  align-items: center;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
`
