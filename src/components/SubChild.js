import React, { Component } from "react";
import SuperSubChild from "./SuperSubChild";

class SubChild extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.name + "SubChild constructor")
    }
    componentDidMount() {
        console.log(this.props.name + "SubChild componentDidMount");
    }
    render() {
        console.log(this.props.name + "SubChild render");
        return <SuperSubChild name={this.props.name} />
    }
}

export default SubChild;