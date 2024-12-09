import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: "",
        address: " Thai Binh",
        age: ""
    };
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: this.state.name,
            age: this.state.age
        });
    }
    // JSX
    render() {
        return (
            <div>My name is {this.state.name} and I'm {this.state.age}
                {/* <button onClick={(event) => { this.handleClick(event) }}> Click me</button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label> Your Name</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <label> Your Age</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}
export default AddUserInfor;