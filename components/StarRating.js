import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { calculateRating } from '../utils/ratingCalculation';

import { Container, Star } from '../styles/StarRatingStyles';

const StarRating = ({ product }) => {
    const [rating, setRating] = useState(0);

    const showRating = (index, rate) => {
        if (rate >= 4.5) {
            return 'star'
        }

        if (index -1 < rate && index > rate) {
            return 'star-half-empty';
        }

        if (index <= rating) {
            return 'star';
        }

        if (index > rating) {
            return'star-o';
        }
    }

    const starColor = (index) => {
        const ratedStar = index - 0.9999 <= rating;

        return ratedStar ? 'orange' : 'black';
    }

    useEffect(() => {
        const calculated = calculateRating(product);

        if (calculated) {
            setRating(calculated);
        } else {
            setRating(0);
        }
    }, [product]);

    return (
        <Container>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <TouchableWithoutFeedback key={index}>
                        <Star rated={starColor(index)}>
                            <Icon
                                style={{
                                    color: starColor(index)
                                }}
                                name={ showRating(index, rating) }
                            />
                        </Star>
                    </TouchableWithoutFeedback>
                )
            })}
    </Container>
    )
};

export default StarRating;
