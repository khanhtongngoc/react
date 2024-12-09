import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Toan", age: "15" },
            { id: 2, name: "Tú", age: "32" },
            { id: 3, name: "Quang", age: "70" }
        ]
    }
    handleAddNewUser = (userObj) => {

        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    render() {

        return (
            <>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </>
        );
    }
}
export default MyComponent;