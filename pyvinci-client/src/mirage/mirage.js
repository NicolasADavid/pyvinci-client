import { Server, Model, Factory } from "miragejs"
import faker from "faker"

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    models: {
      project: Model,
    },

    factories: {
      project: Factory.extend({
        name() {
          return `Project ${faker.name.firstName()}`
        },
      }),
    },

    seeds(server) {  
      server.createList("project", 5)
    },

    routes() {
      this.urlPrefix = 'http://localhost:9000/';
      this.namespace = "v1"

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