import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading1 = React.createElement('h1', {id: 'heading1', key: '1'}, 'Hello');
// const heading2 = React.createElement('h2', {id: 'heading2', key: '2'}, 'Akash bansal');
// const container = React.createElement('div', {id: 'container'}, [heading1,heading2]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(container);


//JSX
// const heading = (
//     <h1 id='title'>Welcome to React, Akash !!</h1>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//Functional Component

const heading = <h1 id="title" key="1">Welcome to React, Akash !!</h1>;

const TitleComponent = () => {
    return (
        <p>I am title component</p>
    )
};

const HeadingComponent = () => {
    return (
        <div>
            {heading}
            <TitleComponent />
            <h2  key="2">This is an example of functional component</h2>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);


