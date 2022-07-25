import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Success from "../../alert/Success";


const EditRepo = ({authorization}) => {
    
    const [a, setA] = useState('');
    const [newrepo, setNewrepo] = useState('');
    const [message, setMessage] = useState(null);
    const {data: repos, error, isPending} = useFetch('https://api.github.com/users/arbabalichohan/repos');
    const [repo, setRepo] = useState();
    const username = 'arbabalichohan';
    const url = 'https://api.github.com/repos/' + username + '/' + repo;
    const data = JSON.stringify({
        'name': newrepo
    });
    
    const HandleSubmit = (e) => {
        e.target.disabled = true;

        fetch(url, {
                        method: 'POST', // or ‘PUT’
                        headers: {
                            'Authorization': authorization,
                            'Accept': 'application/vnd.github.v3+json'
                        },
                        body: data
                    })
                    .then(function(res){
                        if (res.status === 200){
                            setMessage("The repository was updated successfully!");
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
            <h1 className="mb-5">Update Repository</h1>
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