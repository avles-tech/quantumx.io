// pages/api/auth/[...nextauth].ts

import CredentialsProvider from "next-auth/providers/credentials";
import User, { IUser } from "@/models/users";
import bcrypt from "bcryptjs";

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import NextAuth from "next-auth";

connectToDatabase();

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = await User.findOne({ name: credentials?.username });
  
        if (user) {
          const isValid = await bcrypt.compare(
                  credentials?.password || "",
                  user.password
                );
                if (isValid) {
                  return { id: user.id, name: user.name };
                } else {
                  throw new Error("Incorrect Password");
                }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
      
    }),
  ],
  
};

export default NextAuth(options)
