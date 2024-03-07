import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray = [{ taskName: 'Brush Teeth', isCompleted: false, isEditable: false }];

  OnSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      isEditable: false
    });
    form.reset();
  }

  OnDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  OnEdit(index: number) {
    this.taskArray.forEach((task, i) => {
      task.isEditable = i === index;
    });
  }

  OnSave(index: number) {
    this.taskArray[index].isEditable = false; // Update editable state first
  }

  Onchange(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
