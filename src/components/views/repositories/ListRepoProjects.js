import { useState } from "react";

function ListRepoProjects({headers, username}) {
    
    const [repo, setRepo] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [projs, setProjs] = useState(null);
    const HandleClick = async () => {
        const url = `https://api.github.com/repos/${username}/${repo}/projects`;
        const options = {
            method: 'GET',
            headers: headers
        };
        
        const response = await fetch(url, options);
        if (!response.ok){
            throw Error("Could not fetch any data..");
        }else{
            setIsPending(false);
            setProjs(await response.json());
            console.log(projs);
        }
    }
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h2 className="mb-5">Repository Projects</h2>
            <div className="row">
                <div className="col ">
                    <form action="" className="mb-5">
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
                <div className="">
                <h2 className="bg-secondary text-light py-3 ">Repository Projects</h2>
                {
                    !isPending && projs != null &&

                    projs.map(proj => (
                        <div className="border text-start py-2 px-3 " key={proj.id}>
                            <a href={`https://github.com/${username}/${repo.name}`} target="_blank">
                                {proj.name}
                            </a>
                            
                        </div>
                    ))
                }
            </div>
            
            
            }
            
        </div>
     );
}
 
export default ListRepoProjects;