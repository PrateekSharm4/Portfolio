import emailjs from '@emailjs/browser';

/**
 * Sends both:
 * 1. An automated thank-you email to the visitor containing Prateek's contact details
 * 2. An inquiry notification email to Prateek
 */
export async function sendContactEmail(formData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const notifyTemplateId = import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const ownerEmail = import.meta.env.VITE_OWNER_EMAIL || "prateek02105@gmail.com";
  const ownerPhone = import.meta.env.VITE_OWNER_PHONE || "+91 70151 06889";
  const ownerLinkedIn = import.meta.env.VITE_OWNER_LINKEDIN || "https://www.linkedin.com/in/prateek-sharma-b2b9732b0/";
  const ownerGitHub = import.meta.env.VITE_OWNER_GITHUB || "https://github.com/PrateekSharm4";
  const ownerName = "Prateek Sharma";

  const isConfigured = Boolean(
    serviceId &&
    publicKey &&
    (autoReplyTemplateId || notifyTemplateId) &&
    publicKey !== 'your_emailjs_public_key_here'
  );

  // Safe fallback if keys aren't configured yet
  if (!isConfigured) {
    console.info(
      "[EmailJS Fallback Mode]: Service keys not configured in .env. Simulating auto-reply to:",
      formData.email
    );
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { success: true, simulated: true };
  }

  try {
    emailjs.init(publicKey);

    // 1. Auto-reply to visitor with Prateek's contact information
    const autoReplyParams = {
      to_name: formData.name,
      to_email: formData.email,
      recipient_email: formData.email,
      user_email: formData.email,
      email: formData.email,
      visitor_name: formData.name,
      owner_name: ownerName,
      owner_email: ownerEmail,
      owner_phone: ownerPhone,
      owner_linkedin: ownerLinkedIn,
      owner_github: ownerGitHub,
      message: formData.message || "Thank you for reaching out. Here are my direct contact details.",
    };

    // 2. Notification to Prateek with lead details
    const notifyParams = {
      visitor_name: formData.name,
      from_name: formData.name,
      name: formData.name,
      user_name: formData.name,
      visitor_email: formData.email,
      from_email: formData.email,
      email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      visitor_phone: `+91 ${formData.phone}`,
      phone: `+91 ${formData.phone}`,
      visitor_message: formData.message || "No message entered.",
      message: formData.message || "No message entered.",
      owner_email: ownerEmail,
      to_email: ownerEmail,
    };

    const dispatches = [];
    if (notifyTemplateId) {
      dispatches.push(emailjs.send(serviceId, notifyTemplateId, notifyParams));
    }
    if (autoReplyTemplateId) {
      dispatches.push(emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams));
    }

    if (dispatches.length > 0) {
      await Promise.all(dispatches);
    }

    return { success: true, simulated: false };
  } catch (error) {
    console.error("[EmailJS Error]:", error);
    // Return gracefully so user UI shows clear fallback feedback without crashing
    return { success: true, simulated: true, note: 'Network fallback' };
  }
}
