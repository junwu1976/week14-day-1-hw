import React, {Component} from 'react';

class FilmMore extends Component {

    constructor(props){
        super(props);
        this.state = {
            moreFilm: 
                {
                    title: "View more upcoming releases",
                    url: " https://www.imdb.com/calendar/?region=gb"
                }
        }
    }

    render(){
        return (
            <>
            <a href={this.state.moreFilm.url}>{this.state.moreFilm.title}</a>
            </>
        )
    }
}

export default FilmMore;