import { cookies } from "next/headers";
import Home from "./adminLogin";
import { redirect } from "next/navigation"

export default async function Login() {
    return <Home />;
}