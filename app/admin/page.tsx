import { cookies } from "next/headers";
import Home from "./adminDash";
import { redirect } from "next/navigation"

export default async function Login() {
    return <Home />;
}