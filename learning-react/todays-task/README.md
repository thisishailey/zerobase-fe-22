# Today's Task App

An app for daily task management (aka. todo list)

## Tech Stack

-   HTML
-   SCSS Modules
-   TypeScript
-   React
-   Vite
-   SWC
-   Node.js
-   npm
-   ESLint
-   Prettier
-   Git

## Functional Requirement

### Create

-   Create new task using the HTML Form element.

    -   A task object should have `id: number`, `content: string`, `checked: boolean`.

### Read

-   Get and render a list of tasks.

    -   A task list is an array of task objects.

-   Re-render a filtered list on a filter button click.

    -   There are three filters: `All` (default), `To Do`, `Completed`.
    -   Filter tasks based on their `checked` values.
    -   Use `useMemo()` for better performance.

### Update

-   Edit a task content.

    -   Enable edit on a mouse click.
    -   Exit edit on enter or a button click and update the task content.

-   Check or uncheck a task.

    -   Manage check status using `useState()`.
    -   Strikethrough the task content if checked.

-   Render a newly created task after Create.

-   Update the task count.

### Delete

-   Remove the selected task.
