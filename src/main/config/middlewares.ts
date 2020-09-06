import { Express } from 'express'
import { bodyParser } from '../middleawares/body-parser'
export default (app: Express): void => {
  app.use(bodyParser)
}
