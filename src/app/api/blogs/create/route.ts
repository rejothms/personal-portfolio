import { NextApiResponse } from "next";
import post from "../../model/post";
import dbConnect from "portfolio/app/lib/mongodb";


const POST = async(req: Request, res: NextApiResponse) => {
    await dbConnect();
    var data = await req.json();
    const newPost = new post(data);
    newPost.save();
    return Response.json({
        message: 'successfully created'
    })
}

export { POST };
