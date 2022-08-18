import { useState } from "react";
import Success from "../../alert/Success";

const CreateUserProject = ({authorization}) => {
    
    const [proj, setProj] = useState('');
    const [message, setMessage] = useState(null);
    const HandleSubmit = (e) => {
        e.target.disabled = true;
        const url = "https://api.github.com/user/projects";
        fetch(url, {
                        method: 'POST', // or ‘PUT’
                        headers: {
                            'Authorization': authorization,
                            'Accept': 'application/vnd.github.v3+json' 
                        },
                        body: JSON.stringify({
                            'name': proj
                        })
                    })
                    .then(function(res){
                        if (res.status === 201){
                            setMessage("The projsitory was created successfully!");
                            e.target.disabled = false;
                        }else{
                            setMessage("Oops there was an error!");
                            e.target.disabled = false;
                        }
                    }).catch((err)=>{
                        console.log(err.message);
                        e.target.disabled = false;

                    });
    }
    
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h1 className="mb-5">Create projsitory</h1>
            <form action="">
                <div className="for-group mb-4">
                    <input type="text" className="form-control" placeholder="Project name" value={proj} onChange={(e)=>{setProj(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success form-control" id="submit" onClick={(e) => HandleSubmit(e)}>Create</button>
                </div>
            </form>
            {message && <Success message={message}/>}
        </div>
     );
}
 
export default CreateUserProject;