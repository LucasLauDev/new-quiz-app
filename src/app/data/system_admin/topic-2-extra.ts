import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic2Extra: Quiz = {
  id: "sysadmin-topic-2-extra",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-2-extra",
  title: "Topic 2 - Network Topologies",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Which of the following network topologies are listed in the provided notes? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Star Topology",
        },
        {
          id: "b",
          text: "Mesh Topology",
        },
        {
          id: "c",
          text: "Tree Topology",
        },
        {
          id: "d",
          text: "Bus Topology",
        },
        {
          id: "e",
          text: "Hybrid Topology",
        },
        {
          id: "f",
          text: "Ring Topology",
        },
      ],
      correctOptionIds: ["a", "b", "d", "f"],
      explanation: {
        correct:
          "The notes explicitly identify Star, Mesh, Bus, and Ring topologies [cite: 210-213, 216-219, 350].",
        incorrect: {
          c: "Incorrect — Tree topology is not mentioned in the provided text.",
          e: "Incorrect — Hybrid topology is not mentioned in the provided text.",
        },
      },
    },
  ],
};
