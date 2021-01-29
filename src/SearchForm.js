import React from "react";


/** Render SearchForm component
 * 
 *  State:
 *  - term: input from user
 *  
 *  App -> StoryList -> { SearchForm, Story }
 */
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  handleChange = (evt) => {
    this.setState({ term: evt.target.value })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleSearch(this.state.term);
  }

  render() {
    return(
      <div className="SearchForm">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Please enter a term"
            value={this.state.term}
            onChange={this.handleChange} />
          <button>Search</button>
        </form>
       
      </div>
    );
  }
}

export default SearchForm;