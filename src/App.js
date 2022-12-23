import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items=[
    {
        title:'what is React?',
        content:'React is front end js Framework'
    },
    {
        title:'abc',
        content:'fghbnjmksdfg'
    },
];

const options=[
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'green'
    },
    {
        label:'A shade of Blue',
        value:'blue'
    }
];

// const showTranslate=()=>{
//     if(window.location.pathname==='/translate'){
//         return <Translate />;
//     }
// };


const App=()=>{
    const[selected,setSelected]=useState(options[0]);
    // const[showDropdown,setShowDropdown]=useState(true);

    return(
    <div>
         {/* <Accordion items={items}/>  */}
        {/* <Search/> */}
        {/* <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        { showDropdown ? 
        <Dropdown 
        selected={selected}
        onSelectedChange={setSelected}
        options={options}/> : null
        } */}
        {/* <Translate/> */}
        <Header/>
        <hr/>
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path='/list'>
            <Search/>
        </Route>
        <Route path='/dropdown'>
            <Dropdown
            label="select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            />
        </Route>
        <Route path='/translate'>
            <Translate/>
        </Route>
    </div>
    ); 
};

export default App;