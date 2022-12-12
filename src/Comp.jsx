import { useRef, useState } from "react"

export default  function Comp(){
    let vali=useRef()
    const rem=()=>{
        setError(false)
    }
    let r=window.innerWidth
    let [err,setError]=useState(false)
    let q=<p className="err">Please  enter a valid email</p>
    const submit=(e)=>{
        e.preventDefault()
        let v=vali.current.value;
        if(v.includes(".com") && v.includes("@") ){
            vali.current.value=""
            setError(false)
        }else{
            setError(true)
        }
    }
    return(
        <div>
            <form onSubmit={submit}>
                <div className="bf">
            <input onKeyDown={rem} ref={vali} type="email" name="email" id="email" placeholder="Your email address.." />
                {(r<764)&& err&&q}
            <button>notify me</button>
                </div>
                    {(r>764)&& err&&q}
            </form>
        </div>
    )

}