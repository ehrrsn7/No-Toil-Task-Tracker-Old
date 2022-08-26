import os, sys, manage

if __name__ == "__main__": 
   try:
      # pull all code changes
      print(">> GIT")
      os.system(f"git pull")
   except:
      print(">> GIT ERROR")

   try:
      # update python packages
      print(">> PIP")
      os.system(f"pip install --upgrade pip")
      os.system(f"pip install -r requirements.txt --no-warn-script-location")
   except:
      print(">> PIP ERROR")

   try:
      # now that django is updated, reset/update django project migrations
      print(">> DJANGO")
      # manage.main([sys.argv[0], "migrate", "api", "zero"])  # reset
      manage.main([sys.argv[0], "makemigrations"])          # update
      manage.main([sys.argv[0], "migrate"])                 # execute update
   except:
      print(">> DJANGO ERROR")

   try:
      if "npm" in sys.argv[1]:
         try:
            # change dir to djangoapp and update npm packages
            print(">> NPM")
            os.system("cd djangoapp")
            os.chdir(cwd + "/djangoapp")
            os.system(f"npm install npm@latest")
            os.system(f"npm install --legacy-peer-deps")
            os.system(f"npm outdated")
            os.system(f"cd ..")
         except:
            print(">> NPM ERROR")
   except: pass

   # keep window open
   if sys.platform.lower() in "windows": 
      input("--") 
   else: input("xx")