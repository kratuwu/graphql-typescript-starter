type Environment = {
  apollo: {
    introspection: boolean;
    playground: boolean;
  };
};

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === "true",
    playground: process.env.APOLLO_PLAYGROUND === "true"
  }
};
