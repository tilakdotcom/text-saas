import { abstractTextFromPdf, formatFileName } from "../../common/utils/pdf";
import { getResponseFromGemini } from "../../config/gemini";
import { getResponseFromOpenAi } from "../../config/openai";
import prisma from "../../database/dbConnect";

type PdfUploadServiceProps = {
  pdf: string;
  userId: string;
  fileName: string;
};

export const PdfUploadService = async ({
  pdf,
  userId,
  fileName,
}: PdfUploadServiceProps) => {
  const pdfText = await abstractTextFromPdf(pdf);
  // const summaryText = await getResponseFromOpenAi(pdfText.pageContent);
  // const summaryText = await getResponseFromGemini(pdfText.pageContent);
  const summaryText =
    "# Full-Stack Developer: Tilak Singh 💻🚀\n\n🎯 Full-stack MERN developer proficient in building scalable applications with a focus on efficient solutions and seamless user experiences.\n• 📌 Skilled in front-end interfaces, back-end APIs, and always learning new technologies.\n\n# Document Details\n• 📃 Resume/Portfolio\n• 👥 For: Potential Employers/Collaborators\n\n# Key Highlights\n• 🚀 Full-stack MERN expertise.\n• ⭐ Experience with scalable application development.\n• 💫 Demonstrated skills in building responsive user interfaces and efficient backends.\n\n# Why It Matters\n• 💡 This document showcases Tilak's ability to create and deploy full-stack applications, which is vital for modern web development needs. His projects demonstrate practical problem-solving skills, making him a valuable asset.\n\n# Main Points\n• 🎯 Focus on MERN stack (MongoDB, Express.js, React.js, Node.js) and related technologies.\n• 💪 Strengths include efficient solutions, clean code, and a focus on user experience.\n• 🔥 Projects include e-commerce platforms, link shorteners, Telegram bots, and UI libraries.\n\n# Pro Tips\n• ⭐ Highlight your projects' impact, not just the technology used.\n• 💎 Quantify your achievements whenever possible (e.g., \"reduced loading time by X%\").\n• 🌟 Tailor your resume/portfolio to the specific requirements of each job application.\n\n# Key Terms to Know\n• 📚 MERN Stack: A popular tech stack for web development (MongoDB, Express.js, React.js, Node.js)\n• 🔍 RESTful APIs: A way for different software systems to communicate with each other.\n\n# Bottom Line\n• 💫 A skilled and motivated full-stack developer with a strong portfolio and a passion for continuous learning.\n";

  await new Promise((resolve) => setTimeout(resolve, 5000)); // ⏳ wait 5 seconds

  //create pdf in database
  const newPdf = await prisma.pdf.create({
    data: {
      file_name: fileName,
      original_file_url: "",
      summary_text: summaryText,
      title: formatFileName(fileName),
      userId,
      status: "COMPLETED",
    },
  });

  return { summary: newPdf, userId };
};

type GetPdfSummariesServicesProps = {
  userId: string;
};

export const getPdfSummariesServices = async ({
  userId,
}: GetPdfSummariesServicesProps) => {
  const summaries = await prisma.pdf.findMany({
    where: {
      userId,
    },
  });

  return {
    summaries,
  };
};

type GetPdfSummaryServicesProps = {
  userId: string;
  id: string;
};

export const getPdfSummaryServices = async ({
  userId,
  id,
}: GetPdfSummaryServicesProps) => {
  const summary = await prisma.pdf.findFirst({
    where: {
      userId,
      id,
    },
  });

  return {
    summary,
  };
};

export const deletePdfSummaryService = async ({
  id,
  userId,
}: GetPdfSummaryServicesProps) => {
  const deleteSummary = await prisma.pdf.delete({
    where: {
      id,
      userId,
    },
  });

  return { deleteSummary };
};
