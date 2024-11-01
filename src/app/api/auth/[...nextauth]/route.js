import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import bcrypt from "bcryptjs"
import User from "../../../../../model/User";
import Shop from "../../../../../model/Shop"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credential: {},
            async authorize(credentials,req){
                const { email,password,role } = credentials;
                try{
                    let user;
                    await connectMongoDB();
                    if(role === "customer"){
                        user = await User.findOne({ email });
                    }else if(role === "shop"){
                        user = await Shop.findOne({ email });
                    }

                    if (!user){ 
                    return null;
                    }
                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    if (!isPasswordValid){
                    return null;
                    }
                    return user;

                } catch(error){
                    console.log(error)
                }
            } 
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions)
export { handler as GET,handler as POST };