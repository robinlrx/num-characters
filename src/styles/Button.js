import styled from "styled-components";

    const Button = styled.button`
        border: solid 2px #fdeee1;
        color: #4200ff;
        padding: 10px 35px;
        margin: 10px;
        background-color: #fdeee1;
        &:hover {
            background-color: #4200ff;
            color: #fdeee1;
            cursor: pointer;
        }
    `;
export default Button;