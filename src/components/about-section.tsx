import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Laptop, Palette } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-2xl text-white/80">
            I'm a passionate developer with experience in building web applications using modern technologies. I focus
            on creating clean, efficient, and user-friendly solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-background border-border/40">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                I create responsive and performant web applications using React, Next.js, and TypeScript.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border/40">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">
                I build robust APIs and server-side applications using Node.js, Express, and various databases.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border/40">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                I design intuitive user interfaces and experiences that are both functional and aesthetically pleasing.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

