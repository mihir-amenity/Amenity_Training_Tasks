# Task Manager frontend 

This guide demonstrates TaskManger app user can view taks delete takds and filter task based on various Filters in jsx  taks is stored in localStorage 

## Project Structure

```
task-manager/
├── components/
├      ├──TaskItem.jsx
├      ├──TaskList.jsx
├      ├──TaskForm.jsx        
├── App.jsx
├── App.css
└── README.md         
```


### Requirments 
* Add tasks
* Mark as completed
* Filter by status
* Persist in localStorage


# Add tasks
        -Header with app name and today’s date.
        Input area:
		-Text input for task title (required)
		-Optional description textarea
		-Priority dropdown: Low | Medium | High
		-“Add Task” button
	Task list section:
		-Show all tasks in cards.
		Each task shows:
			-Title
			-Optional description
			-Priority (with some visual difference)
			-Status: Pending / Completed
		Actions per task:
			-Mark as completed / undo
			-Delete task

# Filters & Stats
		-Filter buttons: All | Pending | Completed
        -complete searchbar and sorting by high,medium, low order
		A small stats bar:
			-Total tasks
			-Completed tasks
			-Pending tasks
            





 