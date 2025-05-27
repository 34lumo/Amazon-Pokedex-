'use client';

import Pokemon from '@/model/pokemon';
import { useEffect, useState } from 'react';
import { Container, Image, Spinner, Row } from 'react-bootstrap';
import PokemonComponent from './pokemon';
import PokeNavBar from '@/components/pokeNavBarComp';

export default function PokemonPage({ params }: { params: { pokemon_id: string } }) {
  const { pokemon_id } = params;
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isPokemonLoaded, setPokemonLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/api/pokemon/' + pokemon_id);
        if (resp.ok) {
          const pokemon: Pokemon = await resp.json();
          setPokemon(pokemon);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setPokemonLoaded(true);
      }
    };

    fetchData();
  }, [pokemon_id]);

  return (
    <>
      <PokeNavBar />
      {isPokemonLoaded ? (
        pokemon ? (
          <PokemonComponent pokemon={pokemon} />
        ) : (
          <Image
            className="img-fluid mx-auto d-block rounded"
            src="https://cdn.dribbble.com/users/2805817/screenshots/13206178/media/6bd36939f8a01d4480cb1e08147e20f3.png"
          />
        )
      ) : (
        <Container>
          <Row className="justify-content-md-center p-2">
            <Spinner className='p-2' animation='border' role='status' />
          </Row>
          <Row className="justify-content-md-center p-2">
            Loading Pokémon...
          </Row>
        </Container>
      )}
    </>
  );
}
