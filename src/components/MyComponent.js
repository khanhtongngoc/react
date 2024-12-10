import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Toan", age: "15" },
//             { id: 2, name: "Tú", age: "32" },
//             { id: 3, name: "Quang", age: "70" }
//         ]
//     }
//     handleAddNewUser = (userObj) => {

//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {

//         return (
//             <>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br /> <br />
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </>
//         );
//     }
// }
const MyComponent = (props) => {
    const [listUsers, setListUser] = useState(
        [
            { id: 1, name: "Toan", age: "15" },
            { id: 2, name: "Tú", age: "32" },
            { id: 3, name: "Quang", age: "70" }
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUsers])
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUser(listUsersClone);
        // this.setState({
        //     listUsers: listUsersClone
        // })

    }
    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br /> <br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );

}
export default MyComponent;