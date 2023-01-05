import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { getProduct } from './apis/api';
import { calculateRating } from '../utils/ratingCalculation';

import {
    Container,
    Row,
    Wrapper,
    ProductImage,
    InfoWrapper,
    BuyBtn,
    BoldText,
    ProductDescription
} from '../styles/ProductInfoStyles';
import { inOrder } from '../redux/ducks/stuff';
import StarRating from '../components/StarRating';

const ProductInfo = ({ route, navigation }) => {
    const [product, setProduct] = useState([]);
    const { productId } = route.params;

    const dispatch = useDispatch();

    const takeInfo = async () => {
        const res = await getProduct(productId);

        setProduct(res);
    };

    useEffect(() => {
        if (productId) {
            takeInfo();
        }
    }, []);

    return (
        <Container>
            <Wrapper>
                <Row>
                    <ProductImage
                        source={{
                            uri: product.imgUrl,
                            width:120,
                            height: 140
                        }}
                    />
                    <InfoWrapper>
                        <Row>
                            <BoldText>Name:</BoldText>
                            <Text>{product.name}</Text>
                        </Row>
                        <Row>
                            <BoldText>Price:</BoldText>
                            <Text>{product.price}</Text>
                        </Row>
                        <Row>
                            <BoldText>Color:</BoldText>
                            <Text>{product.color}</Text>
                        </Row>
                        <Row>
                            <BoldText>Quantity:</BoldText>
                            <Text>{product.quantity}</Text>
                        </Row>
                    </InfoWrapper>
                </Row>
                <Row>
                    <BoldText>{calculateRating(product) ?? '0'}</BoldText>
                    <StarRating product={product} />
                </Row>
                <ProductDescription>
                    { product.description }
                </ProductDescription>
                <BuyBtn 
                    onPress={() => dispatch(inOrder(product))}
                >
                    <Text>Buy</Text>
                </BuyBtn>
            </Wrapper>
        </Container>
    );
};

export default ProductInfo;
