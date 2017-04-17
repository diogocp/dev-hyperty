
WorkContext Hyperty
-------------------

## Functionality description

The Work Context Hyperty main functionality is to manage a Work [Context](https://github.com/reTHINK-project/specs/tree/master/datamodel/data-objects/context) tree of three layers: top WorkContext and WorkTaskContext and WorkTaskUserContext. Each of these contexts uses Context Values types of "Activity".


## Hyperty Data Objects schemas

This Hyperty handles a standard [Context Data Object](https://github.com/reTHINK-project/dev-service-framework/tree/master/docs/datamodel/data-objects/context) with:

**Hyperty Resource Type**

* ACTIVITY

**ContextUnit**

-	act-status: the status of the activity

**example**

```
{
	"scheme": "context",
     "id": "1276020076",
     "time": 1465070579,
     "values": [
      {
				"type": "activity_status",
				"name": "Work Task to Design the System",
         "unit": "act-status",
         "value": "active" },
			 {
 				"type": "activity_status",
				"name": "Work task to implement the System",
				"unit": "act-status",
				"value": "planned" },
     ]
}
```

## Descriptor

The WorkContext Hyperty descriptor is:

```
"WorkContext": {
  "sourcePackage": {
    "sourceCode": ""
    "sourceCodeClassname": "HypertyWorkContext",
    "encoding": "base64",
    "signature": ""
  },
  "hypertyType": [
    "activity-status"
  ],
  "cguid": 10004,
  "version": "0.1",
  "description": "Descriptor of Work Hyperty",
  "objectName": "HypertyWorkContext",
  "configuration": {},
  "sourcePackageURL": "/sourcePackage",
  "language": "javascript",
  "signature": "",
  "messageSchemas": "",
  "dataObjects": [
    "https://catalogue.hybroker.rethink.ptinovacao.pt/.well-known/dataschema/Context"
  ],
  "accessControlPolicy": "somePolicy"
}
```

Since the Hyperty supports the standard context data schema, any Catalog URL for that schema can be used.

## Exposed API

The Work Context Hyperty exposes an API to the Application to provide two types of functionalities:

1. manage a tree of Work Contexts including invitations to WorkTaskUsers as well as requests to join from potential WorkTaskUsers.
2. create and manage WorkTaskUsers

### create

This function creates a WorkContext tree and invites users to join.

```
<Promise> WorkContextTree create(Object work, Object[] tasks)
```

**parameters**

work: an object with the name to be given to the top work tree context.
tasks: an array of objects each one comprised by the name of the task and a list of users to be invited to join.

**returns**

An Object comprised by the WorkContext tree object is returned as a Promise.

### addTaskUser

This function adds a new user to an existing task.

```
<Promise> boolean promise( URL.ContextURL task, URL.UserURL user )
```

**parameters**

*task* ContextURL of the task where the user is added
*user* UserURL of the user to be added


**returns**

It returns as a Promise true if successfully added or false otherwise.

### addTask

This function adds a new Task and a list of users to be invited.

```
<Promise> Context promise( string taskname, URL.UserURL[] users )
```

**parameters**

*taskname* name of the new task
*users* UserURL[] of the users to be added


**returns**

It returns as a Promise the Context object for the if successfully created.

### removeTaskUser

This function removes a user from an existing task.

```
<Promise> boolean promise( URL.ContextURL task, URL.UserURL user )
```

**parameters**

*task* ContextURL of the task from where the user is removed
*user* UserURL of the user to be removed


**returns**

It returns as a Promise true if successfully removed or false otherwise.

### removeTask

This function removes an existing Task.

```
<Promise> boolean promise( URL.ContextURL task )
```

**parameters**

*task* ContextURL of the task to be removed


**returns**

It returns as a Promise true if successfully removed or false otherwise.

### onUserTask

This function is used to handle requests from users to join a Task that were not invited.

```
onUserTask( UserTaskEvent event )
```

**parameters**

*event* the subscription request
