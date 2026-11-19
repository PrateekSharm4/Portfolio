import emailjs from '@emailjs/browser';

/**
 * Sends both:
 * 1. Inquiry lead notification to Prateek (template_kt2zlxr)
 * 2. Automated thank-you email with contact details to the visitor (template_4ojjnvs)
 */
export async function sendContactEmail(formData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_s4gjdwe";
  const notifyTemplateId = import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID || "template_kt2zlxr";
  const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || "template_4ojjnvs";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "5bol4ZLLmk64wl7-0";

  const ownerEmail = import.meta.env.VITE_OWNER_EMAIL || "prateek02105@gmail.com";
  const ownerPhone = import.meta.env.VITE_OWNER_PHONE || "+91 70151 06889";
  const ownerLinkedIn = import.meta.env.VITE_OWNER_LINKEDIN || "https://www.linkedin.com/in/prateek-sharma-b2b9732b0/";
  const ownerGitHub = import.meta.env.VITE_OWNER_GITHUB || "https://github.com/PrateekSharm4";
  const ownerName = import.meta.env.VITE_OWNER_NAME || "Prateek Sharma";

  const isConfigured = Boolean(
    serviceId &&
    publicKey &&
    (notifyTemplateId || autoReplyTemplateId)
  );

  if (!isConfigured) {
    console.info("[EmailJS]: Service not configured, simulated success.");
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { success: true, simulated: true };
  }

  try {
    emailjs.init(publicKey);

    // 1. Notification to Prateek (template_kt2zlxr)
    const notifyParams = {
      to_name: ownerName,
      to_email: ownerEmail,
      recipient_email: ownerEmail,
      owner_email: ownerEmail,
      visitor_name: formData.name,
      name: formData.name,
      from_name: formData.name,
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
    };

    // 2. Thank-You Auto-Reply to the Visitor (template_4ojjnvs)
    const autoReplyParams = {
      recipient_email: formData.email, // Sent strictly to the visitor
      to_email: formData.email,
      user_email: formData.email,
      to_name: formData.name,
      name: formData.name,
      visitor_name: formData.name,
      visitor_email: formData.email,
      email: ownerEmail,
      owner_email: ownerEmail,
      mobile: ownerPhone,
      phone: ownerPhone,
      owner_phone: ownerPhone,
      owner_mobile: ownerPhone,
      linkedin: ownerLinkedIn,
      owner_linkedin: ownerLinkedIn,
      github: ownerGitHub,
      owner_github: ownerGitHub,
      message: formData.message || "Thank you for reaching out via my portfolio. Here are my direct contact details.",
    };

    let atLeastOneSuccess = false;
    let lastError = null;

    // Send lead notification to Prateek
    if (notifyTemplateId) {
      try {
        await emailjs.send(serviceId, notifyTemplateId, notifyParams);
        atLeastOneSuccess = true;
      } catch (err) {
        console.warn("[EmailJS Notify Warning]:", err);
        lastError = err?.text || err?.message;
      }
    }

    // Send thank-you auto-reply to visitor
    if (autoReplyTemplateId) {
      try {
        await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams);
        atLeastOneSuccess = true;
      } catch (err) {
        console.warn("[EmailJS AutoReply Warning]:", err);
        if (!lastError) lastError = err?.text || err?.message;
      }
    }

    if (atLeastOneSuccess) {
      return { success: true, simulated: false };
    } else {
      return { success: false, error: lastError || 'Failed to dispatch email.' };
    }
  } catch (error) {
    console.error("[EmailJS Error]:", error);
    return {
      success: false,
      error: error?.text || error?.message || 'Failed to dispatch email.',
    };
  }
}
