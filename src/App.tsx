import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="p-12 shadow-xl">
        <h1 className="text-4xl font-bold mb-6">shadcn/ui est installé !</h1>
        <div className="flex gap-4 items-center">
          <Button size="lg">Clique-moi</Button>
          <Badge variant="secondary">React + Tailwind</Badge>
          <Badge variant="outline">Dark mode prêt</Badge>
        </div>
      </Card>
    </div>
  );
}

export default App;
