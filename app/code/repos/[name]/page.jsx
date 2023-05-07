import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";
// import Loading from "./loading";

export const metadata = {
    title: "Single Repository"
};

const RepoPage = ({ params: { name } }) => {

    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">Back to Repositories</Link>

            {/*
                If the whole return statment has components wrraped in a Suspense Boundary then Loading.jsx will be ignored and
                only the Suspense Boundary will be loaded.
            */}
        
            <Suspense fallback={<p>Loading Repository .....</p>}>
                <Repo name={name} />
            </Suspense>
            {/* <Repo name={name} /> */}
            <Suspense fallback={<p>Loading Directories ......</p>}>
                <RepoDirs name={name} />
            </Suspense>
            {/* <RepoDirs name={name} /> */}
        </div>
    )
}

export default RepoPage;

/*

    Below is a reserved function to generate SSG for [slug] direcotry, this is usefull to prefetch data at build time and
    show an instant response to the user, where every the same route of fetching data with a specific name is required , this will
    prefatch and cache it so that you have that imidiate lightning fast response.

*/

// export async function generateStaticParams(){

//     const respone = await fetch("https://api.github.com/users/bradtraversy/repos");

//     const repos = await respone.json();

//     const trimmedRepos = repos.splice(0,3)

//     return trimmedRepos.map((repo) => ({
//         name: repo.name.toString()
//     }))
// }