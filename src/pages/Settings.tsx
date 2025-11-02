import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun } from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [morningBrief, setMorningBrief] = useState(false);
  const [briefTime, setBriefTime] = useState("08:00");
  const [weeklyReview, setWeeklyReview] = useState(false);
  const [reviewTime, setReviewTime] = useState("18:00");

  const [briefSettings, setBriefSettings] = useState({
    priorities: true,
    appointments: true,
    taskStreak: false,
    quoteOfDay: true,
  });

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  return (
    <Layout>
      <div className="p-4 max-w-2xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold mb-6">General Settings</h1>

        {/* Dark Mode */}
        <Card className="p-6 space-y-4 shadow-soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <div>
                <Label className="text-base font-medium">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">Toggle dark theme</p>
              </div>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
        </Card>

        {/* Morning Brief */}
        <Card className="p-6 space-y-4 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Morning Brief</Label>
              <p className="text-sm text-muted-foreground">Daily morning summary</p>
            </div>
            <Switch checked={morningBrief} onCheckedChange={setMorningBrief} />
          </div>

          {morningBrief && (
            <>
              <Separator />
              <div className="space-y-4 pl-4">
                <div className="space-y-2">
                  <Label htmlFor="brief-time">Set Time</Label>
                  <Input
                    id="brief-time"
                    type="time"
                    value={briefTime}
                    onChange={(e) => setBriefTime(e.target.value)}
                    className="max-w-[200px]"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Today's Priorities</Label>
                    <Switch
                      checked={briefSettings.priorities}
                      onCheckedChange={(checked) =>
                        setBriefSettings({ ...briefSettings, priorities: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Today's Appointments</Label>
                    <Switch
                      checked={briefSettings.appointments}
                      onCheckedChange={(checked) =>
                        setBriefSettings({ ...briefSettings, appointments: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Task Streak</Label>
                    <Switch
                      checked={briefSettings.taskStreak}
                      onCheckedChange={(checked) =>
                        setBriefSettings({ ...briefSettings, taskStreak: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label>Quote of the Day</Label>
                    <Switch
                      checked={briefSettings.quoteOfDay}
                      onCheckedChange={(checked) =>
                        setBriefSettings({ ...briefSettings, quoteOfDay: checked })
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </Card>

        {/* Weekly Review */}
        <Card className="p-6 space-y-4 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Weekly Review</Label>
              <p className="text-sm text-muted-foreground">Weekly productivity summary</p>
            </div>
            <Switch checked={weeklyReview} onCheckedChange={setWeeklyReview} />
          </div>

          {weeklyReview && (
            <>
              <Separator />
              <div className="space-y-4 pl-4">
                <div className="space-y-2">
                  <Label>Select Days</Label>
                  <div className="flex gap-2 flex-wrap">
                    {weekDays.map((day) => (
                      <Button
                        key={day}
                        variant={selectedDays.includes(day) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleDay(day)}
                        className={`transition-smooth ${
                          selectedDays.includes(day)
                            ? "gradient-primary text-primary-foreground"
                            : ""
                        }`}
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review-time">Set Time</Label>
                  <Input
                    id="review-time"
                    type="time"
                    value={reviewTime}
                    onChange={(e) => setReviewTime(e.target.value)}
                    className="max-w-[200px]"
                  />
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
