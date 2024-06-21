async function GateDetails(currentID){
    const data = await fetch(`https://dummyjson.com/recipes/${currentID}`)
    const result = await data.json()
    return result
}



export default async function FetchDetails({params}){

    const Details = await GateDetails(params.details)
    console.log(Details)
    return(
       <div >
        <div className="p-7">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full ">
                <img className="w-[400px] h-[400px]" src={Details.image}/>
                </div>
                <div>
                    <h2 className="text-3xl font-bold">{Details.name}</h2>
                    <h2 className="text-3xl  mt-5">ingredients</h2>
                    <>{
                    
                    Details.ingredients.map((da)=>(
                        <li>{da}</li>
                    ))
                        }</>
                </div>
            </div>
        </div>
       </div>
    )
}