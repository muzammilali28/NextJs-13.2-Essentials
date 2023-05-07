import { Bigelow_Rules } from "next/font/google";
import { NextResponse } from "next/server";

/*

    This Route is telling how to get the Param from URL which used to be like "URl/data/:id" in Express Js
                                                                                         ^
                                                                                         |
                                                                                         |
                                                                            Where this is the "id" and the folder naming conventions should be like this [id] // Folder Name
                                                                                                                                                          |
                                                                                                                                                          |___ route.js

    Below is the method to get that ID from the folder naming convention in Next Js 13 - beta

    for example ---> http://localhost:3000/api/courses/search/6
                                                              ^
                                                              |
                                                              |
                                    This is the Param we need to fetch, this can be handy in many cases where we want to show
                                    or fetch some data on a sepcific value  
*/

// We we use slug / name convention on the folders we get an Object know as {params}
// we can de structure the object further to get the slug / name of the folder ....... As shown below
//                                      |
//                                      |
//                                      ˅
export async function GET(request, {params : { id }}) {

    // console.log(id)
    
    return NextResponse.json({
        "id": id,
        "type of Param" : typeof(id)
    });
  }