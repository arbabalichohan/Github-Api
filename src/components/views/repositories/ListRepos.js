import { useState } from "react";

function ListRepos({headers}) {
    const [repos, setRepos] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [username, setUsername] = useState(null);
    const HandleClick = async () => {
    const url = `https://api.github.com/users/${username}/repos`;
        const options = {
            method: 'GET', 
            headers: headers
        }
        try{
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setRepos(result);
            setIsPending(false);
        }catch(err){
            
        }
    }
    return ( 
        <div className="">
            <form action="" className="mb-5" onSubmit={(e)=>{e.preventDefault();}}>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value);}} placeholder="Username" />
                </div>
                <div className="form-group mb-3 text-start">
                    <button className="btn btn-success" onClick={()=>{
                        HandleClick();
                    }}>Show</button>
                </div>
            </form>
            {       
                <div className="">
                    <h2 className="bg-secondary text-light py-3">Repositories</h2>
                    {
                        !isPending && 
                        repos.map(repo => (
                            <div className="border text-start py-2 px-3" key={repo.id}>
                                <a href={`https://github.com/${username}/${repo.name}`} target="_blank">
                                    {repo.name}
                                </a>
                                
                            </div>
                        ))
                    }
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListRepos;