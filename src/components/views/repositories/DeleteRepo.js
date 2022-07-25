import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Success from "../../alert/Success";


const DeleteRepo = ({authorization}) => {
    
    
    const [message, setMessage] = useState(null);
    const [repo, setRepo] = useState();
    const username = 'arbabalichohan';
    
    
    const HandleSubmit = (e) => {
        e.target.disabled = true;
        const url = 'https://api.github.com/repos/arbabalichohan/' + repo;

        fetch(url, {
                        method: 'DELETE', // or ‘PUT’
                        headers: {
                            'Authorization': authorization,
                            'Accept': 'application/vnd.github.v3+json'
                        }
                    })
                    .then(function(res){
                        if (res.status === 204){
                            setMessage("The repository was deleted successfully.");
                            e.target.disabled = false;
                            
                            
                        }else if (res.status === 307){
                            setMessage("There has been a redirect temporarily.");
                            console.log(res.status)
                            e.target.disabled = false;
                            
                        }
                        else{
                            setMessage("The repository we were looking for was not found.");
                            e.target.disabled = false;
                        }
                        this.props.history.push('/repository/delete');
                    }).catch((err)=>{
                        console.log(err.message);
                        e.target.disabled = false;

                    });
    }
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h1 className="mb-5">Delete Repository</h1>
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