//form components
//users can upload images, information of their trip...

"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { createTrip } from "@/lib/actions/create-trip";
import { useState, useTransition } from "react";
import { UploadButton } from "@/lib/upload-thing";
import Image from "next/image";



export default function NewTrip() {
    const [isPending, startTransition] = useTransition();
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    return (
    <div className="w-full max-w-lg mx-auto mt-10">
        <Card>
            <CardHeader>New Trip</CardHeader>
            <CardContent>
                <form className="space-y-6" action={(FormData: FormData) => {

                    if(imageUrl) {
                        FormData.append("imageUrl", imageUrl)
                    }
                    startTransition(() => {
                    createTrip(FormData);
                });
                }}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input 
                        type="text" 
                        name="title"
                        placeholder="Where to next?" 
                        className={cn(
                            "w-full border border-gray-300 px-3 py-2", 
                            "rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        )}
                        required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea  
                        name="description"
                        placeholder="What was it like?" 
                        className={cn(
                            "w-full border border-gray-300 px-3 py-2", 
                            "rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        )}
                        required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input 
                        type="date"
                        name="startDate"
                        className={cn(
                            "w-full border border-gray-300 px-3 py-2", 
                            "rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        )}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input 
                        type="date"
                        name="endDate"
                        className={cn(
                            "w-full border border-gray-300 px-3 py-2", 
                            "rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        )}
                        />
                    </div>
                    </div>

                    <div>
                        <label>Trip Image</label>
                        {imageUrl && (
                            <Image src={imageUrl} alt="Trip Preview" className="w-full rounded-md mas-h-48 object-cover"
                            width={300}
                            height={100}
                            />
                        )}
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            if (res && res[0].ufsUrl) {
                                setImageUrl(res[0].ufsUrl);
                            }
                        }}


                        onUploadError={(error: Error) => {
                            console.error("Upload error: ", error)
                        }}
                    />
                    </div>

                    <Button type="submit" disabled={isPending} className="w-full">
                        {isPending ? "Working..." : "Create Trip"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
    );
}

