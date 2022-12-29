export const calculateRating = ({ stars }) => {
    if (stars) {
        const { five, four, three, two, one } = stars;

        return (
            (five*5 + four*4 + three*3 + two*2 + one*1) / (five + four + three + two + one)
        ).toFixed(2);
    } else {
        return 0;
    }
};