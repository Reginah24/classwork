#!/usr/hp/AppData/local/Microsoft/WindowsApps/python
set_type = set()
set_type.add("hello")
set_type.update("hello")
print(set_type)
#append does not work in sets because append only work in places that are ordered and sets are unoredered
#update adds letter per letter
#add addds the whole word