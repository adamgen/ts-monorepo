import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

const posts = [
    {
        id: 1,
        title: 'How to cast videos',
        votes: 123,
        authorId: 123,
    },
    {
        id: 2,
        title: 'How to spell correctly',
        votes: 123,
        authorId: 123,
    },
    {
        id: 2,
        title: 'How to cast a spell correctly',
        votes: 123,
        authorId: 124,
    },
];

@Injectable()
export class PostsService {
    findAll(query) {
        return _.filter(posts, ({ authorId }) => authorId === query.authorId);
    }
}
