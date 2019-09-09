import React, { Component } from 'react';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

class CounterStore extends Component {
    number = 0;
    @action
    increase = () => {
        this.number++;
    }

    
    decrease = () => {
        this.number--;
    }
}

decorate(CounterStore, {
    number : observable,
    increase : action,
    decrease : action
})

export default observer(CounterStore);