import { NextApiResponse } from "next";
import Project from "../../model/project";
import dbConnect from "portfolio/app/lib/mongodb";


const POST = async(req: Request, res: NextApiResponse) => {
    await dbConnect();
    var data = await req.json();
    console.log(data);
    try {
        const newPost = new Project(data);
        const savedProject = await newPost.save();
        return Response.json({
            message: 'successfully created'
        })
    } catch (error) {
        return Response.json({
            message: error
        })
    }

}

export { POST };
