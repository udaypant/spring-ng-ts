import {InnerObject} from "./InnerObject";
/**
 * Created by Uday Pant on 6/5/2016.
 */
export class SampleObject {
    constructor(public stringProp:string, 
                public simpleList:Array<string>,
                public complexList:Array<InnerObject>) {

    }
}