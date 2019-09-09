import React, { Component } from 'react';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

export default class CounterStore{

    @observable number = 0;

    @action increase = () =>{
        this.number++;
    }
    @action decrease = () => {
        this.number--;
    }
}