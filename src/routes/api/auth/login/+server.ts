import type { RequestHandler } from "./$types";
import { send_magic_link } from "../../../../lib";

export const POST : RequestHandler = ({request})=>{
    // send_magic_link()
    return new Response(JSON.stringify({message:"bozo"}), { status:200 })
}