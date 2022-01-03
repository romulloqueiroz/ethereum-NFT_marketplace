import { StyledInput } from './Input.styles'

interface InputProps {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const Input: React.FC<Partial<InputProps>> = ({ placeholder, ...props }) => (
  <StyledInput {...{ placeholder, ...props }} />
)

export default Input