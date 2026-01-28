import { resolve } from "path"

export default async function AboutPage() {
    await new Promise ((resolve)=>setTimeout(resolve,4000 ))
    return(
        <div>
            <h1>This is contact page components</h1>
        </div>
    )
}