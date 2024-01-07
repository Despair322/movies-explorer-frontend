export function movieProxy(movie) {
    return {
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        director: movie.director,
        country: movie.country,
        year: movie.year,
        duration: movie.duration,
        description: movie.description,
        trailer: movie.trailerLink,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
    }
}