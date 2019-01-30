module.exports = {
  "getUsers": "SELECT * FROM users;",
  "addUser": "INSERT INTO users(username,password,first_name,last_name,email_id) VALUES(\"%s\",\"%s\",\"%s\",\"%s\",\"%s\");",
  "getUser": "SELECT * FROM users WHERE username=\"%s\" AND password=\"%s\";"
}
