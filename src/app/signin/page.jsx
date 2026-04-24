"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const SignIn = () => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const { data, error } = await authClient.signIn.email(
            {
                email,
                password,
                callbackURL: "/",
            },
            {
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
            <h2 className="text-center">Sign In</h2>
            <Form
                className="flex w-96 mx-auto p-10 rounded-2xl bg-white border shadow-sm flex-col gap-4"
                onSubmit={onSubmit}
                autoComplete="off"
            >
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
                <TextField isRequired name="password" type="password">
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">Sign In</Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignIn;
