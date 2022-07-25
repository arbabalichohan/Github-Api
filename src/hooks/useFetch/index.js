import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const headers = {
      'Authorization': 'token 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',
      'Accept': 'application/vnd.github.v3+json'
  };
    useEffect(()=>{
      const abortCont = new AbortController();
      fetch(url, {signal: abortCont.signal},{
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
          setData(data);
          setError(null);
        }).catch(err => {
          if (err.name === 'AbortError'){
            console.log("Fetch aborted.");
          }else{
            setIsPending(false);
            setError(err.message);
          }
        });
        return () => abortCont.abort();
      }, [url]);
      return {data, isPending, error};
}

export default useFetch;