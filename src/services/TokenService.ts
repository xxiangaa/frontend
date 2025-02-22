import axios from "axios";

export interface TokenHistroy {
  id: string;
  value: string;
  timestamp: string;
  type: string;
}

export class TokenService {
  static async getTotalToken(accessKey: string): Promise<number> {
    let generationEndpoint =
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/token/total";
    const token = await axios.get(generationEndpoint, {
      headers: {
        Authorization: `Bearer ${accessKey}`,
      },
    });

    return token.data;
  }

  static async getTokenHistory(id: string): Promise<TokenHistroy> {
    let generationEndpoint =
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/token/history/" + id;
    const token = await axios.get(generationEndpoint, {});

    return token.data;
  }
}
