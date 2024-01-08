const widths = {
    oneCard: 0,
    twoCards: 491,
    threeCards: 841,
    fourCards: 1041,
}

export const containerQuery = {
    'one': {
        maxWidth: widths.twoCards - 1,
    },
    'two': {
        minWidth: widths.twoCards,
        maxWidth: widths.threeCards - 1,
    },
    'three': {
        minWidth: widths.threeCards,
        maxWidth: widths.fourCards - 1,
    },
    'four': {
        minWidth: widths.fourCards,
    },
};

export const countOfCard = {
    one: { start: 5, add: 2, },
    two: { start: 8, add: 4, },
    three: { start: 12, add: 3, },
    four: { start: 16, add: 4 },
}

export const re =
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;