
export function movieFilter(movies, options) {
    // console.log(options);
    if (shortStringToBool(options.short))
        return movies.filter(
            movie => movie.duration <= 40 && movie.nameRU.toLowerCase().includes(options.query.toLowerCase())
        )
    else {
        return movies.filter(
            movie => movie.nameRU.toLowerCase().includes(options.query.toLowerCase())
        )
    }
}

export function shortStringToBool(short) {
    return short ? short === 'false' ? false : true : false;
}