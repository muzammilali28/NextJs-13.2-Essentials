import {  NextResponse } from "next/server";
import courses from "./coursesDB.json";

export async function GET(request) {
    return NextResponse.json(courses);
  }