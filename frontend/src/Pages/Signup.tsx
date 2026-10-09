import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import  axios  from "axios"
import { useNavigate } from "react-router-dom"


export const Signup = () => {
    const[firstName , setFirstName] = useState("");
    const[lastName , setLastName] = useState("");
    const[username , setUsername] = useState("");
    const[password , setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        setError("");
        setSuccess("");
        setSubmitting(true);
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard")
            setSuccess("Account created successfully.");
        } catch (err) {
            setError(err.response?.data?.message || "Could not create account. Check that the backend is running.");
        } finally {
            setSubmitting(false);
        }
    };
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                <Heading label={"Signup"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox onChange={e =>{
                    setFirstName(e.target.value);
                }}  placeholder="Vaibhav" label={"firstName"}></InputBox>
                
                <InputBox onChange={e =>{
                    setLastName(e.target.value);
                }}
                placeholder = "Arora" label={"LastName"}></InputBox>
                <InputBox 
                onChange={e =>{
                    setUsername(e.target.value);
                }}placeholder = "vaibhav@gmail.com" label={"Email"}></InputBox>
                <InputBox 
                onChange={e =>{
                    setPassword(e.target.value);
                }}placeholder = "123456" label={"Password"}></InputBox>
                <div className="pt-4">
                    {error && <p role="alert" className="text-sm text-red-600 pb-2">{error}</p>}
                    {success && <p role="status" className="text-sm text-green-700 pb-2">{success}</p>}
                    <Button onClick={handleSignup} label={submitting ? "Creating account..." : "Sign up"} disabled={submitting} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}
