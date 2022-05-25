import {useCallback} from 'react'
import {atom, useRecoilState} from 'recoil';
import data from '../data.json';

let nextId = data.reduce((prev, cur) => {
    return Math.max(prev, cur.id, ...cur.comments.map((comment) => comment.id))
}, 0) + 1;

const postsState = atom({
    key: 'postsState',
    default: data
});

export const usePostsState = () => {
    const [posts, setPostsState] = useRecoilState(postsState);
    const getNextId = useCallback(() => nextId++, []);

    return {posts, setPostsState, getNextId};
};
