import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Scan, CheckCircle, AlertTriangle, Leaf } from "lucide-react";

const demoSteps = [
  {
    id: 1,
    icon: Upload,
    title: "Upload Photo",
    description: "Take or upload a photo of your crop",
    status: "completed"
  },
  {
    id: 2,
    icon: Scan,
    title: "AI Analysis",
    description: "Our AI analyzes the image for diseases",
    status: "active"
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Get Results",
    description: "Receive diagnosis and treatment advice",
    status: "pending"
  }
];

const diseaseResults = [
  {
    name: "Tomato Late Blight",
    confidence: "94%",
    severity: "High",
    treatment: "Apply copper-based fungicide within 24 hours"
  },
  {
    name: "Bacterial Spot",
    confidence: "12%",
    severity: "Low",
    treatment: "Monitor for 48 hours"
  }
];

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setCurrentStep(2);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setCurrentStep(3);
      setShowResults(true);
    }, 3000);
  };

  const resetDemo = () => {
    setCurrentStep(1);
    setIsAnalyzing(false);
    setShowResults(false);
  };

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Scan className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent-foreground">Try It Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            See Our AI in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience how easy it is to detect crop diseases with our AI-powered platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Demo Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
              
              {demoSteps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
                    currentStep === step.id
                      ? "border-primary bg-primary/5"
                      : currentStep > step.id
                      ? "border-accent bg-accent/5"
                      : "border-border bg-muted/30"
                  }`}
                >
                  <div
                    className={`p-3 rounded-full ${
                      currentStep === step.id
                        ? "gradient-hero"
                        : currentStep > step.id
                        ? "gradient-accent"
                        : "bg-muted"
                    }`}
                  >
                    <step.icon className={`h-5 w-5 ${
                      currentStep >= step.id ? "text-primary-foreground" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {currentStep === step.id && isAnalyzing && (
                    <div className="ml-auto">
                      <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Demo Area */}
            <div className="bg-card border border-border rounded-2xl p-6">
              {!showResults ? (
                <div className="text-center space-y-6">
                  {/* Upload Area */}
                  <div className={`border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
                    currentStep >= 1 ? "border-primary bg-primary/5" : "border-border"
                  }`}>
                    <div className="gradient-hero p-4 rounded-full w-fit mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-card-foreground">
                      {isAnalyzing ? "Analyzing Your Crop..." : "Upload Crop Image"}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {isAnalyzing ? "Our AI is examining the image for diseases" : "Drag & drop or click to select"}
                    </p>
                    
                    {isAnalyzing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="animate-pulse h-2 w-20 bg-primary rounded-full"></div>
                        <span className="text-sm text-primary font-medium">Processing...</span>
                      </div>
                    ) : (
                      <Button 
                        variant={currentStep >= 1 ? "hero" : "outline"}
                        onClick={startAnalysis}
                        disabled={isAnalyzing}
                      >
                        <Upload className="h-4 w-4" />
                        {currentStep >= 1 ? "Analyze Sample Image" : "Upload Image"}
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                // Results Display
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-accent" />
                    <h4 className="text-lg font-semibold text-card-foreground">Analysis Complete</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {diseaseResults.map((result, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          index === 0 
                            ? "border-destructive/20 bg-destructive/5" 
                            : "border-accent/20 bg-accent/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className={`h-4 w-4 ${
                              index === 0 ? "text-destructive" : "text-accent"
                            }`} />
                            <span className="font-semibold text-card-foreground">{result.name}</span>
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            {result.confidence} confident
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Severity: <span className="font-medium">{result.severity}</span>
                        </p>
                        <p className="text-sm text-card-foreground">
                          <strong>Treatment:</strong> {result.treatment}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="hero" size="sm">
                      Get Full Report
                    </Button>
                    <Button variant="outline" size="sm" onClick={resetDemo}>
                      Try Another Image
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;