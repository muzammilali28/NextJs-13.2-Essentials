import Link from "next/link";

const fetchRepoDirContent = async (name) => {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`,
    {
        next: {
            revalidate: 60
        }
    });

    const content = response.json();

    return content;
}

const RepoDirs = async ({ name }) => {

    const content = await fetchRepoDirContent(name);
    const dirs = content.filter((content) => content.type === 'dir');

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RepoDirs
