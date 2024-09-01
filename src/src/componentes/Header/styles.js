import styled from "styled-components"

export const Container = styled.div`
    height: 70px;
    padding: 25px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background-color: var(--white);
`

export const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 150px;
    }
`
export const Menu = styled.div`
    ul{
        display: flex;
        justify-content:center;
        align-items: center;
        li{
            border: 1px solid var(--gray);
            border-radius: 5px;
            padding: 2px;
            font-weight: 400;
            font-size: 20px;
            span{
                font-weight: 200;
            }
            &:hover{
                background-color: var(--gray);
                cursor: pointer;
            }
        }
    }
`