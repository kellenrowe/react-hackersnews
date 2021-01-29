import React from "react";
import './App.css';
import StoryList from "./StoryList";


/** Render App component
 *  
 *  App -> StoryList -> { SearchForm, Story }
 */
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <StoryList />
      </div>
    );
  }
}

export default App;
