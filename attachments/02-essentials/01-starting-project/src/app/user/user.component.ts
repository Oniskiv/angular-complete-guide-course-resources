import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  };

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
