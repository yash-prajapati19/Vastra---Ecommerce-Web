import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
    opacity: 1;
    }
`;

const Circle = styled.div`
    position: absolute;

`
const Image = styled.img`
    height: 75%;
    border-radius: 20%;
    
`;

const Icon = styled.div`
    widht: 40px;
    height: 40px;
    border-radius: 30%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
    
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>

                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
