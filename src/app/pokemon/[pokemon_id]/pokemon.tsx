import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image } from 'react-bootstrap';

type Props = {
  pokemon: Pokemon;
};

export default function PokemonComponent({ pokemon }: Props) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
      </Row>
      <Row>
        <Col>
          <Image src={pokemon.mainImage} thumbnail />
        </Col>
        <Col>
          Pokémon Properties
        </Col>
      </Row>
    </Container>
  );
}
