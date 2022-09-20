import { useState } from "react";
import Success from "../../alert/Success";

function EditRepo({headers, username}) {    
    const [newrepo, setNewrepo] = useState('');
    const [message, setMessage] = useState(null);
    const [repo, setRepo] = useState();
    const url = `https://api.github.com/repos/${username}/${repo}`;
    const data = JSON.stringify({
        'name': newrepo
    });
    
    const HandleSubmit = async (e) => {
        e.target.disabled = true;
        const options = {
            method: 'POST',
            headers: headers,
            body: data
        };
        try{
            const response = await fetch(url, options);
            if (response.status === 200){
                setMessage("The repository was updated successfully!");
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
            <h2 className="mb-5">Update Repository</h2>
            <form action="">
                <div className="form-group mb-4">
                    <input type="text" className="form-control" value={repo} onChange={(e)=>{setRepo(e.target.value)}} placeholder="Repository name.." />
                </div>
                <div className="for-group mb-4">
                    <input type="text" className="form-control" placeholder="Repository new name" value={newrepo} onChange={(e)=>{setNewrepo(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success form-control" id="submit" onClick={(e) => HandleSubmit(e)}>Update</button>
                </div>
            </form>
            {message && <Success message={message}/>}
        </div>
     );
}
 
export default EditRepo;