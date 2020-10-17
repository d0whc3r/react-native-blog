import styled from 'styled-components/native';

interface TextInputOptions {
  textarea?: boolean;
}

export const TextInput = styled.TextInput<TextInputOptions>`
  font-size: 18px;
  border: 1px solid black;
  margin: 10px;
  padding: 0 10px;
`;

export const LabelInput = styled.Text`
  font-size: 20px;
  text-align: center;
  width: 100%;
`;
