'use client';

// ✨ Four(4) -> Import Key Take Aways in this file that are essestial for a beginner to understand , I personally came across these so I decided to add them.





// ✨ One(1) -> this file 'page.jsx' is Server-Side-Rendered (SSR) by default, you can change its nature to client side if "use client" is used at the top.


import { useState, Suspense, useEffect } from 'react';

import LoadingPage from './loading';// 👽 Import it else you cannot see any loading effect while fetching content in a Client-Side Component/Page

import Courses from './components/Courses'
import SearchedCourses from './components/SearchedCourses';

const HomePage = () => {

  const [searchedCourse, setSearchedCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    /* ✨ Two(2) -> When you fetch data in a Client-Side Component, then by default "loading.jsx" will no work,
      because the "loading.jsx" is set by default to only work for SSR / Server-Side Component/Page ~ by Next Js
      to forecfully show the loading animation via "loading.jsx", import it instead like this 👽
    */

    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const courses = await response.json();

      setSearchedCourse(courses);
      setLoading(false)
    }

    fetchCourses();

  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <SearchedCourses setSearchedCourse={(course) => setSearchedCourse(course)} />
      {/* {loading ?
        <CustomLoader /> :
        <Courses courses={searchedCourse} />
      } */}

      {loading ? <LoadingPage /> : <Courses courses={searchedCourse} />}


      {/* 
        ✨ Three(3) -> Use the Suspence boundray only when you are fethcing data using the fetch API in that specific component
        , which is wrapped inside the Suspense Boundray. It will show the fallback and give a better UI experience to the user
        while it is fetching the data in that component which once ready will be served to the client
      */}
      {/* <Suspense fallback={<Loading />}>
        <Courses courses={searchedCourse} />
      </Suspense> */}


      {/* 
        ✨ Four(4) -> When you use the 'use client' reserved keyword at the top of the page/component, all the components called in that page/component will
        compress itself to server as a Client-Side Component / Render, even though you have a Server-Side component called in here like this one below which
        doesn't have a 'use client' at the top but, where it is being called if that is a Client-Side component then it will reimburse itself to serve as a
        Client-Side Component.

        In my opinion will you are sending a static data to a component then that called component will server as a Server-Side component, but if you are
        sending dynamic and realtime data to that component then it will serve as a Client-Side because the user's input is required to function accordingly.

        Below is a Server-Side Component by nature but as being called here in a 'use client' page/component it is acting as a Client-Side component.
      */}
      {/* <Courses courses={searchedCourse} /> */}
    </>
  )
}

export default HomePage
