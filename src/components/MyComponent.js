import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Toan", age: "15" },
            { id: 2, name: "Tú", age: "32" },
            { id: 3, name: "Quang", age: "70" }
        ]
    }
    render() {

        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    users={this.state.listUsers}
                />
            </div>
        );
    }
}
export default MyComponent;