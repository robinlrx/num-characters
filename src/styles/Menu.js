import styled from "styled-components";

    const Menu = styled.nav`
        width: 100%;
        display: flex;
        justify-content: start;
        aligin-items: center;
        background-color: #4200ff;

        a{
            text-decoration: none;
            font-weight: bold;
            color: #fdeee1;
            font-size: 1rem;
            margin: 10px;
            padding: 10px 30px;

            &:hover {
              color: #4200ff;
              background-color: #fdeee1;
            }
        }
    `;

export default Menu;