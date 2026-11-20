
import { auth } from "@/auth";

export default async function TripPage() {
    const session = await auth();
    if(!session) {
        return (
        <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
            {" "}
            Please Sign In
        </div>
        );
    }


//assume user is signed in

    return <div className="space-y-6 container mx-auto px-4 py-8">
        {" "}
        <div>

            <h1> DashBoard</h1>
            <Button>New Trip</Button>
        </div>
    </div>
}