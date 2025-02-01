@echo off
setlocal enabledelayedexpansion

rem
set count=1

rem
for %%f in (*.png) do (
    rem
    ren "%%f" "!count!.png"
    set /a count+=1
)

echo Doi ten hoan tat
pause