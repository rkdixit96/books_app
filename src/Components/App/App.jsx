import React from 'react';
import PropTypes from 'prop-types';
import SyncButton from '../SyncButton/SyncButton';
import AuthorContaniner from '../AuthorContainer/AuthorContainer';
import Header from '../Header/Header'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    App.propTypes = {
      textValue: PropTypes.string,
    };
    App.defaultProps = {
      textValue: 'default',
    };
    this.state = {
      isDbEmpty: null,
      groupedBooks: null,
      loaded: false,
    
    };
  }

  componentDidMount() {
    fetch('/books/v2')
      .then((response) => {
        response.json().then((data) => {
          if (data.result[0] === undefined) {
            this.setState({
              isDbEmpty: true,
            });
          } else {
            const books = [];
            data.result.forEach((element) => {
              books.push(element);
            }, this);
            console.log(books);
            const res = this.groupDataBasedOnKey(books,'author')
            console.log(res)
            this.setState({
              isDbEmpty: false,
              groupedBooks: res,
              loaded: true,
            });
          }
        });
      });
  }

  groupDataBasedOnKey = (data, key) => {
    const groupedData = {};
    data.forEach((element) => {
        if (groupedData[element[key]] === undefined) {
        groupedData[element[key]] = [];
        }
        groupedData[element[key]].push(element);
    }, this);
    return groupedData;
};



  render() {
    if (this.state.isDbEmpty) {
      return (
        <div>
          <Header text="The Book Shelf"/>
          <SyncButton />
        </div>
      );
    } 
    if(this.state.loaded){
        return (
            <div>
              <Header text="The Book Shelf"/>
              <AuthorContaniner author = "J K Rowling" books = {this.state.groupedBooks["J K Rowling"]} />
              <AuthorContaniner author = "Sidney Sheldon" books = {this.state.groupedBooks["Sidney Sheldon"]} />
            </div>
          );
    }
    else{
        return (
            <div>
            <Header text="The Book Shelf"/>
              Loading
            </div>
          );
    }
  }
}
