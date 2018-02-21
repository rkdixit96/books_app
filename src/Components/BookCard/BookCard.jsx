import React from 'react';
import PropTypes from 'prop-types';


export default class BookCard extends React.Component {
  constructor(props) {
    super(props);
    BookCard.propTypes = {
      name: PropTypes.string,
      rating: PropTypes.string,
      author: PropTypes.string,
      id: PropTypes.string,
    };
    BookCard.defaultProps = {
      name: 'default',
      rating: 'default',
      author: 'default',
      id: 'default',
    };
    this.state = {
      name: props.name,
      rating: props.rating,
      author: props.author,
      id: props.id,
      liked : false,
    };
  }
  
  componentDidMount() {
    fetch(`/books/likes/${this.state.id}`)
    .then((response) => {
      response.json().then((data) => {
        if(data.result[0]){
          console.log(data.result[0].liked)
          if (data.result[0].liked) {
            this.setState({
              liked: true,
            })
          }
        }
    })
  });      
}

  likeHandler = () =>{
    fetch(`/books/${this.state.id}/like`, {
      method: 'PUT',
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <input type="button" value="like" onClick={this.likeHandler}/>
        <p>{this.state.liked}</p>
      </div>
    );
  }
}
