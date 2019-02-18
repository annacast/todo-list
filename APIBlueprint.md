FORMAT: 1A

# To Do List API
This is the API blueprint for a simple ToDo List application

## My To Do List [/todos{?limit}]

### Retrieve to do list [GET]
Retrieves the list of tasks

**Query Parameters**

+ Parameters

    + limit (number, optional) - The maximum number of results to return.
        + Default: `25`

**Returns**

+ Response 200 (application/json)

        [
          {
            "id": 1,
            "text": "Paint the walls white"
            "isComplete": false,
          },
          {
            "id": 2,
            "text": "Wash the car"
            "isComplete": false,
          },
          {
            "id": 3,
            "text": "Cook dinner"
            "isComplete": true,
          },
          {
            "id": 4,
            "text": "Clean kitchen"
            "isComplete": false,
          }
        ]

## Create a To Do Item [/todo]

### Create a task [POST]
Creates a new task

**Query Parameters**

+ Attributes (object)
    + text: (string)

**Returns**

A new Todo object.

+ Request Success (application/json)

            {
                "text": "Paint the walls white"
            }

+ Response 201 (application/json; charset=utf-8)

            {
                "id": 1,
                "text": "Paint the walls white",
                "isComplete": false,
            }

## To Do List Item [/todo/{id}]

### Update status of todo [PUT]
Updates the status of an item if completed or not

**Query Parameters**

Name | Type    | Status   | Default
---- | ------- | -------- | -------
id   | integer | required | *n/a*

+ Parameters
    + id: `1` (integer) - The ID of the Todo

**Returns**

The new status of Todo object, or a 404 Not Found error.

+ Response 200 (application/json; charset=utf-8)

            {
                "id": 1,
                "text": "Paint the walls white",
                "isComplete": true,
            }

+ Request Failure: Not Found (application/json)

+ Response 404 (application/json; charset=utf-8)

            {
                "code": "NotFoundError",
                "message": "Todo not found."
            }

### Delete a Todo [DELETE]

**Query Parameters**

Name | Type    | Status   | Default
---- | ------- | -------- | -------
id   | integer | required | *n/a*

**Returns**

The null value, or a 404 Not Found error.

+ Request Success (application/json)

+ Response 204

+ Request Failure: Not Found (application/json)

+ Response 404 (application/json; charset=utf-8)

            {
                "code": "NotFoundError",
                "message": "Todo not found."
            }

### Delete All To Dos [DELETE]

All todos will be deleted.

**Returns**

An empty array.

+ Request Success (application/json)

+ Response 200

            []
