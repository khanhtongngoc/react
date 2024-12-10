import React, { useCallback, useEffect, useState } from "react";
import { use } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
import userEvent from "@testing-library/user-event";

// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>>call me render ')
//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name is {user.name} </div>
//                                     <div>I'm {user.age} year old</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)} >Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div >
//                             )
//                         })
//                         }
//                     </>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // useState
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert("xoa het roi");
            }
            console.log('>>call me');
        }, [listUsers]
    )
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>

                    {isShowHideListUser === true ? "Hide List Users" : "Show List User"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name is {user.name} </div>
                                <div>I'm {user.age} year old</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)} >Delete</button>
                                </div>
                                <hr />
                            </div >
                        )
                    })
                    }
                </>
            }
        </div>
    );
}
export default DisplayInfor;