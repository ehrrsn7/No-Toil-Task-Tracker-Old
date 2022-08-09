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
   cwd = os.getcwd()

   # python runserver.py update
   if len(sys.argv) > 1:
      if sys.argv[1].lower() == "update":
         # update latest file changes from developer
         os.system(f"git pull")
         # update python packages
         os.system(f"pip install --upgrade pip")
         os.system(f"pip install -r requirements.txt")
         # change dir to djangoapp and update npm packages
         os.system("cd djangoapp")
         os.chdir(cwd + "/djangoapp")
         os.system(f"npm install npm@latest")
         os.system(f"npm install --legacy-peer-deps")
         os.system(f"npm outdated")
         os.system(f"cd ..")
   
   # python runserver.py (default)
   elif platform.system() == "Darwin" or platform.system() == "Linux":
      Unix.runserver()
   else: Windows.runserver()


if __name__ == "__main__": main()