import { ExpoResponse, ExpoRequest } from "expo-router/server"
export async function POST(request: ExpoRequest): Promise<ExpoResponse>{
    const { email, password } = await request.json()
    if(email === "allyson@email.com" && password === "123"){
        return ExpoResponse.json({
            email,
            name: "Allyson"
        })
    }
    
    return new ExpoResponse("User or password incorrect!" , {
        status: 404,
        headers: {
            "Content-Type": "text/plain"
        },
    })
}