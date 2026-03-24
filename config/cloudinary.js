import {v2 as cloudnary} from "cloudinary"

const connectCloudinary = async () => {
   
    cloudnary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    })


    // console.log("NAME:", process.env.CLOUDINARY_NAME)
    // console.log("KEY:", process.env.CLOUDINARY_API_KEY)
    // console.log("SECRET:", process.env.CLOUDINARY_API_SECRET)

    

}

export default connectCloudinary