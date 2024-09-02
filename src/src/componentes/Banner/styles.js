import styled from "styled-components";

export const Container = styled.div`
    padding: 460px 10px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url("https://img.freepik.com/fotos-gratis/jovem-barista-faz-cafe-e-sorri_1157-36656.jpg?t=st=1725242978~exp=1725246578~hmac=d2c3511faaa30b1ed1ffdc4c5665a17732178dfcec0402af2f9fb29374118a4a&w=1380");
    :before{
        background-color: rgba(0,0,0,.0);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`

export const Text = styled.div`
    width: 40%;
    position: relative;
    z-index: 1;

    h2 {
        color: var(--white);
        font-size: 70px;
        font-weight: 600;
        margin-bottom: 85px;
`