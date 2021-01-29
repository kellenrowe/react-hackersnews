import React from "react";


/** Render Story component
 * 
 *  Props:
 *  - title: story title
 *  - url: story url 
 *  
 *  App -> StoryList -> { SearchForm, Story }
 */
class Story extends React.Component {
  render() {
    const {title, url} = this.props;
    return(
      <li>
        <a href={url}>
          {title}
        </a>
      </li>
    );
  }
}

export default Story;