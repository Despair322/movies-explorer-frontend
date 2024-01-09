const WIDTH = {
    oneCard: 0,
    twoCards: 491,
    threeCards: 841,
    fourCards: 1041,
}

export const CONTAINERQUERY = {
    'one': {
        maxWidth: WIDTH.twoCards - 1,
    },
    'two': {
        minWidth: WIDTH.twoCards,
        maxWidth: WIDTH.threeCards - 1,
    },
    'three': {
        minWidth: WIDTH.threeCards,
        maxWidth: WIDTH.fourCards - 1,
    },
    'four': {
        minWidth: WIDTH.fourCards,
    },
};

export const COUNTOFCARDS = {
    one: { start: 5, add: 2, },
    two: { start: 8, add: 4, },
    three: { start: 12, add: 3, },
    four: { start: 16, add: 4 },
}

export const RE =
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const SHORTDURATION = 40;