const heading1 = React.createElement("h1", {
    id: "heading1"
}, "Hello");
const heading2 = React.createElement("h2", {
    id: "heading2"
}, "Akash bansal");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=basics.6bd02f5a.js.map
