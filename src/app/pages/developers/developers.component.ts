import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-developers',
  imports: [CommonModule],
  templateUrl: './developers.component.html',
  styleUrl: './developers.component.css'
})
export class DevelopersComponent {
  developers = [
    {
      name: "Darpan Dasani",
      role: "Full Stack Developer",
      image: "dev1.jpeg",
      skills: ["Java","SQl","MongoDB","Spring Boot","Angular","React JS","REST API"]
    },
    {
      name: "Mansi Tawar",
      role: "Full Stack Developer",
      image: "dev2.png",
      skills: ["Java","SQl","MongoDB","Spring Boot","Angular","React JS","REST API"]
    },
    {
      name: "kaustubh Bhole",
      role: "Backend Developer",
      image: "dev1.jpg",
      skills: ["Python", "Django", "MySQL", "REST API"]
    },
    {
      name: "Mihir Varu",
      role: "Frontend Developer",
      image: "dev3.PNG",
      skills: ["JavaScript","React Js","Next JS"]
    },
    {
      name: "Pranav ",
      role: "Frontend Developer",
      image: "devp.jpeg",
      skills: ["Java","SQL","JavaScript","React Js","Next JS"]
    }
  ];
}