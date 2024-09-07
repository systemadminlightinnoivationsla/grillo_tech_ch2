import React from 'react';
import { Card, Badge } from 'react-bootstrap';

interface CharacterProps {
  character: {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  };
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const getStatusBadgeVariant = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'success';
      case 'dead':
        return 'danger';
      default:
        return 'dark';
    }
  };

  return (
    <Card>
      <Card.Img variant="top" src={character.image} alt={character.name} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <Badge bg={getStatusBadgeVariant(character.status)} className="me-2">
            {character.status}
          </Badge>
          {character.species} - {character.gender}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Character;
