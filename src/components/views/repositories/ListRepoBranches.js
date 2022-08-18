import { useEffect, useState } from "react";

import useFetch from "../../../hooks/useFetch";
import Success from "../../alert/Success";
import ShowRepo from "./ShowRepo";
import {Link} from 'react-router-dom'; 

const ListRepoBranches = ({authorization}) => {
    

    const [repo, setRepo] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [branches, setBranches] = useState(null);

    const url = ('https://api.github.com/repos/arbabalichohan/' + repo + '/branches');
    const headers = {
        'Authorization': authorization,
        'Accept': 'application/vnd.github.v3+json'
    };
    const HandleClick = () => {
        //const {data: projs, error, isPending} = useFetch(url);
        fetch(url, {
            method: 'GET'
          })
            .then(res => {
              if (!res.ok){
                throw Error("Could not fetch any data..");
              }
              return res.json();
            }).then((data) => {
                setIsPending(false);
                setBranches(data);
            //   setError(null);
                console.log(data);
            }).catch(err => {
            //   if (err.name === 'AbortError'){
            //     console.log("Fetch aborted.");
            //   }else{
            //     setIsPending(false);
            //     setError(err.message);
            //   }
            });
    }
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h2>Repository Projects</h2>
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
                    <h2 className="bg-secondary text-light py-3">Repositories</h2>
                    {branches && branches.map(branch => (
                        <div className="border text-start py-2 px-3" key={branch.name}>
                            <Link to="/">{branch.name}</Link>
                        </div>
                    ))}
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListRepoBranches;