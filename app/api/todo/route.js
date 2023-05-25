import { NextResponse } from "next/server";
import mongoConnection from "@/config/mongoConnection";
import demoModel from "@/models/demoModel";

export async function GET(request) {

    try {

        await mongoConnection();

        const result = await demoModel.find({})
        // console.log("Result" , result);

        return NextResponse.json(result, { status: 200 })

    } catch (error) {

        console.log(error);
        return NextResponse.json({ message: "Server Error, Please Try Again!!", Error: error }, { status: 500 })
    }
}

export async function POST(request) {

    try {

        const body = await request.json();

        console.log(body);

        await mongoConnection();

        const result = await demoModel.create(body);
        console.log(result);

        return NextResponse.json({ message: "Mongo DB is Working" }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server Error, Please Try Again!!", Error: error }, { status: 500 })
    }
}

export async function PUT(request) {

    try {

        const body = await request.json();

        console.log("User with "+body.id+" Deleted");

        await mongoConnection();

        const result = await demoModel.findByIdAndDelete({_id: body.id});
        console.log(result);

        return NextResponse.json({ message: "User Deleted" }, { status: 200 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Server Error, Please Try Again!!", Error: error }, { status: 500 })
    }
}