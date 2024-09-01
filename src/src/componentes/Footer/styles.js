import styled from "styled-components";

export const Container = styled.div`
padding: 10px 100px;
background-color: var(--white);
`
  export const Item = styled.div`
      font-weight: 400;
      font-size: 20px;
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
    font-weight: 400;
    font-size: 20px;
    font-style: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 150px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    ul{
        display: flex;
        align-items: center;
        li{  
            font-weight: 400;
            font-size: 20px;
            span{
                margin-left: 15px;
                
            }
        }
    }
`