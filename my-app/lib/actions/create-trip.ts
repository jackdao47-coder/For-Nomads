"use server"

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { redirect } from "next/navigation";

export async function createTrip(formData: FormData) {
    
    //guard to check authentication

    const session = await auth()
    if(!session || !session.user?.id) {
        throw new Error("User is not authenticated");
    }

    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const startDateStr = formData.get("startDate")?.toString();
    const endDateStr = formData.get("endDate")?.toString();


    //guard for missing fields
    if(!title || !description || !startDateStr || !endDateStr){
        throw new Error("All fields are required");
    }

    //convert dates to timestamps from strings
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    //upload data to table
    await prisma.trip.create({
        data: {
            title,
            description,
            startDate,
            endDate,
            userId: session.user?.id,
        },
    });

    //once trip is created, navigate user to the trip page

    redirect("/trips")
}