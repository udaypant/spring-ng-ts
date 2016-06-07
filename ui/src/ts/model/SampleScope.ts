/**
 * Created by Uday Pant on 6/6/2016.
 */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
import IScope = angular.IScope;
import {User} from "./User";
import {SampleObject} from "./SampleObject";

export interface SampleScope extends IScope {
    user:User;
    sampleObject:SampleObject;
}