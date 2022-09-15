setTimeout(async () => {
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
}, 5000);

server.post('/test', upload.none(), (req, res) => {
    {
        bio: {
            name: 'vatalik'
            surname: 'leshchenko'
        }
    }
})