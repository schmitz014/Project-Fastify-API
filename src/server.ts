import fastify from 'fastify'

const app = fastify()

//Array user
app.get('/user', () => {
 return 'User route'
})

//Create user
app.post('/user', () => {
 return 'Create user'
})

//Update user
app.put('/user', () => {
 return 'Update user'
})

//Delete user
app.delete('/user', () => {
 return 'Delete user'
})

//Establishing server connection 
app.listen({
 host:'0.0.0.0',
 port: 8080,
})
.then(() => 
console.log('Server is running on port 8080'))