#!/usr/bin/env python3.10

# include
import os, sys, socket

# helper functions
def get_ip_address():
   return socket.gethostbyname(socket.gethostname())

# define
windows_command = f"python manage.py runserver {get_ip_address()}:8000"

# main
def main():
   if sys.argv[1].lower() == "update":
      os.system(f"python pip install --upgrade pip")
      os.system(f"pip install -r requirements.txt")
      if int(sys.version_info.minor) >= 10:
         print("fatal: python version needs to be 3.10 or later")
      return
   
   os.system(f"python manage.py runserver {get_ip_address()}:8000")

if __name__ == "__main__": main()