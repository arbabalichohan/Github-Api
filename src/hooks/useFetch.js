import { useState, useEffect } from "react"

const useFetch = (url, options, text, submitted) => {
    
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [res_status, setStatus] = useState(0);
    const [timestamp, setTimestamp] = useState('');
    
    useEffect(() => {
        let success = true;
        const fetchData = async () => {

            try {
                const response = await fetch(url, options);
                
                setStatus(response.status);
                if (!response.ok) {
                    throw new Error(
                      `${response.status} ${response.statusText}`
                    );
                }
                const content = await response.json();

                if(success){
                    setData(content);
                    setError(null);
                }   
            }
            catch(err) {
                setError(err.message);
            }
            const time = new Date();
            setTimestamp(time);
          };
        if (submitted){
            fetchData();
        }
       
        return () => {
            success = false;
        };
    
        
      }, [text]);

    if (!data){
        setData('Your Result Will Appear Here..');
    }
    
    return {data,res_status, timestamp};
    
};

export default useFetch;