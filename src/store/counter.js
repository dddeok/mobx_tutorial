import React, { Component } from 'react';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

export default class CounterStore{

    @observable number = 1;

    constructor(root){
        this.root = root
    }
    @action increase = () =>{
        this.number++;
    }
    @action decrease = () => {
        this.number--;
    }
}