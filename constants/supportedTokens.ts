export const supportedTokens: TokenType[] = [
  {
    id: 1,
    label: "SBRL",
    logoUrl: "/tokens/SBRL.svg",
  },
];

export interface TokenType {
  id: number;
  label: string;
  logoUrl: string;
}
