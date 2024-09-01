import styled from "styled-components";

export const Container = styled.div`
    padding: 400px 10px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url("https://img.freepik.com/fotos-gratis/mulher-asiatica-feliz-mostra-polegares-para-cima-aprova-gostos-fica-perto-da-entrada-do-cafe-e-da-a-ela_1258-199002.jpg?t=st=1725214145~exp=1725217745~hmac=32c2a47b8bf5e37dc932c0dcf0d913fa3b24067bae4b39630c7063710536429c&w=1380");
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
    width: 30%;
    position: relative;
    z-index: 1;

    h2 {
        color: var(--white);
        font-size: 60px;
        font-weight: 600;
        margin-bottom: 45px;
`