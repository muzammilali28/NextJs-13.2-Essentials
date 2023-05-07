import Link from "next/link";

// const fetchCourses = async (name) => {
//     const response = await fetch(`/api/courses${name ? `/search?query=${name}` : ""}`);
//     const courses = await response.json();
//     return courses;
// }

const Courses = ({ courses }) => {

    // const courses = await fetchCourses(name);

    console.log("Courses are ---> ", courses)

    return (
        <div className="courses">
            {courses.map((course) => (
                <div className="card" key={course.id}>
                    <h2>{course.title}</h2>
                    <small>Level : {course.level}</small>
                    <p>{course.description}</p>
                    <Link href={course.link} className="btn" target="_blank"> {/* The Target "_blank" means to open the Link in a New Tab */}
                        Go to Course
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Courses
