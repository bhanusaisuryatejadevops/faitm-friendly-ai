import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar } from "lucide-react";

const mockNotes = [
  { id: "1", title: "Meeting Notes", category: "Work", date: "Today", preview: "Discussed Q1 goals and team assignments..." },
  { id: "2", title: "Shopping List", category: "Personal", date: "Yesterday", preview: "Milk, eggs, bread, coffee..." },
  { id: "3", title: "Recipe Ideas", category: "Personal", date: "2 days ago", preview: "Thai curry, pasta carbonara..." },
];

const Notes = () => {
  return (
    <Layout>
      <div className="p-4 space-y-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Notes</h1>
          <Badge variant="secondary" className="text-sm">
            {mockNotes.length} notes
          </Badge>
        </div>

        <div className="space-y-3">
          {mockNotes.map((note) => (
            <Card key={note.id} className="p-4 transition-smooth hover:shadow-medium cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium">{note.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{note.preview}</p>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{note.date}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{note.category}</Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;
