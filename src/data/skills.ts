export interface Skill {
  name: string;
  tooltip: string;
  category: 'os' | 'lang' | 'tool';
}

export const skills: Skill[] = [
  // Operating Systems
  { name: "Linux", tooltip: "My love for Linux is simply unmatched", category: "os" },
  { name: "Windows", tooltip: "Perfect for Minecraft (and work i guess)", category: "os" },
  { name: "MacOS", tooltip: "No comment...", category: "os" },

  // Languages
  { name: "Python", tooltip: "Fluent", category: "lang" },
  { name: "C", tooltip: "Proficient", category: "lang" },
  { name: "Java & JUnit5", tooltip: "Proficient", category: "lang" },
  { name: "HTML", tooltip: "Fluent", category: "lang" },
  { name: "CSS", tooltip: "Fluent", category: "lang" },
  { name: "(SQL)ite", tooltip: "Proficient", category: "lang" },
  { name: "Racket", tooltip: "Proficient", category: "lang" },
  { name: "Typescript/JS", tooltip: "Proficient", category: "lang" },

  // Tools
  { name: "GitHub/GitLab", tooltip: "Me 🤝 GitHub", category: "tool" },
  { name: "MongoDB", tooltip: "I always use it for the most random things...", category: "tool" },
  { name: "VSCode", tooltip: "Try out the VSCode Pets extension it's sooooo lovely", category: "tool" },
  { name: "Docker", tooltip: "Yay... Dockerfiles...", category: "tool" },
  { name: "Amazon S3", tooltip: "Lambdas are for cool kids (me)!", category: "tool" },
  { name: "Vim", tooltip: "Well specifically Neovim (close enough)", category: "tool" },
  { name: "DynamoDB", tooltip: "Would not wish this upon my worst enemy", category: "tool" }
];
