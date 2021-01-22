const { decrypt } = require('wiffy')

const args = process.argv.slice(2)
var key = args[0]
var password = args[1]

if (!key || !password) {
  console.log(
    `
      Please provide key and password when using this utility, for example:

      node index.js 6PYNAmDcSPWkRkGZRkBJLN2EQX3nxyZUFwKfmKAmxyLxR3kzcbgw1BBPw4 password

      {
        address: '18HSofa25VFWR2zEJDTnxTfzNrXCt3kH6C',
        privateKey: 'e357cf6d0b93f2d2a43a109ecb89765633c9ab806eee4d8128d6c4b2d461313c',
        wif: 'L4qdqhUonbvu2G8HTuZpSkuyw6jTn6YKta2yrXv1oC4ft8NLRPMA'
      }

    `,
  )
  return
}

console.log(decrypt(key, password))
