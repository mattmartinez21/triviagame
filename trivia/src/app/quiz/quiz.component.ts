import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getAllQuestions().subscribe(response => {
      this.questions = response;
    });
  }

  submitQuiz() {}

  // submitQuiz(form: NgForm): void {
  //   this.quizService.postAnimals(form.value).subscribe(response => {
  //     this.animalList = response;
  //     form.reset();
  //   });
  // }
  // submitQuiz(form: NgForm) {
  //   let newProfile: UserProfile = {
  //     name: form.value.name,
  //     contact: form.value.contact,
  //     bio: form.value.bio
  //   };
  //   this.profileService.setUserProfile(newProfile);

  //   this.router.navigate(["profile"]);
}
