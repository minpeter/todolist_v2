package com.minpeter.todolist_backend_v2.controller

import com.minpeter.todolist_backend_v2.service.TodoService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/todo")
class TodoController(
    private  val todoService: TodoService
) {
    @GetMapping
    fun getTodos() = todoService.getTodos()

    @PostMapping
    fun insertTodo(@RequestBody todoRequest: TodoRequest) = todoService.insertTodo(todoRequest.todoName)

    @PutMapping(path = ["/{todoId}"])
    fun updateTodo(@PathVariable("todoId") todoId: Long) = todoService.updateTodo(todoId)

    @DeleteMapping(path = ["/{todoId}"])
    fun deleteTodo(@PathVariable("todoId") todoId: Long) = todoService.deleteTodo(todoId)

}