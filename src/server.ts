import express from 'express'
import routes from './routes/index'

const app = express()
app.use(routes)
app.use(express.json())

app.listen(3333, ()=>{
  console.log('💽️ Backend rodando na porta 3333...')
})