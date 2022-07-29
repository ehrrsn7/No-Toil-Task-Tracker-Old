# include
import os, sys, platform, socket

# define
port_no = 8000

# helper functions
def get_ip_address():
   s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
   try:       
      s.connect(('10.255.255.255', 1))
      ip_address = s.getsockname()[0]
   except Exception:
      ip_address = '127.0.0.1'
   finally:
      s.close()
   return ip_address

def runserver(python):
   command = f"{python} manage.py runserver {get_ip_address()}:{port_no}"
   print(f">>> {command}")
   os.system(command)

# classes
class Windows:
   @staticmethod
   def runserver(): runserver("python")
   
class Unix:
   @staticmethod
   def runserver(): runserver("python3")

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