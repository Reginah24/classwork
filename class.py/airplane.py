class passenger:
    passenger_names = []
    total_weight = 350
    
    def __init__(self, name, weight):
        self.name = name
        self.weight = weight
    def weight_count(self):
        if self.weight > self.total_weight:
            print(f"{self.name} is carrrying too much weight!")
        else:
            print(f"{self.name} is carrying {self.weight}kg")
        
Regina = passenger("Regina", 32)
Sonia = passenger("Sonia", 354)

Regina.weight_count()
Sonia.weight_count()