import { Add, Remove } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StripeCheckout from 'react-stripe-checkout'
import {userRequest} from '../requestMethods'
import { useNavigate } from 'react-router-dom'
import { getOrders } from '../redux/apiCalls'


const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align:center;
`;

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled"&&"none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled"&&"white"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;  
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 150px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};

`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer= styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount= styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice= styled.div`
    font-size: 30px;
    font-weight: 200;

`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;     
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const CheckoutButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    const [stripeToken,setStripeToken] = useState(null)
    const  navigate = useNavigate();
    const dispatch = useDispatch()
    const order = useSelector((state) => state.order);
  
    useEffect(()=>{
      getOrders(dispatch)
    },[dispatch]);


  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR ORDERS</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {order.orders.map(order=>(
                    <Product>
                        <ProductDetail>
                            <Image src= {order.img} />
                            <Details>
                                <ProductName><b>Product:</b>{order.title}</ProductName>
                                <ProductId><b>ID:</b> {order._id}</ProductId>
                                <ProductColor color={order.color}/>
                                <ProductSize><b>Size:</b>{order.size}</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{order.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs. {order.price*order.quantity}</ProductPrice>
                        </PriceDetail>
                    </Product>))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Rs. {order.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>Rs. 100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>Rs. -50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>Rs. {order.total}</SummaryItemPrice>
                    </SummaryItem>
                    
                        <CheckoutButton>PAID</CheckoutButton>
                    

                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>      
    </Container>
  )
}

export default Cart
