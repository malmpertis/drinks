import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import SingleComment from './SignleComment';
import SendIcon from '@material-ui/icons/Send';
import { API, graphqlOperation } from 'aws-amplify';
import { useUserState } from '../../contexts/UserContext';
import { createComment as CreateComment } from '../../graphql/mutations';

const FormControlContainer = styled.div`
  margin-top: 24px;
`;

const Comments = ({ eventId, comments }) => {
  const [availableComments, setAvailableComments] = useState(comments);
  const [newComment, setNewComment] = useState('');
  const user = useUserState();

  const addNewComment = async () => {
    try {
      const newPost = {
        message: newComment,
        timestamp: new Date().toISOString(),
        user: {
          name: `${user.attributes.name} ${user.attributes['family_name']}`,
          avatarUrl: user.picture,
        },
        commentEventId: eventId,
      };
      await API.graphql(
        graphqlOperation(CreateComment, {
          input: newPost,
        })
      );
      setAvailableComments([...availableComments, newPost]);
      setNewComment('');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Typography variant="h4" component="h4">
        Comments
      </Typography>
      {availableComments && availableComments.length > 0 ? (
        availableComments.map((comment, index) => (
          <SingleComment key={index} comment={comment} />
        ))
      ) : (
        <div>There are no comments for this event! (yet...)</div>
      )}
      <FormControlContainer>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="new-comment">Add Comment</InputLabel>
          <OutlinedInput
            id="new-comment"
            labelWidth={110}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  disabled={!newComment}
                  aria-label="toggle password visibility"
                  onClick={addNewComment}
                  edge="end"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </FormControlContainer>
    </>
  );
};

export default Comments;
