import React from "react";
class MyComponent extends React.Component {
    state = {
        name: "Khanh",
        address: " Thai Binh",
        age: "35"
    };
    handleClick(event) {
        console.log(">>Click Me my button")
        // console.log("random", )
        this.setState({
            name: "Trang"
        })
        this.setState({
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMoverOver(event) {
        console.log(event);
    }
    // JSX
    render() {
        return (
            <div> My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}> Hover Me</button>
                <button onClick={(event) => { this.handleClick(event) }}> Click me</button>
            </div>
        );
    }
}
export default MyComponent;