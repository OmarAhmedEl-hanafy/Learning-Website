from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs
from unidecode import unidecode

class MessageHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Handle POST request
        content_length = int(self.headers.get('Content-Length'))
        body = self.rfile.read(content_length).decode()
        data = parse_qs(body)

        # Extract form fields
        name = unidecode(data['name'][0]) if 'name' in data else ''
        Address = unidecode(data['Address'][0]) if 'Address' in data else ''
        email = unidecode(data['email'][0]) if 'email' in data else ''
        phonenum = unidecode(data['phonenum'][0]) if 'phonenum' in data else ''
        gender = unidecode(data['gender'][0]) if 'gender' in data else ''
        date = unidecode(data['date'][0]) if 'date' in data else ''
        level = unidecode(data['level'][0]) if 'level' in data else ''

        # Save data to file
        with open("DB.txt", "a") as f:
            f.write(f"{name}, {Address}, {email}, {phonenum}, {gender}, {date}, {level}\n")
        # Redirect back to the form
        self.send_response(302)
        self.send_header('Location', 'http://127.0.0.1:5502/index.html')
        self.end_headers()

    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Location', 'index.html')
            self.end_headers()
        elif self.path == '/index.html':
            with open("DB.txt", "r") as f:
                lines = f.readlines()
                last_line = lines[-1].strip()
                # Split the line into words
                words = last_line.split(",")
                third_word = words[0]
                print(words)
                self.send_response(200)
                self.send_header('Access-Control-Allow-Origin', '*') # Allow all origins
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write(third_word.encode('utf-8'))
        else:
            self.send_error(404, 'File Not Found: %s' % self.path)


if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, MessageHandler)
    httpd.serve_forever()
