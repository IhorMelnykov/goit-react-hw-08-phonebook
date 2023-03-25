import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
margin: 0;
width: 360px;
border: 1px solid blue;
padding: 20px;
`;

export const Label = styled.label`
font-size: 20px;
`;

export const Fieldtyled = styled(Field)`
display: block;
min-width: 320px;
margin-top: 20px;
margin-bottom: 20px;
padding: 7px;
border-radius: 5px;
font-size: 16px;
`;

export const Button = styled.button`
padding: 5px;
margin-top: 30px;
border: 1px solid black;
border-radius: 4px;
cursor: pointer;
background-color: lightblue;
font-size: 18px;
`;

export const ErrMessage = styled(ErrorMessage)`
font-size: 16px;
color: red;
`;