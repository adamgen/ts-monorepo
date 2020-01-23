import { Injectable } from '@nestjs/common';

const authors = {
    123: {
        id: 123,
        firstName: 'Adam',
        lastName: 'Sababa',
        // posts: [Post]
    },
    124: {
        id: 124,
        firstName: 'Yossi',
        lastName: 'Bossi',
        // posts: [Post]
    },
};

@Injectable()
export class AuthorsService {
    findOneById(id) {

        return authors[id];
    }
}
