from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
app=FastAPI()

class Employee(BaseModel):
    id:int
    name:str
    age:int
    desig:str
    exp:float

db: List[Employee]=[
    Employee(id=1,name="ravi",age=22,desig="SDE1",exp=2.2),
    Employee(id=2,name="mavi",age=23,desig="SDE3",exp=1.2),
    Employee(id=4,name="kon",age=33,desig="Product Manager",exp=1)

]

#print(db)


@app.get("/all")
def getItems():
    return db

@app.get("/employee/{id}")
def getItem(id:int):
    for em in db:
        if(em.id==id):
            return em
    return {}

@app.post("/create-emp")
def create_emp(employ:Employee):
    for em in db:
        if em.id==employ.id:
            return {"Error" : "Already exist"}

    db.append(employ)
    return db

@app.delete("/delete-emp/{id}")
def delete_emp(id:int):
    for em in db:
        if em.id==id:
            db.remove(em)
    return db