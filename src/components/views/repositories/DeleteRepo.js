import { useState } from "react";
import Success from "../../alert/Success";

function DeleteRepo({headers, username}) {
    
    const [message, setMessage] = useState(null);
    const [repo, setRepo] = useState();
    
    const HandleSubmit = async (e) => {
        e.target.disabled = true;
        const url = `https://api.github.com/repos/${username}/${repo}`;
        const options = {
            method: 'DELETE',
            headers: headers
        };
        try{
            const response = await fetch(url, options);
            if (response.status === 204){
                setMessage("The repository was deleted successfully.");
                e.target.disabled = false;
                
                
            }else if (response.status === 307){
                setMessage("There has been a redirect temporarily.");
                console.log(response.status)
                e.target.disabled = false;
                
            }
            else{
                setMessage("The repository we were looking for was not found.");
                e.target.disabled = false;
            }
            this.props.history.push('/repository/delete');
        }catch(err){
            // e.target.disabled = true;
        }
    }
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h2 className="mb-5">Delete Repository</h2>
            <form action="">
                <div className="form-group mb-4">
                    <input type="text" className="form-control" value={repo} onChange={(e)=>{setRepo(e.target.value)}} placeholder="Repository name.." />
                </div>
                
                <div className="form-group">
                    <button className="btn btn-success form-control" id="submit" onClick={(e) => HandleSubmit(e)}>Update</button>
                </div>
            </form>
            {message && <Success message={message}/>}
        </div>
     );
}
 
export default DeleteRepo;