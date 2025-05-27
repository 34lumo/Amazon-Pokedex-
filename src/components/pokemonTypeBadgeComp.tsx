"use client";

import { Badge } from "react-bootstrap";

interface PokemonTypeBadgeCompProps {
  pokemonTypes: string[];
}

export default function PokemonTypeBadgeComp(props: PokemonTypeBadgeCompProps) {
  return (
    <>
      {props.pokemonTypes?.map((pokemonType, index) => {
        if (pokemonType === "Water") {
          return <Badge key={index} bg="primary" className="me-1">{pokemonType}</Badge>;
        } else if (pokemonType === "Fire") {
          return <Badge key={index} bg="danger" className="me-1">{pokemonType}</Badge>;
        } else if (pokemonType === "Grass") {
          return <Badge key={index} bg="success" className="me-1">{pokemonType}</Badge>;
        } else if (pokemonType === "Electric") {
          return <Badge key={index} bg="warning" className="me-1">{pokemonType}</Badge>;
        } else {
          return <Badge key={index} bg="secondary" className="me-1">{pokemonType}</Badge>;
        }
      })}
    </>
  );
}
