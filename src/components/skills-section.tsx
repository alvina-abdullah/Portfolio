import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
  ]

  // const backendSkills = [
  //   { name: "Node.js", level: 75 },
  //   { name: "Express", level: 70 },
  //   { name: "MongoDB", level: 65 },
  //   { name: "PostgreSQL", level: 60 },
  //   { name: "GraphQL", level: 55 },
  // ]

  // const otherSkills = [
  //   { name: "Git/GitHub", level: 80 },
  //   { name: "Docker", level: 60 },
  //   { name: "AWS", level: 50 },
  //   { name: "UI/UX Design", level: 70 },
  //   { name: "Agile/Scrum", level: 75 },
  // ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-black">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Skills</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-background border-border/40">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
              <div className="space-y-6">
                {frontendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* <Card className="bg-background border-border/40">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
              <div className="space-y-6">
                {backendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}

          {/* <Card className="bg-background border-border/40">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">Other Skills</h3>
              <div className="space-y-6">
                {otherSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}

