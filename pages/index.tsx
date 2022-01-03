import type { NextPage } from 'next'
import { useContext } from 'react'
import { Navbar, Card } from '../components'
import styled from 'styled-components'
import { Ethereum } from '../context/EthereumContext'

const Home: NextPage = () => {
  const { nfts } = useContext(Ethereum)
  return (
   <>
      <Navbar />
      <Container>
        <Grid>
         {nfts?.map((item: string, idx: number) => <Card key={idx} src={item} />)}
        </Grid> 
      </Container>
   </>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 2148px) {
    max-width: 1751px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1856px) {
    max-width: 1459px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1564px) {
    max-width: 1167px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1272px) {
    max-width: 875px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 980px) {
    max-width: 583px;
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Home