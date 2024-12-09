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
            name: "Trang",
            age: Math.floor((Math.random() * 100) + 1)
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }
    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    handleOnMoverOver(event) {
        console.log(event);
    }
    // JSX
    render() {
        return (
            <div> My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}> Click me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnChange(event)}
                    />
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}
export default MyComponent;