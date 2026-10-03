import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"


export const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                <Heading label={"Signup"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox placeholder="Vaibhav" label={"firstName"}></InputBox>
                
                <InputBox placeholder = "Arora" label={"LastName"}></InputBox>
                <InputBox placeholder = "vaibhav@gmail.com" label={"Email"}></InputBox>
                <InputBox placeholder = "123456" label={"Password"}></InputBox>
                <div className="pt-4">
                    <Button label={"Sign up"} ></Button>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}