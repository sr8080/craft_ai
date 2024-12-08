import {neon} from '@neondatabase/serverless'
 import {drizzle} from 'drizzle-orm/neon-http'

 import * as schema from './schema'

//  const sql=neon(process.env.DATABASE_URL)

const sql=neon('postgresql://first_owner:wJ4I3oROALSq@ep-curly-grass-a5flljpj.us-east-2.aws.neon.tech/craft_ai?sslmode=require')

 export const db =drizzle(sql,{schema})