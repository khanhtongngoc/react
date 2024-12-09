import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { age, name } = this.props;
        return (
            <div>
                <div>My name is {name}</div>
                <div>I'm {age} year old</div>
            </div>
        );
    }
}
export default DisplayInfor