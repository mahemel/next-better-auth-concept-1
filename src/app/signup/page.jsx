"use client";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const router = useRouter();
    const onSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const { data, error } = await authClient.signUp.email(
            {
                name,
                email,
                password,
            },
            {
                // onRequest: (ctx) => {
                //     //show loading
                // },
                onSuccess: (ctx) => {
                    toast.success("Signup completed successfully!", {
                        position: "top-center",
                        autoClose: 2000,
                        pauseOnHover: false,
                    });
                    setTimeout(() => {
                        router.push("/");
                    }, 1500);
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message, {
                        position: "top-center",
                        autoClose: 2000,
                        pauseOnHover: false,
                    });
                },
            },
        );
    };
    return (
        <div>
            <h2 className="text-center">Sign Up</h2>
            <Form
                className="flex w-96 mx-auto p-10 rounded-2xl bg-white border shadow-sm flex-col gap-4"
                onSubmit={onSubmit}
                autoComplete="off"
            >
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="John Doe" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value,
                            )
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1
                        number
                    </Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">Submit</Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignUpPage;
