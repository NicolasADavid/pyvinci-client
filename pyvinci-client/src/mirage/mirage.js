import { Server, Model, Factory, Response } from "miragejs"
import faker from "faker"

const config = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
  namespace: process.env.REACT_APP_API_NAMESPACE,
  lowLatencyTime: 100,  
  highLatencyTime: 1000,
  tokenValue: "TEST_TOKEN_VALUE"
}

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    // serializers: {
    //   application: RestSerializer,
    // },
    models: {
      project: Model,
      user: Model,
    },

    factories: {
      project: Factory.extend({
        name() {
          return `Project ${faker.name.firstName()}`
        },
      }),
      user: Factory.extend({
        // id() {
        //   return faker.random.uuid()
        // },
        username() {
          return faker.internet.userName()
        },
        createAt() {
          return faker.date.past()
        },
        updatedAt() {
          return faker.date.past()
        },
        // Not available in Register response
        token() {
          return config.tokenValue
        },
        // Not available in Register response
        expireAt() {
          return faker.date.future()
        }
      })
    },

    seeds(server) {  
      server.createList("user", 1)
      server.createList("project", 5)
    },

    routes() {
      this.urlPrefix = config.apiBaseUrl;
      this.namespace = config.namespace;

      /**
       * Auth
       */
      this.post("auth/register", ({users}) => {
        return users.find(1).attrs
      },
      {
        // timing: config.lowLatencyTime
      })
      this.post("auth/login", ({users}) => {
        return users.find(1).attrs
      },
      {
        // timing: config.lowLatencyTime
      })

      /**
       * Projects
       */
      this.get("/users/:userId/projects", (schema, request) => {
        if(request.requestHeaders["authorization"] != `Bearer ${config.tokenValue}`) {
          return new Response(401, {}, { error: 'No Authorization header provided.'});
        }
        return new Response(
          200, 
          {}, 
          {
            projects: schema.db.projects
          }
        )
      })
      this.get("/users/:userId/projects/:id", (schema, request) => {
        let id = request.params.id
        return new Response(
          200,
          {},
          {
            project: schema.db.projects.find(id)
          }
        )
      })
      this.post("/users/:userId/projects", (schema, request) => {
        const { name } = JSON.parse(request.requestBody)
        return new Response(
          200,
          {},
          {
            project: schema.db.projects.insert({name: name})
          }
        )
      })
    },
  })

  return server
}