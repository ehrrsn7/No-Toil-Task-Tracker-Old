if __name__ == "__main__":
   import os
   os.system(f"git pull")
   # update python packages
   os.system(f"pip install --upgrade pip")
   os.system(f"pip install -r requirements.txt")
   # now that django is updated, update django project migrations
   os.system(f"python manage.py makemigrations")
   os.system(f"python manage.py migrate")
   input("press any key to exit.")