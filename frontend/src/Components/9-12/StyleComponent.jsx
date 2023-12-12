import styled from 'styled-components'


const StyleComponent=()=>{
    const MyData = styled.div`
    color:red;
    font-size:50px;
    font-weight:900;
    border:1px solid red;
    width:300px;
    aligh-item:center;
    margin:auto;
    box-shadow:5px 5px 10px 20px red;
    margin-top:50px;
    margin-bottom:50px;
    `;
    return(
        <MyData>Style-Component</MyData>
    )
}
export default StyleComponent;