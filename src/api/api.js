import { showErrorToast, showSuccessToast } from "../util/toast";

// Define Airtable constants
const AIRTABLE_BASE_URL = process.env.REACT_APP_AIRTABLE_BASE_URL;
const AIRTABLE_ACCESS_TOKEN = process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.REACT_APP_AIRTABLE_TABLE_NAME;

// Function to submit form data to Airtable and handle toasts
export const submitToAirtable = async (formData) => {
  try {
    const response = await fetch(
      `${AIRTABLE_BASE_URL}/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            email: formData.email,
            message: formData.message,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Airtable submission failed: ${JSON.stringify(errorData)}`
      );
    }

    showSuccessToast("Thanks! Your message has been sent successfully.");
    return true;
  } catch (error) {
    showErrorToast("Oops! Something went wrong. Please try again later.");
    return false;
  }
};
