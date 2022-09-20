import { useState } from "react";

function ListUserProjects ({headers}){
    
    const [user, setUser] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [projects, setProjects] = useState('');

    const HandleClick = async () => {
        const url = ('https://api.github.com/users/' + user + '/projects');
        const options = {
            method: 'GET',
            headers: headers
        };

        try{
            const response = await fetch(url, options);
            if (!response.ok){
                throw Error("Could not fetch any data..");
            }else{
                const result = await response.json();
                console.log(result);
                setIsPending(false);
                setProjects(result);
            }
        }catch(err){

        }
    }
    return ( 
        <div className="">
            <h2>User Projects</h2>
            <form action="" className="mb-5 " onSubmit={(e)=>{e.preventDefault();}}>
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
                <div className="text-center">
                    <h2 className="bg-secondary text-light py-3 ">projects</h2>
                    {projects && projects.map(project => (
                        <div className="border py-2 px-3 " key={project.id}>
                            {/* https://github.com/users/arbabalichohan/projects/1 */}
                            {/* <Link to="/">{project.name}</Link> */}
                            <a href={`https://github.com/users/${user}/projects/${project.number}`} target="_blank">
                                {project.name}
                            </a>
                        </div>
                    ))}
                </div>
            
            
            }
            
        </div>
     );
}
 
export default ListUserProjects;