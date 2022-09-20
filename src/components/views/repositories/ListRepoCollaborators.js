import { useState } from "react";

function ListRepocollaborators({headers, username}) {
    
    const [repo, setRepo] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [collaborators, setCollaborators] = useState(null);
    const HandleClick = async () => {
        const url = `https://api.github.com/repos/${username}/${repo}/collaborators`;
        const options = {
            method: 'GET',
            headers: headers
        };

        try{
            const response = await fetch(url, options);
            if (!response.ok){
                throw Error("Could not fetch any data..");
            }else{
                setIsPending(false);
                const data = await response.json();
                console.log(data);
                setCollaborators(data);
            }
        }catch(err){

        }
    }
    return ( 
        <div className="" >
            <h2 className="mb-5">Repository collaborators</h2>
            <form action="" className="mb-5" onSubmit={(e)=>{e.preventDefault();}}>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" value={repo} onChange={(e)=>{setRepo(e.target.value);}} placeholder="Repository name" />
                </div>
                <div className="form-group mb-3 text-start">
                    <button className="btn btn-success" onClick={()=>{
                        HandleClick();
                    }}>Show</button>
                </div>
            </form>
            {
                !isPending &&
                <div className="">
                    <h2 className="bg-secondary text-light py-3">collaborators</h2>
                    {collaborators && collaborators.map(collaborator => (
                        <div className="border text-start py-2 px-3" key={collaborator.id}>
                            <a href={collaborator.html_url} target="_blank">{collaborator.login}</a>
                        </div>
                    ))}
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListRepocollaborators;