import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const StyledInputGroup = styled(InputGroup)`
  margin-bottom: 20px;
`;

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setFilterValue(newValue);
    onFilterChange(newValue);
  };

  return (
    <StyledInputGroup>
      <InputGroup.Text>Filter characters</InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Enter character name"
        value={filterValue}
        onChange={handleInputChange}
      />
    </StyledInputGroup>
  );
};

export default Filter;
