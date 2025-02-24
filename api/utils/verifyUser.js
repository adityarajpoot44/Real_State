import jwt from "jsonwebtoken"

export const verifyUser = (req, res, next) => {
    const token=req.cookies.access_token; 

    jwt.verify(token, '0LB5tcezUwZbOs1YnDC03zjDJPmODoFz',(err,user)=>{

        req.user=user;
        next();
    });
}