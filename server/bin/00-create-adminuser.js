 var app = require('../server');

 app.models.ddUser.create([
     // {username: 'John', email: 'john@doe.com', password: 'opensesame'},
     // {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
     // {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
     {username: 'John',  password: 'opensesame'},
     {username: 'Jane', password: 'opensesame'},
     {username: 'Bob',  password: 'opensesame'}

 ], function(err, users) {
     if (err) return console.log('%j', err);

     console.log(users);
     // Create projects, assign project owners and project team members


     // Create the admin role
     app.models.Role.create({
       name: 'admin'
     }, function(err, role) {
       if (err) return console.log(err);

       // Make Bob an admin
       role.principals.create({
         principalType: app.models.RoleMapping.USER,
         principalId: users[2].id
       }, function(err, principal) {
         if (err) return console.log(err);
       });
     });
   });
