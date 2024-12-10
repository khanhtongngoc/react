import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: "",
//         address: " Thai Binh",
//         age: ""
//     };
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })

//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100 + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     // JSX
//     render() {
//         return (
//             <div>My name is {this.state.name} and I'm {this.state.age}
//                 {/* <button onClick={(event) => { this.handleClick(event) }}> Click me</button> */}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label> Your Name</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />
//                     <label> Your Age</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>

//                 </form>
//             </div>
//         );
//     }
// }
const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Thai Binh');
    const [age, setAge] = useState('');
    const handleOnChangeInput = (event) => {
        setName(event.target.value);
        // this.setState({
        //     name: event.target.value
        // })

    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
        // this.setState({
        //     age: event.target.value
        // })

    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age
        });
    }
    return (
        <div>My name is {name} and I'm {age}
            {/* <button onClick={(event) => { this.handleClick(event) }}> Click me</button> */}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label> Your Name</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <label> Your Age</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>

            </form>
        </div>
    );
}

export default AddUserInfor;