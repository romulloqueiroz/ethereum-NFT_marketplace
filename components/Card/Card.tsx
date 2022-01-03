import {
  StyledCard,
  Image,
  TitleContainer,
  Title,
  Desc
} from './Card.styles'

const Card: React.FC<{ src: string }> = ({ src }) => (
  <StyledCard>
    <Image 
      src={src} 
      alt='#' 
    />
    <TitleContainer>
      <Title>
        {'This is the only collection on this good for nothing website.'.slice(0, 35).concat('...')}
      </Title>
      <Desc>
        One NFT token, like all the others.
      </Desc>
    </TitleContainer>

  </StyledCard>
)

export default Card