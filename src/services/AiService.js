import ApiOpenAiClient from "./ApiOpenAiClient";

class Ai {
  _apiClient = ApiOpenAiClient;

  async sendMessage(message) {
    try {
      const { data } = await this._apiClient.post("", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });

      return JSON.parse(data.choices[0].message.content);
    } catch (error) {
      throw error;
    }
  }
}

const AiService = new Ai();

export default AiService;
