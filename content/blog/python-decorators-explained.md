---
title: "Python Decorators Explained"
date: 2025-02-10
description: "Understanding Python decorators with practical examples"
tags: ["python", "programming", "advanced"]
categories: ["tutorials"]
draft: false
---

Decorators are one of Python's most powerful features. They allow you to modify the behavior of functions or classes without changing their source code.

## What is a Decorator?

A decorator is a function that takes another function as an argument, adds some functionality, and returns a new function.

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function call")
        result = func(*args, **kwargs)
        print("After function call")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("World")
```

## Practical Example: Timing Decorator

```python
import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done!"
```

{{< warning >}}
Always use `functools.wraps` in your decorators to preserve the original function's metadata (name, docstring, etc.).
{{< /warning >}}

## Decorators with Arguments

```python
def repeat(times):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")
```

{{< danger >}}
Be careful with decorators that modify return values. They can make debugging difficult if the modification is not well-documented.
{{< /danger >}}

## Class-Based Decorators

```python
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.count = 0

    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"Call #{self.count} to {self.func.__name__}")
        return self.func(*args, **kwargs)

@CountCalls
def process_data():
    print("Processing...")
```

{{< tip >}}
Decorators are used extensively in web frameworks like Flask and Django for routing, authentication, and caching.
{{< /tip >}}

## Summary

Decorators are a clean way to extend function behavior following the open-closed principle. Master them to write more Pythonic code!
