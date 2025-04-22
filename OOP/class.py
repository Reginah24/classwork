# create a class
class Book:
    def __init__(self, author, title, year):
        self.author = author
        self.title = title
        self.year = year

# now i create an object
page = Book("Regina", "Why me", 1990)

#print the details
print(page.author)
print(page.title)
print(page.year)