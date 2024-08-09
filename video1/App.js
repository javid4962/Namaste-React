const h1 = React.createElement("h1", { id: "heading1" }, "heading1");

const h2 = React.createElement("h2", { id: "heading2" }, "heading2");

const div = React.createElement("div", { id: "container" }, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
