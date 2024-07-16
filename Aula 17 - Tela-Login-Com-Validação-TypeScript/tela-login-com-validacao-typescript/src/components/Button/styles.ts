import styled from 'styled-components';

interface ButtonContainerProps{
    disabled?: boolean 
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 42px;
    background-color: ${ ({disabled} ) => disabled ? "#81259D" : "silver"};
    color: #FFF;
    
    border: 1px solid #81259D;
    border-radius: 21px;

    cursor: ${ ({disabled}) => disabled ? "pointer" : "not-allowed"};

    &:hover{
        opacity: ${({disabled}) => disabled ? "0.6" : "1" }
    }
`