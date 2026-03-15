export const sendEmail = async (data) => {

    const response = await fetch("https://emailer-328a.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    return response;
};