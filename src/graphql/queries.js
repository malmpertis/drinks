/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
