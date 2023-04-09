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
  const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_API_KEY as string;
  const privateKey = process.env.NEXT_PUBLIC_EMAIL_PRIVATE_KEY as string;
  const options = {
    publicKey,
    privateKey, // optional, highly recommended for security reasons
  };
  const templateParams = {
    ...data,
  };
  try {
    const result = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      options
    );
    return result;
  } catch (error) {
    console.error("🚀 ~ file: sendEmail.tsx:22 ~ sendEmail ~ error:", error);
  }
};

export default sendEmail;
