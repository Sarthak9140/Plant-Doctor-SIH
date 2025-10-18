// // import { useState } from "react";
// // import { Upload, Scan, CheckCircle, AlertTriangle, Leaf } from "lucide-react";

// // const demoSteps = [
// //   {
// //     id: 1,
// //     icon: Upload,
// //     title: "Upload Photo",
// //     description: "Take or upload a photo of your crop",
// //     status: "completed"
// //   },
// //   {
// //     id: 2,
// //     icon: Scan,
// //     title: "AI Analysis",
// //     description: "Our AI analyzes the image for diseases",
// //     status: "active"
// //   },
// //   {
// //     id: 3,
// //     icon: CheckCircle,
// //     title: "Get Results",
// //     description: "Receive diagnosis and treatment advice",
// //     status: "pending"
// //   }
// // ];

// // const diseaseResults = [
// //   {
// //     name: "Tomato Late Blight",
// //     confidence: "94%",
// //     severity: "High",
// //     treatment: "Apply copper-based fungicide within 24 hours"
// //   },
// //   {
// //     name: "Bacterial Spot",
// //     confidence: "12%",
// //     severity: "Low",
// //     treatment: "Monitor for 48 hours"
// //   }
// // ];

// // const InteractiveDemo = () => {
// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [isAnalyzing, setIsAnalyzing] = useState(false);
// //   const [showResults, setShowResults] = useState(false);

// //   const startAnalysis = () => {
// //     setIsAnalyzing(true);
// //     setCurrentStep(2);

// //     setTimeout(() => {
// //       setIsAnalyzing(false);
// //       setCurrentStep(3);
// //       setShowResults(true);
// //     }, 3000);
// //   };

// //   const resetDemo = () => {
// //     setCurrentStep(1);
// //     setIsAnalyzing(false);
// //     setShowResults(false);
// //   };

// //   return (
// //     <section id="how-it-works" className="demo">
// //       <div className="demo__container">
// //         {/* Section Header */}
// //         <div className="demo__header">
// //           <div className="demo__badge">
// //             <Scan size={16} />
// //             <span>Try It Now</span>
// //           </div>
// //           <h2 className="demo__title">
// //             See Our AI in Action
// //           </h2>
// //           <p className="demo__subtitle">
// //             Experience how easy it is to detect crop diseases with our AI-powered platform.
// //           </p>
// //         </div>

// //         <div className="demo__content">
// //           <div className="demo__grid">
// //             {/* Demo Steps */}
// //             <div className="demo__steps">
// //               <h3>How It Works</h3>

// //               {demoSteps.map((step) => (
// //                 <div
// //                   key={step.id}
// //                   className={`demo__step ${
// //                     currentStep === step.id
// //                       ? "demo__step--active"
// //                       : currentStep > step.id
// //                       ? "demo__step--completed"
// //                       : "demo__step--pending"
// //                   }`}
// //                 >
// //                   <div
// //                     className={`demo__step-icon ${
// //                       currentStep === step.id
// //                         ? "demo__step-icon--active"
// //                         : currentStep > step.id
// //                         ? "demo__step-icon--completed"
// //                         : "demo__step-icon--pending"
// //                     }`}
// //                   >
// //                     <step.icon size={20} />
// //                   </div>
// //                   <div className="demo__step-content">
// //                     <h4>{step.title}</h4>
// //                     <p>{step.description}</p>
// //                   </div>
// //                   {currentStep === step.id && isAnalyzing && (
// //                     <div className="demo__step-spinner">
// //                       <div className="spinner"></div>
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Interactive Demo Area */}
// //             <div className="demo__interactive">
// //               {!showResults ? (
// //                 <div style={{ textAlign: 'center' }}>
// //                   {/* Upload Area */}
// //                   <div className={`demo__upload-area ${
// //                     currentStep >= 1 ? "demo__upload-area--active" : ""
// //                   }`}>
// //                     <div className="demo__upload-icon">
// //                       <Leaf size={32} />
// //                     </div>
// //                     <h4 className="demo__upload-title">
// //                       {isAnalyzing ? "Analyzing Your Crop..." : "Upload Crop Image"}
// //                     </h4>
// //                     <p className="demo__upload-description">
// //                       {isAnalyzing ? "Our AI is examining the image for diseases" : "Drag & drop or click to select"}
// //                     </p>

// //                     {isAnalyzing ? (
// //                       <div className="demo__upload-progress">
// //                         <div className="progress-bar"></div>
// //                         <span>Processing...</span>
// //                       </div>
// //                     ) : (
// //                       <button
// //                         className={currentStep >= 1 ? "btn btn--hero" : "btn btn--outline"}
// //                         onClick={startAnalysis}
// //                         disabled={isAnalyzing}
// //                       >
// //                         <Upload size={16} />
// //                         {currentStep >= 1 ? "Analyze Sample Image" : "Upload Image"}
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>
// //               ) : (
// //                 // Results Display
// //                 <div className="demo__results">
// //                   <h4>
// //                     <CheckCircle size={24} />
// //                     Analysis Complete
// //                   </h4>

// //                   <div>
// //                     {diseaseResults.map((result, index) => (
// //                       <div
// //                         key={index}
// //                         className={`demo__result-item ${
// //                           index === 0
// //                             ? "demo__result-item--high"
// //                             : "demo__result-item--low"
// //                         }`}
// //                       >
// //                         <div className="demo__result-header">
// //                           <div className="disease-name">
// //                             <AlertTriangle
// //                               size={16}
// //                               className={index === 0 ? "demo__result-icon--high" : "demo__result-icon--low"}
// //                             />
// //                             <span>{result.name}</span>
// //                           </div>
// //                           <span className="confidence">
// //                             {result.confidence} confident
// //                           </span>
// //                         </div>
// //                         <p className="demo__result-severity">
// //                           Severity: <span>{result.severity}</span>
// //                         </p>
// //                         <p className="demo__result-treatment">
// //                           <strong>Treatment:</strong> {result.treatment}
// //                         </p>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   <div className="demo__result-actions">
// //                     <button className="btn btn--hero btn--sm">
// //                       Get Full Report
// //                     </button>
// //                     <button className="btn btn--outline btn--sm" onClick={resetDemo}>
// //                       Try Another Image
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default InteractiveDemo;
// import { useState } from "react";
// import { Upload, Scan, CheckCircle, AlertTriangle, Leaf } from "lucide-react";
// import axios from "axios";

// const demoSteps = [
//   {
//     id: 1,
//     icon: Upload,
//     title: "Upload Photo",
//     description: "Take or upload a photo of your crop",
//     status: "completed",
//   },
//   {
//     id: 2,
//     icon: Scan,
//     title: "AI Analysis",
//     description: "Our AI analyzes the image for diseases",
//     status: "active",
//   },
//   {
//     id: 3,
//     icon: CheckCircle,
//     title: "Get Results",
//     description: "Receive diagnosis and treatment advice",
//     status: "pending",
//   },
// ];

// const InteractiveDemo = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const [imageFile, setImageFile] = useState(null);
//   const [diseaseResults, setDiseaseResults] = useState([]);

//   // Handle file upload
//   const handleImageUpload = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   // Convert image to Base64
//   const getBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result.split(",")[1]); // strip prefix
//       reader.onerror = (error) => reject(error);
//     });

//   // Start analysis with Plant.id API
//   const startAnalysis = async () => {
//     if (!imageFile) return alert("Please upload an image");

//     setIsAnalyzing(true);
//     setCurrentStep(2);

//     try {
//       const base64 = await getBase64(imageFile);

//       const response = await axios.post(
//         "https://api.plant.id/v3/health_assessment",
//         {
//           images: [base64],
//           modifiers: ["crops_fast", "similar_images"],
//           plant_details: ["common_names", "url", "wiki_description"],
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "Api-Key": process.env.APIKEY, // <-- Replace with your key
//           },
//         }
//       );

//       // Map Plant.id response to our results format
//       const results = response.data.health_assessment.map((item) => ({
//         name: item.healthy ? "Healthy" : item.disease?.name || "Unknown",
//         confidence: item.disease?.probability
//           ? `${Math.round(item.disease.probability * 100)}%`
//           : "N/A",
//         severity: item.disease?.severity || "Unknown",
//         treatment: item.disease?.treatment || "No treatment info",
//       }));

//       setDiseaseResults(results);
//       setShowResults(true);
//       setCurrentStep(3);
//     } catch (err) {
//       console.error(err);
//       alert("Error analyzing image. Check API key or image type.");
//       setCurrentStep(1);
//     } finally {
//       setIsAnalyzing(false);
//     }
//   };

//   const resetDemo = () => {
//     setCurrentStep(1);
//     setIsAnalyzing(false);
//     setShowResults(false);
//     setImageFile(null);
//     setDiseaseResults([]);
//   };

//   return (
//     <section id="how-it-works" className="demo">
//       <div className="demo__container">
//         {/* Section Header */}
//         <div className="demo__header">
//           <div className="demo__badge">
//             <Scan size={16} />
//             <span>Try It Now</span>
//           </div>
//           <h2 className="demo__title">See Our AI in Action</h2>
//           <p className="demo__subtitle">
//             Experience how easy it is to detect crop diseases with our
//             AI-powered platform.
//           </p>
//         </div>

//         <div className="demo__content">
//           <div className="demo__grid">
//             {/* Demo Steps */}
//             <div className="demo__steps">
//               <h3>How It Works</h3>
//               {demoSteps.map((step) => (
//                 <div
//                   key={step.id}
//                   className={`demo__step ${
//                     currentStep === step.id
//                       ? "demo__step--active"
//                       : currentStep > step.id
//                       ? "demo__step--completed"
//                       : "demo__step--pending"
//                   }`}
//                 >
//                   <div
//                     className={`demo__step-icon ${
//                       currentStep === step.id
//                         ? "demo__step-icon--active"
//                         : currentStep > step.id
//                         ? "demo__step-icon--completed"
//                         : "demo__step-icon--pending"
//                     }`}
//                   >
//                     <step.icon size={20} />
//                   </div>
//                   <div className="demo__step-content">
//                     <h4>{step.title}</h4>
//                     <p>{step.description}</p>
//                   </div>
//                   {currentStep === step.id && isAnalyzing && (
//                     <div className="demo__step-spinner">
//                       <div className="spinner"></div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Interactive Demo Area */}
//             <div className="demo__interactive">
//               {!showResults ? (
//                 <div style={{ textAlign: "center" }}>
//                   {/* Upload Area */}
//                   <div
//                     className={`demo__upload-area ${
//                       currentStep >= 1 ? "demo__upload-area--active" : ""
//                     }`}
//                   >
//                     <div className="demo__upload-icon">
//                       <Leaf size={32} />
//                     </div>
//                     <h4 className="demo__upload-title">
//                       {isAnalyzing
//                         ? "Analyzing Your Crop..."
//                         : "Upload Crop Image"}
//                     </h4>
//                     <p className="demo__upload-description">
//                       {isAnalyzing
//                         ? "Our AI is examining the image for diseases"
//                         : "Drag & drop or click to select"}
//                     </p>

//                     {!isAnalyzing && (
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         style={{ margin: "10px 0" }}
//                       />
//                     )}

//                     {isAnalyzing ? (
//                       <div className="demo__upload-progress">
//                         <div className="progress-bar"></div>
//                         <span>Processing...</span>
//                       </div>
//                     ) : (
//                       <button
//                         className={
//                           currentStep >= 1
//                             ? "btn btn--hero"
//                             : "btn btn--outline"
//                         }
//                         onClick={startAnalysis}
//                         disabled={!imageFile}
//                       >
//                         <Upload size={16} />
//                         Analyze Image
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 // Results Display
//                 <div className="demo__results">
//                   <h4>
//                     <CheckCircle size={24} />
//                     Analysis Complete
//                   </h4>

//                   <div>
//                     {diseaseResults.map((result, index) => (
//                       <div
//                         key={index}
//                         className={`demo__result-item ${
//                           index === 0
//                             ? "demo__result-item--high"
//                             : "demo__result-item--low"
//                         }`}
//                       >
//                         <div className="demo__result-header">
//                           <div className="disease-name">
//                             <AlertTriangle
//                               size={16}
//                               className={
//                                 index === 0
//                                   ? "demo__result-icon--high"
//                                   : "demo__result-icon--low"
//                               }
//                             />
//                             <span>{result.name}</span>
//                           </div>
//                           <span className="confidence">
//                             {result.confidence} confident
//                           </span>
//                         </div>
//                         <p className="demo__result-severity">
//                           Severity: <span>{result.severity}</span>
//                         </p>
//                         <p className="demo__result-treatment">
//                           <strong>Treatment:</strong> {result.treatment}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="demo__result-actions">
//                     <button className="btn btn--hero btn--sm">
//                       Get Full Report
//                     </button>
//                     <button
//                       className="btn btn--outline btn--sm"
//                       onClick={resetDemo}
//                     >
//                       Try Another Image
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InteractiveDemo;
import { useState } from "react";
import { Upload, Scan, CheckCircle, AlertTriangle, Leaf } from "lucide-react";
import axios from "axios";

// This component assumes you have a .env file in your project root
// with the following content:
// REACT_APP_PLANT_ID_API_KEY=your_valid_plant_id_api_key_here

const demoSteps = [
  {
    id: 1,
    icon: Upload,
    title: "Upload Photo",
    description: "Take or upload a photo of your crop",
    status: "completed",
  },
  {
    id: 2,
    icon: Scan,
    title: "AI Analysis",
    description: "Our AI analyzes the image for diseases",
    status: "active",
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Get Results",
    description: "Receive diagnosis and treatment advice",
    status: "pending",
  },
];

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [diseaseResults, setDiseaseResults] = useState([]);
  const [error, setError] = useState(null);

  // Handle file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setError(null); // Clear any previous errors on new upload
    }
  };

  // Convert image to Base64
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  // Start analysis with Plant.id API
  const startAnalysis = async () => {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    setIsAnalyzing(true);
    setCurrentStep(2);

    try {
      const base64 = await getBase64(imageFile);
      const apiKey = process.env.REACT_APP_PLANT_ID_API_KEY;

      if (!apiKey) {
        throw new Error("API key not found. Please check your .env file.");
      }

      const response = await axios.post(
        "https://api.plant.id/v3/health_assessment",
        {
          images: [base64],
          modifiers: ["crops_fast", "similar_images"],
          plant_details: ["common_names", "url", "wiki_description"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Api-Key": apiKey,
          },
        }
      );

      // Check for a healthy response and process data
      if (
        response.data.health_assessment &&
        response.data.health_assessment.length > 0
      ) {
        const results = response.data.health_assessment.map((item) => ({
          name: item.healthy ? "Healthy" : item.disease?.name || "Unknown",
          confidence: item.disease?.probability
            ? `${Math.round(item.disease.probability * 100)}%`
            : "N/A",
          severity: item.disease?.severity || "Unknown",
          treatment: item.disease?.treatment || "No treatment info",
        }));
        setDiseaseResults(results);
      } else {
        // Handle cases where the API returns no assessment data
        setDiseaseResults([
          {
            name: "No diseases detected",
            confidence: "100%",
            severity: "None",
            treatment: "Keep monitoring your crop.",
          },
        ]);
      }

      setShowResults(true);
      setCurrentStep(3);
    } catch (err) {
      console.error(err);
      setError(
        "Error analyzing image. Ensure your API key is valid and the image is clear."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetDemo = () => {
    setCurrentStep(1);
    setIsAnalyzing(false);
    setShowResults(false);
    setImageFile(null);
    setDiseaseResults([]);
    setError(null);
  };

  return (
    <section id="how-it-works" className="demo">
      <div className="demo__container">
        {/* Section Header */}
        <div className="demo__header">
          <div className="demo__badge">
            <Scan size={16} />
            <span>Try It Now</span>
          </div>
          <h2 className="demo__title">See Our AI in Action</h2>
          <p className="demo__subtitle">
            Experience how easy it is to detect crop diseases with our
            AI-powered platform.
          </p>
        </div>

        <div className="demo__content">
          <div className="demo__grid">
            {/* Demo Steps */}
            <div className="demo__steps">
              <h3>How It Works</h3>
              {demoSteps.map((step) => (
                <div
                  key={step.id}
                  className={`demo__step ${
                    currentStep === step.id
                      ? "demo__step--active"
                      : currentStep > step.id
                      ? "demo__step--completed"
                      : "demo__step--pending"
                  }`}
                >
                  <div
                    className={`demo__step-icon ${
                      currentStep === step.id
                        ? "demo__step-icon--active"
                        : currentStep > step.id
                        ? "demo__step-icon--completed"
                        : "demo__step-icon--pending"
                    }`}
                  >
                    <step.icon size={20} />
                  </div>
                  <div className="demo__step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {currentStep === step.id && isAnalyzing && (
                    <div className="demo__step-spinner">
                      <div className="spinner"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Demo Area */}
            <div className="demo__interactive">
              {!showResults ? (
                <div style={{ textAlign: "center" }}>
                  {/* Upload Area */}
                  <div
                    className={`demo__upload-area ${
                      currentStep >= 1 ? "demo__upload-area--active" : ""
                    }`}
                  >
                    <div className="demo__upload-icon">
                      <Leaf size={32} />
                    </div>
                    <h4 className="demo__upload-title">
                      {isAnalyzing
                        ? "Analyzing Your Crop..."
                        : imageFile
                        ? "Image Ready for Analysis"
                        : "Upload Crop Image"}
                    </h4>
                    <p className="demo__upload-description">
                      {isAnalyzing
                        ? "Our AI is examining the image for diseases"
                        : "Drag & drop or click to select a file"}
                    </p>

                    {!isAnalyzing && (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ margin: "10px 0" }}
                      />
                    )}

                    {isAnalyzing ? (
                      <div className="demo__upload-progress">
                        <div className="progress-bar"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <button
                        className={
                          imageFile ? "btn btn--hero" : "btn btn--outline"
                        }
                        onClick={startAnalysis}
                        disabled={!imageFile}
                      >
                        <Upload size={16} />
                        Analyze Image
                      </button>
                    )}
                    {error && <p className="error-message">{error}</p>}
                  </div>
                </div>
              ) : (
                // Results Display
                <div className="demo__results">
                  <h4>
                    <CheckCircle size={24} />
                    Analysis Complete
                  </h4>

                  <div>
                    {diseaseResults.map((result, index) => (
                      <div
                        key={index}
                        className={`demo__result-item ${
                          result.severity === "High"
                            ? "demo__result-item--high"
                            : "demo__result-item--low"
                        }`}
                      >
                        <div className="demo__result-header">
                          <div className="disease-name">
                            <AlertTriangle
                              size={16}
                              className={
                                result.severity === "High"
                                  ? "demo__result-icon--high"
                                  : "demo__result-icon--low"
                              }
                            />
                            <span>{result.name}</span>
                          </div>
                          <span className="confidence">
                            {result.confidence} confident
                          </span>
                        </div>
                        <p className="demo__result-severity">
                          Severity: <span>{result.severity}</span>
                        </p>
                        <p className="demo__result-treatment">
                          <strong>Treatment:</strong> {result.treatment}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="demo__result-actions">
                    <button className="btn btn--hero btn--sm">
                      Get Full Report
                    </button>
                    <button
                      className="btn btn--outline btn--sm"
                      onClick={resetDemo}
                    >
                      Try Another Image
                    </button>
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
