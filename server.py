import http.server
import socketserver
import os
import sys

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for development
        self.send_header('Access-Control-Allow-Origin', '*')
        # Prevent caching during development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        super().end_headers()

class ThreadingHTTPServer(socketserver.ThreadingTCPServer):
    # Enable IPv6
    address_family = socketserver.socket.AF_INET6
    # Allow address reuse
    allow_reuse_address = True

    def server_bind(self):
        # Allow dual-stack (both IPv4 and IPv6 on same socket)
        try:
            self.socket.setsockopt(socketserver.socket.IPPROTO_IPV6, socketserver.socket.IPV6_V6ONLY, 0)
        except Exception as e:
            print(f"Warning: Could not set dual-stack IPv6 socket options: {e}")
        super().server_bind()

if __name__ == '__main__':
    # Change working dir to script dir
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    server_address = ('', PORT)
    try:
        with ThreadingHTTPServer(server_address, CustomHTTPRequestHandler) as httpd:
            print(f"DevaNama local server running on http://127.0.0.1:{PORT} and http://[::1]:{PORT}")
            print("Press Ctrl+C to stop.")
            sys.stdout.flush()
            httpd.serve_forever()
    except Exception as e:
        print(f"Error starting server: {e}", file=sys.stderr)
        sys.stderr.flush()
        sys.exit(1)
