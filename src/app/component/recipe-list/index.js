import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Link from "next/link";
  
export default function RecipesData({RecipeList}){
    console.log(RecipeList);
    return(
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full ">
            <h2 className="font-bold text-4xl">Recipes</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2">
                {
                    RecipeList&&RecipeList?
                    RecipeList.map((recip,index)=>(
                        <Link href={`/recipe-list/${recip.id}`} >
                        <Card className="mt-10">
                            <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                                <div className="w-full aspect-w-16 aspect-h-8 lg:h-80" ke={index}>
                                    <img src={recip.image}
                                    alt={recip.name}
                                     />
                                </div>
                                <div className="p-5">
                                    <h2 className="text-1xl font-bold">{recip.name}</h2>
                                    <div className="flex justify-between mt-5">
                                        <h2>{recip.rating}</h2>
                                        <div>
                                        <h2 className="font-bold text-gray-500 text-1xl">{recip.cuisine}</h2>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </Link>
                    ))
                    :null
                }
            </div>
        </div>
    )
}