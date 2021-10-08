const express = require("express");
const app = express();
const users = [ 
{ 
id: 1, 
isActive: true, 
balance: "$1,111.15", 
picture: "http://placehold.it/32x32", 
age: 37, 
name: "Elsa Castaneda", 
gender: "female", 
company: "OTHERWAY", 
email: "elsacastaneda@otherway.com", 
phone: "+1 (988) 404-2932", 
}, 
{ 
id: 2, 
isActive: true, 
balance: "$1,823.59", 
picture: "http://placehold.it/32x32", 
age: 35, 
name: "Ollie Osborn", 
gender: "female", 
company: "VIASIA", 
email: "ollieosborn@viasia.com", 
phone: "+1 (947) 442-2611", 
}, 
{ 
id: 3, 
isActive: true, 
balance: "$1,734.78", 
picture: "http://placehold.it/32x32", 
age: 29, 
name: "Dean Huff", 
gender: "male", 
company: "NORALEX",
email: "deanhuff@noralex.com", phone: "+1 (816) 575-2363", }, 
]; 
const children = [ 
{ 
id: 11, 
name: "Christina Bray", 
parent_id: 1, 
age: 6, 
}, 
{ 
id: 12, 
name: "Farrell Boone", 
parent_id: 1, 
age: 4, 
}, 
{ 
id: 13, 
name: "Gary Maddox", 
parent_id: 2, 
age: 4, 
}, 
{ 
id: 14, 
name: "Helena Burt", 
parent_id: 2, 
age: 6, 
}, 
{ 
id: 15, 
name: "Beryl Duke", 
parent_id: 2, 
age: 7, 
}, 
];


app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});


app.get("/user", (req, res) => {
    // const idresult = req.parms.id;
   let result = users.map(itemid=>itemid.id)

   
    if (result) {
        res.json(result)
         return res.send(result)

    } else
        res.sendStatus(404).json('Not found')
     return res.send(result)
    

});