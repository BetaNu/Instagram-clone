import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/06/20/23/08/train-816272_960_720.jpg',
        user: USERS[0].user,
        likes: 5200,
        caption: 'Train ride to Hogwarts.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: USERS[1].user,
                comment: 'WOW! This is insane !'
            }
        ]
    }
]