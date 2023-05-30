import { Configuration, OpenAIApi } from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


  
export default function openAIApiCall() {
    // openAI configuration object
    const configuration = new Configuration({
        apiKey: apiKey,
    });         
    const openai = new OpenAIApi(configuration);

    openai
      .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    })
      .then((completion) => {
        // Handle API response
        const generatedText =
          completion.data.choices[0].message.content;

        console.log(completion);  
        console.log(generatedText);
        setLoading(false)
        setItinerary(JSON.parse(generatedText));
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
        setItinerary("");
      });

  }

  