import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools' 

const app = express()
//app.use(bodyParser.json())

const port = 3000
app.listen(port, () => console.log(`Server listening on port ${port}`))