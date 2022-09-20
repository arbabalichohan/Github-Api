import { useState } from "react";

function ListRepoCommits({headers}) {
    
    const [repo, setRepo] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [commits, setCommits] = useState('');
    const [username, setUsername] = useState('');
    const HandleClick = async () => {
        const url = `https://api.github.com/repos/${username}/${repo}/commits`;
        const options = {
            method: 'GET',
            headers: headers
        };

        try{
            const response = await fetch(url, options);
            if (!response.ok){
                throw Error("Could not fetch any data..");
            }else{
                const result = await response.json();
                console.log(result);
                setIsPending(false);
                setCommits(result);
            }
        }catch(err){

        }
    }
    return ( 
        <div className="" >
            <h2 className="mb-5">Repository Commits</h2>
            <div className="row">
                <div className="col col-12 mx-auto">
                    <form action="" className="mb-5" onSubmit={(e)=>{e.preventDefault();}}>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value);}} placeholder="Username" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" value={repo} onChange={(e)=>{setRepo(e.target.value);}} placeholder="Repository name" />
                        </div>
                        <div className="form-group mb-3 text-start">
                            <button className="btn btn-success" onClick={()=>{
                                HandleClick();
                            }}>Show</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                !isPending &&
                <div className="">
                    <div className="row bg-dark text-light text-center">
                        <div className="col col-5 py-2 px-3 border">
                            <b>
                                Message
                            </b>
                        </div>
                        <div className="col col-3 py-2 px-3 border">
                            <b>
                                Commiter
                            </b>
                        </div>
                        <div className="col col-4 py-2 px-3 border">
                            <b>
                                Commit    
                            </b>
                        </div>
                    </div>
                    {commits && commits.map((commit, index) => (

                        <div className="" key={commit.sha}>
                            <div className="border text-center row">
                                <div className="col col-5 border py-2 px-3 ">
                                    {commit.commit.message}
                                </div>
                                <div className="col col-3 border py-2 px-3 ">
                                    <pre>
                                        {commit.commit.committer.name}                                     
                                    </pre>
                                </div>
                                <div className="col col-4 border py-2 px-3 "> 
                                    <a href={`https://github.com/${repo}/commit/${commit.sha}`} target="_blank">
                                        Visit on Github
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListRepoCommits;