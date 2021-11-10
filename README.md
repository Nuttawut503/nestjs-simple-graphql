```sh
yarn
yarn run start
```

localhost:3000/graphql

```gql
mutation {
  registerAuthor(input: {firstname: "James", lastname: "Smith", age: 38}) {
    id
    firstname
  }
}

mutation {
  createPost(input: {title: "How to live", content: "work, eat, exercise and sleep", authorID: "<use the above returned ID>"}) {
    id
    title
  }
}

query {
  authors {
    firstname
    lastname
    age
    posts {
      title
      content
    }
  }
}
```
find more -> `src/author` folder
