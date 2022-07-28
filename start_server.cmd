@REM start server
@REM getting ip address for this machine...
for /f "tokens=1-2 delims=:" %%a in ('ipconfig^|find "IPv4"') do set ip=%%b
set ip=%ip:~1%
python manage.py runserver %ip%:8000 
