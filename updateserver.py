import os, sys, manage

if __name__ == "__main__": 
   # pull all code changes
   os.system(f"git pull")
   # update python packages
   os.system(f"pip install --upgrade pip")
   os.system(f"pip install -r requirements.txt --no-warn-script-location")
   # now that django is updated, reset/update django project migrations
   # manage.main([sys.argv[0], "migrate", "api", "zero"])  # reset
   manage.main([sys.argv[0], "makemigrations"])          # update
   manage.main([sys.argv[0], "migrate"])                 # execute update

   if len(sys.argv) > 1:
      # change dir to djangoapp and update npm packages
      os.system("cd djangoapp")
      os.chdir(cwd + "/djangoapp")
      os.system(f"npm install npm@latest")
      os.system(f"npm install --legacy-peer-deps")
      os.system(f"npm outdated")
      os.system(f"cd ..")

   if sys.platform.lower() == "windows": input("--") # keep window open