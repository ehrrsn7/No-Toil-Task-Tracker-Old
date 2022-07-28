#!/usr/bin/env python3.10

# include
import os, sys, platform, socket

# helper functions
def get_ip_address():
   return socket.gethostbyname(socket.gethostname())

# define
port_no = 8000

# classes
class Windows:
   @staticmethod
   def runserver():
      command = f"python manage.py runserver {get_ip_address()}:{port_no}"
      os.system(command)
   
class Unix:
   @staticmethod
   def runserver():
      command = f"python manage.py runserver {get_ip_address()}:{port_no}"
      os.system(command)

# main
def main():
   if len(sys.argv) > 1:
      if sys.argv[1].lower() == "update":
         os.system(f"pip install --upgrade pip")
         os.system(f"pip install -r requirements.txt")
         if int(sys.version_info.minor) >= 10:
            print("fatal: python version needs to be 3.10 or later")
         return
   
   match platform.system():
      case "Windows":
         Windows.runserver()
      case "Darwin":
         Unix.runserver()
      case "Linux":
         Unix.runserver()
      case _:
         Windows.runserver()


if __name__ == "__main__": main()