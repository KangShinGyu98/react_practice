import { useState } from "react";

interface props {
  children: string;
}

export default function ExpandableText({children}:props) {
  
  const [isFolded,setIsFolded] = useState(false)

  if(isFolded) {
    return (<>
      <div>{children.slice(0,10)+'...'}</div>
      <button onClick={() => setIsFolded(false)}>Fold</button>
    </>)

  }else{
    return (
    <>
      <div>{children}</div>
      <button onClick={() => setIsFolded(true)}>Expand</button>
    </>
      )
  }
  
}
