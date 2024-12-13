import ModalCreateUser from "./ModalCreateUsers";




const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">

                Manager User
            </div>
            <div className="users-content">
                <button>Add New Users</button>
            </div>
            <div>
                Table Users
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;