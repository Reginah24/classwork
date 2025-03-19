class Car:
    # Initialize the Car object with attributes
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    
    # Method to simulate starting the engine
    def start_engine(self):
        print("The engine is starting...")
    
    # Method to display car information using a single line f-string
    def display_info(self):
        print(f"Car Details: Brand: {self.brand}, Model: {self.model}, Year: {self.year}")

# Create an instance of the Car class
my_car = Car("Toyota", "Corolla", 2022)

# Call the methods
my_car.start_engine()
my_car.display_info()