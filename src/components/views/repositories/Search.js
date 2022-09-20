import { useState } from "react";

function Search() {
    
    const [repo, setRepo] = useState('');
    const [repos, setRepos] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const HandleClick = async () => {
        const url = 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc';
        const headers = {
            'Authorization': 'token {{ACCESS_TOKEN}}',
            'Accept': 'application/vnd.github.v3+json'
        };
        const options = {
            method: 'GET',
            headers: headers,
        };
        const response = await fetch(url, options);
        //console.log(JSON.stringify(await response.json(), null, 2));
        const result = await response.json();
        console.log(result);
        setRepos(result);

    }
    return ( 
        <div className="">
            <h2>Search Repositodries</h2>
            <form action="" className="mb-5 " onSubmit={(e)=>{e.preventDefault();}}>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" value={repo} onChange={(e)=>{setRepo(e.target.value);}} placeholder="Username" />
                </div>
                <div className="form-group mb-3 text-start">
                    <button className="btn btn-success" onClick={()=>{
                        HandleClick();
                    }}>Show</button>
                </div>
            </form>
            {
                !isPending && 
                repos.map(repo => (
                    <div className="border text-start py-2 px-3" key={repo.id}>
                        <a href={`https://github.com/${repo.name}`} target="_blank">
                            {repo.name}
                        </a>
                                
                    </div>
                ))
            }
        </div>
     );
}
 
export default Search;