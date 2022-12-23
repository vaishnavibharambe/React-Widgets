import React from "react";

const Link=({className,href,children})=>{
const onClick=(event)=>{
    //for opening in new tab option
    if(event.metaKey || event.ctrlKey){
        return;
    }

    event.preventDefault();
    window.history.pushState({},'',href);

    //this is communicate to route component that data /url has chnaged.
    const navEvent=new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
};

    return <a onClick={onClick} className={className} href={href} >{children}</a>;
};

export default Link;