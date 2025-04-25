import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  "About Me",
  "Career Summary",
  "Education & Certifications",
  "Technical & Analytical Skills",
  "Internship & Employment Experience",
  "Projects in Business Analytics & Reporting",
  "Leadership & Community Involvement"
];

const content = {
  "About Me": `As a Business Analytics graduate student and University of North Texas graduate, I hold Bachelors degrees in Commerce and Computer Applications...`,

  "Career Summary": `As a Master’s in Business Analytics student at the University of North Texas I work with precision and analysis...`,

  "Education & Certifications": `Master of Science in Business Analytics | GPA: 3.5 | Expected: Dec 2025
Bachelor of Commerce in Computer Applications | GPA: 4.0 | Graduated: May 2023
Certifications: Entrepreneurship Orientation Program (NSIC), Ad Mad Competition – Creative Strategy & Advertising`,

  "Technical & Analytical Skills": `Languages: Python, R, SQL
Visualization Tools: Tableau, Power BI, Excel
ERP: SAP (FI Module), Oracle NetSuite, Microsoft Dynamics 365 Finance...`,

  "Internship & Employment Experience": `Student Assistant at Einstein Bros. Bagels
Entrepreneurship Intern at NSIC, Hyderabad
Counselor at Voice for Girls`,

  "Projects in Business Analytics & Reporting": `Sales Forecasting Dashboard
Customer Segmentation Model
Financial Performance Analysis`,

  "Leadership & Community Involvement": `UNT Business Analytics Club
Ad Mad Competition Winner
National-Level Swimmer`
};

export default function PortfolioApp() {
  const [activeSection, setActiveSection] = useState("About Me");

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-800">Business Analyst Portfolio</h1>
        <p className="text-gray-600">Showcasing projects, skills, and professional journey</p>
      </header>

      <nav className="flex flex-wrap justify-center gap-2 mb-6">
        {sections.map((section) => (
          <Button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`text-sm ${activeSection === section ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            {section}
          </Button>
        ))}
      </nav>

      <main className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6 text-gray-700 whitespace-pre-line">
            {content[activeSection]}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
