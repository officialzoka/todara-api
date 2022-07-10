# Todara Api

Node.js Todo Api With Mongodb

### Get All Todos

method: `GET`

url: `https://todara.herokuapp.com/v1/todo/`

### Get Todo By Id

method: `GET`

url: `https://todara.herokuapp.com/v1/todo/:id`

### Create New Todo

method: `POST`

url: `https://todara.herokuapp.com/v1/todo/create`

data: `title` and `description`

### Update Todo

method: `PUT`

url: `https://todara.herokuapp.com/v1/todo/update`

data: `id`, `title`, `description`, `completed`, `isPopular`

### Remove Todo

method: `DELETE`

url: `https://todara.herokuapp.com/v1/todo/remove`

data: `id`

### Search Todos

method: `POST`

url: `https://todara.herokuapp.com/v1/todo/search`

data: `query`
