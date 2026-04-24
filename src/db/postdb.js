import { descriptionVariants } from "@heroui/styles";

const posts = [
    {
        id: 1,
        title: 'First Post',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, officiis veniam. Vel temporibus ullam mollitia!',
    },
    {
        id: 2,
        title: 'Second Post',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, officiis veniam. Vel temporibus ullam mollitia!',
    },
    {
        id: 3,
        title: 'Third Post',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, officiis veniam. Vel temporibus ullam mollitia!',
    },
    {
        id: 4,
        title: 'Fourth Post',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, officiis veniam. Vel temporibus ullam mollitia!',
    },
    {
        id: 5,
        title: 'Fifth Post',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, officiis veniam. Vel temporibus ullam mollitia!',
    }
]

export const addPost = (newPost) => {
    posts.push(newPost)
}

export const getPosts = () => {
    return posts;
}