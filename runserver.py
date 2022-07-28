from ipaddress import ip_address
import os, socket, platform

def get_ip_address():
   return socket.gethostbyname(socket.gethostname())

if __name__ == "__main__":
   os.system(f"python manage.py runserver {get_ip_address()}:8000")