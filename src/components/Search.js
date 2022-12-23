import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Search=()=>{

const[term,setTerm]=useState('programming');
const[results,setResults]=useState([]);

useEffect(()=>{
    const search=async()=>{
        const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{
            params:{
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch:term,
            },
        });
        setResults(data.query.search);
    };

    if(term && !results.length){
        search();
    }
    else{
        const timeoutId=setTimeout(()=>{
            if(term){
                search();
            }
        },1000);
    
        return ()=>{
            clearTimeout(timeoutId);
        };
    }   
    
},[term]);

const renderedResults=results.map((result)=>{
    return(
        <div key={result.pageid} className='item'>
            <div className='right floated content'>
                <a 
                className='ui button'
                href={`https://en.wikipedia.org?curid=${result.pageid}`}>GO</a>
            </div>
            <div className='content'>
                <div className='header'>
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
               {/* {result.snippet}  */}
                
            </div>
        </div>
    );
});

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input className='input'
                    value={term}
                    onChange={e=>setTerm(e.target.value)}/>
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;

/*
useEffect in 3 ways:
1.
useEffect(()=>{
    const search=async()=>{
        await axios.get('ghb');
    };
    search();
},[term]);

2.
useEffect(()=>{
    (async()=>{
        await axios.get('ghb');
    })();
},[term]);

3.
useEffect(()=>{
    axios.get('dfcgvh')
    .then((response)=>{
        console.log(response.data);
    });
},[term]);

*/