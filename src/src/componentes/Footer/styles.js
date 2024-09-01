import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding: 10px 100px;
background-color: var(--white);
`
  export const Item = styled.div`
  img{
      width: 200px;
  }
  nav{
      display: flex;
      margin-top: 15px ;
      li{
          padding: 12px;
      }
  }
    
`
export const Copy = styled.div`
    font-size: 25px;
    font-style: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 150px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    ul{
        display: flex;
        align-items: center;
        li{
            span{
                margin-left: 15px;
            }
        }
    }
`