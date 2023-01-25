# **BBQ_Planner_T3A2-b_Back-end**

# **End Points:**

#### **Get All participants:**
[https://t3a2-b-back-end-production.up.railway.app/participants](https://t3a2-b-back-end-production.up.railway.app/participants)

```JSON
[
    {
        "_id": "63d06ab35489f93f1ae35627",
        "name": "Johnny",
        "drink_id": "63d06ab35489f93f1ae35623",
        "meat_eater": "No",
        "__v": 0
    },
    {
        "_id": "63d06ab35489f93f1ae35628",
        "name": "Karen",
        "drink_id": "63d06ab35489f93f1ae35623",
        "meat_eater": "Yes",
        "__v": 0
    },
    {
        "_id": "63d06ab35489f93f1ae35629",
        "name": "Angela",
        "drink_id": "63d06ab35489f93f1ae35624",
        "meat_eater": "No",
        "__v": 0
    }
]

```

#### **Get, Put, Delete participant by id:**
[https://t3a2-b-back-end-production.up.railway.app/participants/63d06ab35489f93f1ae35627](https://t3a2-b-back-end-production.up.railway.app/participants/63d06ab35489f93f1ae35627)

```JSON
[
    {
        "_id": "63d06ab35489f93f1ae35627",
        "name": "Johnny",
        "drink_id": "63d06ab35489f93f1ae35623",
        "meat_eater": "No",
        "__v": 0
    }
]

```

#### **Get All beverages Seeded and Neverchanging:**
[https://t3a2-b-back-end-production.up.railway.app/beverages](https://t3a2-b-back-end-production.up.railway.app/beverages)

```JSON

[
    {
        "_id": "63d06ab35489f93f1ae35622",
        "name": "Beer",
        "quantity": 2,
        "__v": 0
    },
    {
        "_id": "63d06ab35489f93f1ae35623",
        "name": "Wine",
        "quantity": 1,
        "__v": 0
    },
    {
        "_id": "63d06ab35489f93f1ae35624",
        "name": "Juice",
        "quantity": 1,
        "__v": 0
    },
    {
        "_id": "63d06ab35489f93f1ae35625",
        "name": "Softdrink",
        "quantity": 2,
        "__v": 0
    }
]

```

#### **Get All foods Seeded and Neverchanging:**
[https://t3a2-b-back-end-production.up.railway.app/foods](https://t3a2-b-back-end-production.up.railway.app/foods)

```JSON

[
    {
        "_id": "63d06ab35489f93f1ae3562c",
        "name": "Beef",
        "quantity": 0.3,
        "cont_meat": "Yes",
        "__v": 0
    },
    {
        "_id": "63d06ab35489f93f1ae3562d",
        "name": "Sausage",
        "quantity": 0.3,
        "cont_meat": "Yes",
        "__v": 0
    },
    {
        "_id": "63d06ab35489f93f1ae3562e",
        "name": "Potato Salad",
        "quantity": 0.3,
        "cont_meat": "No",
        "__v": 0
    },
    {
        "_id": "63d06ab35489f93f1ae3562f",
        "name": "Veg Sausage",
        "quantity": 0.3,
        "cont_meat": "No",
        "__v": 0
    }
]

```

