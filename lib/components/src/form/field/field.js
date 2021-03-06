import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';

const Wrapper = styled.label(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.appBorderColor}`,
  margin: '0 15px',
  padding: '8px 0',

  '&:last-child': {
    marginBottom: '3rem',
  },
}));

const Label = styled.span({
  minWidth: 100,
  minHeight: 32,
  marginRight: 16,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  lineHeight: '16px',
});

const Field = ({ label, children }) => (
  <Wrapper>
    {label ? (
      <Label>
        <span>{label}</span>
      </Label>
    ) : null}
    {children}
  </Wrapper>
);
Field.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node.isRequired,
};
Field.defaultProps = {
  label: undefined,
};

export default Field;
