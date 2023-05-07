import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa";

export const metadata = {
    title: "Repositories",
};

const fetchRepos = async () => {
    const reponse = await fetch("https://api.github.com/users/bradtraversy/repos",
    {
        next: {
            revalidate: 60,          //This new feature from Next Js 13 beta provides
                                    // functionality to re-update or re-validate Cache memory of the data that is being fethced
                                    // after "60 seconds", so that Fresh Content and Latest page is being served to the client.

                                    // This is only beneficial if you have an API data which often changes and you need to keep track of latest data.
        }
    });
    // await new Promise((resolve)=>setTimeout(resolve,2000));
    const repos = await reponse.json();
    return repos
}

const ReposPage = async () => {
    const repos = await fetchRepos();
    
    // console.log(repos)
    return (
        <div className="repos-container">
            <h2>Repositories</h2>
            <ul className="repo-list">
                {repos.map((repo)=>(
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <div className="repo-details">
                            <span>
                                <FaStar /> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch /> {repo.forks_count}
                            </span>
                            <span>
                                <FaEye /> {repo.watchers_count}
                            </span>
                        </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposPage;
