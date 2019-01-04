//react
import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { increment, decrement, reset, getMockInfo } from '../../redux/actions/counter';
import { connect } from 'react-redux';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        //初始化state
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
                <button onClick={() => this.props.getMockInfo()}>发送异步请求
                </button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.count
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        },
        getMockInfo:()=>{
            dispatch(getMockInfo());
        }
    }
};
//导出组件
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
