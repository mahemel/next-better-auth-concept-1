import { handlePostAction } from "@/actions/postActions";
import { getPosts } from "@/db/postdb";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";

const ServerAction = async () => {
    const posts = getPosts();

    return (
        <div>
            <div className="flex w-full max-w-90 flex-col gap-4 p-5 border rounded-xl mx-auto">
                <Form className="w-full" action={handlePostAction}>
                    <Fieldset>
                        <Fieldset.Legend>Add New Post</Fieldset.Legend>

                        <FieldGroup>
                            <TextField isRequired name="title">
                                <Label>Title</Label>
                                <Input placeholder="Title" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="description">
                                <Label>Description</Label>
                                <TextArea placeholder="Description..." />
                                <Description>Minimum 10 characters</Description>
                                <FieldError />
                            </TextField>
                        </FieldGroup>

                        <Fieldset.Actions>
                            <Button type="submit">Save changes</Button>
                            <Button type="reset" variant="secondary">
                                Cancel
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </div>

            <h2 className="font-bold text-2xl mb-4">Server Action</h2>

            <div className="grid grid-cols-2 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="border rounded-xl p-5">
                        <h2 className="font-bold text-2xl mb-4">
                            {post.title}
                        </h2>
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServerAction;
