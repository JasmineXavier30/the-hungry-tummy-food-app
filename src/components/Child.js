import React, { Component } from "react";
import SubChild from "./SubChild";

class Child extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.name + "child constructor")
    }
    componentDidMount() {
        console.log(this.props.name + "child componentDidMount");
    }
    render() {
        console.log(this.props.name + "child render");
        return <SubChild name={this.props.name} />
    }
}

export default Child;