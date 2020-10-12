import React, {useState} from "react"

//Array counter
const Person = ( ) => {

  const persons = ["Julia", "Lena", "Susi", "Philo", "Ines"].map( e => <p key={e}> {e}</p>);
  const [click, setClick] = useState(0)
  const handleClick = () => {
    if (click < persons.length -1){
      setClick(click +1)
    }

  }

  const downClick = () => {
     if(click > 0) {
       setClick(click -1)
     }
  }




  return (
    <>
     <div>
       <button onClick={handleClick}>hochzählen</button>
       <button onClick={downClick}>runterzählen</button>

       {persons [click]} hier wird ein Array durchgeklickt.

     </div>
    </>
  )

}

export default Person