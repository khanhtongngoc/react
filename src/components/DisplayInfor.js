import React from "react";
import { use } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log('>>> call me constructor:1')
        super(props);
        this.state = {
            isShowListUser: true
        }
    }
    componentDidMount() {
        console.log('>>> call me component did mount')
        setTimeout(() => {
            document.title = 'Trang Cua Tong Ngoc Khanh'
        }, 3000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component did update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('you have got 5 member');
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('>>>call me render ')
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide List User" : "Show List User"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name} </div>
                                    <div>I'm {user.age} year old</div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)} >Delete</button>
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
}
export default DisplayInfor