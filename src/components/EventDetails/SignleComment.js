import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';

const CommentContainer = styled.div`
  margin: 0px 8px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CommentContent = styled.div`
  margin-left: 8px;
  .meta {
    color: ${({ theme }) => theme.tColors.palette.secondary.light};
    @media (${(props) => props.theme.mediaQueries.small}) {
      font-size: 0.7rem;
    }
  }
`;

const SingleComment = ({ comment }) => {
  return (
    <CommentContainer key={comment.timestamp}>
      <UserAvatar url={comment.user.avatarUrl} />
      <CommentContent>
        <div className="meta">
          {`${comment.user.name}, ${moment(comment.timestamp).format('lll')}`}
        </div>
        <div>{comment.message}</div>
      </CommentContent>
    </CommentContainer>
  );
};

export default SingleComment;
