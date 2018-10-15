# CODING CHALLENGE

## PART 1: COMMAND LINE INTERFACE
### Command line interface
node app_p1_parse_files.js \<filename1\> \<filename2\> ...

Try these:
```
+ node app_p1_parse_files.js ./test/input_files_p1/pipe_delimited.txt ./test/input_files_p1/comma_delimited.txt ./test/input_files_p1/space_delimited.txt ./test/input_files_p1/mixed.txt	
+ node app_p1_parse_files.js ./test/input_files_p1/comma_delimited.txt
+ node app_p1_parse_files.js ./test/input_files_p1/space_delimited.txt	
+ node app_p1_parse_files.js ./test/input_files_p1/pipe_delimited.txt	
+ node app_p1_parse_files.js ./test/input_files_p1/mixed.txt	
```
### Start Unit tests with command:
```
npm test
```
## PART 2: Restful API
### Start web server with 'nodemon'
### Test POST route
+ Start Postman and import Postman collection below.  This was exported as a V2 postman collection.

```
./test/OTC Tests.postman_collection
```
+ Try sending each POST request in the above collection to add records to API
+ Use web browser to request sorted data from API:
```
http://localhost:3000/records/gender
http://localhost:3000/records/name
http://localhost:3000/records/birthdate
```
