/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/bootstrap/bootstrap.d.ts"/>
/// <reference path="../../typings/requirejs/require.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>

import angular = require("angular");
import {SampleController} from "./controller/SampleController";
import {SampleService} from "./service/SampleService";

var app = angular.module("myApp", []);

app.controller("myController", SampleController);

app.service("sampleService", SampleService);