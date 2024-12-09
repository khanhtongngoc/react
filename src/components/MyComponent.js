import React from "react";
class MyComponent extends React.Component {
    state = {
        name: "Khanh",
        address: " Thai Binh",
        age: "35"
    };
    // JSX
    render() {
        return (
            <div> My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}
export default MyComponent;