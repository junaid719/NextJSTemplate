import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: '2e1f530fe29e8f840aea',
            clientSecret: '1bb9d51c9fd6a81f9babf0bcca2b2093fd048f67',
        }),
    ],

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
