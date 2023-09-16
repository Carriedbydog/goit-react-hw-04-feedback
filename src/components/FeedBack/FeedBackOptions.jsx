import React from 'react';
import PropTypes from 'prop-types';
import { StyledBtn, StyledList } from './FeedBack.styled';

export const FeedBack = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <StyledList>
        {options.map(option => {
          return (
            <li key={option}>
              <StyledBtn onClick={() => onLeaveFeedback(option)}>
                {option}
              </StyledBtn>
            </li>
          );
        })}
      </StyledList>
    </div>
  );
};

FeedBack.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
