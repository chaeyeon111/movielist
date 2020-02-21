import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';


class Movies extends Component {
    //rendering은 data를 html로 변환서 renderer에게 전달는 일관 작업

    state = {
        movies: getMovies()
    };

    render() {

        //return table.table>thread>tr>th*4 ==> zen coding
        return <table className="table">
            <thread>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thread>
            <tbody>
            {this.state.movies.map(movie => (
            <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
            </tr>
            ))}
            </tbody>
        </table>
    }
}
export default Movies;