"use client";

import PokemonCard from "@/model/pokemonCards";
import { Card } from "react-bootstrap";
import PokemonTypeBadgeComp from './pokemonTypeBadgeComp';

interface PokemonCardCompProps {
  pokemon: PokemonCard;
}

export default function PokemonCardComp(props: PokemonCardCompProps) {
  const pokemonUrl = `/pokemon/${props.pokemon.pokemonNumber}`;

  return (
    <a href={pokemonUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card className="mb-4 shadow-sm" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={props.pokemon.mainImage} />
        <Card.Body>
          <Card.Title>{props.pokemon.pokemonName}</Card.Title>
          <Card.Text>
            <PokemonTypeBadgeComp pokemonTypes={props.pokemon.pokemonType} />
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}
