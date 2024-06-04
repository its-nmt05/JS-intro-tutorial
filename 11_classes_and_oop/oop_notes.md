# Javascript and classes

## OOP
JavaScript "classes" are syntactical sugar that makes it easier to write and understand code that follows object-oriented principles. However, they still rely on JavaScript's prototype-based inheritance system. So while they look and act like classes from classical OOP languages, under the hood they are still working with prototypes.

### Object
- collection of properties and methods
- toLowerCase()

## Why use OOP
Without OOP, the code used to become very messy and difficult to maintain(spaghetti code) without ant reusable
components.

## Parts of OOP
- Object literal -> { }
- Constructor functions
- Prototypes
- Classes
- Instances (new, this)

## 4 Pillars of OOP

## Javascript and classes

### OOP

JavaScript "classes" are syntactical sugar that makes it easier to write and understand code that follows object-oriented principles. However, they still rely on JavaScript's prototype-based inheritance system. So while they look and act like classes from classical OOP languages, under the hood they are still working with prototypes.

### Object

- collection of properties and methods
- toLowerCase()

## Why use OOP

Without OOP, the code used to become very messy and difficult to maintain(spaghetti code) without ant reusable
components.

## Parts of OOP

- Object literal → { }
- Constructor functions
- Prototypes
- Classes
- Instances (new, this)

## ✨ The *new* keyword

Here's what happens behind the scenes when the new keyword is used:

1. **A new object is created:** The new keyword initiates the creation of a new JavaScript object.
2. **A prototype is linked:** The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.
3. **The constructor is called:** The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
4. **The new object is returned:** After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

Let’s understand this better with the help of an example:

```jsx
function createUser(username, score) {
    this.username = username
    this.score = score

    // return this  # not needed explicitly as JS implicitly assumes this
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
```

The constructor function in the given code is `createUser`. It is used to create new objects with properties `username` and `score`.

### Prototype linking

When a new object is created using the `new` keyword, JavaScript sets up the prototype linkage for the new object. This means the new object’s internal `[[Prototype]]` (i.e., `__proto__`) is set to the constructor function's `prototype` property. So here, the newly created object’s internal `[[Prototype]]` is linked to `createUser.prototype`, allowing the new object to inherit methods like `increment` and `printMe`.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9d856d90-10ae-4d13-8d3e-3b579941168a/3edb5690-df92-4c21-b314-eaf6aceb2c96/aaa9e319-9f8b-443e-917b-6be5457463b8.png)

## ✨ 4 Pillars of OOP

### *Abstraction*

Abstraction is a fundamental concept in programming that involves hiding the complex implementation details of a system and exposing only the necessary features to the user. It allows programmers to work with higher-level representations without needing to understand the intricate details of the underlying code.

**Example:**

Consider a car. As a driver, you only need to know how to use the steering wheel, pedals, and gear shift to operate the car. You don't need to understand the inner workings of the engine, transmission, or the electronics behind the dashboard controls.

In programming, abstraction can be demonstrated using a simple class example in Python:

```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start_engine(self):
        print("Engine started")

    def drive(self):
        print("Car is moving")

# Using the Car class
my_car = Car("Toyota", "Corolla")
my_car.start_engine()
my_car.drive()
```

In this example:

- The `Car` class encapsulates the details of what it means to be a car.
- Methods like `start_engine` and `drive` provide a simple interface for the user to interact with the car.
- The user of the `Car` class does not need to know how the `start_engine` or `drive` methods are implemented; they just use these methods to achieve their goals.

This *separation of usage from implementation* is the essence of abstraction.

### *Encapsulation*

Encapsulation in Object-Oriented Programming (OOP) is the concept of bundling data (attributes) and methods (functions) that operate on the data into a single unit, typically a class. It also involves restricting direct access to some of the object's components, which can help prevent accidental interference and misuse. This is often achieved through the use of access modifiers like private, protected, and public.

```python
class Car:
  # Data (member variables)
  def __init__(self, brand, model):
    self.brand = brand  # Private by convention (starts with double underscore)
    self.model = model

  # Methods (functions)
  def drive(self):
    print(f"The {self.brand} {self.model} is driving!")

# Create an object (like building the car)
my_car = Car("Tesla", "Model S")

# Access the method (play with the car)
my_car.drive()
```

In this example, `Car` is the class. It has data (`brand` and `model`) hidden by convention (using double underscores). The `drive` method uses this data but keeps it safe from external changes. You can only control the car using the provided method.

Encapsulation ****is defined as the wrapping up of data and information in a single unit. In Object Oriented Programming, Encapsulation is defined as *binding together the data and the functions that manipulate them*.

Consider a real-life example of encapsulation, in a company, there are different sections like the accounts section, finance section, sales section, etc. Now,

- The finance section handles all the financial transactions and keeps records of all the data related to finance.
- Similarly, the sales section handles all the sales-related activities and keeps records of all the sales.

Now there may arise a situation when for some reason an official from the finance section needs all the data about sales in a particular month.

In this case, he is not allowed to directly access the data of the sales section. He will first have to contact some other officer in the sales section and then request him to give the particular data.

This is what **Encapsulation ****is. Here the data of the sales section and the employees that can manipulate them are wrapped under a single name “sales section”. 

### *Inheritance*

Inheritance in Object-Oriented Programming (OOP) is a mechanism where a new class (derived or child class) inherits properties and behaviors (methods) from an existing class (base or parent class). This promotes code reuse and establishes a relationship between the base and derived classes.

**Example:**

```python
# Base class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass  # This method will be overridden in derived classes

# Derived class
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

# Derived class
class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Create instances of the derived classes
dog = Dog("Buddy")
cat = Cat("Whiskers")

# Call the speak method on each instance
print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Whiskers says Meow!
```

### Key Points:

- **Base Class (Animal)**: Defines common properties and methods that can be shared by all derived classes.
- **Derived Classes (Dog and Cat)**: Inherit from the base class and can override methods to provide specific behavior.
- **Method Overriding**: The derived classes provide their own implementation of the `speak` method, which is different from the base class.

### *Polymorphism*

**Polymorphism** is the ability of any data to be processed in more than one form. The word itself indicates the meaning as **poly** means **many** and **morphism** means **types**. 

It refers to the ability of different classes to be treated as instances of the same class through a common interface. It allows methods to do different things based on the object it is acting upon, even if they share the same name. This is typically achieved through method overriding and interfaces/abstract classes.

```python
# Base class
class Animal:
    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

# Derived class
class Dog(Animal):
    def speak(self):
        return "Woof!"

# Derived class
class Cat(Animal):
    def speak(self):
        return "Meow!"

# Function demonstrating polymorphism
def make_animal_speak(animal):
    print(animal.speak())

# Creating instances of the derived classes
dog = Dog()
cat = Cat()

# Polymorphic behavior
make_animal_speak(dog)  # Output: Woof!
make_animal_speak(cat)  # Output: Meow!
```

### Key Points:

- **Base Class (Animal)**: Defines a common interface (`speak` method) which derived classes must implement.
- **Derived Classes (Dog and Cat)**: Provide specific implementations of the `speak` method.
- **Polymorphic Behavior**: The `make_animal_speak` function can take any object that is derived from `Animal` and call the `speak` method, demonstrating how the same interface can be used for different underlying forms (dog and cat in this case).sm
