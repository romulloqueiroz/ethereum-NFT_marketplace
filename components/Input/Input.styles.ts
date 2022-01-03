import styled from 'styled-components'
import { color } from '../../styles'

const StyledInput = styled.input<{ placeholder?: string }>`
  border-radius: 10px;
  border: 1px solid ${color.border};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  
  height: 45px;
  width: 100%;
  padding-left: 15px;

  ::placeholder {
    color: ${color.grey};
  }
  
  :focus {
    outline: none;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  }
`

export { StyledInput }