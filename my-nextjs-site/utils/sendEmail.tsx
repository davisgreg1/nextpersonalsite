import emailjs from "@emailjs/nodejs";

interface SendEmailType {
  templateParams: {
    email: string;
    name: string;
    message: string;
    subject: string;
  };
}

const sendEmail = async (data: SendEmailType) => {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      data,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_API_KEY,
        privateKey: process.env.NEXT_PUBLIC_EMAIL_PRIVATE_KEY, // optional, highly recommended for security reasons
      }
    );
    return result;
  } catch (error) {
    console.error("🚀 ~ file: sendEmail.tsx:22 ~ sendEmail ~ error:", error);
  }
};

export default sendEmail;
