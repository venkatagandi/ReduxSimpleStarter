import React  from 'react';
import ReactDOM from 'react-dom';

import  SearchBar  from './components/search_bar';

const API_KEY = "AIzaSyBz4Xnr6llRW2ZzaUg1sCBOnmTVU1Xdu0c";


// Create a new component. This compoonent should produce some
// HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//React take this component's generated HTML and
//put it on the page(DOM)
ReactDOM.render(<App />,document.getElementById('root'));


