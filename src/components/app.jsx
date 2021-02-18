//classComponent 
import React, { Component } from 'react';   //{Component}を使用するのでimport


export class App extends Component {
    constructor(props) {
        super(props);   //親(この場合Component)
        this.state = {
        };
    }
    render() {
        return (
            <>
                <p>hello Apps!</p>
            </>
        );
    }//classComponentはrender()で返す。
}//export defaultもあるがexportの方が名前を確約出来る点が良い。
