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
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg',
        user: USERS[2].user,
        likes: 10500,
        caption: 'My new car. I love it !',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: USERS[4].user,
                comment: 'Yeah ! I want to drive it.'
            },
            {
                user: USERS[5].user,
                comment: 'I would be too afraid to get in this car ...'
            },
            {
                user: USERS[1].user,
                comment: 'Do you think it is at my height ?'
            },
        ]
    },

]