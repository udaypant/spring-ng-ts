/**
 * Created by Uday Pant on 6/5/2016.
 */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>

import IHttpService = angular.IHttpService;
import {SampleObject} from "../model/SampleObject";
import IHttpPromise = angular.IHttpPromise;

export class SampleService {

    constructor(public $http:IHttpService) {

    }

    public getMessage(name:string):IHttpPromise<any> {
        return this.$http.get("http://localhost:8080/sample/getMessage/" + name, null);
    }
    
    public samplePostMethod(object:SampleObject):IHttpPromise<any> {
        return this.$http.post("http://localhost:8080/sample/samplePostMethod", object);
    }
}