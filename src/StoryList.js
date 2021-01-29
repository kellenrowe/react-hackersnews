import React, {prevProps} from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Story from "./Story";

/** Render StoryList component
 * 
 *  State:
 *  - storyObjs: Array of objs containing story URL and title
 *  - term: term to get the stories by
 *  
 *  App -> StoryList -> { SearchForm, Story }
 */
class StoryList extends React.Component {
  state = { storyObjs: [], term: "" };

  async componentDidUpdate() {
    // If new term, make a search
    if (prevProps?.term !== this.state.term) {
      let resp = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${this.state.term}`);

      let storyObjs = resp.data.hits.map(h => (
        { url: h.url, title: h.title, id: h.objectID }
      ));
      this.setState({ storyObjs });
    }
  }

  handleSearch = (term) => {
    this.setState({ term });
  }
  
  render() {
    // map through story list to generate individual stories
    let storyList = this.state.storyObjs.map(l => (
      <Story key={l.id} title={l.title} url={l.url} />
    ));

    return (
      <div className="StoryList">
        <SearchForm handleSearch={this.handleSearch} />
        <ul>
          {storyList}
        </ul>
      </div>
    );
  }
}

export default StoryList;