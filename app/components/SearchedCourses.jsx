'use client';

import { useState } from "react";
import Courses from "./Courses";


const SearchedCourses = ({ setSearchedCourse }) => {

    const [query, setQuery] = useState("")

    const handelSubmit = async (event) => {

        event.preventDefault();

        console.log(query);

        const response = await fetch(`/api/courses/search?query=${query}`);
        const filteredCourse = await response.json();

        setSearchedCourse(filteredCourse);
    }

    return (
            <form onSubmit={handelSubmit} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search Courses ..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
    )
}

export default SearchedCourses
