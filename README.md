# FCC Timestamp Microservice
*Paul Hoskinson (plhosk@gmail.com)*

### Technologies:

Node, Express

### Description:

Parses input time and outputs JSON object of time in different formats.

### Usage: 

Send input as URL path. Send either unix time (seconds since January 1, 1970) or URI-encoded date in English (format: January 1, 1970). Example: `<host:port>/328665600` or `<host:port>/June%201%2C%201980`

Result will be a JSON object with 2 parameters: unix (unix time), and natural (date format above). example: `{"unix":328665600,"natural":"June 1, 1980"}`