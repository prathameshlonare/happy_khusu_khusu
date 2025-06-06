@echo off
for /l %%i in (1,1,21) do (
  setlocal
  if %%i LSS 10 (
    echo ^<div class="container"^>^</div^> > 0%%i.html
  ) else (
    echo ^<div class="container"^>^</div^> > %%i.html
  )
  endlocal
)
echo "01.html pasun 21.html paryant files yashasvi pane tayar jhale!"
pause