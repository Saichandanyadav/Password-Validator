import {useState} from 'react'
import {
  PasswordValidatorContainer,
  PasswordInput,
  ErrorMessage,
  ValidatorHeading,
  BgContainer,
  Paragraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(true)

  const handleInputChange = e => {
    setPassword(e.target.value)
    if (e.target.value.length >= 8) {
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <BgContainer>
      <PasswordValidatorContainer>
        <ValidatorHeading>Password Validator</ValidatorHeading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordInput
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleInputChange}
        />
        {error && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorContainer>
    </BgContainer>
  )
}

export default PasswordValidator
