import styled from 'styled-components'
import { color, shadow } from '../../styles'

const StyledCard = styled.article`
  width: 301px;
  border-radius: 10px;
  border: 1px solid ${color.border};
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 2148px) {
    width: 335px;
  }

  @media (max-width: 1856px) {
    width: 278px;
  }

  @media (max-width: 1564px) {
    width: 376px;
  }

  @media (max-width: 1272px) {
    width: 427px;
  }

  @media (max-width: 980px) {
    width: 581px;
  }

  :hover {
    ${shadow.standard};
  }
`

const Image = styled.img`
  width: 100%;
  height: 301px;

  @media (max-width: 2148px) {
    height: 335px;
  }

  @media (max-width: 1856px) {
    height: 278px;
  }

  @media (max-width: 1564px) {
    height: 376px;
  }

  @media (max-width: 1272px) {
    height: 427px;
  }

  @media (max-width: 980px) {
    height: 581px;
  }
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