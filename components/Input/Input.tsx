import { StyledInput } from './Input.styles'

interface InputProps {
  placeholder: string
}

const Input: React.FC<Partial<InputProps>> = ({ placeholder }) => (
  <StyledInput {...{ placeholder }} />
)

export default Input