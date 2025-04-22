#!/usr/hp/AppData/local/Microsoft/WindowsApps/python
available_degree_alu= {3,4,(10,6),"BSE", "BEL"}
check_bse = "BSE" in available_degree_alu
check_bel = "BEL" in available_degree_alu
print("Is BSE present?", check_bse,"\n" "Is BEL present", check_bel)
#the "\n" means enter and it is used when you want the output to be on diff lines
#if u use f string, commas are not a must but curly brackets are  must
