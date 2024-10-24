 
interface Iprop {
    classname : string ,
    src : string ,
    alt : string 
}

const Imagcom = ( {classname , src , alt} : Iprop ) => {
  return (
    <img src ={src} alt={alt} className={classname} />
  )
}

export default Imagcom