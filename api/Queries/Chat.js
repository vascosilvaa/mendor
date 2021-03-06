import gql from "graphql-tag";

const ALL_CHATS_QUERY = gql`
  query allChats {
    allChats(filter: { users_some: { id: "cjbjhh0f9lbfz01142sd6tvuv" } }) {
      id
      name
      messages(last: 1) {
        content
        createdAt
      }
      users(filter: { id_not: "cjbjhh0f9lbfz01142sd6tvuv" }) {
        id
        avatar {
          id
          secret
          name
        }
        name
      }
    }
  }
`;

const ALL_MESSAGES_QUERY = gql`
  query allMessages($id: ID) {
    allMessages(filter: { chat: { id: $id } }) {
      id
      content
      createdAt
      author {
        id
        avatar {
          id
          secret
          name
        }
      }
    }
  }
`;

// Collect all the individual chats of two specific users
const ALL_INDIVIDUAL_CHATS_OF_USERS = gql`
  query allIndividualChatsOfUsers($id1: ID, $id2: ID) {
    allChats(
      filter: {
        AND: [
          { isGroup: false }
          { users_some: { id: $id1 } }
          { users_some: { id: $id2 } }
        ]
      }
    ) {
      id
      name
      users(filter: { id_not: $id1 }) {
        id
        name
        avatar {
          id
          secret
          name
        }
      }
    }
  }
`;

export { ALL_CHATS_QUERY, ALL_MESSAGES_QUERY, ALL_INDIVIDUAL_CHATS_OF_USERS };
