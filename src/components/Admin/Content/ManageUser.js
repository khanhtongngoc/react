import ModalCreateUser from "./ModalCreateUsers";
import './ManageUser.scss';


const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">

                Manager User
                <div className="users-content">
                    <button>Add New Users</button>
                </div>
                <div>
                    Table Users
                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;