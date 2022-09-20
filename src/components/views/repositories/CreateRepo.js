import { useState } from "react";
import Success from "../../alert/Success";

function CreateRepo({headers}){
    const url = 'https://api.github.com/user/repos';
    const [repo, setRepo] = useState('');
    const [message, setMessage] = useState(null);
    const HandleSubmit = async (e) => {
        e.target.disabled = true;
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                'name': repo
            })
        }
        try{
            const response = await fetch(url, options);
            if (response.status === 201){
                setMessage("The repository was created successfully!");
                e.target.disabled = false;
            }else{
                setMessage("Oops there was an error!");
                e.target.disabled = false;
            }
        }catch(err){
            console.log(err.message);
            e.target.disabled = false;
        }
    }
    
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h2 className="mb-5">Create Repository</h2>
            <form action="">
                <div className="for-group mb-4">
                    <input type="text" className="form-control" placeholder="Repository name" value={repo} onChange={(e)=>{setRepo(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success form-control" id="submit" onClick={(e) => HandleSubmit(e)}>Create</button>
                </div>
            </form>
            {message && <Success message={message}/>}
        </div>
     );
}
 
export default CreateRepo;