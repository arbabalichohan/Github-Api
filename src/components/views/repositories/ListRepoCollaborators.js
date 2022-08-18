import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Success from "../../alert/Success";
import {Link} from 'react-router-dom'; 

const ListRepocollaborators = ({authorization}) => {
    

    const [repo, setRepo] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [collaborators, setCollaborators] = useState(null);

    const url = ('https://api.github.com/repos/arbabalichohan/' + repo + '/collaborators');
    const headers = {
        'Authorization': authorization,
        'Accept': 'application/vnd.github.v3+json'
    };
    const HandleClick = () => {
        console.log(repo);
        fetch(url, {
            method: 'GET',
            headers: headers
          })
            .then(res => {
              if (!res.ok){
                throw Error("Could not fetch any data..");
              }
              return res.json();
            }).then((data) => {
                setIsPending(false);
                setCollaborators(data);
                console.log(data);
            }).catch(err => {
            
            });
    }
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h2>Repository collaborators</h2>
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
            {
                !isPending &&
                <div className="">
                    <h2 className="bg-secondary text-light py-3">collaborators</h2>
                    {collaborators && collaborators.map(collaborator => (
                        <div className="border text-start py-2 px-3" key={collaborator.id}>
                            <Link to="/">{collaborator.login}</Link>
                        </div>
                    ))}
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListRepocollaborators;