import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import { githubUsername } from '../constants/constants'
async function fetchRepo(name) {
const username = githubUsername
await new Promise((resolve) => setTimeout(resolve, 1000))

//1. SSG : Staic
//const response = await fetch(
//`https://api.github.com/repos/${username}/${name}`
//)
//2.SSR : Serverside rendering
//const response = await fetch(
//  `https://api.github.com/repos/${username}/${name}`
//  (cache 'no-store')
//  )
//3.ISR : Incrementar Static Generation
//const response = await fetch(
//  `https://api.github.com/repos/${username}/${name}`
//  (cache 'revalidate : 60')
//  )
const repo = await response.json()
return repo
}
const Repo = async ({ name }) => {
const repo = await fetchRepo(name)
const username = githubUsername
return (
<div>
<h3 className="text-xl font-bold">
<Link href={`https://github.com/${username}/${name}`}>{repo.name}</Link>
</h3>
<p>{repo.description}</p>
<div className="flex justify-between items-center mb-4">
<span className="flex items-center gap-1">
<FaStar /> {repo.stargazers_count}
</span>
<span className="flex items-center gap-1">
<FaCodeBranch /> {repo.forks_count}
</span>
<span className="flex items-center gap-1">
<FaEye /> {repo.stargazers_count}
</span>
</div>
</div>
)
}
export default Repo