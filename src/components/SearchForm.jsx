import React from 'react';
import '../styles/SearchForm.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchText: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });

    // this.props.onSearch(event.target.value)
  }

  render() {
    return (
      <div className="search-form">
        <div>
          <input
            className="search-input"
            onChange={this.handleInputChange}
            value={this.state.searchText}
            type="text"
          />
          <button className="search-button" onClick={() => this.props.onSearch(this.state.searchText)}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
