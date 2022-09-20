import {Link} from 'react-router-dom'; 
import { useLocation } from "react-router-dom";

function Results(){
    const location = useLocation();
    const {results} = location.state;
    console.log(results.items);
    return ( 
        <div className="">
            <h2 className="bg-secondary text-light py-3">Repositories</h2>
            {results && results.items.map(result => (
                <div className="border text-start py-2 px-3" key={result.id}>
                    
                    <a href={`https://github.com/${result.full_name}`} target="_blank">
                            {result.name}
                        </a>
                </div>
                
            ))}                   
        </div>
     );
}
 
export default Results;