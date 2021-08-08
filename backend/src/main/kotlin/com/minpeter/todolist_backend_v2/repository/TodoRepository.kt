package com.minpeter.todolist_backend_v2.repository

import org.springframework.data.repository.CrudRepository

interface TodoRepository : CrudRepository<Todo, Long>