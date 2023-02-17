import type { RequestHandler } from "@sveltejs/kit"
export const GET : RequestHandler = ({ request })=>{
    let headers: Headers = new Headers()
    headers.append("Content-Type", "application/json")
    return new Response(JSON.stringify({ message:"Bozoo" }), {status:200, headers})
}