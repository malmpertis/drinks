/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String!) {
    onCreateEvent(owner: $owner) {
      id
      title
      creator
      guests
      location
      time
      type
      comments {
        items {
          id
          message
          timestamp
          user
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String!) {
    onUpdateEvent(owner: $owner) {
      id
      title
      creator
      guests
      location
      time
      type
      comments {
        items {
          id
          message
          timestamp
          user
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String!) {
    onDeleteEvent(owner: $owner) {
      id
      title
      creator
      guests
      location
      time
      type
      comments {
        items {
          id
          message
          timestamp
          user
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String!) {
    onCreateComment(owner: $owner) {
      id
      message
      timestamp
      user
      event {
        id
        title
        creator
        guests
        location
        time
        type
        comments {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String!) {
    onUpdateComment(owner: $owner) {
      id
      message
      timestamp
      user
      event {
        id
        title
        creator
        guests
        location
        time
        type
        comments {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String!) {
    onDeleteComment(owner: $owner) {
      id
      message
      timestamp
      user
      event {
        id
        title
        creator
        guests
        location
        time
        type
        comments {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
