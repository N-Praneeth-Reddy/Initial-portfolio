import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-invoice-auditor",
    title: "AI Invoice Auditor",
    description:
      "Microservices-based agentic workflow for automated invoice extraction, validation, and auditing.",
    longDescription:
      "Engineered a production-grade AI system that automatically extracts, validates, and audits invoice data using a multi-agent orchestration pipeline. Built on AWS with RAG-based semantic querying over complex invoice content, enabling intelligent discrepancy detection and reporting at scale.",
    tags: ["ADK Framework", "FastAPI", "FAISS", "AWS", "LangGraph", "CI/CD", "MLOps"],
    github: "https://github.com/N-Praneeth-Reddy",
    impact: "Automated end-to-end invoice auditing with RAG-powered semantic validation",
    featured: true,
    gradient: "from-violet-600/20 via-purple-600/10 to-indigo-600/20",
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Engine",
    description:
      "Predictive ML model achieving 92.46% accuracy using ensemble methods and advanced class balancing.",
    longDescription:
      "Developed a robust churn prediction system that handles real-world class imbalance using SMOTEENN, applies PCA for dimensionality reduction, and combines Decision Tree and Random Forest models for high-accuracy predictions. Designed for production deployment with feature importance analysis.",
    tags: ["Scikit-learn", "Random Forest", "SMOTEENN", "PCA", "Python", "Data Science"],
    github: "https://github.com/N-Praneeth-Reddy",
    impact: "92.46% prediction accuracy with SMOTEENN class balancing",
    featured: true,
    gradient: "from-cyan-600/20 via-blue-600/10 to-teal-600/20",
  },
  {
    id: "traffic-sign-detection",
    title: "Traffic Sign Detection System",
    description:
      "Real-time traffic sign recognition system achieving 95% accuracy using computer vision.",
    longDescription:
      "Built a real-time traffic sign detection and classification system using OpenCV for preprocessing and TensorFlow for deep learning-based recognition. Optimized for low-latency inference with robust preprocessing pipelines for varying lighting and occlusion conditions.",
    tags: ["TensorFlow", "OpenCV", "Computer Vision", "Deep Learning", "Python"],
    github: "https://github.com/N-Praneeth-Reddy",
    impact: "95% real-time recognition accuracy across diverse conditions",
    featured: true,
    gradient: "from-fuchsia-600/20 via-pink-600/10 to-rose-600/20",
  },
];
