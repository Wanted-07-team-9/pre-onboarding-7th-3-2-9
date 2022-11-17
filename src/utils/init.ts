import { TokenRepository } from "../repository/tokenRepositiory";

export default function init() {
  const tokenRepository = new TokenRepository
  return {  tokenRepository};
}