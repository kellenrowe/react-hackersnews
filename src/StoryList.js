import React from "react";

/** Render StoryList component
 * 
 *  
 *  App -> StoryList -> { SearchForm, Story }
 */
class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { storyLinks: [] };
  }

  handleSearch = (term) => {

  }

  // map through story list to generate individual storyies

  render() {
    return(
      <div className="StoryList">
        <SearchForm handleSearch={handleSearch} />
        {storyList}
      </div>
    );
  }
}

export default StoryList;