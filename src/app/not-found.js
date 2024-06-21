import Link from "next/link"

export default function NotFound(){
    return (
        <div>
            <h2>This Page Not Found</h2>
            <Link href={"/recipe-list"}>Go Back</Link>
        </div>
    )
}