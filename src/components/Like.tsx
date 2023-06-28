import { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'



  
export default function Like() {
  const [like, setLike] = useState(false) 
  const toggle = () => {setLike(!like);}
  if (like) {return (
    <AiFillHeart color ='magenta' size={20} onClick = {toggle} />
  )}else {return (
    <AiOutlineHeart color ='magenta' size={20}  onClick = {toggle}/>
  )}
}
