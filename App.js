const h2 = React.createElement(
    'h2', 
    {id:"sample", className:"sampleClass"}, 
    'Hello world from React');

console.log(h1); // h1 tag
console.log(h2); // object
const root1 = ReactDOM.createRoot(document.getElementById('root'))
root1.render(h2) // converting obj to tag and rendering it on the DOM