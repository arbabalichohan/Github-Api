function Success({message}){
    return (
        <div className="alert alert-success alert-dismissible fade show myalert" role="alert">
             {message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}
 
export default Success;