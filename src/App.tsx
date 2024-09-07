import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import Character from './Character';
import Filter from './Filter';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>('https://rickandmortyapi.com/api/character');
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('');

  const fetchCharacters = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse = await response.json();
      setCharacters(data.results);
      setFilteredCharacters(data.results);
      setNextPage(data.info.next);
      setPrevPage(data.info.prev);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (filter) {
      setFilteredCharacters(
        characters.filter((character) =>
          character.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setFilteredCharacters(characters);
    }
  }, [filter, characters]);

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      setCurrentPage(prevPage);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Rick and Morty Characters</h1>
      <Filter onFilterChange={setFilter} />
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Row>
            {filteredCharacters.map((character) => (
              <Col key={character.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Character character={character} />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-between mt-4">
            <Button variant="primary" onClick={handlePrevPage} disabled={!prevPage}>
              Previous Page
            </Button>
            <Button variant="primary" onClick={handleNextPage} disabled={!nextPage}>
              Next Page
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default App;
