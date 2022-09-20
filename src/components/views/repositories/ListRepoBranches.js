import { useState } from "react";

function ListRepoBranches({headers}) {
    const [repo, setRepo] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [branches, setBranches] = useState(null);
    const [username, setUsername] = useState('');
    
    const HandleClick = async () => {
        const url = `https://api.github.com/repos/${username}/${repo}/branches`;
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
                setBranches(await response.json());
            }
        }catch(err){

        }
    }
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h2 className="mb-5">Repository Branches</h2>
            <div className="row">
                <div className="col ">
                    <form action="" className="mb-5">
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
                <div className=" text-center">
                    <h2 className="bg-secondary text-light py-3">Repository Branches</h2>
                    {branches && branches.map(branch => (
                        <div className="border text-center py-2 px-3" key={branch.name}>
                            {branch.name}
                        </div>
                    ))}
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListRepoBranches;