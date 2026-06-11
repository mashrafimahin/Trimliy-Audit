import { useState } from "react";
import {
  DocumentationSections,
  DocumentationNavigation,
} from "../static/Documentation.info";
import Button from "../components/Button";

export default function DocumentationLayout() {
  const [selectedSection, setSelectedSection] = useState(
    DocumentationSections.gettingStarted.id,
  );

  const currentSection = DocumentationNavigation.find(
    (section) => section.id === selectedSection,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-lg opacity-90">
            Complete guide to understanding and using the URL Shortener
            application
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="sticky top-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">
                Documentation
              </h3>
              <nav className="space-y-3">
                {DocumentationNavigation.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedSection === section.id
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-l-4 border-blue-600"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span className="text-xl mr-2">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            {currentSection && (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
                {/* Section Header */}
                <div className="mb-8 pb-6 border-b-2 border-slate-200 dark:border-slate-700">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                    <span className="mr-3">{currentSection.icon}</span>
                    {currentSection.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    {currentSection.description}
                  </p>
                </div>

                {/* Subsections Navigation */}
                {currentSection.subsections &&
                  currentSection.subsections.length > 0 && (
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-3">
                        {currentSection.subsections.map((subsection) => (
                          <a
                            key={subsection.id}
                            href={`#${subsection.id}`}
                            className="px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200 text-sm font-medium"
                          >
                            {subsection.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Main Content */}
                <div className="prose dark:prose-invert max-w-none">
                  <div
                    className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{
                      __html: currentSection.content
                        .split("\n")
                        .map((line, idx) => {
                          // Basic markdown to HTML conversion
                          let content = line.trim();

                          // Headers
                          if (content.startsWith("# ")) {
                            return `<h1 class="text-3xl font-bold text-slate-900 dark:text-white mt-6 mb-4">${content.replace(/^# /, "")}</h1>`;
                          }
                          if (content.startsWith("## ")) {
                            return `<h2 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-5 mb-3">${content.replace(/^## /, "")}</h2>`;
                          }
                          if (content.startsWith("### ")) {
                            return `<h3 class="text-xl font-bold text-slate-700 dark:text-slate-200 mt-4 mb-2">${content.replace(/^### /, "")}</h3>`;
                          }

                          // Bold
                          content = content.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong class='font-bold'>$1</strong>",
                          );

                          // Code
                          content = content.replace(
                            /`(.*?)`/g,
                            "<code class='bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono'>$1</code>",
                          );

                          // Lists
                          if (content.startsWith("- ")) {
                            return `<li class="ml-4">${content.replace(/^- /, "")}</li>`;
                          }

                          // Code blocks
                          if (content.startsWith("```")) {
                            return "";
                          }

                          return content ? `<p>${content}</p>` : "";
                        })
                        .join(""),
                    }}
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="mt-12 pt-8 border-t-2 border-slate-200 dark:border-slate-700 flex justify-between">
                  <Button
                    onClick={() => {
                      const currentIndex = DocumentationNavigation.findIndex(
                        (section) => section.id === selectedSection,
                      );
                      if (currentIndex > 0) {
                        setSelectedSection(
                          DocumentationNavigation[currentIndex - 1].id,
                        );
                      }
                    }}
                    disabled={
                      DocumentationNavigation.findIndex(
                        (section) => section.id === selectedSection,
                      ) === 0
                    }
                    className="text-sm"
                  >
                    ← Previous
                  </Button>
                  <Button
                    onClick={() => {
                      const currentIndex = DocumentationNavigation.findIndex(
                        (section) => section.id === selectedSection,
                      );
                      if (currentIndex < DocumentationNavigation.length - 1) {
                        setSelectedSection(
                          DocumentationNavigation[currentIndex + 1].id,
                        );
                      }
                    }}
                    disabled={
                      DocumentationNavigation.findIndex(
                        (section) => section.id === selectedSection,
                      ) ===
                      DocumentationNavigation.length - 1
                    }
                    className="text-sm"
                  >
                    Next →
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
