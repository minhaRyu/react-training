import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";
import { usePostsState } from "../../globalState/_posts";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-chlid) {
            margin-bottom: 16px;
        }
    }
`;

export default function PostList(props) {
    const {posts} = usePostsState();
    const { onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    )
}
