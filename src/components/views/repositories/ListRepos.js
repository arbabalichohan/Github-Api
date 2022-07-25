import { useEffect, useState } from "react";

import Success from "../../alert/Success";
import ShowRepo from "./ShowRepo";
import {Link} from 'react-router-dom'; 
import useFetch from "../../../hooks/useFetch";

const ListRepos = () => {
    

   
    const url = ('https://api.github.com/users/arbabalichohan/repos');
   
    const {data: repos, error, isPending} = useFetch(url);
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>

            {
                
                <div className="">
                    <h2 className="bg-secondary text-light py-3">Repositories</h2>
                    {
                        !isPending && 
                        repos.map(repo => (
                            <div className="border text-start py-2 px-3" key={repo.id}>
                                <Link to="/">{repo.name}</Link>
                            </div>
                        ))
                    }
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListRepos;