import styled from "styled-components";

    const Menu = styled.nav`
        width: 100%;
        display: flex;
        justify-content: start;
        aligin-items: center;
        background-color: #34495e;

        a{
            text-decoration: none;
            font-weight: bold;
            color: white;
            font-size: 1rem;
            margin: 10px;

            &:hover {
              color: #f1c40f
            }
        }
    `;

export default Menu;