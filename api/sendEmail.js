
export const sendEmail = async (link) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/email`, 
        {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({link})
        }
    )
    return response
}

export const sendFix = async (text) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/email/proposition`, 
        {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({text})
        }
    )
    return response
}