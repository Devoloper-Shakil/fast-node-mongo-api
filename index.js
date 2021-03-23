var express = require('express')
var app = express()

app.get('/',(req, res) =>{
  res.send('The start off know a start a Node ......YAea.....')
})

app.get ('/foots/banena', (req,res)=>{
  const fotts={
  '1':{'name':'banena', 'price':'100$'},
  '2':{'name':'amrala', 'price':'20$'},
  '3':{'name':'amrala', 'price':'20$'},
  '4':{'name':'amrala', 'price':'70$'},
  '5':{'name':'amrala', 'price':'20$'},
  '6':{'name':'amrala', 'price':'20$'},
  '7':{'name':'amrala', 'price':'20$'},
  '8':{'name':'banena', 'price':'100$'},
  '9':{'name':'amrala', 'price':'20$'},
  '10':{'name':'amrala', 'price':'20$'},
  '11':{'name':'amrala', 'price':'70$'},
  '12':{'name':'amrala', 'price':'20$'},
  '13':{'name':'amrala', 'price':'20$'},
  '14':{'name':'amrala', 'price':'20$'}

}
  res.send(fotts);
})

app.listen(3000, () =>console.log("the server prot 3000"))
