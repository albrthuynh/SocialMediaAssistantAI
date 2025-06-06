require('dotenv').config({ path: __dirname + '/../../.env.local' });
const HF_TOKEN = process.env.HUGGING_FACE_API_KEY;

async function generateComment(postTitle, postContent) {
  try {
    // Dynamic import for ES module
    const { InferenceClient } = await import("@huggingface/inference");
    const client = new InferenceClient(HF_TOKEN);

    const chatCompletion = await client.chatCompletion({
      provider: "together",
      model: "deepseek-ai/DeepSeek-R1-0528",
      messages: [
        {
          role: "system",
          content: "You are a professional LinkedIn user. Generate engaging, thoughtful comments for posts."
        },
        {
          role: "user",
          content: `Generate a professional LinkedIn comment for this post:
Title: ${postTitle}
Content: ${postContent}

Write a thoughtful 1-2 sentence comment:`
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    });

    console.log('Generated comment:', chatCompletion.choices[0].message.content);
    return chatCompletion.choices[0].message.content;

  } catch (error) {
    console.error('Error generating comment:', error);
    return null;
  }
}

module.exports = { generateComment };

if (require.main === module) {
  generateComment("AI in the Workplace", "How AI is transforming the way we work and collaborate.");
}