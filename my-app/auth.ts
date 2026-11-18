import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from '@/lib/prisma';


//from NextAuth, get auth function(requesting information about signed in users)
//get handlers, handle redirecting when the user authenticate
//get sign in sign out
export const {auth, handlers, signIn, signOut} = NextAuth({
    providers: [GitHub],
    adapter: PrismaAdapter(prisma)
});