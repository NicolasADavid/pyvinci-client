import { Server, Model, Factory } from "miragejs"
import faker from "faker"

const config = {
  apiBaseUrl: "http://localhost:9000/",
  namespace: "api/v1",
  lowLatencyTime: 100,  
  highLatencyTime: 1000,
}

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
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
          return "token"
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

      // Auth
      this.post("/register", ({users}) => {
        return users.find(1).attrs
      },
      {
        // timing: config.lowLatencyTime
      })
      this.post("/login", ({users}) => {
        return users.find(1).attrs
      },
      {
        // timing: config.lowLatencyTime
      })

      // Projects
      this.get("/projects", (schema) => {
        return schema.db.projects
      })
      this.get("/projects/:id", (schema, request) => {
        let id = request.params.id
        return schema.db.projects.find(id)
      })
    },
  })

  return server
}