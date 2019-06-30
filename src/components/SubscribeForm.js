import React, { useReducer, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { FaCircleNotch } from 'react-icons/fa';

import { useToast } from './Toast';

const Label = styled.label`
  display: block;
  font-weight: 700;
`;

const Input = styled.input`
  height: 36px;
  padding: 8px;
  margin-right: 4px;
  border: 0;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  border: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  transition: 150ms ease-in-out background-color;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }

  &[disabled] {
    background-color: ${({ theme }) => darken(0.1, theme.colors.primary)};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled(FaCircleNotch)`
  margin-right: 8px;
  animation: ${rotate} 0.7s linear infinite;
`;

const initialState = {
  loading: false,
  email: '',
  result: null,
};

const SubscribeForm = () => {
  const [{ loading, email, result }, setState] = useReducer(
    (state, nextState) => ({ ...state, ...nextState }),
    initialState,
  );
  const { createToast } = useToast();

  const handleSubmit = async ev => {
    ev.preventDefault();
    setState({ loading: true });
    const result = await addToMailchimp(email);
    setState({ result, loading: false });
  };

  useEffect(() => {
    if (!result) return;
    createToast(result);
  }, [result]);

  return (
    <div className="subscribe">
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Subscribe to Newsletter</Label>
        <Input
          type="email"
          value={email}
          id="email"
          required
          onChange={ev => setState({ email: ev.target.value })}
        />
        <Button disabled={loading}>{loading && <Icon />}Subscribe</Button>
      </form>
    </div>
  );
};

export default SubscribeForm;
