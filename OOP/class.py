# create a class
class Book:
    def __init__(self, author, title, year):
        self.author = author
        self.title = title
        self.year = year

# i am now using method to show the actions tha must occur
    def read_book(self):
        print(f"You are reading '{self.title}' by {self.author}")
        page.read_book()

# now i create an object
page = Book("Regina", "Why me", 1990)

#print the details
print(page.author)
print(page.title)
print(page.year)