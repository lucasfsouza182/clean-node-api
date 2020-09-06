import { Express } from 'express'
import { bodyParser } from '../middleawares/body-parser'
import { cors } from '../middleawares/cors'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}
