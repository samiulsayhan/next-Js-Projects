import { error } from "console"
import { resolve } from "path"

export default async function AboutPage() {
    // for simulating load time 
    // await new Promise ((resolve)=>setTimeout(resolve,4000 ))

    // for simalating error
    // throw new Error ("Something went wrong")
    return(
        <div>
            <h1>This is contact page components</h1>
        </div>
    )
}