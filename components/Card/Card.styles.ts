import styled from 'styled-components'
import { color, shadow } from '../../styles'

const StyledCard = styled.article`
  width: 388px;
  border-radius: 10px;
  border: 1px solid ${color.border};
  overflow: hidden;
  cursor: pointer;

  :hover {
    ${shadow.standard};
  }
`

const Image = styled.img`
  width: 100%;
  height: 326px;
`

const TitleContainer = styled.div`
  padding: 12px;
`

const Title = styled.p`
  color: ${color.grey};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
`

const Desc = styled.p`
  color: ${color.bg};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
`

export {
  StyledCard,
  Image,
  TitleContainer,
  Title,
  Desc
}