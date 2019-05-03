@echo off

set /p FILENAME= What file would you like to run with node?  
./NodeJS/npm %FILENAME% --scripts-prepend-node-path ./NodeJS/node.exe

pause