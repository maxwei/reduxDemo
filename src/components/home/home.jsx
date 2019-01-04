import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import './home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        //初始化state
        this.state = {
        };
    }
    render() {
        return (
            <div className="home">
                This is my home page!
            </div>
        )
    }
}
//初始化props
Home.defaultProps = {
    title: "hello world"
}
//利用prop-types第三方库对组件的props中的变量进行类型检测
Home.propTypes = {
    title: PropTypes.string
}
//导出组件
export default Home;

