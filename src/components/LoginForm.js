import { Button, Card, Form, Input } from "./form";


export default function LoginForm() {


    return (
        <Card>
            <Form>
                <Input>Email</Input>
                <Input>Password</Input>
                <Button>Login</Button>
            </Form>
        </Card>
    )
}