import {  NextResponse } from "next/server";
import courses from "../coursesDB.json";


/*
    This Route is telling how to get the Query Params from a URL , for example

    http://localhost:3000/api/courses/search?query=react
                                              ^
                                              |
                                              |
                                    This the query parameter that we want to fetch from the URL
*/
export async function GET(request) {

    // request.url --> gives us the actual search URL i.e http://localhost:3000/api/courses/search?query=react
    
    // by destructing the request.url with "new URL()" we get a destructed key called "searchParams"
    // we get the values as
    // ---------------------> { 'query' => 'react' }

    // to get the individual query parameters we use "searchParams.get("<any query name >")"


    const {searchParams} = new URL(request.url)
    
    const query = searchParams.get('query');

    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase());
    });
    
    return NextResponse.json(filteredCourses);
  }

/*

    This Route is telling how to get the "JSON.stringfy()" format data which is POST'ed to this route , for example

    fetch("http://localhost:3000/api/courses/search/",
    {
        method: "POST",
        header: {"Content-Type": "application/json",}
        body: JSON.stringify({Name: "Muzammmil", Age:23})
    })

    Now to get the "body" data in Next Js 13 - beta , we will do the following in the API Route Handler
*/

export async function POST(request){
    
    const {name, age} = await request.json()
    
    console.log("Name:",name)
    console.log("Age: ",age)

    return NextResponse.json({
        message: "Success POST Data",
        Name: name,
        Age: age
    });
}