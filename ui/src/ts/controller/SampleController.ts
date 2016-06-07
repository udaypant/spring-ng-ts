/**
 * Created by Uday Pant on 6/4/2016.
 */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>

import {SampleService} from "../service/SampleService";
import {SampleScope} from "../model/SampleScope";
import {User} from "../model/User";

export class SampleController {
    constructor(public $scope:SampleScope,
                sampleService:SampleService) {
        $scope.user = new User(null);

        sampleService.getMessage("World").then(function(response:any) {
            $scope.user = response.data;
        }).catch(function(error:any) {
            alert(error.stack);
        });
    }
}