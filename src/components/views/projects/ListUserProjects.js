import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Success from "../../alert/Success";
import {Link} from 'react-router-dom'; 

const ListUserProjects = ({authorization}) => {
    

    const [user, setUser] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [projects, setProjects] = useState(null);

    const url = ('https://api.github.com/users/' + user + '/projects');
    const headers = {
        'Authorization': authorization,
        'Accept': 'application/vnd.github.v3+json'
    };
    const HandleClick = () => {
        console.log(user);
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
                setProjects(data);
                console.log(data);
            }).catch(err => {
            
            });
    }
    return ( 
        <div className="" onSubmit={(e)=>{e.preventDefault();}}>
            <h2>usersitory projects</h2>
            <form action="" className="mb-5">
                <div className="form-group mb-3">
                    <input type="text" className="form-control" value={user} onChange={(e)=>{setUser(e.target.value);}} placeholder="Username" />
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
                    <h2 className="bg-secondary text-light py-3">projects</h2>
                    {projects && projects.map(project => (
                        <div className="border text-start py-2 px-3" key={project.id}>
                            <Link to="/">{project.name}</Link>
                        </div>
                    ))}
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListUserProjects;