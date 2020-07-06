/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
        }
        nextToken
      }
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
        }
        nextToken
      }
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
      }
    }
  }
`;
