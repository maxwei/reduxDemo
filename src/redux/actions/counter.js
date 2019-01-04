import axios from 'axios';
require('../../mock/mockData');

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export function increment() {
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT }
}

export function reset() {
    return { type: RESET }
}

export function getMockInfo() {
    return (dispatch) => {
        axios.get('http://mock.test.com').then((response)=>{
            console.log("接收到了消息,然后让计数器自动+1");
            console.log(response);
            dispatch({
                type:INCREMENT
            })
        })
    }
}