/**
 * @author: houzhitao
 * @since: 2018-06-05 16:06
 */

import React, {Component} from 'react';
import {observable, action, computed} from 'mobx';
import Api from 'Api';

export default class indexassessStore {
    @observable
    num1: number = 0;
    @observable
    num2: number = 0;

    constructor() {

    }

    getData = () => {
        Api.post(Api.USER_API, 'member/account/prelogin', {})
            .then(res => console.log(res))
            .catch(error => console.log(error))
    };

    @action
    num1Click = () => {
        this.num1++;
    };

    @action
    num2Click = () => {
        this.num2++;
    };

    @computed
    get total() {
        return this.num1 + this.num2
    }
}
