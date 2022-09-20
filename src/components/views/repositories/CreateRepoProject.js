import { useState } from "react";
import Success from "../../alert/Success";

function CreateRepoProject({headers, username}) {
    
    const [repo, setRepo] = useState('');
    const [project, setProject] = useState('');
    const [message, setMessage] = useState(null);
    const url = `https://api.github.com/repos/${username}/${repo}/projects`;
    const HandleSubmit = async (e) => {
        e.target.disabled = true;
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                'name': project
            })
        };
        try{
            const response = await fetch(url, options);
            console.log(await response.json())
            if (response.status === 201){
                setMessage("The repository project was created successfully!");
                e.target.disabled = false;
            }else if (response.status == 410){
                setMessage("Repository projects are disabled");
            }else{
                setMessage("Oops there was an error!");
                e.target.disabled = false;
            }
        }catch(err){
            
        }

    }
    
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h2 className="mb-5">Create Repository</h2>
            <form action="">
                <div className="for-group mb-4">
                    <input type="text" className="form-control" placeholder="Repository name" value={repo} onChange={(e)=>{setRepo(e.target.value)}}/>
                </div>
                <div className="for-group mb-4">
                    <input type="text" className="form-control" placeholder="Project name" value={project} onChange={(e)=>{setProject(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success form-control" id="submit" onClick={(e) => HandleSubmit(e)}>Create</button>
                </div>
            </form>
            {message && <Success message={message}/>}
        </div>
     );
}
 
export default CreateRepoProject;