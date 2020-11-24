let graphqlEndpoint = "localhost:4000";

/* Create an InMemoryCache */
let inMemoryCache = ApolloClient.Cache.InMemoryCache.make();

/* Create an HTTP Link */
let httpLink =
  ApolloClient.Link.HttpLink.make(~uri=_ => "http://" ++ graphqlEndpoint, ());
let instance =
  ApolloClient.make(
    ~connectToDevTools=true,
    ~link=httpLink,
    ~cache=inMemoryCache,
    (),
  );
