import React, { Component } from "react";

class SuperSubChild extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.name + "SuperSubChild constructor")
    }
    componentDidMount() {
        console.log(this.props.name + "SuperSubChild componentDidMount");
    }
    render() {
        console.log(this.props.name + "SuperSubChild render");
    }
}

export default SuperSubChild;