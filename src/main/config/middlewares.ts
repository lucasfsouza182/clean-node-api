import { Express } from 'express'
import { bodyParser } from '../middleawares/body-parser'
import { cors } from '../middleawares/cors'
import { contentType } from '../middleawares/content-type'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
